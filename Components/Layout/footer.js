import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import language from '../../language.json'


export default function Footer() {
    const [translation,setTranslation] = useState([]);

    useEffect(() => {
    
        const languageJson = JSON.parse(localStorage.getItem('languageJson'));
        if(localStorage.getItem('language') == undefined)
        {
            console.log(languageJson);
            if(languageJson != undefined && languageJson != null){
                setTranslation(languageJson.English);
            }
        }else{
            setTranslation(languageJson[localStorage.getItem('language')]);
        }
        
    },[]);
  return (
    <>
    <footer className="bg-white">
        <div className="container">
            <div className="row" id="accordionFooter">
                

                <div className="col-12 mt-md-5">
                    <div className="border-top pb-5 pt-6 py-md-4 text-center text-xl-start d-flex flex-column d-md-block d-xl-flex flex-xl-row align-items-center">
                        <p className="text-gray-800 font-size-sm-alone d-block mb-0 mb-md-2 mb-xl-0 order-1 order-md-0 px-9 px-md-0">{translation.footerText}</p>

                        <div className="ms-xl-auto d-flex flex-column flex-md-row align-items-stretch align-items-md-center justify-content-center">
                            <ul style={{flex:"none"}} className="navbar-nav flex-row flex-wrap font-size-sm-alone mb-3 mb-md-0 mx-n4 me-md-5 justify-content-center justify-content-lg-start order-1 order-md-0">
                                <li className="nav-item py-2 py-md-0 px-0 border-top-0">
                                    <a href="/" className="nav-link px-4 fw-normal text-gray-800">{translation.home}</a>
                                </li>
                                <li className="nav-item py-2 py-md-0 px-0 border-top-0">
                                    <a href="/courses" className="nav-link px-4 fw-normal text-gray-800">{translation.courses}</a>
                                </li>
                                
                            </ul>

                            {/* <select className="form-select form-select-sm font-size-sm-alone shadow min-width-140 text-left mb-4 mb-md-0" data-choices>
                                <option>English</option>
                                <option>Tamil</option>
                                <option>French</option>
                            </select> */}
                        </div>
                    </div>
                </div>
            </div> 
        </div> 
    </footer>
    </>
  );
}
