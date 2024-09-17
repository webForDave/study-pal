import { useState } from "react";
import FormInput from "../Components/FormInput";
import { useNavigate } from "react-router-dom";

const INITIAL_GOALS = {
    daily_goal: '',
    weekly_goal: '',
    monthly_goal: ''
}

const CreatePlan = () => {
    const navigate = useNavigate();

    const [goals, setGoals] = useState(INITIAL_GOALS);
    const [goalsErrors, setGoalsErrors] = useState({
        dailyGoalError: false,
        weeklyGoalError: false,
        monthlyGoalError: false
    })

    const handleChange = e => {
        let {name, value} = e.target;
        setGoals({
            ...goals,
            [name]: value
        })        
    }

    const handleValidate = () => {
        let isValid = true;

        const newGoalsErros = {
            dailyGoalError: false,
            weeklyGoalError: false,
            monthlyGoalError: false
        }

        if(goals.daily_goal === '') {
            isValid = false;
            newGoalsErros.dailyGoalError = true;
        }

        if(goals.weekly_goal === '') {
            isValid = false;
            newGoalsErros.weeklyGoalError = true;
        }

        if(goals.monthly_goal === '') {
            isValid = false;
            newGoalsErros.monthlyGoalError = true;
        }

        setGoalsErrors(newGoalsErros);

        return isValid
    }

    const handleSubmit = e => {
        e.preventDefault();
        const isValid = handleValidate();

        if(isValid) {
            console.log(goals);
            navigate('/add-study');

        }

    }

  return (
    <div>
        <h1>Set Goals</h1>

        <form onSubmit={handleSubmit}>
            <div>
                {goalsErrors.dailyGoalError && <p>Field is required</p>}
                <label htmlFor="daily_goal">Daily Goal</label>
                <FormInput type='text' placeholder='Daily goal' id='daily_goal' name='daily_goal' value={goals.daily_goal} handleChange={handleChange} />
            </div>

            <div>
                {goalsErrors.weeklyGoalError && <p>Field is required</p>}
                <label htmlFor="weekly_goal">Weekly Goal</label>
                <FormInput type='text' placeholder='Weekly goal' id='weekly_goal' name='weekly_goal' value={goals.weekly_goal} handleChange={handleChange}/>
            </div>

            <div>
                {goalsErrors.monthlyGoalError && <p>Field is required</p>}
                <label htmlFor="mothly_goal">Monthly Goal</label>
                <FormInput type='text' placeholder='Monthly goal' id='monthly_goal' name='monthly_goal' value={goals.monthly_goal} handleChange={handleChange} />
            </div>

            <button type="submit">Next</button>
        </form>
    </div>
  )
}

export default CreatePlan;
