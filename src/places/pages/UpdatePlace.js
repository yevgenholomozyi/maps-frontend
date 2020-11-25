import React, { useEffect, useState, useContext, Fragment } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input/Input';
import Button from '../../shared/components/FormElements/Button/Button';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validators';
import Card from '../../shared/components/UIElements/Card/Card';
import { useForm } from '../../shared/hooks/form-hook';
import { useHttpClient } from '../../shared/hooks/http-hook';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner/LoadingSpinner';
import ErrorModal from '../../shared/components/Modal/ErrorModal';
import { AuthContext } from '../../shared/context/AuthContext';
import './PlaceForm.css';

const UpdatePlace = () => {
    const errorMessage = "please enter a valid";
    const { userId, token } = useContext(AuthContext); // destructuring auth from the context
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [loadedPlace, setLoadedPlace] = useState();
    const placeId = useParams().placeId;
    const history = useHistory();
  
    const [formState, inputHandler, setFormData] = useForm( 
        {
            title: {
                value: '',
                isValid: false
            },
            description: {
                value: '',
                isValid: false
            }
        }, 
        false
    );
    
    useEffect(() => {
        const fetchPlace = async () => {
            try {
                const { place } = await sendRequest( // destructure response data
                    `${process.env.REACT_APP_BACKEND_URL}/places/${placeId}`
                );
                setLoadedPlace(place);
                setFormData(
                    {
                        title: {
                            value: place.title,
                            isValid: true
                        },
                        description: {
                            value: place.description,
                            isValid: true
                        }
                    },
                    true
                );

            } catch (err) {}
        };
        fetchPlace();
    }, [sendRequest, placeId, setFormData]);

    const placeUpdateSubmitHandler = async event => {
        event.preventDefault();
            try {
                await sendRequest(
                   `${process.env.REACT_APP_BACKEND_URL}/places/${placeId}`,
                    'PATCH',
                    JSON.stringify({
                        title: formState.inputs.title.value,
                        description: formState.inputs.description.value
                    }),
                    {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`
                    }
                );
                history.push('/' + userId + '/places');
                } catch (err) {}
            };
    
        if (isLoading) {
            return (
                <div className="center">
                    <LoadingSpinner />
                </div>
            );
        }
        
        if (!loadedPlace && !error) {
            return (
                <div className = "center">
                    <Card>
                        <h2>Could not find place!</h2>
                    </Card>
                </div>
            );
        }
              
    return (
        <Fragment>
            <ErrorModal error={error} onClear={clearError} />
            {!isLoading && loadedPlace && (
                <form className="place-form" onSubmit = {placeUpdateSubmitHandler}>
                    <Input 
                        element = "input"
                        type = "text"
                        label = "Title"
                        id = "title"
                        validators = {[ VALIDATOR_REQUIRE() ]}
                        valueProp = {loadedPlace.title}
                        initialValid = {true}
                        onInput = {inputHandler}
                        errorText = {`${errorMessage} title`}
                    />
                    <Input 
                        element = "textarea"
                        label = "Description"
                        id = "description"
                        validators = {[ VALIDATOR_MINLENGTH(5) ]}
                        valueProp = {loadedPlace.description}
                        initialValid = {true}
                        onInput = {inputHandler}
                        errorText = {`${errorMessage} description which should not be shorter than 5 symbols`}
                    />

                    <Button type = "submit" disabled = {!formState.isValid}>
                        UPDATE PLACE
                    </Button>
                </form>
            )}
        </Fragment>
    );
}
 
export default UpdatePlace;