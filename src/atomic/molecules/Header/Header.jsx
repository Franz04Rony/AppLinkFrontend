import { useDispatch } from 'react-redux'
import { Logout } from '../../../store/slices/thunk'
import {Button} from '../../atoms/Button/Button'
import {PerfilPicture} from '../../atoms/PerfilPicture/PerfilPicture'
import s from './Header.module.css'

import { useNavigate } from 'react-router-dom'
import { Github } from '../../../icons/icons'

export const Header = ({
    isAuthorized = true
}) => {

    const dispatch = useDispatch()

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
        <div className={s.buttonGroup}>
        {
            isAuthorized ?
            (
                <>
                    <Button 
                        label = 'Home'
                        onClick = {returnHome}
                        />

                    <Button
                        label = 'Add new link'
                        onClick = {addNewLink}
                    />

                    <Button
                        label = 'Logout'
                        onClick = {()=> dispatch(Logout())}
                    />
                </>
            ) :
            (
                <>
                    <Button
                    label = 'Login'
                    onClick = {GoLogin}
                />

                <Button
                    label = 'Register'
                    onClick = {GoRegister}
                />
                </>
            )
            
        }
            <a href="https://github.com/Franz04Rony" target="_blank" className={s.link}>
                <Github width={20} height={20} color={"fff"}/>
                <span className={s.github}>Github</span>
            </a>
        </div>
        
    </nav>
  )
}
