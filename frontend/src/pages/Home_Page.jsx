import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Home_Page() {
    const nav = useNavigate()
    const toList = () => {
        nav("/list")
    }
    return (
        <div>
            <h1>Welcome to home page</h1>
            <div>
                <button className="bg-gray-500" onClick={toList}>StudentList</button>
            </div>
        </div>
    )
}

export default Home_Page