import React, {useState, useEffect} from 'react';
import {auth} from '../../firebase';
import {toast } from 'react-toastify';
import { Button } from 'antd';
import {LoadingOutlined, MailOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';



const Register = ({history}) => {

    //Create state for email
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false)
    const {user} = useSelector(state => ({...state}))

    useEffect(() =>{
        if(user && user.token) history.push('/');
    }, [user])
    

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setLoading(true)
        const config = {
           url: process.env.REACT_APP_REG_URL,
           handleCodeInApp: true
        }

        await auth.sendSignInLinkToEmail(email, config)
        toast.success(`A verification email link has been sent to ${email}.
         Click the link to complete your registration.`);
            //Save user email in the local storage
         window.localStorage.setItem('emailForRegistration', email)
         //Clear previous state
         setEmail('');
         
    }


    const registerForm =() =><form onSubmit={handleSubmit}>
        
        <input 
        type="email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Enter Email Address" 
        className="form-control"
        autoFocus
        autoCorrect="true"
        autoComplete="true"
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
        disabled={!email || email.length < 3}
        >Signup with email</Button>
    </form>

    
    return (

        <section className="service-section-prb mt70">
        <div className="container pad-tb">
            <div className="row">
                <div className="col-md-6 offset-md-3 card">
                    
                {loading ? (<LoadingOutlined style={{fontSize: '35px', color: '#08c'}}/>) 
                    : (<h4 align="center">Register</h4>)}

                    {registerForm()}
                
            <div className="clearfix">
                <Link to="/login"
                 className="text-primary float-right"
                 > Old User Login
                 </Link>
            </div>
            <br/><br/>
            
                </div>
            </div>
        </div>
   
   </section>
    )
}

export default Register
