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


                            <ul className="navbar-nav navbar-vertical ms-xl-4 d-none d-xl-flex">
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

                        <ul className="navbar-nav flex-row ms-auto ms-xl-0 me-n2 me-md-n4">
                            <li className="nav-item border-0 px-0 d-none d-370-block d-xl-none">
                                <a className="nav-link d-flex px-3 px-md-4 search-mobile text-secondary icon-xs" data-bs-toggle="collapse" href="#collapseSearchMobile" role="button" aria-expanded="false" aria-controls="collapseSearchMobile">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.80758 0C3.95121 0 0 3.95121 0 8.80758C0 13.6642 3.95121 17.6152 8.80758 17.6152C13.6642 17.6152 17.6152 13.6642 17.6152 8.80758C17.6152 3.95121 13.6642 0 8.80758 0ZM8.80758 15.9892C4.8477 15.9892 1.62602 12.7675 1.62602 8.80762C1.62602 4.84773 4.8477 1.62602 8.80758 1.62602C12.7675 1.62602 15.9891 4.8477 15.9891 8.80758C15.9891 12.7675 12.7675 15.9892 8.80758 15.9892Z" fill="currentColor"/>
                                        <path d="M19.762 18.6121L15.1007 13.9509C14.7831 13.6332 14.2687 13.6332 13.9511 13.9509C13.6335 14.2682 13.6335 14.7831 13.9511 15.1005L18.6124 19.7617C18.7712 19.9205 18.9791 19.9999 19.1872 19.9999C19.395 19.9999 19.6032 19.9205 19.762 19.7617C20.0796 19.4444 20.0796 18.9295 19.762 18.6121Z" fill="currentColor"/>
                                    </svg>


                                    <svg width="16" height="17" viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.142135 2.00015L1.55635 0.585938L15.6985 14.7281L14.2843 16.1423L0.142135 2.00015Z" fill="currentColor"></path>
                                        <path d="M14.1421 1.0001L15.5563 2.41431L1.41421 16.5564L0 15.1422L14.1421 1.0001Z" fill="currentColor"></path>
                                    </svg>

                                </a>

                                <div className="collapse position-absolute right-0 left-0" id="collapseSearchMobile">
                                    <div className="card card-body p-4 mt-7 shadow-dark">
                                        <form className="w-100">
                                            <div className="input-group border rounded">
                                                <div className="input-group-prepend">
                                                    <button className="btn btn-sm text-secondary icon-xs d-flex align-items-center" type="submit">
                                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M8.80758 0C3.95121 0 0 3.95121 0 8.80758C0 13.6642 3.95121 17.6152 8.80758 17.6152C13.6642 17.6152 17.6152 13.6642 17.6152 8.80758C17.6152 3.95121 13.6642 0 8.80758 0ZM8.80758 15.9892C4.8477 15.9892 1.62602 12.7675 1.62602 8.80762C1.62602 4.84773 4.8477 1.62602 8.80758 1.62602C12.7675 1.62602 15.9891 4.8477 15.9891 8.80758C15.9891 12.7675 12.7675 15.9892 8.80758 15.9892Z" fill="currentColor"/>
                                                            <path d="M19.762 18.6121L15.1007 13.9509C14.7831 13.6332 14.2687 13.6332 13.9511 13.9509C13.6335 14.2682 13.6335 14.7831 13.9511 15.1005L18.6124 19.7617C18.7712 19.9205 18.9791 19.9999 19.1872 19.9999C19.395 19.9999 19.6032 19.9205 19.762 19.7617C20.0796 19.4444 20.0796 18.9295 19.762 18.6121Z" fill="currentColor"/>
                                                        </svg>

                                                    </button>
                                                </div>
                                                <input className="form-control form-control-sm border-0 ps-0" type="search" placeholder="What do you want to learn ?" aria-label="Search"></input>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </li>

                            
                        </ul>

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