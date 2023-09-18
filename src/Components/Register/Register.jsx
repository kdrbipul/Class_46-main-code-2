import React from 'react';
import './Register.css'

const Register = () => {
    return (
        <div className='container'>
            <form className='w-50 mx-auto my-5 shadow p-5 background_col'>
            <h4 className='text-center'>Please Register Here</h4>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="name" name="name" className="form-control"  aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" name='email' className="form-control"  aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label  className="form-label">Password</label>
                    <input type="password" name='password' className="form-control"  />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" name="checkbox" className="form-check-input"  />
                    <label className="form-check-label" >Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default Register;