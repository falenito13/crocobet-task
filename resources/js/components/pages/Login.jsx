import React, {useEffect, useState} from 'react'
import {useForm} from "react-hook-form";
import {VerticallyHorizontallyCentered, Col, Header, Label} from "../components/Main";
import {LoginInput, PrimaryInput} from "../components/Input";
import {LoginButton} from "../components/Button";
import {REDIRECT_IF_AUTHENTICATED} from "../constants/Pages";
import {useLocation, useNavigate} from "react-router-dom";
import User from "../models/User";
import {HTTP_OK} from "../constants/Statuses";
import ValidationErrors from "../components/ValidationErrors";

export default function Login() {
    const {register, handleSubmit} = useForm()
    const [errors, setErrors] = useState([])
    let navigate = useNavigate()
    let location = useLocation()
    const authenticatedCallback = () => {
        let {from} = location.state || {from: {pathname: REDIRECT_IF_AUTHENTICATED}}
        navigate(from)
    }

    const getData = (value) => {
        setErrors(value)
    }

    const onSubmit = data => {
        setErrors([])
        axios.post('/api/login', data).then(response => {
            if (response.data.status === HTTP_OK) {
                User.authenticated(response.data, authenticatedCallback)
            } else {
                Object.keys(response.data).map(key => {
                    response.data[key].forEach(error => {
                        setErrors(prevState => [...prevState, error]);
                    })
                })
            }
        })
    }
    return (
        <div>
            <VerticallyHorizontallyCentered>
                <Col>
                    <Header center>Login</Header>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <Col marginTop={'16px'}>
                                <Label>
                                    Email
                                </Label>
                                <PrimaryInput {...register('email')} type={'text'}/>
                            </Col>
                        </div>
                        <div>
                            <Col marginTop={'16px'}>
                                <Label>
                                    Password
                                </Label>
                                <PrimaryInput {...register('password')} type={'password'}/>
                            </Col>
                        </div>
                        <div>
                            <ValidationErrors errors={errors}/>
                        </div>
                        <LoginButton>Log in</LoginButton>
                    </form>
                </Col>
            </VerticallyHorizontallyCentered>
        </div>
    )
}
