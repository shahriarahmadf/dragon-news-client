import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const [error, setError] = useState('');
    const {signIn, setLoading} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);
    
        signIn(email,password)
        .then( result => {
            const user = result.user;
            console.log(user);
            form.reset();
            setError('');
            if(user.emailVerified){
                navigate(from, {replace: true});
            }
            else{
                toast.error('Your email is not verified. Please verify first.');
            }
        })
        .catch (error => {
            console.error(error);
            setError(error.message);
        })
        .finally(() => {
            setLoading(false);
        })
    }

    return (
        <Form onSubmit={handleLogin}>
            {/* email */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required/>
            </Form.Group>
  
            {/* password */}
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check Me Out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Login
            </Button>

            {/* error handling */}
            <Form.Text className="text-danger">
                    {error}
            </Form.Text>
      </Form>
    );
};

export default Login;