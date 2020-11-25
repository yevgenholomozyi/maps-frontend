import React, { useState, useContext, Fragment } from 'react';
import Button from  '../../shared/components/FormElements/Button/Button';
import Input from  '../../shared/components/FormElements/Input/Input';
import Card from  '../../shared/components/UIElements/Card/Card';
import ErrorModal from '../../shared/components/Modal/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner/LoadingSpinner';
import ImageUpload from '../../shared/components/FormElements/ImageUpload/ImageUpload';

import { 
    VALIDATOR_EMAIL,
    VALIDATOR_MINLENGTH, 
    VALIDATOR_REQUIRE
} from "../../shared/util/validators";

import { useForm } from "../../shared/hooks/form-hook";
import { AuthContext } from "../../shared/context/AuthContext";
import { useHttpClient } from "../../shared/hooks/http-hook";

import './Auth.css';

const Auth = () => {
    const auth = useContext(AuthContext);
    const [isLoginMode, setIsLoginMode] = useState(true); // managing login

    const { isLoading, error, sendRequest, clearError } = useHttpClient();
   
    const [{inputs, isValid}, inputHandler, setFormData] = useForm( 
        {
            email: {
                value: '',
                isValid: false
            },
            password: {
                value: '',
                isValid: false
            }
        }, 
        false
    );
    const switchModeHandler = () => {
        if (!isLoginMode) {
            setFormData(
                {
                ...inputs,
                name: undefined,
                image: undefined
                }, 
                inputs.email.isValid && inputs.password.isValid
            );
        } else {
            setFormData(
                {
                ...inputs,
                name: {
                    value: '',
                    isValid: false
                }, 
                image: {
                    value: null,
                    isValid: false
                }
            }, 
            false
        );
    } 
        setIsLoginMode(prevMode => !prevMode);
    };
    
    const onSubmitHandler = async event => {
        event.preventDefault();

        if (isLoginMode) {
            try {
                const { userId, token } = await sendRequest( // destructuring response
                    `${process.env.REACT_APP_BACKEND_URL}/users/login`,
                    'POST',
                    JSON.stringify({
                        email: inputs.email.value,
                        password: inputs.password.value
                    }),
                    {
                        'Content-Type': 'application/json'
                    }
                );
                auth.login(userId, token);
            } catch (err) {}
        } else {
            try {
                const formData = new FormData();
                formData.append('email', inputs.email.value);
                formData.append('name', inputs.name.value);
                formData.append('password', inputs.password.value);
                formData.append('image', inputs.image.value);

                const { userId, token } = await sendRequest(
                    `${process.env.REACT_APP_BACKEND_URL}/users/signup`, // fetch and the response must be awaited
                    'POST',
                    formData,
                );
            auth.login(userId, token);
          } catch (err) {}
        }
    };
            
    return (
        <Fragment>
            <ErrorModal error={error} onClear={clearError} />
            <Card className = "authentication">
                {isLoading && <LoadingSpinner asOverlay />}

                <form onSubmit = {onSubmitHandler}>
                    <h2 className = "authentication__header"> Login Required </h2>
                    <hr/>
                    {!isLoginMode && (
                        <Input
                            element = "input"
                            type = "text"
                            placeholder = "enter your name"
                            id = "name" 
                            validators = {[VALIDATOR_REQUIRE()]}
                            label = "Your Name"
                            errorText = "Please provide a valid name"
                            onInput = {inputHandler}
                        /> 
                    )}

                    {!isLoginMode && <ImageUpload center id = "image" onInput = {inputHandler}/>}
                    
                        <Input
                            type = "email"
                            placeholder = "enter your email"
                            element = "input"
                            id = "email" 
                            validators = {[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]}
                            label = "Email"
                            errorText = "Please enter a valid email"
                            onInput = {inputHandler}
                        /> 

                        <Input
                            type = "password"
                            element = "input"
                            placeholder = "enter your password"
                            id = "password" 
                            validators = {[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(6)]}
                            label = "Password"
                            onInput = {inputHandler}
                            errorText = "Please provide a valid pasword"
                        /> 

                {/*  <Input
                        type = "password"
                        element = "input"
                        placeholder = "enter your password"
                        id = "confirmPassword" 
                        initialValid = {true}
                        validators = {[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
                        label = "Confirm Password"
                        errorText = "Paswword should be not shorter than 5 symbols"
                        onInput = {inputHandler}
                    />  */}
                    <Button 
                        type = "submit" 
                        disabled = {!isValid}
                        >
                            {isLoginMode ? 'LOGIN' : 'SIGNUP'}
                    </Button>
            </form>
            <Button inverse onClick = {switchModeHandler}>
                SWITCH TO {isLoginMode ? 'SIGNUP' : 'LOGIN'}
            </Button>
        </Card>
    </Fragment>
    );
};
 
export default Auth;
