import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Landing_Page from './components/Landing_Page'
import Login from './components/Login'
import SignUp from './components/SignUp'

function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Landing_Page />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<SignUp />} />
     </Routes>
    </BrowserRouter>
  )
}

export default App
