import { Link, useNavigate } from 'react-router-dom'
import Button from '../atomic/atoms/Button/Button'
import s from './styles/Login.module.css'
import {useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../store/slices/thunk'


export const Login = () => {
    
    const dispatch = useDispatch()

    const [data, setData] = useState({
        name: "",
        password: ""
    })

    const navigate = useNavigate()

    const goWelcome = () => {
        navigate("/")
    }

  return (
    <div>
        <div className={s.box}>
            <h1 className={s.header}> Login 🚪</h1>
            
            <div className={s.form}>
                <div>
                    <label htmlFor="nickname">NickName</label>
                    <input 
                        type="text" 
                        id="nickname"
                        name="nickName"
                        autoComplete="off" 
                        minLength="0" 
                        maxLength="1023" 
                        placeholder="MyCoolNickName" 
                        className={s.input}
                        value={data.name}
                        onChange={ e =>setData({...data, name: e.target.value})}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password"
                        id="password"
                        autoComplete="off" 
                        minLength="0" 
                        maxLength="1023" 
                        placeholder="MyPassword123" 
                        className={s.input}
                        value={data.password}
                        onChange={ e =>setData({...data, password: e.target.value})}
                    />
                </div>
                <p></p>

                <div className={s.buttonBox}>
                    <Button
                        label="Volver"
                        onClick={goWelcome}
                    />
                    <Button
                        label="Entrar"
                        onClick={() => dispatch(getUser(data))}
                    />
                </div>
            </div>
        </div>

    </div>
  )

}