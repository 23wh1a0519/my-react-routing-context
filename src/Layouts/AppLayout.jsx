import { Outlet } from "react-router-dom";  
import Navbar from "../components/Navbar"

function AppLayout(){
    return (
        <>
            <Navbar/>
            <div style = {{
                border:'1px solid black',
                padding:'16px'
            }}>

            <Outlet/>
            </div>
        </>
    );
}
export default AppLayout;