import React, {useState, useEffect} from 'react';
import {auth, googleAuthProvider} from '../../firebase';
import {toast } from 'react-toastify';
import { Button } from 'antd';
import { GoogleOutlined, LoadingOutlined, MailOutlined } from '@ant-design/icons';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {createOrUpdateUser} from '../../functions/auth';



const Login = ({history}) => {

    //Create state for email
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const {user} = useSelector(state => ({...state}))

    
    useEffect(() =>{
        if(user && user.token) history.push('/');
        // eslint-disable-next-line
    }, [user])

    let dispatch = useDispatch()

    //Set Redirect based on role
    const roleBasedRedirect = (res) =>{
    if(res.data.role === 'admin'){
        history.push('/skyadmin/dashboard')
    }else{
        history.push('/user/history')
    }
}



    const handleSubmit = async (e) =>{
        e.preventDefault();
        setLoading(true)
        // console.table(email, password)
        

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
            const result = await auth.signInWithEmailAndPassword(
                email,
                 password
                 );
                // console.log(result)
         const {user} = result
        const idTokenResult = await user.getIdTokenResult()

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
            // Redirecting base on roles
            roleBasedRedirect(res); 
        })
        .catch(err => console.log(err));

        //   history.push('/') 


        } catch (error) {
            toast.error(error.message)
            setLoading(false)

        }
        
    }

    //Google login
    const googleLogin = async (e) =>{
        e.preventDefault();
        setLoading(true)
        auth.signInWithPopup(googleAuthProvider).then(async(result) =>{
            const {user} = result
            const idTokenResult = await user.getIdTokenResult();

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
            roleBasedRedirect(res); 
        })
        .catch();


            //   history.push('/')
        })
        
        .catch((error) =>{
            toast.error(error.message)
             setLoading(false)
        })
        
    } 


    const loginForm =() =>( 
    <form onSubmit={handleSubmit}>
        
        <input 
        type="email" 
        value={email}
        className="form-control"
        autoSave="true"
        placeholder="Enter your email"
        onChange={(e) => setEmail(e.target.value)}
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
        >Login with email & password</Button>
    </form>
    );
    
    return (
        <section className="service-section-prb mt70">
       
       <div className="container pad-tb">
            <div className="row">
                <div className="col-md-6 offset-md-3 card">
                    
                    {loading ? (<LoadingOutlined style={{fontSize: '35px', color: '#08c'}}/>) 
                    : (<h4 align="center">Login</h4>)}

                    {loginForm()}

                    <br/>
        <Button
        onClick={googleLogin}
        type="danger"
        className="mb-3 form-control"
        icon={<GoogleOutlined />}
        shape="round"
        size="large"
        >Login with Google </Button>
        
            <div className="clearfix">
                <Link to="/register" 
                className="float-left"
                 >New Here?
                 </Link>

                <Link to="/forgot/password"
                 className="text-danger float-right"
                 >Forgot Password
                 </Link>
            </div>
            <br/><br/>

                </div>
            </div>
        </div>
   
   </section>
   )
}

export default Login;
