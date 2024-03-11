import { Navigate, Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { checkToken } from '../store/slices/thunk'

import { Home, UpdateUser, Register, Login } from '../pages'
import { Welcome } from '../pages/Welcome'
import { useEffect } from 'react'

export const AppRouter = () => {
    const user = useSelector((state)=> state.login)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(checkToken())
    },[])

    if ( user.status === 'checking' ) {
        return (
            <h3>Cargando...</h3>
        )
    }

    return(
        <Routes>
            {
                (user.status === 'not-authenticated')
                 ? (
                    <>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/*" element={ <Navigate to="/"/> } />
                        <Route path="/" element={<Welcome/>}/>
                    </>
                     
                 )
                 : (
                    <>
                        <Route path="/home" element={ <Home/> } />
                        <Route path="/update" element={ <UpdateUser/> }/>
                        <Route path="/*" element={ <Navigate to="/home"/> } />

                    </>
                 )

            }

        </Routes>
    )

}
