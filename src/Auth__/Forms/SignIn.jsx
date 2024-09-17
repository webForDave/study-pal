import { useState } from "react";
import FormInput from "../../Layout__/Components/FormInput";
import { useNavigate } from "react-router-dom";

const INITIAL_FORM_STATE = {
    email: '',
    password: ''
} 

function SignIn() {

    const [formData, setFormData] = useState(INITIAL_FORM_STATE);
    const [formErrors, setFormErrors] = useState({
        emailError: false,
        passwordError: false,
        emailCheck: false
    })

    const navigate = useNavigate();

    function handleChange(e) {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name] : value
        })
    }

    const handleValidation = () => {
        let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        let isValid = true;

        let newErrors = {
            emailError: false,
            passwordError: false,
            emailCheck: false
        }

        if(formData.email === '') {
            isValid = false;
            newErrors.emailError = true;
        } else if(!formData.email.match(emailRegex)) {
            isValid = false;
            newErrors.emailCheck = true;
        }

        if(formData.password === '') {
            isValid = false;
            newErrors.passwordError = true;
        }

        setFormErrors(newErrors)
        return isValid
    }

    const handleSubmit = e => {
        e.preventDefault();
       let isValid =  handleValidation();

       if(isValid) {
        console.log(formData);
        setFormData(INITIAL_FORM_STATE);

        navigate('/home');
       }
        
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    {formErrors.emailError && <p>Email is required</p>}
                    {formErrors.emailCheck && <p>Invalid Email</p>}
                    <label htmlFor="email">Email Address</label>
                    <FormInput type="text" placeholder='Email Address' id='email' name='email' value={formData.email} handleChange={handleChange} />
                </div>

                <div>
                    {formErrors.passwordError && <p>Password is Required</p>}
                    <label htmlFor="password">Password</label>
                    <FormInput type='password' placeholder='Password' id='password' name='password' value={formData.password} handleChange={handleChange} />
                </div>

                <button type="submit">Sign In</button>
            </form>
        </div>
    )
}
export default SignIn;