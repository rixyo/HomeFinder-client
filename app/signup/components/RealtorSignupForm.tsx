import React from 'react';
import SignupForm from './SignupForm';



const RealtorSignupForm:React.FC = () => {
    
    return (
        <>
        <SignupForm
            isRealtor={true}
        />
        </>
    )
}
export default RealtorSignupForm;