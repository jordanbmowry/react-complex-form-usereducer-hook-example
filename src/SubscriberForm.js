import React, { useReducer } from 'react';

function SubscriberForm() {
  const initialFormState = {
    name: '',
    email: '',
    referral: '',
    age: '',
    subscription: true,
  };

  const init = (initialState) => initialState;

  function formReducer(state, action) {
    switch (action.type) {
      case 'input':
        return {
          ...state,
          [action.inputName]: action.payload,
        };
      case 'reset':
        return init(action.payload);
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(formReducer, initialFormState, init);

  const { name, email, referral, age, subscription } = state;
  console.log(state);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        dispatch({ type: 'reset', payload: initialFormState });
        alert('Submitted!');
      }}
    >
      <label htmlFor='name'>
        Enter Your Name:
        <input
          required
          id='name'
          type='text'
          name='name'
          onChange={(event) =>
            dispatch({
              type: 'input',
              inputName: 'name',
              payload: event.currentTarget.value,
            })
          }
          value={name}
        />
      </label>
      <br />
      <label htmlFor='email'>
        Your Email:
        <input
          required
          id='email'
          type='email'
          name='email'
          onChange={(event) =>
            dispatch({
              type: 'input',
              inputName: 'email',
              payload: event.currentTarget.value,
            })
          }
          value={email}
        />
      </label>
      <br />
      <label htmlFor='referral'>
        How did you hear about us?
        <select
          required
          id='referral'
          name='referral'
          onChange={(event) =>
            dispatch({
              type: 'input',
              inputName: 'referral',
              payload: event.currentTarget.value,
            })
          }
          value={referral}
        >
          <option value=''>-- Select an Option --</option>
          <option value='twitter'>Twitter</option>
          <option value='wom'>Word of Mouth</option>
          <option value='youtube'>YouTube</option>
        </select>
      </label>
      <br />
      <fieldset>
        <legend>How old are you?</legend>
        <label htmlFor='low'>
          Under 18
          <input
            required
            id='low'
            type='radio'
            name='age'
            onChange={(event) =>
              dispatch({
                type: 'input',
                inputName: 'age',
                payload: event.currentTarget.value,
              })
            }
            value='low'
            checked={age === 'low'}
          />
        </label>
        <label htmlFor='middle'>
          18 - 60
          <input
            required
            id='middle'
            type='radio'
            name='age'
            onChange={(event) =>
              dispatch({
                type: 'input',
                inputName: 'age',
                payload: event.currentTarget.value,
              })
            }
            value='middle'
            checked={age === 'middle'}
          />
        </label>
        <label htmlFor='high'>
          60+
          <input
            required
            id='high'
            type='radio'
            name='age'
            onChange={(event) =>
              dispatch({
                type: 'input',
                inputName: 'age',
                payload: event.currentTarget.value,
              })
            }
            value='high'
            checked={age === 'high'}
          />
        </label>
      </fieldset>
      <br />
      <label htmlFor='subscription'>
        Receive email notifications?
        <input
          id='subscription'
          type='checkbox'
          name='subscription'
          onChange={(event) =>
            dispatch({
              type: 'input',
              inputName: 'subscription',
              payload: event.currentTarget.checked,
            })
          }
          checked={subscription}
          value='subscription'
        />
      </label>
      <br />
      <button type='submit'>Submit</button>
    </form>
  );
}

export default SubscriberForm;
