import { Link, useNavigate } from 'react-router-dom'
import Button from '../atomic/atoms/Button/Button'
import s from './styles/Login.module.css'
import { useContext, useState } from 'react'
import { UserContext } from '../context/createContext'
import { getUser } from '../API/getUser'


export const Login = () => {

    const {user, setUser} = useContext(UserContext)

    const navigate = useNavigate()

    const goWelcome = () => {
        navigate("/welcome")
    }

    const [data, setData] = useState({
        name: "",
        password: ""
    })
    const [error, setError] = useState("")

    // todo: poner postData en un archivo a parte y solo importarlo
    const postData = async(url = '', data = {}) => {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(data)
        })
        return response
    }

    const handleLogin = async(data) => {
        const response = await postData(`http://127.0.0.1:3001/api/users/login`,{
            name: data.name,
            password: data.password
        })
        data = await response.json()

        if(response.status != 201){
            setError(data.message)
        }
        else{
            localStorage.setItem('jwt', data.token)

            const resp = await fetch(`http://127.0.0.1:3001/api/users/private`, {
                headers: {
                    Authorization: `Bearer ${data.token}`,
                },
            })
            const dataUser = await resp.json() 
            setUser({
                user: dataUser.user,
                links: dataUser.user.links
            })
            navigate("/home")
        }
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
                <p>{error}</p>

                <div className={s.buttonBox}>
                    <Button
                        label="Volver"
                        onClick={goWelcome}
                    />
                    <Button
                        label="Entrar"
                        onClick={() => handleLogin(data)}
                    />
                </div>
            </div>
        </div>

    </div>
  )

}