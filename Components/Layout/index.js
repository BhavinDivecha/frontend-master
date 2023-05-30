// import custom components
import Footer from "./footer";
import Header from "./header";
import Navbar from './navbar'
import { login, register, recoverPassword, GetSetting } from '../../api';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { toast } from "react-toastify";

export default function Layout({ children }) {
  // styles the main html tag
  const styles = {
    display: "flex",
    flexDirection: "row"
  };

  const router = useRouter();
  const [isLoaded,setIsLoaded] = useState(false);

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const [name,setName] = useState("");
  const [type,setType] = useState("");
    
  const handleRecoverPassword = async(event) => {
    event.preventDefault()

    const values = {
      email
    };
    await recoverPassword(values).then(function (res) {
      if (res && res.status == 200) {
        toast.success(res.data.message);
        
      } else {
        
        toast.error(res.data.error);
        
      }
    })
  }

  const handleSignup = async(event) => {
    event.preventDefault()

    const values = {
      name,
      email,
      password,
      type,
    };
    await register(values).then(function (res) {
      if (res && res.status == 200) {
        if(res.data.token != undefined){
            localStorage.setItem("token",res.data.token);
            localStorage.setItem("type",res.data.type);
        }
        window.location = "/";
        
      } else {
        
        toast.error(res.data.error);
        
      }
    })
  } 

  const onOptionChange = e => {
      setType(e.target.value)
  }
  const handleLogin = async(event) => {
    event.preventDefault()

    const values = {
      email,
      password,
      portal:"Website"
    };
    await login(values).then(function (res) {
      if (res && res.status == 200) {
        if(res.data.token != undefined){
            localStorage.setItem("token",res.data.token);
            localStorage.setItem("type",res.data.type);
        }
        window.location = "/";
        
      } else {
        
        toast.error(res.data.error);
        
      }
    })
  } 

  const fetchData = async() => {

    await GetSetting()
    .then(function(res) {
        
        if(res && res.status == 200) {
            
            localStorage.setItem('languageJson',JSON.stringify(res.data.settings.languages));
            window.location = '/';
        } else {
            
        }
    })
}
useEffect(() => {
  console.log("localStorage.getItem('languageJson')",localStorage.getItem('languageJson'))
  if(localStorage.getItem('languageJson') == null){
    fetchData();
  }
  else{
    setTimeout(() => {
      setIsLoaded(true);
    }, 3000);
    
  }
});
  return (
    <>
    {
      isLoaded ?
      (
        <>
          <Navbar />
          <div className="modal modal-sidebar left fade-left fade" id="accountModal">
            <div className="modal-dialog">
              <div className="modal-content">
                {/* Signin */}
                <div
                  className="collapse show"
                  id="collapseSignin"
                  data-bs-parent="#accountModal"
                >
                  <div className="modal-header">
                    <h5 className="modal-title">Log In to Your Cair4Youth Account!</h5>
                    <button
                      type="button"
                      className="close text-primary"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      {/* Icon */}
                      <svg
                        width={16}
                        height={17}
                        viewBox="0 0 16 17"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.142135 2.00015L1.55635 0.585938L15.6985 14.7281L14.2843 16.1423L0.142135 2.00015Z"
                          fill="currentColor"
                        />
                        <path
                          d="M14.1421 1.0001L15.5563 2.41431L1.41421 16.5564L0 15.1422L14.1421 1.0001Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="modal-body">
                    {/* Form Signin */}
                    <form className="mb-5" onSubmit={handleLogin}>
                      {/* Email */}
                      <div className="form-group mb-5">
                        <label htmlFor="modalSigninEmail">Username or Email</label>
                        <input
                          type="email"
                          className="form-control"
                          id="modalSigninEmail"
                          placeholder="Email"
                          onChange={e => setEmail(e.target.value)} value={email}
                          required
                        />
                      </div>
                      {/* Password */}
                      <div className="form-group mb-5">
                        <label htmlFor="modalSigninPassword">Password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="modalSigninPassword"
                          placeholder="**********"
                          onChange={e => setPassword(e.target.value)} value={password}
                          required
                        />
                      </div>
                      <div className="d-flex align-items-center mb-5 font-size-sm">
                        
                        <div className="ms-auto">
                          <a
                            className="text-gray-800"
                            data-bs-toggle="collapse"
                            href="#collapseForgotPassword"
                            role="button"
                            aria-expanded="false"
                            aria-controls="collapseForgotPassword"
                          >
                            Forgot Password
                          </a>
                        </div>
                      </div>
                      {/* Submit */}
                      <button className="btn btn-block btn-primary" type="submit">
                        LOGIN
                      </button>
                    </form>
                    {/* Text */}
                    <p className="mb-0 font-size-sm text-center">
                      Don't have an account?{" "}
                      <a
                        className="text-underline"
                        data-bs-toggle="collapse"
                        href="#collapseSignup"
                        role="button"
                        aria-expanded="false"
                        aria-controls="collapseSignup"
                      >
                        Sign up
                      </a>
                    </p>
                  </div>
                </div>
                {/* Signup */}
                <div
                  className="collapse"
                  id="collapseSignup"
                  data-bs-parent="#accountModal"
                >
                  <div className="modal-header">
                    <h5 className="modal-title">Sign Up and Start Learning!</h5>
                    <button
                      type="button"
                      className="close text-primary"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      {/* Icon */}
                      <svg
                        width={16}
                        height={17}
                        viewBox="0 0 16 17"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.142135 2.00015L1.55635 0.585938L15.6985 14.7281L14.2843 16.1423L0.142135 2.00015Z"
                          fill="currentColor"
                        />
                        <path
                          d="M14.1421 1.0001L15.5563 2.41431L1.41421 16.5564L0 15.1422L14.1421 1.0001Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="modal-body">
                    {/* Form Signup */}
                    <form className="mb-5" onSubmit={handleSignup}>
                      {/* Username */}
                      <div className="form-group mb-5">
                        <label htmlFor="modalSignupUsername">Username</label>
                        <input
                          type="text"
                          className="form-control"
                          id="modalSignupUsername"
                          placeholder="John"
                          onChange={e => setName(e.target.value)} value={name}
                          required
                        />
                      </div>
                      {/* Email */}
                      <div className="form-group mb-5">
                        <label htmlFor="modalSignupEmail">Username or Email</label>
                        <input
                          type="email"
                          className="form-control"
                          id="modalSignupEmail"
                          placeholder="johndoe@creativelayers.com"
                          onChange={e => setEmail(e.target.value)} value={email}
                          required
                        />
                      </div>
                      {/* Password */}
                      <div className="form-group mb-5">
                        <label htmlFor="modalSignupPassword">Password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="modalSignupPassword"
                          placeholder="**********"
                          onChange={e => setPassword(e.target.value)} value={password}
                          required
                        />
                      </div>
                      <div className="form-group mb-5">
                        <label htmlFor="modalSigninType1">Type</label><br></br>
                        
                        <input
                            type="radio"
                            name="type"
                            value="Student"
                            id="Student"
                            checked={type === "Student"}
                            onChange={onOptionChange}
                            
                        />
                        <label htmlFor="Student" style={{marginRight:"30%"}}>Student</label>

                        <input
                            type="radio"
                            name="type"
                            value="Teacher"
                            id="Teacher"
                            checked={type === "Teacher"}
                            onChange={onOptionChange}
                        />
                        <label htmlFor="Teacher">Teacher</label>
                    </div>
                      {/* Submit */}
                      <button  className="btn btn-block btn-primary" type="submit">
                        SIGN UP
                      </button>
                    </form>
                    {/* Text */}
                    <p className="mb-0 font-size-sm text-center">
                      Already have an account?{" "}
                      <a
                        className="text-underline"
                        data-bs-toggle="collapse"
                        href="#collapseSignin"
                        role="button"
                        aria-expanded="true"
                        aria-controls="collapseSignin"
                      >
                        Log In
                      </a>
                    </p>
                  </div>
                </div>
                {/* Forgot Password */}
                <div
                  className="collapse"
                  id="collapseForgotPassword"
                  data-bs-parent="#accountModal"
                >
                  <div className="modal-header">
                    <h5 className="modal-title">Recover password!</h5>
                    <button
                      type="button"
                      className="close text-primary"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      {/* Icon */}
                      <svg
                        width={16}
                        height={17}
                        viewBox="0 0 16 17"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.142135 2.00015L1.55635 0.585938L15.6985 14.7281L14.2843 16.1423L0.142135 2.00015Z"
                          fill="currentColor"
                        />
                        <path
                          d="M14.1421 1.0001L15.5563 2.41431L1.41421 16.5564L0 15.1422L14.1421 1.0001Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="modal-body">
                    {/* Form Recover Password */}
                    <form className="mb-5" onSubmit={handleRecoverPassword}>
                      {/* Email */}
                      <div className="form-group">
                        <label htmlFor="modalForgotpasswordEmail">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          id="modalForgotpasswordEmail"
                          placeholder="johndoe@creativelayers.com"
                          onChange={e => setEmail(e.target.value)} value={email}
                          required
                        />
                      </div>
                      {/* Submit */}
                      <button className="btn btn-block btn-primary" type="submit">
                        RECOVER PASSWORD
                      </button>
                    </form>
                    {/* Text */}
                    <p className="mb-0 font-size-sm text-center">
                      Remember your password?{" "}
                      <a
                        className="text-underline"
                        data-bs-toggle="collapse"
                        href="#collapseSignin"
                        role="button"
                        aria-expanded="false"
                        aria-controls="collapseSignin"
                      >
                        Log In
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <main>{children}</main>
          <Footer />
        </>
      ) :
      (
        <>
          <div style={{width: "100px",height: "100px",position: "absolute",top:"0",bottom: "0",left: "0",right: "0",margin: "auto"}}>
              
                  <Button variant="primary" disabled>
                      <Spinner
                      as="span"
                      animation="grow"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                      />
                      Loading...
                  </Button>
          </div>
        </>
      )
    }
    </>
  );
}
