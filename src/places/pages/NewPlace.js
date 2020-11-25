import React, { useContext, Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from "../../shared/context/AuthContext";
import Input from '../../shared/components/FormElements/Input/Input';
import Button from '../../shared/components/FormElements/Button/Button';
import { useForm } from '../../shared/hooks/form-hook';
import { useHttpClient } from '../../shared/hooks/http-hook';
import { 
  VALIDATOR_REQUIRE, 
  VALIDATOR_MINLENGTH 
} from '../../shared/util/validators';
import ImageUpload from '../../shared/components/FormElements/ImageUpload/ImageUpload';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner/LoadingSpinner';
import ErrorModal from '../../shared/components/Modal/ErrorModal';

import './PlaceForm.css';

const NewPlace = () => {
  const { token } = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [{ inputs, isValid}, inputHandler] = useForm(  // formState is destructured on the second level
    {
      title: {
        value: '',
        isValid: false
      },
      description: {
        value: '',
        isValid: false
      },
      address: {
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

  const {title, description, address, image } = inputs;

  const history = useHistory();

  const placeSubmitHandler = async event => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append('title', title.value);
      formData.append('description', description.value);
      formData.append('address', address.value);
      formData.append('image', image.value);
      await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/places`, 'POST', formData, {Authorization: `Bearer ${token}`});
      history.push('/');
    } catch (err) {}
  };

  return (
    <Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <form className="place-form" error = {error} onSubmit = {placeSubmitHandler}>
        {isLoading && <LoadingSpinner asOverlay />}
        <Input
          id = "title"
          element = "input"
          type = "text"
          label = "Title"
          validators = {[VALIDATOR_REQUIRE()]}
          placeholder = "please enter a title."
          errorText = "please enter a valid title"
          onInput = {inputHandler}
        />

        <Input 
          id = "description"
          element = "textarea"
          label = "Description"
          validators = {[VALIDATOR_MINLENGTH(5)]}
          errorText = "Please enter a valid description (at least 5 characters)."
          onInput = {inputHandler}
          placeholder = "enter a valid description"
        />

        <Input 
          id = "address"
          element = "input"
          label = "Address"
          validators = {[VALIDATOR_REQUIRE()]}
          placeholder = "please type your address"
          onInput = {inputHandler}
        />

        <ImageUpload id = "image" onInput = {inputHandler} />

        <Button type="submit" disabled={!isValid}> 
          ADD PLACE
        </Button>
      </form>
    </Fragment>
  );
};

export default NewPlace;
