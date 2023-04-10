import Container from 'react-bootstrap/Container';
import { useRouter } from 'next/router';
import { login } from '../api';
import React, { useEffect, useState } from 'react';
import { toast } from "react-toastify";

function AuthLogin() {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const router = useRouter();

    const handleLogin = async() => {
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
            router.push({
              pathname: '/'
            });
            
          } else {
            
            toast.error(res.data.error);
            
          }
        })
      } 

    return (
        
        <Container style={{marginTop:"20px"}}>

            <div className="container mb-11">
            <div className="row gx-0">
                <div className="col-md-7 col-xl-4 mx-auto">
                {/* Login */}
                <h3 className="mb-6">Log In  </h3>
                {/* Form Login */}
                
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
                    
                    <button onClick={handleLogin} className="btn btn-block btn-primary">
                    LOGIN
                    </button>
                    
                
                <p className="mb-0 font-size-sm text-center">
                    Don't have an account?{" "}
                    <a className="text-underline" href="/auth/signup">
                    Sign up
                    </a>
                </p>
                </div>
            </div>
            </div>

            
        </Container>
    );
}

export default AuthLogin;
