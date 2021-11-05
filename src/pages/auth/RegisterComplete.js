import React, {useState, useEffect} from 'react';
import {auth} from '../../firebase';
import {toast } from 'react-toastify';
import { Button } from 'antd';
import {MailOutlined } from '@ant-design/icons';
import {useDispatch, useSelector} from 'react-redux';
import {createOrUpdateUser} from '../../functions/auth';



const RegisterComplete = ({history}) => {

    //Create state for email
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const {user} = useSelector(state => ({...state}))
    let dispatch = useDispatch()

    useEffect(() =>{
        setEmail(window.localStorage.getItem("emailForRegistration"))
    }, [])

    const handleSubmit = async (e) =>{
        e.preventDefault();

        if(!email){
            toast.error('You must enter an email to proceed')
            return;
        }
        if(!password){
            toast.error('You must enter password to proceed')
            return;
        }

        if(password.length < 6){
            toast.error('Password must be atleast 6 character long')
            return;
        }

        try {
            const result = await auth.signInWithEmailLink(
                email,
                 window.location.href
                 );
                //  console.log('Reasult', result)
                //Check if email is verified
                 if(result.user.emailVerified){
                     //Remove User Email From LocaStorage
                     window.localStorage.removeItem('emailForRegistration');
                    //Get Current Use ID Toeknt
                    let user = auth.currentUser
                    //Update Default google Email Password to Current User Entered Password
                    await user.updatePassword(password)
                    //Get Currently Logged in User Token
                    const idTokenResult = await user.getIdTokenResult()

                    //Redux Store
                    console.log('User', user, 'idTokenResult', idTokenResult)

                //Using Axios
                createOrUpdateUser(idTokenResult.token)
                .then((res) => {
                dispatch({
                    type: 'LOGGED_IN_USER',
                    payload: {
                    name: res.data.name,
                    email: res.data.email,
                    token: idTokenResult.token,
                    role: res.data.role,
                    _id: res.data._id,
                    }
                });
                })
                .catch(err => console.log(err));
                    //Redirect To User Dashboard
                    history.push('/')
                     
                 }

        } catch (error) {
            toast.error(error.message)
        }
        
    }


    const completeRegistrationForm =() =>(
    <form onSubmit={handleSubmit}>
        
        <input 
        type="text" 
        value={email}
        className="form-control"
        disabled
        autoSave="true"
        />
        <br/>
        <input 
        type="password" 
        value={password}
        onChange={e =>setPassword(e.target.value)}
        placeholder="Enter Password" 
        className="form-control"
        autoSave="true"
        />
        <br/>
        <Button
        onClick={handleSubmit}
        type="primary"
        className="mb-3 form-control"
        icon={<MailOutlined />}
        shape="round"
        size="large"
        disabled={!email || password.length < 6}
        >Complete Registration</Button>
    </form>
);
    
    return (
        <section className="service-section-prb mt70">
        <div className="container pad-tb">
            <div className="row">
                <div className="col-md-6 offset-md-3 card">
                    <h4 align="center">Complete Registration</h4>
                    {completeRegistrationForm()}
                </div>
            </div>
        </div>
    </section>
    )
}

export default RegisterComplete;
