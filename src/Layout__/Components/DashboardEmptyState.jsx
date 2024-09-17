import { useNavigate } from "react-router-dom";

const DashboardEmptyState = () => {
    const navigate = useNavigate();

    const handleButton = () => {
        navigate('/create-plan');
    }

  return (
    <div>
        <h1>Welcome to Study Pal</h1>
        <p>It looks like you haven't created a study plan yet. Let's set one up
        to stay organized!</p>
        <button onClick={handleButton} >Create your Study Plan</button>
    </div>
  )
}

export default DashboardEmptyState;