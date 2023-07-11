
import Layout from '../../Components/Layout'
import { GetCoursesPublic, GetDepartmentById } from '../../api';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import language from '../../language.json';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

export default function Courses() {
    const router = useRouter()

    const [courses,setCourses] = useState([]);
    const [department,setDepartment] = useState([]);
    const [categories,setCategory] = useState([]);
    const [translation,setTranslation] = useState([]);
    const [isLoaded,setIsLoaded] = useState(false);

    const fetchData = async(dept = null, catg = []) => {

        
        await GetDepartmentById(dept)
        .then(function(res) {
            if(res && res.status == 200) {
                setDepartment(res.data.details);
                
            } else {
                
            }
        })
        await GetCoursesPublic(dept,catg)
        .then(function(res) {
            if(res && res.status == 200) {
                setCourses(res.data.details);
                setTimeout(() => {
                    setIsLoaded(true);
                }, "1000");
                
                
            } else {
                
            }
        })
    }
    

    useEffect(() => {
        if(router.query.id != undefined){
            fetchData(router.query.id)
        }
        
    },[router.query])

    useEffect(() => {
        
        const languageJson = JSON.parse(localStorage.getItem('languageJson'));
        if(localStorage.getItem('language') == undefined)
        {
            setTranslation(languageJson.English);
        }else{
            setTranslation(languageJson[localStorage.getItem('language')]);
        }
    },[])


    function handleChange(e)
    {
        let array = categories;
        
        if(e.target.checked)
        {
            
            array.push(e.target.name);
        }
        else{
            array = array.filter(function(item) {
                return item !== e.target.name
            })
        }
        
        array = [...new Set(array)];
        setCategory(array);
        
    }

    const handleOnClick = async() => {
        if(router.query.id)
        {
            fetchData(router.query.id,categories);
        }
        else{
            fetchData(null,categories);
        }
    }
    
    return (
        <>
        {
            isLoaded ? (
        
                <Layout>
                    
                        <div className="container mb-6 mb-xl-8 z-index-2">
                            <div className="d-lg-flex align-items-center mb-6 mb-xl-0">
                                <p className="mb-lg-0">We found <span className="text-dark">{courses && courses.length} courses</span> available for you</p>
                                
                            </div>
                        </div>
                    
                        
                        <div className="container">
                            <div className="row">
                            {/* {
                                department && department.categories && department.categories.length > 0 && 
                                <div className="col-xl-4 mb-5 mb-xl-0">
                                    
                                    <div className=" vertical-scroll" id="courseSidebar">
                                        <div className="border rounded mb-6 ">
                                            
                                            
                                                    <div id="coursefilter1">
                                                        <h4 className="mb-0">
                                                            <button className="p-6 text-dark fw-medium d-flex align-items-center collapse-accordion-toggle line-height-one" type="button" data-bs-toggle="collapse" data-bs-target="#coursefiltercollapse1" aria-expanded="true" aria-controls="coursefiltercollapse1">
                                                                {translation.category}
                                                                <span className="ms-auto text-dark d-flex">
                                                                    
                                                                    <svg width="15" height="2" viewBox="0 0 15 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <rect width="15" height="2" fill="currentColor"/>
                                                                    </svg>
                            
                                                                    <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M0 7H15V9H0V7Z" fill="currentColor"/>
                                                                        <path d="M6 16L6 8.74228e-08L8 0L8 16H6Z" fill="currentColor"/>
                                                                    </svg>
                            
                                                                </span>
                                                            </button>
                                                        </h4>
                                                    </div>
                                            
                                                    <div id="coursefiltercollapse1" className="collapse show mt-n2 px-6 pb-6" aria-labelledby="coursefilter1" data-parent="#courseSidebar">
                                                        <ul className="list-unstyled list-group list-checkbox">
                                                            {
                                                                department && department.categories && department.categories.length > 0 && department.categories.map((cat,i) => (
                                                                    <li className="custom-control custom-checkbox">
                                                                        <input type="checkbox" name={cat.name} className="custom-control-input" id={`category${i}`} onChange={handleChange} />
                                                                        <label className="custom-control-label font-size-base" for={`category${i}`}>{cat.name}</label>
                                                                    </li>        
                                                                ))
                                                            }
                                                            
                                                        </ul>
                                                    </div>
                                                </div>
                            
                                                <button onClick={handleOnClick} className="btn btn-primary btn-block mb-10">FILTER RESULTS</button>
                                            
                                    </div>
                    
                                </div>
                            } */}
                    
                                <div className={
                                                department && department.categories && department.categories.length > 0 ? "col-xl-12" : "col-xl-12"}>
                                    
                                    {
                                        courses && courses.length > 0 && courses.map((course) => (
                                            <div className="card border shadow p-2 lift sk-fade mb-6 flex-md-row align-items-center row gx-0">
                                        
                                                <div className="col-md-4 card-zoom position-relative">
                                                    
                                                    <a href={`/training/course/?id=${course._id}`} className="card-img sk-thumbnail img-ratio-2 d-block">
                                                        <img className="rounded shadow-light-lg" src={`${course.logo}`} alt="..." />
                                                    </a>
                        
                                                </div>
                            
                                                
                                                <div className="col-md-8 card-footer px-2 px-md-5 py-4 py-md-0 position-relative">
                                                    
                                                    <a href={`/training/course/?id=${course._id}`}><span className="mb-1 d-inline-block text-gray-800">{course.name} ({course.category})</span></a>
                            
                                                    
                                                    <div className="position-relative">
                                                        <a href={`/training/course/?id=${course._id}`} className="d-block stretched-link"><h4 className="line-clamp-2 me-md-6 me-lg-10 me-xl-4 mb-3"><span dangerouslySetInnerHTML={{__html: course.shortDescription}}/></h4></a>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                    
                                </div>
                            </div>
                        </div>
                    
                </Layout>
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
    )
}