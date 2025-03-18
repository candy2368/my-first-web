import {Outlet} from "react-router-dom"
import { useNavigate } from "react-router-dom"
function Register_Page() {
    const nav = useNavigate()
    const submitSignUp = () => {
        nav("/")
    }
    const toLogin = () => {
        nav("/Logins")
    }
    return (
        <div>
           <div>  
                <b>
            <h1>Register</h1> 
            </b>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder="enter email" />
                </div>
                <div>
                    <label htmlFor="">Name</label>
                    <input type="email" placeholder="name" />
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder="enter password" />
                </div>
                <div>
                    <label htmlFor="">Confirm Password</label>
                    <input type="password" placeholder="confirm password" />
                </div>
                <div className="flex gap-2">   
                    <button className="bg-gray-500" onClick={submitSignUp}>Sign up</button>
                    <button className="bg-gray-500" onClick={toLogin}>go to Login</button>
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default Register_Page