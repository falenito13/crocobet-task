import React, {useEffect, useState} from 'react'
import {Col, Row, Header, Label, VerticallyHorizontallyCentered, HorizontallyCentered} from "../components/Main";
import {PrimaryInput} from "../components/Input";
import DatePicker from 'react-datepicker'
import Select from "react-select";
import AxiosInstance from "../hooks/AxiosInstance";
import {StatusButton, TodoButton} from "../components/Button";
import {DeleteIcon, userSelectStyles} from "../components/Todo";
import {Controller, useForm} from 'react-hook-form'
import {Table} from "react-bootstrap";
import {statusButtonColors} from "../constants/Styles";
import {HTTP_CREATED, HTTP_OK} from "../constants/Statuses";
import ValidationErrors from "../components/ValidationErrors";
import DeleteImg from '../assets/delete.png'
import {Axios} from "axios";

export default function Todos() {
    const [errors, setErrors] = useState([])
    const [todoStatuses, setTodoStatuses] = useState([])
    const {control, register, handleSubmit, reset} = useForm()
    const [users, setUsers] = useState([])
    const [todos, setTodos] = useState([]);
    const [selectedUser, setSelectedUser] = useState();
    const changeUser = (todoId,userId) => {
        const data = {
            id : todoId,
            user_id : userId
        }
        AxiosInstance().post('/api/todo/update', data).then(response => {
            if (response.status === HTTP_OK) {
                updateTable()
            }
        })
    }

    const updateTable = () => {
        AxiosInstance().get('/api/todo/list').then(response => {
            let data = response.data
            setTodos(data.todos)
        })
    }
    useEffect(() => {
        AxiosInstance().get('/api/todo/list').then(response => {
            let data = response.data
            data.users.forEach(user => {
                setUsers(prevState => [...prevState, {
                    value: user.id,
                    label: user.name
                }])
            })
            data.todo_statuses.forEach(todoStatus => {
                setTodoStatuses(prevState => [...prevState, {
                    value: todoStatus.id,
                    label: todoStatus.name
                }]);
            })
            setTodos(data.todos)
        })
    }, [])
    const [username, setUsername] = useState('');
    const [deadlineDate, setDeadlineDate] = useState(new Date());
    const createTodo = (data) => {
        AxiosInstance().post('/api/todo', data).then(response => {
            setErrors([]);
            if (response.data.status === HTTP_CREATED) {
                updateTable();
                reset({
                    firstname: '',
                    deadline_date: '',
                    user_id: '',
                })
            } else {
                Object.keys(response.data).map(key => {
                    response.data[key].forEach(error => {
                        setErrors(prevState => [prevState, error]);
                    })
                })
            }
        });
    }

    const changeStatus = (todoId, statusId) => {
        let data = {
            id: todoId,
            status_id: statusId
        }
        AxiosInstance().post('/api/todo/update', data).then(response => {
            if (response.status === HTTP_OK) {
                updateTable()
            }
        })
    }

    const deleteTodo = (id) => {
        AxiosInstance().post('/api/todo/delete', {id: id}).then(response => {
            if (response.status === 204) {
                updateTable()
            }
        })
    }

    return (
        <div>
            <HorizontallyCentered marginTop={'64px'}>
                <Col>
                    <Header center>Create ToDo</Header>
                    <form onSubmit={handleSubmit(createTodo)}>
                        <Col>
                            <Col marginTop={'1rem'}>
                                <Label>Username</Label>
                                <PrimaryInput {...register('firstname')}/>
                            </Col>
                            <Col marginTop={'1rem'}>
                                <Label>Deadline</Label>
                                <Controller control={control}
                                            name={'deadline_date'}
                                            render={({field}) => (
                                                <DatePicker
                                                    selected={field.value}
                                                    placeholderText={'Select date'}
                                                    defaultValue={deadlineDate}
                                                    onChange={(date) => field.onChange(date)}/>)}/>
                            </Col>
                            <Col marginTop={'1rem'}>
                                <Label>Choose User</Label>
                                <Controller
                                    control={control}
                                    name="user_id"
                                    render={({field}) => (
                                        <Select
                                            options={users}
                                            onChange={(val) => field.onChange(val.value)}
                                        />
                                    )}
                                />
                            </Col>
                        </Col>
                        <ValidationErrors errors={errors}/>
                        <TodoButton>Add ToDo</TodoButton>
                    </form>
                    <div>
                        <Col marginTop={'2rem'}>

                            <Table responsive={'sm'} size={'sm'} striped bordered hover variant={'light'}>
                                <thead>
                                <tr>
                                    <th className={'text-center'}>Status</th>
                                    <th className={'text-center'}>Username</th>
                                    <th className={'text-center'}>Deadline</th>
                                    <th className={'text-center'}>Change User</th>
                                    <th className={'text-center'}>Delete ToDo</th>
                                </tr>
                                </thead>
                                <tbody>
                                {todos && todos.map(todo => {
                                    let currentUserStatus = todoStatuses[todo.status_id - 1]
                                    return (
                                        <tr>

                                            <td className={'align-middle text-center'}><StatusButton
                                                onClick={() => changeStatus(todo.id, todo.status_id + 1)}
                                                bg={statusButtonColors[currentUserStatus.value - 1]}>{currentUserStatus.label} </StatusButton>
                                            </td>
                                            <td className={'align-middle text-center'}>{todo.firstname}</td>
                                            <td className={'align-middle text-center'}>{todo.deadline_date}</td>
                                            <td className={'align-middle'}>
                                                <Select
                                                    value={
                                                        users.filter(option =>
                                                            option.value === todo.user_id)
                                                    }
                                                    options={users}
                                                    onChange={(e) => changeUser(todo.id,e.value)}
                                                />
                                            </td>
                                            <td className={'align-middle text-center'}>
                                                <DeleteIcon src={DeleteImg} onClick={() => deleteTodo(todo.id)}/>
                                            </td>
                                        </tr>
                                    )
                                })}
                                </tbody>
                            </Table>
                        </Col>
                    </div>
                </Col>

            </HorizontallyCentered>
        </div>
    )
}
