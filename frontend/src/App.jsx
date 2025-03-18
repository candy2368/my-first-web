import {Routes,Route,BrowserRouter} from "react-router-dom"
import Dash_layout from "./components/Dash_Layout"
import Auth_Layout from "./components/Auth_Layout"
import Login_page from "./pages/authentication/Login_Page"
import Register_Page from "./pages/authentication/Register_Page"
import StudentsList_Page from "./pages/list/StudentsList_Page"
import Home_Page from "./pages/Home_Page"
import Error_Page from "./pages/Error_Page"
function App() {

  
  return (
    <BrowserRouter>
      <Routes>
        <Route  element={<Dash_layout/>}>
          <Route path="/" element={<Home_Page/>}></Route>
          <Route path="list" element={<StudentsList_Page/>}></Route>
          <Route path="*" element={<Error_Page/>}></Route>
        </Route>
        <Route element={<Auth_Layout/>}>
          <Route path="/Logins" element={<Login_page/>}></Route>
          <Route path="/register" element={<Register_Page/>}></Route>
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
