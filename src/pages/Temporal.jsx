const uploadImage = async(event) =>{
  const formData = new FormData()
  formData.append('file', event.target.files[0] )
  const response = await fetch("http://127.0.0.1:3001/api/files/links", {
    method: 'POST',
    body: formData,

  })
  const resp = await response.json()
  const {secureUrl} = resp
  setData({...data, image:secureUrl})
}

const Temporal = () => {
  return (
    <label className={s.image}>
      <img src={data.image ? data.image : "https://tresubresdobles.com/wp-content/uploads/2021/04/skft-23aff38e10ee3c4e430a1f3450c4a01d.jpeg"} alt="nueva imagen" />
      {/* <img src="https://th.bing.com/th/id/OIG.s9mB6..wYYm1x1cRK3wA?pid=ImgGn" alt="nueva imagen" /> */}
      <input 
      type="file" 
      name="upload-img" 
      accept="image/*"
      onChange={ uploadImage }
      />
    </label>
  )
}