import './authentication.styles.scss'

import SignUpForm from "../../component/sign-up-form/sign-up-form.component";
import SignInForm from "../../component/sign-in-form/sign-in-form.component";

const Authentication = () => {


  return (
    <div className="authentication-container">
        <SignInForm />
        <SignUpForm />
    </div>
  );
};

export default Authentication;
