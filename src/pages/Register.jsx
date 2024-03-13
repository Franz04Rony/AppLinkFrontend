import { useNavigate } from 'react-router-dom'
import Button from '../atomic/atoms/Button/Button'
import s from './styles/Register.module.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { startRegister } from '../store/slices/thunk'

export const Register = () => {

    const dispatch = useDispatch()

    const [user, setUser] = useState({
        name: "",
        perfilImage: "https://www.petlife.mx/u/fotografias/m/2023/5/16/f768x1-2048_2175_5050.jpg",
        imageFile: null,
        password: ""
    })

    const navigate = useNavigate()

    const goWelcome = () => {
        navigate("/")
    }

    const displayImage = (event) => {
        const newURL = URL.createObjectURL(event.target.files[0])
        setUser({...user, imageFile: event.target.files[0], perfilImage: newURL})
    }

  return (
    <div>
        <div className={s.box}>
            <h1 className={s.header}>LinkApp Register 📝</h1>
            
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
                        value={user.name}
                        onChange={ e => setUser({...user, name: e.target.value})}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password <p>(debe contener almenos 1 mayúscula, minúsculas y 1 número )</p></label>
                    <input 
                        type="password"
                        id="password"
                        autoComplete="off" 
                        minLength="0" 
                        maxLength="1023" 
                        placeholder="MyPassword123" 
                        className={s.input}
                        value={user.password}
                        onChange={ e => setUser({...user, password: e.target.value})}
                    />
                </div>

                <label className={s.image}>
                    <p>Perfil Image (Upload your image -optional-)</p>
                    <img 
                        src={user.perfilImage} alt="nueva imagen" 
                        />
                    <input 
                        type="file" 
                        name="upload-img" 
                        accept="image/*"
                        onChange={(e)=> displayImage(e)}
                    />
                </label>

                <div className={s.buttonBox}>
                    <Button
                        label="Volver"
                        onClick={goWelcome}
                    />
                    <Button
                        label="Registrar"
                        onClick={() => dispatch(startRegister(user)) }
                    />
                </div>
            </div>
        </div>

    </div>
  )
}
