
import { useSelector } from "react-redux"
import {PerfilPicture} from "../atomic/atoms/PerfilPicture/PerfilPicture"
import { BoxLink } from "../atomic/molecules/BoxLink/BoxLink"
import { Header } from "../atomic/molecules/Header/Header"

import s from './styles/Home.module.css'


export const Home = () => {
  
  const {user} = useSelector((state)=> state.login )

  console.log(user)
  
  return (
    <>
      <Header
      />
      <div className={s.MainBox}>
        <div className={s.box}>
          <div className={s.picture}>
            <PerfilPicture src={user.perfilImage}/>
            <div>{user.name}</div>
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