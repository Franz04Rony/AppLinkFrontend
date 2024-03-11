import { useDispatch } from 'react-redux'
import { Logout } from '../../../store/slices/thunk'
import {Button} from '../../atoms/Button/Button'
import {PerfilPicture} from '../../atoms/PerfilPicture/PerfilPicture'
import s from './Header.module.css'

import { useNavigate } from 'react-router-dom'

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
        <div className={s.perfil}>
            
        </div>
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
        </div>
        
    </nav>
  )
}
