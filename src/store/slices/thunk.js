import { clearErrorMessage, onChecking, onLogin, onLogout } from "./loginSlice"
import { authApi } from "../../API/authApi"

export const getUser = (user) => {
    return async(dispatch, getState) => {
        dispatch( onChecking() )
        try{
            const {data} = await authApi.post("/api/users/login", {
                name: user.name,
                password: user.password
            })
            localStorage.setItem("jwt", data.token)
            dispatch(onLogin(data))
        } catch (error) {
            dispatch( onLogout('Credenciales incorrectas'))
            setTimeout(()=> {
                dispatch( onLogout(error))
            }, 10)
        }

    }
}

export const checkToken = () => {
    return async(dispatch, getState) => {
        const token = localStorage.getItem("jwt")
        if (!token) return dispatch( onLogout("error") )
    
        try {
            const {data} = await authApi.get('api/users/renew',
                {
                    headers:{
                        Authorization: `Bearer ${token}` 
                    }
                }
            )
            localStorage.setItem('jwt', data.token)
            dispatch( onLogin(data.user) )
        } catch (error) {
            localStorage.clear()
            dispatch( onLogout("error") )
        }
    }
}

export const Logout = () => {
    return (dispatch, getState) => {
        localStorage.clear()
        dispatch(onLogout())
    }
}

export const startRegister = (user) => {
    return async(dispatch, getState) => {
        dispatch( onChecking() )
        let url = ""
        url = user.perfilImage
        try{
            if(user.imageFile !== null) {
                let formData = new FormData()
                formData.append('file', user.imageFile)
                const link = await authApi.post("/api/files/links", formData)
                const {secureUrl} = link.data
                url = secureUrl
            }
            const {data} = await authApi.post("/api/users/register", {
                name: user.name,
                password: user.password,
                perfilImage: url
            })
            localStorage.setItem("jwt", data.token)
            dispatch(onLogin(data))
        } catch (error) {
            setTimeout(()=> {
               dispatch( onLogout(error))
            }, 10)
        }

    }
}