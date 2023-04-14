import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import FormClub from './AllForms/FormClubs';
import FormCompany from './AllForms/FormCompany';
import FormMedia from './AllForms/FormMedia';
import FormRider from './AllForms/FormRider';





function Signup() {
  const [choix, setChoix] = useState("no")
  return (

    <div className='container-fluid' >
      <div className="row">
        <div className='  col-8'>
          <img src='./logo_2.png' alt='logo' className='position-fixed img-fluid' style={{ width: "45%" }} />
        </div>
        <div className=' col-4  px-3' >
          <div className='text-center'>
            <img src='./logo_2.png' alt='logo' className='img-fluid w-75 ' />
          </div>
          <div>
            <h2>Registrations</h2>
            <p>Plaese select your category</p>
            <select className=" form-select mt-3" id="choose" onChange={(e) => { setChoix(e.target.value); console.log(e.target.value); }} >
              <option key="0" value="no">chouse your statut</option>
              <option key="1" value="Club">Club</option>
              <option key="2" value="Rider">Redir</option>
              <option key="3" value="Media">Media</option>
              <option key="4" value="Company">Company</option>
            </select>
            <div>
              {
                choix === 'Club' ? <FormClub/>: choix === 'Rider' ? <FormRider/> : choix === 'Media' ? <FormMedia/> : choix === 'Company' ? <FormCompany/> : <span></span>
              }
            </div>

            <div>
              <p className="mt-3">
                Already have an account?
                <Link to="/login">
                  Sign in instead
                </Link>
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>


  )
}

export default Signup