import {Outlet} from "react-router-dom"
import { useNavigate } from "react-router-dom"
function Dash_layout() {

    const navigate = useNavigate();

    const toHome = () => {
        navigate("/"); // Navigates to the students page
    };
    const toAuth = () => {
        navigate("/Logins")
    }
    return (
        <div>
          
            <h1>Dashboard Layout</h1>
            <div className="flex gap-2">
                <button className="bg-gray-500" onClick={toHome}>Home</button>
                <button className="bg-gray-500" onClick={toAuth}>Login</button>
            </div>
            
         <div>
            <hr />
         </div>
            <Outlet /> 
        </div>
        
    )
}

export default Dash_layout