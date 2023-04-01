import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Formik, Field, FieldArray, ErrorMessage } from 'formik';
import { Login } from '../api';
import * as Yup from "yup";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { toast } from "react-toastify";
import { useRouter } from 'next/router';


const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required')
    
});

function AuthLogin() {


    const router = useRouter();

    return (
        
        <Container style={{marginTop:"20px"}}>

            <Formik
                enableReinitialize="true"
                initialValues={{
                    email: "",
                    password: "",
                  }}
                  validationSchema={validationSchema}
                  onSubmit={async (values) => {
                    await Login(values).then(function (res) {
                      if (res && res.status == 200) {
                        console.log(res.data.token);
                        localStorage.setItem('token',res.data.token);
                        toast.success("Logged In Successfully");
                        router.push({
                          pathname: '/'
                        });
                      } else {
                        console.log(res);
                        toast.error(res.data.error);
                        
                      }
                    })
                    
        
                  }}
            >
                {({ handleSubmit, handleChange, values, setFieldValue, errors, touched }) => (
                    <form onSubmit={handleSubmit}>
                    
                          
                        <Row>
                            <Col xs={{ span: 4, offset: 4 }} md={{ span: 4, offset: 4 }}>
                                <h4 style={{fontWeight:"700",textAlign:"left",marginTop:"50px"}}>Welcome To Admin</h4>  
                            </Col>
                            
                            <Col xs={{ span: 4, offset: 4 }} md={{ span: 4, offset: 4 }} style={{marginTop:"50px"}}>
                            <div style={{ marginTop: '10px' }}>
                                <InputGroup fullWidth size="Small">
                                <Form.Control autoFocus="true" id="email" name="email" type="email" onChange={handleChange} autoComplete="off"
                                    value={values.email} placeholder="Email" className={touched.email && errors.email ? "error" : null} />
                                </InputGroup>
                                {touched.email && errors.email ? (
                                <div className="error-message">{errors.email}</div>
                                ) : null}
                            </div>
                            </Col><br /><br />
                        </Row>
                        <Row>
                            
                            <Col xs={{ span: 4, offset: 4 }} md={{ span: 4, offset: 4 }}>
                            <div style={{ marginTop: '20px' }}>
                                <InputGroup fullWidth size="Small">
                                <Form.Control id="password" name="password" type="password" onChange={handleChange} autoComplete="off"
                                    value={values.password} placeholder="Password" className={touched.password && errors.password ? "error" : null} />
                                </InputGroup>
                                {touched.password && errors.password ? (
                                <div className="error-message">{errors.password}</div>
                                ) : null}
                            </div>
                            </Col>
                        </Row>
                        <Row>
                            
                            <Col xs={{ span: 4, offset: 4 }} md={{ span: 4, offset: 4 }}>
                            <div style={{ marginTop: '10px' }}>
                                <Button status="Success" type="submit" className="mppButton" onClick={handleSubmit}>
                                SIGN IN 
                                </Button>
                            </div>
                            </Col>
                            
                        </Row>
                                
                              
                  </form>
                )}
            </Formik>
            
        </Container>
    );
}

export default AuthLogin;
