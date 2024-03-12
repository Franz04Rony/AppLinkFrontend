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
        perfilImage: "https://c4.wallpaperflare.com/wallpaper/269/887/661/anime-dr-stone-senku-ishigami-hd-wallpaper-preview.jpg",
        password: ""
    })

    const navigate = useNavigate()

    const goWelcome = () => {
        navigate("/")
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
                    {/* <img src={data.image ? data.image : "https://th.bing.com/th/id/OIG.s9mB6..wYYm1x1cRK3wA?pid=ImgGn"} alt="nueva imagen" /> */}
                    <img src="https://www.petlife.mx/u/fotografias/m/2023/5/16/f768x1-2048_2175_5050.jpg" alt="nueva imagen" />
                    <input 
                        type="file" 
                        name="upload-img" 
                        accept="image/*"
                        // onChange={ uploadImage }
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
