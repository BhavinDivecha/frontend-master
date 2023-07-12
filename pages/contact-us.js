import Container from "react-bootstrap/Container";
import { useRouter } from "next/router";
import { GetPageById } from "../api";
import React, { useEffect, useState } from "react";
import ToastMessageDisplay from "../Components/Toast/toastMessageDisplay";
import LayoutPages from "../Components/LayoutPages";

function AuthLogin(props) {
  const [content, setContent] = useState([]);
  const router = useRouter();

  const fetchData = async () => {
    await GetPageById(router.query.page).then(function (res) {
      if (res && res.status == 200) {
        console.log(res);
        setContent(res.data.details);
      }
    });
  };
  useEffect(() => {
    fetchData(router.query.page);
  }, [router.query.page]);

  return (
    <LayoutPages>
      <div style={{ height: "inherit" }}>
        <ContentProviderGrapes {...props} />
        <iframe
          src="https://forms.monday.com/forms/embed/2e90a38ef4192d5698984e68c72fe4cf?r=use1"
          style={{
            minHeight: "100vh",
          }}
        ></iframe>
      </div>
      {/* <div className="container">
                <div className="row pt-12">
                    <div className="col-lg-12 mb-12 mb-lg-12">
                        
                    <div style={{ height: '100%' }}>
                    <ContentProviderGrapes {...props} />
                </div>
                        <div className="mb-8">
                            <h3 className="mb-5">{content && content.name}</h3>
                            <div className="ms-4">
                                <span dangerouslySetInnerHTML={{__html: content.content}}/>
                                </div>
                            </div>
                            {/* <div id="accordionCurriculum">

                                
                                <div className="border rounded shadow mb-6 overflow-hidden">
                                    <div className="d-flex align-items-center" id="curriculumheadingOne">
                                        <h5 className="mb-0 w-100">
                                            <button className="d-flex align-items-center p-5 min-height-80 text-dark fw-medium collapse-accordion-toggle line-height-one" type="button" data-bs-toggle="collapse" data-bs-target="#Introduction" aria-expanded="true" aria-controls="Introduction">
                                                <span className="me-4 text-dark d-flex">
                                                    
                                                    <svg width="15" height="2" viewBox="0 0 15 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect width="15" height="2" fill="currentColor"/>
                                                    </svg>

                                                    <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0 7H15V9H0V7Z" fill="currentColor"/>
                                                        <path d="M6 16L6 8.74228e-08L8 0L8 16H6Z" fill="currentColor"/>
                                                    </svg>

                                                </span>

                                                {content.content}
                                            </button>
                                        </h5>
                                    </div>

                                    <div id="Introduction" className="collapse show" aria-labelledby="curriculumheadingOne" data-parent="#accordionCurriculum">
                                        
                                        <div className="border-top px-5 py-4 min-height-70 d-md-flex align-items-center">
                                            
                                            <div className="d-flex align-items-center me-auto mb-4 mb-md-0">
                                        
                                                
                                                

                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div> */}
    </LayoutPages>
  );
}

export default AuthLogin;

import "grapesjs/dist/css/grapes.min.css";
export { getStaticProps } from "destack/build/server";
import { ContentProviderGrapes } from "destack";

// export default function Page(props) {
//     return (
//         )
// }
