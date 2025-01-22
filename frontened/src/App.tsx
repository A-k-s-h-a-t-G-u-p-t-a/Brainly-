import { Dashboard } from './pages/Dashboard'
import { Signup } from './pages/Signup'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Signin } from './pages/Signin'
function App() {
  // return<Dashboard></Dashboard>
  // return<Signup></Signup>
  return <BrowserRouter>
  <Routes>
    <Route path='/signup' element={<Signup/>}></Route>
    <Route path='/signin' element={<Signin/>}></Route>
    <Route path='/dashboard' element={<Dashboard/>}></Route>
  </Routes>
  </BrowserRouter>
}

export default App
