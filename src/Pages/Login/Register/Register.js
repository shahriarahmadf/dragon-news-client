import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Register = () => {
    const [error, setError] = useState('');

    const [accepted, setAccepted] = useState(false);

    const navigate = useNavigate();

    const {createUser, verifyEmail, updateUserProfile} = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photoURL, email, password);
    
        createUser(email,password)
        .then( result => {
            const user = result.user;
            console.log(user);
            setError('');
            form.reset();
            handleUpdateUserProfile(name, photoURL);
            console.log('register success. now toast should come.')
            toast.success('Please verify your email address.');
            handleEmailVerification();

        })
        .catch (error => {
            console.error(error);
            setError(error.message);
        })
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
        .then (() => {})
        .catch(error => console.error(error))
    }

    const handleEmailVerification = () => {
        verifyEmail()
        .then (() => {})
        .error(error => {
            console.log(error);
            setError(error.message);
        })
        
    }

    const handleAccepted = event => {
        setAccepted(event.target.checked);
    }
    return (
        <Form onSubmit={handleSubmit}>
            {/* name */}
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control name='name' type="text" placeholder="Enter name" />               
            </Form.Group>

            {/* photo URL */}
            <Form.Group className="mb-3" controlId="formBasicPhotoURL">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control name='photoURL' type="text" placeholder="Enter Photo URL" />               
            </Form.Group>

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
                <Form.Check 
                type="checkbox" 
                onClick={handleAccepted}
                label= {<>Accept <Link to ='/terms'>Terms and Conditions</Link></>} />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={!accepted}>
                Register
            </Button>

            {/* error handling */}
            <Form.Text className="text-danger">
                    {error}
            </Form.Text>
      </Form>
    );
};

export default Register;