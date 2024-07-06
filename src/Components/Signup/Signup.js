import React, { useContext, useState } from 'react';
import './Signup.css'
import { AuthContext } from '../../providers/AuthProviders';
import { Link } from 'react-router-dom';
import { Toaster, toast} from 'react-hot-toast'
const Signup = () => {
    const {createUser} = useContext(AuthContext);
    const logiSuccess=()=>{
      toast.success("successfully login")
      }
    
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (!formData.name) {
      isValid = false;
      newErrors.name = 'Name is required';
    } else {
      newErrors.name = '';
    }

    if (!formData.email) {
      isValid = false;
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      isValid = false;
      newErrors.email = 'Invalid email format';
    } else {
      newErrors.email = '';
    }

    if (!formData.password) {
      isValid = false;
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      isValid = false;
      newErrors.password = 'Password must be at least 6 characters long';
    } else {
      newErrors.password = '';
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Send registration data to your backend or perform other actions here
      console.log('Registration successful:', formData);
      createUser(formData.email,formData.password)
      .then(result =>{
        const loggedinUser = result.user;
        console.log(loggedinUser);
        logiSuccess()
       
      })
      .catch(error =>{
        toast.error('Email is already used')
       
      })
    }
  };

    return (
       <div className="mt-5 registration-page">
      <h1>Registration</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <span className="error">{errors.name}</span>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <span className="error">{errors.email}</span>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <span className="error">{errors.password}</span>
        </div>
        <button type="submit">Register</button>
      </form>
      <div>
      <div style={{margin:'15px'}}>
      <Link to="/login">Already have an account?</Link>
      </div>
      <Toaster></Toaster>
      </div>
    </div>
    );
};

export default Signup;<p>ok</p>