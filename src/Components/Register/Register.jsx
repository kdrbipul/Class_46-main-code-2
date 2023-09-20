
import './Register.css'
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../../Shared/Firebase/Firebase.config';
import { useState } from 'react';



const auth = getAuth(app);

const Register = () => {

    const [passwordError, setPasswordError] = useState('');

    const handleOnSubmit=(event)=>{
        event.preventDefault();
        const form = event.target;
        // const name =form.name.value;
        const email =form.email.value;
        const password = form.password.value;

        // Password Validation
        if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
            setPasswordError('Please Provide At Least Two Uppercase');
            return false;
        }
        
        if(!/(?=.*[a-z])/.test(password)){
            setPasswordError('Please Provide At Least One Lowercase')
            return false;
        }
        if(!/(?=.*[!@#$%^&*()?,?/"';:={}+_-])/.test(password)){
            setPasswordError('Please Provide Any Of !@#$%^&*()?,?/" Special');
            return false;
        }
        if(password.length <8){
            setPasswordError('Please Provide More Than 8 Characters');
            return false;
        }
        setPasswordError('');


        // console.log(name,email,password);
        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            form.reset();
        })
        .catch(error =>console.log(error))
    }

    return (
        <div className='container'>
            <form onSubmit={handleOnSubmit} className='w-50 mx-auto my-5 shadow p-5 background_col rounded-3'>
                <h4 className='text-center'>Please Register Here</h4>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="name" name="name" className="form-control"  aria-describedby="emailHelp" required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" name='email' className="form-control"  aria-describedby="emailHelp" required />
                </div>
                <div className="mb-3">
                    <label  className="form-label">Password</label>
                    <input type="password" name='password' className="form-control" required  />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" name="checkbox" className="form-check-input"  />
                    <label className="form-check-label" >Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <p className='text-danger'>{passwordError}</p>
            </form>
        </div>
    );
};

export default Register;