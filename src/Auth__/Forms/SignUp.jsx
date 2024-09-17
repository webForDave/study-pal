import { useState } from "react";
import FormInput from "../../Layout__/Components/FormInput";
import { useNavigate } from "react-router-dom";

const INITIAL_FORM_STATE = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirm_password: ''
}

function SignUp() {
    const [formData, setFomData] = useState(INITIAL_FORM_STATE);
    const [formErrors, setFormErrors] = useState({
        first_name: false,
        last_name: false,
        email: false,
        emailCheck: false,
        password: false,
        confirm_password: false,
        passwordsCheck: false
    });

    const navigate = useNavigate();

    function handleChange(e) {
        const {name, value} = e.target;

        setFomData({
            ...formData,
            [name] : value
        })
    }

    function handleValidation() {
        let isValid = true;
        let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        let newErrors = {
            first_name: false,
            last_name: false,
            email: false,
            emailCheck: false,
            password: false,
            confirm_password: false,
            passwordsCheck: false
        }

        if(formData.first_name === '') {
            isValid = false;
            newErrors.first_name = true;
        }

        if(formData.last_name === '') {
            isValid = false;
            newErrors.last_name = true;
        }

        if(formData.email === '') {
            isValid = false;
            newErrors.email = true;
        } else if(!formData.email.match(emailRegex)) {
            isValid = false;
            newErrors.emailCheck = true;
        }

        if(formData.password === '') {
            isValid = false;
            newErrors.password = true;
        }

        if(formData.confirm_password === '') {
            isValid = false;
            newErrors.confirm_password = true;
        } else if(formData.confirm_password != formData.password) {
            newErrors.passwordsCheck = true;
            isValid = false;
        }

        setFormErrors(newErrors);

        return isValid;
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const isValid = handleValidation();
        
        if(isValid) {
            setFomData(INITIAL_FORM_STATE);
            console.log(formData);

            navigate('/home');
        }
    }
    
    return(
        <>
            <form onSubmit={handleSubmit}>

                <div>
                    {formErrors.first_name && <p>First name is required</p>}
                    <label htmlFor='first_name'>First Name</label>
                    <FormInput type="text" placeholder='First Name' id='first_name' name='first_name' value={formData.first_name} handleChange={handleChange} />
                </div>

                <div>
                    {formErrors.last_name && <p>Last name is required</p>}
                    <label htmlFor="last_name">Last Name</label>
                    <FormInput type="text" placeholder='Last Name' id='last_name' name='last_name' value={formData.last_name} handleChange={handleChange} />
                </div>

                <div>
                    {formErrors.email && <p>Email is required</p>}
                    {formErrors.emailCheck && <p>Invalid Email</p>}
                    <label htmlFor="email">Email Address</label>
                    <FormInput type="text" placeholder='Email Address' id='email' name='email' value={formData.email} handleChange={handleChange} />
                </div>

                <div>
                    {formErrors.password && <p>Password is required</p>}
                    <label htmlFor="password">Password</label>
                    <FormInput type='password' placeholder='Password' id='password' name="password" value={formData.password} handleChange={handleChange} />
                </div>

                <div>
                    {formErrors.confirm_password && <p>Confirm password is required</p>}
                    {formErrors.passwordsCheck && <p>Passwords do not match</p>}
                    <label htmlFor="confirm_password">Confirm Password</label>
                    <FormInput type='password' placeholder='Confirm Password' id='confirm_password' name="confirm_password" value={formData.confirm_password} handleChange={handleChange} />
                </div>

                <button type="submit">Sign Up</button>
            </form>
        </>
    )
}

export default SignUp;