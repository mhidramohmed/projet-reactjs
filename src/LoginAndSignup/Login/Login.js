import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import axios from 'axios'

function Login() {
    const [data, setData] = useState([])
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    // { email: "anasmomo199@gamil.com", pass: "12345" },
    // { email: "qwertyuiop@gamil.com", pass: "qwertyuiop" },
    // { email: "asdfghjkl@gamil.com", pass: "asdfghjkl" },
    const valid = (e) => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json =>   {setData(json) ; console.log(json)})
        console.log(e.target.value);

        const k = data.find((o) => { return o.email === e.target.value });
        k !== undefined ? console.log('valid') : console.log("no valid");
        console.log(k);
        console.log('data ',data);

    }





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

                        <h3 className="text-black container-fluid">Welcome to KOLNA MOTARD! 👋</h3>
                        <p className="text-black container-fluid">Please sign-in to your account and start the adventure</p>
                        <form action="#" method="post" ></form>
                        <label htmlFor="email" className="text-black">Email:</label>
                        <input type="email" className="form-control" id="emaill" required onChange={(e) => { valid(e) }} />
                        <div className="d-flex justify-content-between my-2">
                            <label htmlFor="pass" className="text-black d-flex "  >Passeword:</label>
                            <a href="#" className="d-flex  " data-bs-toggle="modal" data-bs-target="#relogin">forget password?</a>
                        </div>

                        <input type="password" className="form-control" id="passl" required onChange={(e) => { console.log(e.target.value) }} />

                        <input type="button" value="login" className="btn btn-primary container-fluid mt-1" />
                        <div className=" text-black justify-content-center mt-5">
                            New on our platform? <Link to="/sign">Create an account</Link>
                        </div>


                    </div>

                </div>
            </div>

            {/* Modal */}

            <div className="modal fade" id="relogin" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header d-flex flex-column">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            <h1 className="modal-title fs-5 " >Forgot Password? 🔒</h1>
                            <p>Enter your email and we'll send you instructions to reset your password</p>
                        </div>

                        <div className="modal-body d-flex flex-column">
                            <input type="email" placeholder="your email" className="mb-2 form-control" />
                            <input type="text" placeholder="code valisation " className="form-control" />
                        </div>
                        <div className="modal-footer d-flex justify-content-between">
                            <button type="button" className="btn btn-primary">send code</button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login