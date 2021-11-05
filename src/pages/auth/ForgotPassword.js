import React, {useState, useEffect} from 'react';
import {auth} from '../../firebase';
import {toast } from 'react-toastify';
import { Button } from 'antd';
import { LoadingOutlined, LockOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';


const ForgotPassword = ({history}) =>{

    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const {user} = useSelector(state => ({...state}))

    useEffect(() =>{
        if(user && user.token) history.push('/');
    }, [user])

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setLoading(true)
        const config = {
            url: process.env.REACT_APP_FORGOT_PASSWORD_REDIRECT,
            handleCodeInApp: true
         }
        await auth.sendPasswordResetEmail(email, config)
        .then(() =>{
            setEmail('')
            setLoading(false)
            toast.success('Check your email for password reset link')


        })
        .catch((error) =>{
            setLoading(false)
            toast.error(error.message)
        })
    }

    return (
        
    <section className="service-section-prb mt70">
       <div className="container pad-tb">
            <div className="row">
                <div className="col-md-6 offset-md-3 card">

                {loading ? (<LoadingOutlined style={{fontSize: '35px', color: '#08c'}}/>) 
                    : (<h4 align="center">Forgot Password</h4>)}

    <form onSubmit={handleSubmit}>
        <input 
        type="email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Enter Recovery Email" 
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
        icon={<LockOutlined />}
        shape="round"
        size="large"
        disabled={!email || email.length < 3}
        >Recover Password</Button>
                    <div className="clearfix">
                <Link to="/login"
                 className="text-primary float-right"
                 >Login Instead
                 </Link>
            </div>
            <br/><br/>
    </form>

                </div>
             </div>
         </div>
    </section>
    )
}




export default ForgotPassword;