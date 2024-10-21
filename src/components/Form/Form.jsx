import { useState } from 'react';
import validatePassword from '../../helper/PasswordValidator';
import validateEmail from '../../helper/EmailValidator';
import './Form.css'
function Form() {

    const [formValues, setFormValues] = useState({
        email: 'ab@cb.com',
        password: ''
    })

    const handleValidatePassword = () => {
        const password = formValues.password;
        if(!validatePassword(password)){
            console.log("password error")
        }
    }

    const handleValidateEmail = () => {
        const email = formValues.email;
        if(!validateEmail(email)){
            console.log("email error")
        }
    }

    const handelFormSubmit = (event) => {
        event.preventDefault();
        handleValidateEmail();
        document.getElementById('email-input').focus();
        handleValidatePassword();
        console.log(formValues)
    }

    return (
        <div>
            New Form
            <form onSubmit={handelFormSubmit}>

                <div className="wrapper email-input-wrapper">
                    <input
                        id='email-input'
                        type="email"
                        value={formValues.email}
                        onChange={(event) => setFormValues({...formValues, email:event.target.value})}
                    />
                </div>

                <div className="wrapper password-input-wrapper">
                    <input
                        id='password-input'
                        type="password"
                        value={formValues.password}
                        onChange={(event) => setFormValues({...formValues, password:event.target.value})}
                    />
                </div>

                <div className="submit-input-wrapper">
                    <input type="submit" />
                </div>

            </form>
        </div>
    )
}

export default Form;