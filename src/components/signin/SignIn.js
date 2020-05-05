import React from 'react';

import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';

import { auth,signInWithGoogle } from '../../firebase/firebaseUtis';
import './SignIn.scss'

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = async event => {

        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({ email: '', password: '' })

        } catch (error) {
            console.log(error);
        }

    };

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }


    render() {
        return (
            <div className='sign-in'>
                <h1> Sign in to your Account </h1>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" value={this.state.email} handleChange={this.handleChange} label='Email' required />

                    <FormInput name="password" type="password" value={this.state.password} handleChange={this.handleChange} label='Password' required /> 
                    <div className='buttons'>
                    <CustomButton type='submit'> Sign in </CustomButton>
                    <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn>
                    Sign in with Google
                    </CustomButton>
                    </div> 
                </form>
            </div>
        );
    }


}
export default SignIn;