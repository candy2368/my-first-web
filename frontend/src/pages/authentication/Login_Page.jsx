import { use } from "react"
import {Outlet} from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Login_Page() {

    const nav = useNavigate()
    const toSignUp = () => {
        nav("/register")
    }
    const toHome = () => {
        nav("/")
    }
    return (
        <div>
            <div>  
                <b>
            <h1>Login Form</h1> 
            </b>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder="enter email" />
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder="enter password" />
                </div>
                <div className="flex gap-2">   
                    <button className="bg-gray-500" onClick={toHome}>Log in</button>
                    <button className="bg-gray-500" onClick={toSignUp}>Go to sign up</button>
                </div>
            </div>
            
            <Outlet />
        </div>  
    )
 }

 export default Login_Page