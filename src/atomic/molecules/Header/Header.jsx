import {Button} from '../../atoms/Button/Button'
import {PerfilPicture} from '../../atoms/PerfilPicture/PerfilPicture'
import s from './Header.module.css'

import { useNavigate } from 'react-router-dom'

export const Header = ({
    links,
    user,
    isAuthorized
}) => {
    const navigate = useNavigate()

    const addNewLink = () => {
        navigate("/update")
    }
    const returnHome = () => {
        navigate("/home")
    }

    const GoRegister = () => {
        navigate("/register")
    }

    const GoLogin = () => {
        navigate("/login")
    }

  return (
    <nav className={s.header}>
        <div className={s.perfil}>
        {
            isAuthorized ?
            <>
                <PerfilPicture 
                    src = {user.perfilImage}
                />
                <div>
                    {user.name}
                </div>
            </>
            :
            <h1 style={{fontSize:20+'px'}}> LinkApp</h1>
        }
            
        </div>
        <div className={s.buttonGroup}>
        {
            isAuthorized ? 
            <>
                <Button 
                    label = 'Home'
                    onClick = {returnHome}
                    />

                <Button
                    label = 'Add new link'
                    onClick = {addNewLink}
                />
            </>
            :
            <>
                <Button 
                    label = 'Register'
                    onClick = {GoRegister}
                    />

                <Button
                    label = 'Login'
                    onClick = {GoLogin}
                />
            </>
        }
        </div>
        
    </nav>
  )
}

Header.defaultProps = {
    profileName: 'Senku Ishigami'
}
