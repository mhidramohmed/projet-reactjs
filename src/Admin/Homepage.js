import React from 'react'
import Ap from './t2'
import Listmembres from "./Listmembres"
import Requests from "./Requests"
import Will from "./Will"
import Profil from './Profil'

function Homepage() {
  return (
    <div className="container-fluid">
      {/*  Partie 1 */}
      <div className="row ">
        {/* left navbar */}
        <div className="col-2 vh-100  bg-info">
          <div>
            <img src="./logo_2.png" className="container-fluid" />
          </div>
          <ul className="nav flex-column">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dashboards</a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Analytics</a></li>
                <li><a className="dropdown-item" href="#">Wall</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Email</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">List Events</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">My Events</a>
            </li>
            <li className="nav-item">
              <a className="nav-link ">Profil</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Manage Members</a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Request</a></li>
                <li><a className="dropdown-item" href="#">List</a></li>
              </ul>
            </li>


          </ul>


        </div>
        {/* end left navbar */}

        {/*  end Partie 1 */}

        {/*Partie 2*/}
        <div className="col-10">
          {/* top navbar */}

          <div className="bg-danger mt-2 d-flex justify-content-between align-items-center   " style={{ height: "7%" }}>
            <div className="rounded-circle">cercle</div>
            <div>

              <img src="./search.png" className="me-2" />

              <img src="./envelope.png" className="me-2" />
              <div>
                <img src="./user.png" className="me-2" />
              </div>


            </div>


          </div>
          {/*  end top navbar */}

          {/*  Content */}
          <div className="row">
            {/* <Will /> */}
            <Listmembres
             />
            {/* <Ap/> */}
            {/* <Requests /> */}
            {/* <Profil/> */}

          </div>

        </div>


      </div>
      {/*  end Partie 2 */}


    </div>
  
  )
}

export default Homepage