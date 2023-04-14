import React, { useState } from 'react'
import Country from './Country'
import Indec from './Indec'

function FormCompany() {
    const [comercial, setComercial] = useState("")
    const [company, setCompany] = useState("")
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [tel, setTel] = useState("")
    const [country, setCountry] = useState("")
    const [city, setCity] = useState("")
    const [add, setAdd] = useState("")
    const [desc, setDesc] = useState("")
    const [logo, setLogo] = useState("")
    const [status, setStatus] = useState("")
    const [pattente, setPattente] = useState("")
    const [rc, setRc] = useState("")
    const [idf, setIf] = useState("")
    const [ice, setIce] = useState("")
    const [cnss, setCnss] = useState("")






    return (
        <div>
            <form method="post" action="#" className="ok p-5" id="company">
                <h2>Registration Company</h2>
                <label>Comercial Name</label><br />
                <input type="text" name="nadmin" className="form-control" onChange={(e) => { setComercial(e.target.value) }} /><br />
                <label>Name of Company</label><br />
                <input type="text" name="nclub" className="form-control" onChange={(e) => { setCompany(e.target.value) }} /><br />
                <label>Email</label><br />
                <input type="email" name='email' className="form-control" onChange={(e) => { setEmail(e.target.value) }} /><br />

                <label>Password</label><br />
                <input type="email" name="cpass" className="form-control" onChange={(e) => { setPass(e.target.value) }} /><br />

                <Indec />

                <br />

                <Country />
                <label>City</label><br />
                <input type="text" name="city" className="form-control" onChange={(e) => { setCity(e.target.value) }} /><br />
                <label>Address</label><br />
                <input type="text" name="address" className="form-control" onChange={(e) => { setAdd(e.target.value) }} /><br />
                <label>Pattente</label><br />
                <input type="text" name="patt" className="form-control" onChange={(e) => { setPattente(e.target.value) }} /><br />
                <label>Registre Commerce(RC)</label><br />
                <input type="text" name="rc" className="form-control" onChange={(e) => { setRc(e.target.value) }} /><br />
                <label>Identifiant Fiscal(IF)</label><br />
                <input type="text" name="if" className="form-control" onChange={(e) => { setIf(e.target.value) }} /><br />
                <label>Identifiant Commun of Entrprise(ICE)</label><br onChange={(e) => { setIce(e.target.value) }} />
                <input type="text" name="ice" className="form-control" onChange={(e) => { setIf(e.target.value) }} /><br />
                <label>La Caisse Nationale de Securite Sociale(CNSS)</label><br />
                <input type="text" name="patt" className="form-control" onChange={(e) => { setCnss(e.target.value) }} /><br />
                <label>Description</label><br />
                <textarea name="description" className='form-control' ></textarea>
                <label>Logo :</label><br />
                <input type="file" name="logo" className="form-control" onChange={(e) => { setLogo(e.target.value) }} /><br />
                <label>Status (PDF,Image..)</label><br />
                <input type="file" name="recto" className="form-control" onChange={(e) => { setStatus(e.target.value); console.log(e.target.value) }} />
                <input type="button" value="submit" className="btn btn-danger form-control mt-2" />
            </form>
        </div>
    )

}

export default FormCompany

