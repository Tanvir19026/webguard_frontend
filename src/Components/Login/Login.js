import {  getAuth, signOut } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import app from '../../firebase/firebase.init';
import './Login.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import { Toaster, toast} from 'react-hot-toast'


const Login = () => {

    const {signIn,signInWithGoogle,signInwithGithub}=useContext(AuthContext)
    const [user,setUser]=useState(null);
 
    const auth = getAuth(app)
   
   
    const logiSuccess=()=>{
    toast.success("successfully login")
    }

    const handleGithubSignIn = ()=>{
        
      signInwithGithub()
        .then((result) => {
            
            const loggedInUser = result.user
            console.log(loggedInUser)
             setUser(loggedInUser)
             logiSuccess()
    }).catch(error =>{
        const errorCode = error.code;
        console.log(errorCode)
      })
    }


    const handleGoogleSignIn = ()=>{
      signInWithGoogle()
            .then((result) => {
                const loggedInUser = result.user
                console.log(loggedInUser)
                 setUser(loggedInUser)
                 logiSuccess()
  })
  .catch(error =>{
  
    toast.error('Error found.Try again')
  })
    }
    
    const handleSignOut =()=>{
        signOut(auth)
        .then(result =>{
            setUser(null)
        })
        .catch(error =>{
          toast.error('Error found.Try again')
        })
    }



    const [formData, setFormData] = useState({
  
      email: '',
      password: '',
    });
  
    const [errors, setErrors] = useState({
    
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
      
        signIn(formData.email,formData.password)
        .then(result =>{
          const loggedinUser = result.user;
          console.log(loggedinUser)
          logiSuccess()
         
        })
        .catch(error =>{
         toast.error('problem found.please try again')
        })
      }
    };



    return (


<div className="registration-page" style={{marginTop:'50px'}}>
      <h1>Log in</h1>
      <form onSubmit={handleSubmit}>
    
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
        <button type="submit">Submit</button>
      </form>
    <Toaster></Toaster>
      <div style={{margin:'15px'}}>
      <Link to="/signup">New to Web Guard?please Register</Link>
      </div>
      
      <hr /> <span style={{fontWeight:'900',color:'green'}}> or </span> <hr />
    




        <div>
            { user ?
                <button className="google-signup-button" onClick={handleSignOut} >Log Out</button>:
                
      <div>
             <button className="google-signup-button" onClick={handleGoogleSignIn}>
      <img
        src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
        alt="Google Logo"
      />
     Log in with Google
    </button>
    <button style={{backgroundColor:'GrayText'}} className="google-signup-button" onClick={handleGithubSignIn}>
      <img
        src="https://github.com/fluidicon.png" // GitHub logo image
        alt="GitHub Logo"
      />
      Log in  with Github
    </button>
    
      </div>
}

    {/* {
        user && <div className='profileSection'>
            <h4>user:{user.displayName}</h4>
            <h5>Email: {user.email}</h5>
            <img src={user.photoURL} alt="image" />
        </div>
    } */}
        </div>
        </div>
    );
};

export default Login;