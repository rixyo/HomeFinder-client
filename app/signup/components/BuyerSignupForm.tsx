import React from 'react';
import RealtorSignupForm from '../../signup/components/SignupForm';


const BuyerSignupForm:React.FC = () => {
    
    return (
        <RealtorSignupForm
            isRealtor={false}
        />
    )
}
export default BuyerSignupForm;