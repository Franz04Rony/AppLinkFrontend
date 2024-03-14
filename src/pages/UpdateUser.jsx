import { useState } from "react"
import Button from "../atomic/atoms/Button/Button"
import { Header } from "../atomic/molecules/Header/Header"
import s from './styles/UpdateUser.module.css'
import { useDispatch, useSelector } from "react-redux"
import { onAddLink } from "../store/slices/loginSlice"
import { Planet, Plus } from "../icons/icons"

export const UpdateUser = ({
  
}) => {

    const {user} = useSelector((state)=> state.login)
    const dispatch = useDispatch()

    const [data, setData] = useState({
        image: null,
        link: "",
        label: ""
    })

    const [error, setError] = useState('')

    const patchData = async(url = '', data = {}) => {
      await fetch(url, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      setData({...data, image: null, link: "", label: ""})
      setError("Link agregado correctamente :)")
      // return response.json()
    }

    const handleClick = async(links, data, userID) => {
      if(data.label && data.link){

        const newLinks = [...links, data]
  
        patchData(`http://127.0.0.1:3001/api/users/${userID}`,{
          links: newLinks
        })
        dispatch(onAddLink({
          ...user,
          links:[
            ...links,
            {
              image: `https://s2.googleusercontent.com/s2/favicons?domain_url=${data.link}`,
              label: data.label,
              link: data.link
            }
          ]
        }))
      }
      else{
        setError("Faltan rellenar campos!")
      }
    }
   
  return (
    <div>
      <Header
      />
      <div className={s.box}>
        <div className={s.header}>
          <div></div>
          <h1 className={s.title}> Add a new link </h1>
          <Button
            label="Add"
            onClick={() => handleClick(user.links,data, user.userID)}
          >
            <Plus width={13} height={13} color={"BE3C88"}/>
          </Button>
        </div>
        <div className={s.form}>

          <Planet/>


          <div className={s.newData}>

            <div className={s.inputBox}>
              <label htmlFor="link">Link:</label>
              <input
                id="link"
                type="text" 
                autoComplete="off" 
                minLength="0" 
                maxLength="1023" 
                placeholder="https://example.com" 
                className={s.input}
                onChange={e => setData({...data, link: e.target.value, image: `https://s2.googleusercontent.com/s2/favicons?domain_url=${e.target.value}`})}
                value={data.link}
                />
            </div>

            <div className={s.inputBox}>
              <label htmlFor="title">Título:</label>
              <input
                id="title"
                type="text" 
                autoComplete="off" 
                minLength="0"  
                maxLength="1023" 
                placeholder="Ejemplo de título"
                className={s.input}
                onChange={e =>setData({...data, label: e.target.value })}
                value={data.label}
                />
            </div>
            <span>{error}</span>
          </div>
        </div>
      </div>
    </div>
    
  )
}
