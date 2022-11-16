import React, { useRef, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ComponentContainer from '../components/containers/componentContainer';
import Input from '../components/ui/input';
import Form from '../components/containers/form';
import Button from '../components/ui/button';
import Timer from '../components/ui/timer';
import { useAuth } from '../context/authContext';

import { useMutation } from '@apollo/client';
import { SIGNUP } from '../api/graphQl/mutations';

const Signup = (props) => {
    const navigate = useNavigate();

    const { user } = useAuth();

    useEffect(() => {
        if (user) {
            console.log('already logged in');
            navigate('/todos');
        }
    })

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const [success, setSuccess] = useState(false);


    const [signUp, { error }] = useMutation(SIGNUP, {
        onCompleted: (data) => {
            if (data.signUp) {
                setSuccess(true);
                // navigate('/');
            }
        }
    })

    return (
        <ComponentContainer title={'Welcome!'} subTitle={'Sign up to start using Simpledo today.'}>
            <Form onSubmit={(e) => {
                e.preventDefault();
                const name = nameRef.current.value;
                const email = emailRef.current.value;
                const password = passwordRef.current.value;

                signUp({
                    variables: {
                        name: name,
                        email: email,
                        password: password
                    }
                })

                if (error) {
                    console.log(error);
                }
            }}>
                <Input inputRef={nameRef} placeholder='Full Name' type='text' />
                <Input inputRef={emailRef} placeholder='Email' type='text' />
                <Input inputRef={passwordRef} placeholder='Password' type='password' />
                {
                    success ? <Timer text={'You just signed up and you will be redirected to login screen in '} seconds={5} /> : null
                }

                <Link
                    className='text-sm text-darkBlueGray underline mt-4 mb-12'
                    to="/">Do have an account? Sign in.</Link>
                <Button text={'Sign Up'} type='Submit' />
            </Form>
        </ComponentContainer>
    )
}

export default Signup;