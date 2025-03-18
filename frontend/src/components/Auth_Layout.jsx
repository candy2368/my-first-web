import {Outlet} from "react-router-dom"
function Auth_Layout() {
    return (
        <div>
           <h1>
            Authentication Layout
            <div>
                <hr />
            </div>
           </h1>
           <Outlet />
        </div>
    )

}

export default Auth_Layout