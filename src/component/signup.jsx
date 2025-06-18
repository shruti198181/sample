import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button } from 'react-bootstrap';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    PhoneNumber: Yup.string().required("phonenumber is required"),
    gender: Yup.string().oneOf(["male","female","other"],"Please enter valid gender").required("gender is required"),
    BirthDate: Yup.string().max(new Date(), "BirthDate can not be in future").required("BirthDate is required"),
    Password: Yup.string().min("at least 6 character in password").required("Password is required"),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
          terms: Yup.boolean()
    .oneOf([true], 'You must accept the Terms and Conditions')
    .required('You must accept the Terms and Conditions'),

})

function Signup() {
    const initialvalues = {
        name: '',
        email: "",
        PhoneNumber: '',
         gender:'',
        BirthDate: '',
        password: '',
        confirmPassword: "",
        terms:''
    }
    const navigate = useNavigate()
    const handleSubmit = (values) => {
        console.log("from submitted", values);
        navigate("/home");
    }
    return (
        <>
            <div className="d-flex align-items-center justify-content-center mt-5">

                <div style={{ border: '1px solid blue', width: '400px', textAlign: 'left', backgroundColor: '#edf8fd', justifyContent: 'center' }} className='ps-3'>
                    <h2 className='text-primary text-center'>Signup Form</h2>
                    <Formik initialValues={initialvalues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit} >
                        <Form>
                            <div className='mt-2'>
                                <label>Name : </label>
                                <Field name="name" type="name"   className="form-control"    // Bootstrap’s class for right-align
/>
                                <ErrorMessage name="name" component="div" className='text-danger' />
                            </div>
                            <div className='mt-2'>
                                <label>Email :</label>
                                <Field name="email" type="email" className="form-control "/>
                                <ErrorMessage name="email" component="div" className='text-danger' />
                            </div>
                            <div className='mt-2'>
                                <label>PhoneNumber :</label>
                                <Field name="PhoneNumber" type="phone" className="form-control "/>
                                <ErrorMessage name="PhoneNumber" component="div" className='text-danger' />
                            </div>
                            <div className='mt-2'>
                        <label>Gender : </label>
                        <Field name="gender" as="select" className="form-control ">
                          <option value="">Select value</option>  
                          <option value="male">Male</option>
                          <option value ="female">Female</option>
                          <option value= "other">Other</option>
                             </Field>
                             <ErrorMessage name="gender" component="div" className='text-danger'/>
                    </div>
                            <div className='mt-2'>
                                <label>BirthDate</label>
                                <Field name="BirthDate" type="date" className="form-control "/>
                                <ErrorMessage name="BirthDate" component="div" className='text-danger' />
                            </div>
                            <div className='mt-2'>
                                <label>Password : </label>
                                <Field name="password" type="password" className="form-control "/>
                                <ErrorMessage name='password' component="div" className='text-danger' />
                            </div>
                            <div className='mt-2'>
                                <label>ConfirmPassword : </label>
                                <Field name="confirmPassword" type="password" className="form-control "/>
                                <ErrorMessage name="confirmPassword" component="div" className='text-danger' />
                            </div>
                                <label>
      <Field type="checkbox" name="terms" />
      I agree to the Terms and Conditions
    </label>
 <ErrorMessage name="terms" component="div" className='text-danger' />
                            <div className='text-center'>     
                            <Button type="submit" className='mt-2' onClick={handleSubmit}>Submit</Button>
                          </div>
                        </Form>
                    </Formik>
                </div>
            </div>


        </>
    )

}

export default Signup;