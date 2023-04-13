import Container from 'react-bootstrap/Container';
import { useRouter } from 'next/router';
import { updateProfile, getProfile } from '../api';
import React, { useEffect, useState } from 'react';
import ToastMessageDisplay from '../Components/Toast/toastMessageDisplay';
import Layout from '../Components/Layout'


function AuthLogin() {

    const [email,setEmail] = useState("");
    const [name,setName] = useState("");
    
    const router = useRouter();

    const handleLogin = async() => {
        const values = {
          email,
          name
        };
        console.log(values);
        await updateProfile(values).then(function (res) {
          if (res && res.status == 200) {
            
            ToastMessageDisplay({type:"success",message: res.data.message})
            
          } else {
            
            ToastMessageDisplay({type:"error",message: res.data.message})
            
          }
        })
    } 


    const fetchData = async() => {
        await getProfile().then(function (res) {
            if (res && res.status == 200) {
                console.log(res);
                setEmail(res.data.user.email);
                setName(res.data.user.name);
            
            } 
        })
    }
    useEffect(() => {
        fetchData();

        
    },[]);

    return (
        <Layout>
            <Container style={{marginTop:"20px"}}>

                <div className="container mb-11">
                <div className="row gx-0">
                    <div className="col-md-7 col-xl-4 mx-auto">
                    {/* Login */}
                    <h3 className="mb-6">My Profile</h3>
                    {/* Form Login */}
                    
                        <div className="form-group mb-5">
                            <label htmlFor="modalSigninName1">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="modalSigninName1"
                                onChange={e => setName(e.target.value)} value={name}
                            />
                            </div>
                        {/* Email */}
                        <div className="form-group mb-5">
                        <label htmlFor="modalSigninEmail1">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="modalSigninEmail1"
                            onChange={e => setEmail(e.target.value)} value={email}
                            required
                        />
                        </div>
                        
                        
                        <button onClick={handleLogin} className="btn btn-block btn-primary">
                        Update
                        </button>
                        
                    
                    
                    </div>
                </div>
                </div>

                
            </Container>
        </Layout>
    );
}

export default AuthLogin;
