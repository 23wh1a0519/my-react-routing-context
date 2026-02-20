import Navbar from "./components/Navbar"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Profile from "./pages/Profile"
import AppLayout from "./Layouts/AppLayout"
import { BrowserRouter,Routes,Route } from "react-router-dom"
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element = {<AppLayout/>}>
          <Route path = "/" element={<Dashboard/>}/>
          <Route path = "/login" element={<Login/>}/>
          <Route path = "/profile" element={<Profile/>}/>
          </Route>
        </Routes>
      </BrowserRouter>    
    </>
  )
}

export default App
//2 dependencies to do routing 
//npm i react-router react-router-dom
//react-router
//BrowserRouter,Routes(switch),Route