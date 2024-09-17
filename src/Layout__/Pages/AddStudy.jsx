import { useState } from "react";
import FormInput from "../Components/FormInput";

const INITIAL_FORM = {
    subject: '',
    time: '',
    priority: ''
}

const AddStudy = () => {

    const [addForm, setAddForm] = useState(INITIAL_FORM);
    const [addFormErrors, setAddFormErrors] = useState({
        subjectError: '',
        timeError: '',
        priorityError: ''
    })

    const handleChange = e => {
        let {name, value} = e.target;
        setAddForm({
            ...addForm,
            [name]: value
        })
    }

    let handleValidation = () => {
        let isValid = true;
        let newAddFormError = {
            subjectError: '',
            timeError: '',
            priorityError: ''
        }

        if(addForm.subject === '') {
            isValid = false;
            newAddFormError.subjectError = true;
        }

        if(addForm.time === '') {
            isValid = false;
            newAddFormError.timeError = true;
        }

        if(addForm.priority === '') {
            isValid = false;
            newAddFormError.priorityError = true;
        }
        setAddFormErrors(newAddFormError);

        return isValid;
    }

    const handleSubmit = e => {
        e.preventDefault();
        const isValid = handleValidation();

        if(isValid) {
            console.log(addForm);
            
        }
    }

  return (
    <div>
        <h1>Add your subjects</h1>

        <form onSubmit={handleSubmit}>
            <div>
                {addFormErrors.subjectError && <p>Field is required</p>}
                <label htmlFor="subject">Subject</label>
                <FormInput type='text' placeholder='Subject' id='subject' name="subject" value={addForm.subject} handleChange={handleChange} />
            </div>
            <div>
                {addFormErrors.timeError && <p>Field is required</p>}
                <label htmlFor="time">Subject</label>
                <FormInput type='number' placeholder='Time' id='time' name="time" value={addForm.time} handleChange={handleChange} />
            </div>
            <div>
                {addFormErrors.priorityError && <p>Field is required</p>}
                <label htmlFor="priority">Priority</label>
                <FormInput type='text' placeholder='Priority' id='priority' name="priority" value={addForm.priority} handleChange={handleChange} />
            </div>

            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default AddStudy;