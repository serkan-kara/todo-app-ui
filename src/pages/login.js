import React, { useRef, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import ComponentContainer from '../components/containers/componentContainer';
import Input from '../components/ui/input';
import Form from '../components/containers/form';
import Button from '../components/ui/button';
import InfoText from '../components/ui/infoText';
import { useAuth } from '../context/authContext';

import { useMutation } from '@apollo/client';
import { LOGIN } from '../api/graphQl/mutations';

const Login = (props) => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const navigate = useNavigate();

    const { user, setUser } = useAuth();

    useEffect(() => {
        if (user) {
            navigate('/todos');
        }
    });

    const [showAlert, setShowAlert] = useState(false);

    const [login, { error }] = useMutation(LOGIN, {
        onCompleted: (data) => {
            if (data) {
                if (data.login.length <= 0) {
                    // return wrong email or password error
                    console.log('Email or password is wrong. Please try again.');
                    setShowAlert(true);
                } else {
                    const decoded = jwt_decode(data.login);
                    setUser({
                        id: decoded.id,
                        email: decoded.email,
                        name: decoded.name,
                        token: data.login
                    });

                    navigate('/todos');
                }
            }
        }
    });

    return (
        <ComponentContainer title={'Welcome!'} subTitle={'Log in to continue.'}>
            <Form onSubmit={(e) => {
                e.preventDefault();

                const email = emailRef.current.value;
                const password = passwordRef.current.value;

                login({
                    variables: {
                        email: email,
                        password: password
                    }
                })

                if (error) {
                    console.log('Login error', error);
                }
            }}>
                <Input placeholder='Email' type='text' inputRef={emailRef} />
                <Input placeholder='Password' type='password' inputRef={passwordRef} />
                {
                    showAlert ? <InfoText text={'The username or password you entered is incorrect'} type='error' /> : null
                }
                <Link
                    className='text-sm text-darkBlueGray underline mt-4 mb-12'
                    to="/signup">Don't have an account? Sign up.</Link>
                <Button text={'Log In'} type='Submit' />
            </Form>
        </ComponentContainer>
    )
}

export default Login;