
import Layout from '../Components/Layout'
import { GetDepartmentsPublic } from '../api';
import React, { useEffect, useState } from 'react';
import language from '../language.json';

export default function Dashboard() {

    const [departments,setDepartments] = useState([]);
    const [translation,setTranslation] = useState([]);
    const fetchCourse = async(page = 1) => {
        await GetDepartmentsPublic(page)
        .then(function(res) {
            if(res && res.status == 200) {
                setDepartments(res.data.details)
            } else {
                
            }
        })
    }
    useEffect(() => {
        fetchCourse();
        
        if(localStorage.getItem('language') == undefined)
        {
            setTranslation(language.Default);
        }else{
            setTranslation(language[localStorage.getItem('language')]);
        }
    },[])
    return (
        <Layout>
            <section className="py-5 py-md-11 bg-white">
                <div className="container">
                    <div className="row align-items-end mb-md-7 mb-4">
                        
                        <div className="col-md-auto">
                            <a href="/courses" className="d-flex align-items-center fw-medium">
                                {translation.browseAll}
                                <div className="ms-2 d-flex">
                                    
                                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.7779 4.6098L3.32777 0.159755C3.22485 0.0567475 3.08745 0 2.94095 0C2.79445 0 2.65705 0.0567475 2.55412 0.159755L2.2264 0.487394C2.01315 0.700889 2.01315 1.04788 2.2264 1.26105L5.96328 4.99793L2.22225 8.73895C2.11933 8.84196 2.0625 8.97928 2.0625 9.1257C2.0625 9.27228 2.11933 9.4096 2.22225 9.51269L2.54998 9.84025C2.65298 9.94325 2.7903 10 2.9368 10C3.0833 10 3.2207 9.94325 3.32363 9.84025L7.7779 5.38614C7.88107 5.2828 7.93774 5.14484 7.93741 4.99817C7.93774 4.85094 7.88107 4.71305 7.7779 4.6098Z" fill="currentColor"/>
                                    </svg>

                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="row row-cols-2 row-cols-lg-3 row-cols-xl-4">
                        
                        
                        {
                            departments && departments.length > 0 ? 
                            (
                                <>
                                {
                                    departments.map((dept) => (
                                        <>
                                        
                                        <div className="col mb-md-6 mb-4 px-2 px-md-4" >
                                    
                                            <a href={`/courses/?id=${dept._id}`} className="card icon-category border shadow-dark p-md-5 p-3 text-center lift">
                                                
                                                <div className="position-relative text-light">
                                                    <div className="position-absolute bottom-0 right-0 left-0 icon-h-p">
                                                        <i className="fas fa-bezier-curve"></i>
                                                    </div>
                                                    
                                                    <svg width="116" height="82" viewBox="0 0 116 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.9238 65.8391C11.9238 65.8391 20.4749 72.4177 35.0465 70.036C49.6182 67.6542 75.9897 78.4406 75.9897 78.4406C75.9897 78.4406 90.002 85.8843 104.047 79.2427C118.093 72.6012 115.872 58.8253 115.872 58.8253C115.743 56.8104 115.606 46.9466 97.5579 22.0066C91.0438 13.0024 84.1597 6.97958 75.9458 3.74641C58.8245 -2.99096 37.7881 -0.447684 22.9067 9.81852C15.5647 14.8832 7.65514 22.0695 3.0465 31.5007C-7.27017 52.6135 11.9238 65.8391 11.9238 65.8391Z" fill="currentColor"/>
                                                    </svg>

                                                </div>

                                                
                                                <div className="card-footer px-0 pb-0 pt-6">
                                                    <h5 className="mb-0 line-clamp-1">{dept.name}</h5>
                                                </div>
                                            </a>
                                        </div>
                                        </>
                                    ))
                                }
                                </>
                            ) : null
                        }
                        
                    </div>
                </div>
            </section>
        </Layout>
    )
}