import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import { createUserDocumentFromAuth, signInWithGooglePopup, signInAuthUserWithEmailAndPassword} from "../../utils/firebase/firebase";
import './sign-in-form.styles.scss'

const defaultFormFields = {
    email: "",
    password: ""
}
const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password);
            console.log(response)
            resetFormFields();
        } catch(e) {
            if (e.code = "auth/wrong-password") {
                alert("Wrong password")
            }
            if (e.code = "auth/user-not-found") {
                alert("You are not registered before.")
            }
            console.log(e);
        }

    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormFields({...formFields, [name]: value})
    }

    return (
        <div className="sign-in-container">
            <h2>Already have a account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
               
                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email} />
               
                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password} />

                <div className="buttons-container">
                    <Button type='submit'>Sign in</Button>
                    <Button buttonType="google" type='button' onClick={signInWithGoogle}>Google sign in</Button>  
                </div>
            </form>
        </div>
    )
}

export default SignInForm;