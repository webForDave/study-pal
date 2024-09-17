import {Routes, Route} from 'react-router-dom';
import SignUp from './Auth__/Forms/SignUp';
import SignIn from './Auth__/Forms/SignIn';
import Home from './Layout__/Pages/Home';
import CreatePlan from './Layout__/Pages/CreatePlan';
import AddStudy from './Layout__/Pages/AddStudy';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/home' element={<Home />} />
        <Route path="/create-plan" element={<CreatePlan />}/>
        <Route path="/add-study" element={<AddStudy />} />
      </Routes>
    </>
  )
}

export default App
