import { useEffect, useState } from "react"

const getData = async(token) =>{
    const url = `http://127.0.0.1:3001/api/users/private`
    const resp = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    const data = await resp.json()
    return data
}

  export const getUser = (token) => {
    const [user, setUser] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [links, setLinks] = useState([])
  
    const getUser = async() => {
      const newUser = await getData(token)
      setUser(newUser.user)
      setIsLoading(false)
      setLinks(newUser.user.links) 
    }
    useEffect(()=>{
      getUser()
    }, [])
  
    return {
      user,
      isLoading,
      links
    }
}