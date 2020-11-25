import { useReducer, useCallback } from 'react';

const formReducer = (state, action) => {
    switch (action.type) {
      case 'INPUT_CHANGE': 
        let formIsValid = true;
        for (const inputId in state.inputs) {
          if (!state.inputs[inputId]) {
            continue; // don't run code bellow but start next iteration
          }
          if (inputId === action.inputId) {
            formIsValid = formIsValid && action.isValid; // yeilds false if any of the expression is false
          } else {
            formIsValid = formIsValid && state.inputs[inputId].isValid;
            }
        }
          return {
            ...state,
            inputs: {
              ...state.inputs,
              [action.inputId]: { value: action.value, isValid: action.isValid }
            },
            isValid: formIsValid
        };
        case 'SET_DATA':
          const { inputs } = action;
          return {
            inputs,
            isValid: action.formIsValid
          }

      default:
        return state;
    }
};

export const useForm = (initialInputs, initialFormValidity) => {
    const [formState, dispatch] = useReducer(formReducer, {
        inputs: initialInputs,
        isValid: initialFormValidity
    });

    const inputHandler = useCallback((id, value, isValid) => { // useCallback is required in order to prevent an infinite loop
        dispatch({
          type: 'INPUT_CHANGE',
          value,
          isValid,
          inputId: id
        });
    }, []); //this array defines dependecies under which titleHandler should rerun. If empty, no rerun shall be performed

    const setFormData = useCallback((inputData, formValidity) => { // allows to replace stores and the validity of the form
      dispatch({
        type: 'SET_DATA',
        inputs: inputData,
        formIsValid: formValidity
      })
    }, []);

    return [formState, inputHandler, setFormData];
};
