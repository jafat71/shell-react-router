import { BrowserRouter, NavLink, Route, Routes, Navigate } from "react-router-dom"
import logo from "../assets/react.svg"
import ShoppingPage from "../patterns/pages/ShoppingPage"

const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="react-logo"></img>
                    <ul>
                        <li>
                            <NavLink to="/home" className={({isActive})=> isActive ? "nav-active": ""}>Shopping</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={({isActive})=> isActive ? "nav-active": ""}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/users" className={({isActive})=> isActive ? "nav-active": ""}>Users</NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="about" element={<h2>About</h2>}></Route>
                    <Route path="users" element={<h2>Users</h2>}></Route>
                    <Route path="home" element={<ShoppingPage/>}></Route>
                    <Route path="/*" element={<Navigate to="/home" replace/>}></Route>


                </Routes>


            </div>
        </BrowserRouter>
    )
}

export default Navigation