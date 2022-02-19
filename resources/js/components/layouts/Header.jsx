import React from 'react'
import User from '../models/User'
import {Logo, NavBar} from "../components/Header";
import logo from '../assets/logo.svg'
import {GlobalStyles} from "../components/Main";
import {Logout, NavBarLogin} from '../components/Button'
import {Link, NavLink, useLocation, useNavigate} from "react-router-dom";
import AxiosInstance from "../hooks/AxiosInstance";
import {HTTP_NO_CONTENT} from "../constants/Statuses";

export default function Header({children}) {
    let navigate = useNavigate();
    let location = useLocation();
    const authenticatedCallback = () => {
        let {from} = location.state || {from: {pathname: '/login'}}
        navigate(from)
    }

    const logout = () => {
        AxiosInstance().post('/api/logout').then(response => {
            if (response.status == HTTP_NO_CONTENT) {
                console.log('test')
                User.logout(authenticatedCallback)
            }
        })
    }
    return (
        <>
            <div className={'body'}>
                <GlobalStyles/>
                <NavBar>
                    <NavLink to={'/dashboard'}>
                        <Logo src={logo}/>
                    </NavLink>
                    {User.isLoggedIn() ? <Logout onClick={logout}>Log out </Logout> :
                        <Link to={'/login'}><NavBarLogin>Log in</NavBarLogin></Link>}
                </NavBar>
                {children}
            </div>
        </>
    )
}
