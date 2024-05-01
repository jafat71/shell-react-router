import { BrowserRouter, NavLink, Route, Routes, Navigate } from "react-router-dom"
import logo from "../assets/react.svg"
import { RegisterPage } from "../forms/pages/RegisterPage"
import FormikBasicPage from "../forms/pages/FormikBasicPage"
import FormikYupPage from "../forms/pages/FormikYupPage"
import FormikComponents from "../forms/pages/FormikComponents"
import FormikAbstract from "../forms/pages/FormikAbstract"

const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="react-logo"></img>
                    <ul>
                        <li>
                            <NavLink to="/register" className={({isActive})=> isActive ? "nav-active": ""}>Register</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik" className={({isActive})=> isActive ? "nav-active": ""}>Formik</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-yup" className={({isActive})=> isActive ? "nav-active": ""}>Formik Yup</NavLink>
                        </li>
                        <li>
                            <NavLink to="/users" className={({isActive})=> isActive ? "nav-active": ""}>Users</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-components" className={({isActive})=> isActive ? "nav-active": ""}>Formik Components</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-abstract" className={({isActive})=> isActive ? "nav-active": ""}>Formik Abstract</NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="about" element={<h2>About</h2>}></Route>
                    <Route path="users" element={<h2>Users</h2>}></Route>
                    <Route path="home" element={<h2>Home</h2>}></Route>
                    <Route path="register" element={<RegisterPage/>}></Route>
                    <Route path="formik" element={<FormikBasicPage/>}></Route>
                    <Route path="formik-yup" element={<FormikYupPage/>}></Route>
                    <Route path="formik-components" element={<FormikComponents/>}></Route>
                    <Route path="formik-abstract" element={<FormikAbstract/>}></Route>

                    <Route path="/*" element={<Navigate to="/home" replace/>}></Route>


                </Routes>


            </div>
        </BrowserRouter>
    )
}

export default Navigation