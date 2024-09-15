import {Routes, Route} from 'react-router-dom';
import SignUp from './Auth__/Forms/SignUp';
import SignIn from './Auth__/Forms/SignIn';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
      </Routes>
    </>
  )
}

export default App
