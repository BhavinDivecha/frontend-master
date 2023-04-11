// import custom components
import Footer from "./footer";
import Header from "./header";
import Navbar from './navbar'
import { GetDepartmentsPublic, GetLanguagesPublic, GetSetting } from '../../api';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';


export default function Layout({ children }) {
  // styles the main html tag
  const styles = {
    display: "flex",
    flexDirection: "row"
  };

  const router = useRouter();
  const [isLoaded,setIsLoaded] = useState(false);

  const fetchData = async() => {

    await GetSetting()
    .then(function(res) {
        
        if(res && res.status == 200) {
            
            localStorage.setItem('languageJson',JSON.stringify(res.data.settings.languages));
            window.location = '/';
        } else {
            
        }
    })
}
useEffect(() => {
  console.log("localStorage.getItem('languageJson')",localStorage.getItem('languageJson'))
  if(localStorage.getItem('languageJson') == null){
    fetchData();
  }
  else{
    setIsLoaded(true);
  }
});
  return (
    <>
    {
      isLoaded ?
      (
        <>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </>
      ) :
      (
        <>
          <div style={{width: "100px",height: "100px",position: "absolute",top:"0",bottom: "0",left: "0",right: "0",margin: "auto",zIndex:"10"}}>
              
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
  );
}
