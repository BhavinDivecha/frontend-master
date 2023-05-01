import Container from 'react-bootstrap/Container';
import { useRouter } from 'next/router';
import { register } from '../api';
import React, { useEffect, useState } from 'react';

function AuthSignup() {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [type,setType] = useState("");
    const router = useRouter();

    const handleSignup = async() => {
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
            router.push({
              pathname: '/'
            });
            
          } else {
            
            setSignupError(res.data.error);
            
          }
        })
    } 
    
    const onOptionChange = e => {
        setType(e.target.value)
    }
    return (
        
        <Container style={{marginTop:"20px"}}>

            <div className="container mb-11">
            <div className="row gx-0">
                <div className="col-md-7 col-xl-4 mx-auto">
                {/* Signup */}
                <h3 className="mb-6">Sign Up </h3>
                {/* Form Signup */}
                
                    <div className="form-group mb-5">
                        <label htmlFor="modalSigninName1">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="modalSigninName1"
                            onChange={e => setName(e.target.value)} value={name}
                            required
                        />
                    </div>
                    {/* Email */}
                    <div className="form-group mb-5">
                    <label htmlFor="modalSigninEmail1">Username or Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="modalSigninEmail1"
                        onChange={e => setEmail(e.target.value)} value={email}
                        required
                    />
                    </div>
                    {/* Password */}
                    <div className="form-group mb-5">
                    <label htmlFor="modalSigninPassword1">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="modalSigninPassword1"
                        onChange={e => setPassword(e.target.value)} value={password}
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
                    
                    <button onClick={handleSignup} className="btn btn-block btn-primary">
                    Signup
                    </button>
                    
                
                <p className="mb-0 font-size-sm text-center">
                    Already have an account?{" "}
                    <a className="text-underline" href="/auth/login">
                    Sign In
                    </a>
                </p>
                </div>
            </div>
            </div>

            
        </Container>
    );
}

export default AuthSignup;
