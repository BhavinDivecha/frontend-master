import { GetPagesPublic, GetLanguagesPublic, GetSetting } from '../../api';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
export default function Navbar() {

    const [languages,setlanguages] = useState([]);
    const [setting,setSettings] = useState([]);
    const [colour,setColor] = useState(undefined);
    const [translation,setTranslation] = useState([]);
    const [pages,setPages] = useState([]);
   
    const [isLoaded,setIsLoaded] = useState(false);

    const [isLoggedIn,setIsLoggedIn] = useState(false);
    const router = useRouter();

    const fetchData = async() => {

        await GetSetting()
        .then(function(res) {
            
            if(res && res.status == 200) {
                
                localStorage.setItem('languageJson',JSON.stringify(res.data.settings.languages));
                setSettings(res.data.settings);
                setColor(res.data.settings.color);
                setTimeout(() => {
                    setIsLoaded(true);
                }, "1000");
                
            } else {
                
            }
        })

        await GetPagesPublic()
        .then(function(res) {
            if(res && res.status == 200) {
                setPages(res.data.details);
                
            } else {
                
            }
        });

        
        
    }
    useEffect(() => {
        fetchData();
        
        
    },[])



    return (
        <>
            
            <header className="navbar navbar-expand-xl navbar-light border-bottom border-xl-0 py-2 py-xl-4" 
                style={{ backgroundColor : colour == undefined ? "rgba(var(--bs-white-rgb),var(--bs-bg-opacity))!important" : colour}}
                >
                    {console.log(colour)}
                    <div className="container-fluid">

                        <a className="navbar-brand me-0" href="/">
                            {console.log("setting.logo",setting.logo)}
                            {
                                isLoaded ? (
                                <>
                                {
                                    setting && setting.logo ?
                                    (
                                        <img src={`${setting.logo}`} className="navbar-brand-img" alt="..."/>
                                    ) :
                                    (
                                        <img src="/assets/img/logo.png" className="navbar-brand-img" alt="..."/>
                                    )
                                }
                                </>
                                ) : (null)
                                
                            }
                            
                        </a>

                    

                        <div className="collapse navbar-collapse z-index-lg" id="navbarCollapse">
                            <button className="navbar-toggler outline-0 text-primary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                                <svg width="16" height="17" viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.142135 2.00015L1.55635 0.585938L15.6985 14.7281L14.2843 16.1423L0.142135 2.00015Z" fill="currentColor"></path>
                                    <path d="M14.1421 1.0001L15.5563 2.41431L1.41421 16.5564L0 15.1422L14.1421 1.0001Z" fill="currentColor"></path>
                                </svg>

                            </button>

                            

                            <ul className='navbar-nav ms-auto'> 
                                <li className="nav-item dropdown dropdown-full-width">
                                    
                                </li>
                                {
                                    pages && pages.length > 0 ? (
                                        pages.map((c) => (
                                            <li className="nav-item dropdown dropdown-full-width">
                                                <a className="nav-link" href={`/${c.slug}`}>
                                                    {c.name}
                                                </a>
                                            </li>
                                        ))
                                
                                        
                                    ):
                                    (null)
                                }
                            </ul>
                            
                        </div>

                        <button className="navbar-toggler ms-4 ms-md-5 shadow-none bg-teal text-white icon-xs p-0 outline-0 h-40p w-40p d-flex d-xl-none place-flex-center" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <svg width="25" height="17" viewBox="0 0 25 17" xmlns="http://www.w3.org/2000/svg">
                                <rect width="25" height="1" fill="currentColor"/>
                                <rect y="8" width="15" height="1" fill="currentColor"/>
                                <rect y="16" width="20" height="1" fill="currentColor"/>
                            </svg>

                        </button>
                    </div>
            </header>  
                
        </>
        
    )
}