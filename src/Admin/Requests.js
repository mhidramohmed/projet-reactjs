import React from 'react'

function Requests() {
    return (
        <div className=' container-fluid mt-5 ' >
            <div className='d-flex justify-content-between align-items-center bg-primary p-3 ' >
                Members Request
                <input type="search" className='form-control w-25' placeholder='search' />
            </div>

            <div className='d-flex justify-content-between bg-secondary p-3'>
                <div>
                    Info
                </div>
                <div>
                    View Profile
                </div>
                <div>
                    Message
                </div>
                <div>
                    Action
                </div>

            </div>

        </div>
    )
}

export default Requests