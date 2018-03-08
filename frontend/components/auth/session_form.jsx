import React from 'react';
import LoginForm from './login_form';
import SignupForm from './signup_form';

const SessionForm = ( {errors, formType, processForm } ) => {
  const form = (
    formType === 'signup' ?
    <SignupForm
      errors={ errors }
      formType={ formType }
      processForm={ processForm } /> :
    <LoginForm
      errors={ errors }
      formType={ formType }
      processForm={ processForm } />
  );

  return (
    <div>
        { form }
    </div>
  );

};
export default SessionForm;
