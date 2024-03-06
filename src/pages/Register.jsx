import { useNavigate } from 'react-router-dom'
import Button from '../atomic/atoms/Button/Button'
import s from './styles/Register.module.css'
import { useState } from 'react'

export const Register = () => {

    const navigate = useNavigate()

    const goWelcome = () => {
        navigate("/welcome")
    }

    const [user, setUser] = useState({
        name: "",
        perfilImage: "https://c4.wallpaperflare.com/wallpaper/269/887/661/anime-dr-stone-senku-ishigami-hd-wallpaper-preview.jpg",
        password: ""
    })

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

    const handleRegister = async(user) => {
        try {
            await postData("http://127.0.0.1:3001/api/users/register", {
                name: user.name,
                perfilImage: user.perfilImage,
                password: user.password,
            })
            navigate("/welcome")
        }
        catch (error){ console.log(error) }
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
                    <img src="https://th.bing.com/th/id/OIG.PqoI5UVOCAGSET4xwMgq?pid=ImgGn" alt="nueva imagen" />
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
                        onClick={e => handleRegister(user)}
                    />
                </div>
            </div>
        </div>

    </div>
  )
}
