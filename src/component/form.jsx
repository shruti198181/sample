import {Formik,Form,Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {NavLink, useNavigate } from 'react-router-dom';
import {Button } from 'react-bootstrap'
const validationSchema = Yup.object({
        email: Yup.string().email("Invalid Emailaddress").required("Email is required"),
        password: Yup.string().min(6,"Password must be atleast 6 character").required("password is required."),
    })

function LoginForm () {
       const initialValues = {email : '',password:''};
        const navigate = useNavigate() 
       const handleSubmit = (values) => {
        console.log("Form submitted",values)
        navigate('/home');
       }
       

    return(
        <>
        <div className="d-flex align-items-center justify-content-center mt-5">

        <div style={{border:'1px solid blue', width:'300px' ,textAlign:'center',backgroundColor:'whitesmoke',justifyContent:'center'}}>
            <h2 className='text-primary'>Login Form</h2>
            <Formik initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}>
                    <Form className='text-warning'>
                       <div className='mt-2 '><label>Email:</label>
                         <Field name="email" type="email" className="ms-4"/>
                          <ErrorMessage style={{color:'red'}} component="div" name="email"/>
                        </div>
                        <div className='mt-2'>
                            <label>Password:</label>
                            <Field name="password" type="password"className="ms-2"/>
                             <ErrorMessage style={{color:'red'}} component="div" name="password"/>
                        </div>
                    
                    <Button type="submit">Submit</Button>
                    <div>Don't have any account? plz create <NavLink as to="/signup">signupform</NavLink></div>
                    </Form>
                </Formik>
        </div>
</div>
        </>
    )
}
export default LoginForm;