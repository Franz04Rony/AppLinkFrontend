import { useContext, useState } from "react"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"

import {PerfilPicture} from "../atomic/atoms/PerfilPicture/PerfilPicture"
import { BoxLink } from "../atomic/molecules/BoxLink/BoxLink"
import { Header } from "../atomic/molecules/Header/Header"

import { getUser } from "../API/getUser"

import s from './styles/Home.module.css'
import { UserContext } from "../context/createContext"


export const Home = ({}) => {
  
  const {user, setUser} = useContext(UserContext)
  const [isAuthorized, setIsAuthorized] = useState(true)
  
  return (
    <>
      <Header 
        user={user.user}
        links={user.links}
        isAuthorized={isAuthorized}
      />
      <div className={s.MainBox}>
        <div className={s.box}>
          <div className={s.picture}>
            <PerfilPicture src={user.user.perfilImage}/>
            <div>{user.user.name}</div>
          </div>
          {
            user.links.map((e)=>(
              <BoxLink
                key = {e.label}
                image = {e.image}
                label = {e.label}
                link = {e.link}
              />
            ))
          }
        </div>
      </div>

    </>
  )
}