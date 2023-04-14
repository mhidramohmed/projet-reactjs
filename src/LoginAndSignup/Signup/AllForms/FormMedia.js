import React, { useState } from 'react'
import Indec from './Indec'
import Country from './Country'


function FormMedia() {
  const [admin, setAdmin] = useState("")
  const [media, setMedia] = useState("")
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [tel, setTel] = useState("")
  const [country, setCountry] = useState("")
  const [city, setCity] = useState("")
  const [add, setAdd] = useState("")
  const [desc, setDesc] = useState("")
  const [logo, setLogo] = useState("")
  const [recto, setRecto] = useState("")
  const [verso, setVerso] = useState("")
  const [social, setSocial] = useState("")





  return (
    <div>
      <form method="post" action="#" className="ok p-5" id="media">
        <h2>Registration Media</h2>
        <label>Name of Admin</label><br />
        <input type="text" name="nadmin" className="form-control" onChange={(e) => { setAdmin(e.target.value) }} /><br />
        <label>Name of Media</label><br />
        <input type="text" name="nclub" className="form-control" onChange={(e) => { setMedia(e.target.value) }} /><br />
        <label>Email</label><br />
        <input type="email" name='email' className="form-control" onChange={(e) => { setEmail(e.target.value) }} /><br />
        <label>Password</label><br />
        <input type="email" name="cpass" className="form-control" onChange={(e) => { setPass(e.target.value) }} /><br />
        <Indec />

        <br />

        <Country />
        <label>City</label><br />
        <label>Social Raison</label><br />
        <select className="form-select" onChange={(e) => { setSocial(e.target.value) }}>
          <option value="SARL">SARL</option>
          <option value="EURL">EURL</option>
          <option value="SA">SA</option>
          <option value="SAAS">SAAS</option>
        </select><br />
        <input type="text" name="city" className="form-control" onChange={(e) => { setCity(e.target.value) }} /><br />
        <label>Address</label><br />
        <input type="text" name="address" className="form-control" onChange={(e) => { setAdd(e.target.value) }} /><br />
        <label>Description</label><br />
        <textarea name="description" className='form-control' ></textarea>
        <label>Logo :</label><br />
        <input type="file" name="logo" className="form-control" onChange={(e) => { setLogo(e.target.value) }} /><br />
        <label>Profissional Card(Recto/verso)</label><br />
        <input type="file" name="recto" className="form-control" onChange={(e) => { setRecto(e.target.value) }} /><br />
        <input type="file" name="verso" className="form-control" onChange={(e) => { setVerso(e.target.value) }} />
        <input type="button" value="submit" className="btn btn-danger form-control mt-2" />
      </form>
    </div>
  )
}

export default FormMedia