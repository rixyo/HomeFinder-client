import React from 'react';
import Input from '../Input';
import Modal from './Modal';

type SignupModalProps = {
    isOpen?: boolean;
    onClose: () => void;

};

const SignupModal:React.FC<SignupModalProps> = ({isOpen,onClose}) => {
    
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
        >
            <div className="flex flex-col items-center justify-center">
                <div className="flex items-center justify-center">
                    <h1 className="text-2xl font-bold">Sign Up</h1>
                <Input
                    placeholder="First Name"
                    onChange={() => {}}
                    label="First Name"
                />
                </div>
            </div>

        </Modal>
    )
}
export default SignupModal;