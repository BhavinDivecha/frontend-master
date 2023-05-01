import Container from 'react-bootstrap/Container';
import { useRouter } from 'next/router';
import { updatePassword } from '../api';
import React, { useEffect, useState } from 'react';
import ToastMessageDisplay from '../Components/Toast/toastMessageDisplay';
import Layout from '../Components/Layout'
import { toast } from "react-toastify";


function AuthLogin() {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    
    const router = useRouter();

    const handleResetPassword = async(event) => {
        event.preventDefault();
        if(password != confirmPassword)
        {
            toast.error("Password Mismatch");
            return false;
        }
        const values = {
          password,
          email
        };
        console.log(values);
        await updatePassword(values).then(function (res) {
          if (res && res.status == 200) {
            
            toast.success(res.data.message)
            
          } else {
            
            toast.error(res.data.error)
            
          }
        })
    } 


    useEffect(() => {
        if(router.query.token != undefined)
        {
            setEmail(Buffer.from(router.query.token, 'base64').toString('ascii'))
        }
        

        
    },[router.query]);

    return (
        <Layout>
            <Container style={{marginTop:"20px"}}>

                <div className="container mb-11">
                <div className="row gx-0">
                    <form className="col-md-7 col-xl-4 mx-auto" onSubmit={handleResetPassword}>
                    {/* Login */}
                    <h3 className="mb-6">Reset Password</h3>
                    {/* Form Login */}
                    
                        <div className="form-group mb-5">
                            <label htmlFor="modalSigninName1">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="modalSigninName1"
                                onChange={e => setPassword(e.target.value)} value={password}
                                required
                            />
                            </div>
                        {/* Email */}
                        <div className="form-group mb-5">
                        <label htmlFor="modalSigninEmail1">Confirm Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="modalSigninEmail1"
                            onChange={e => setConfirmPassword(e.target.value)} value={confirmPassword}
                            required
                        />
                        </div>
                        
                        
                        <button type="submit" className="btn btn-block btn-primary">
                        Update
                        </button>
                        
                    
                    
                    </form>
                </div>
                </div>

                
            </Container>
        </Layout>
    );
}

export default AuthLogin;
