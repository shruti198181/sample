// import {Formik,Form,Field,ErrorMessage} from 'formik';
// import *  as  'Yup' from 'yup';

// const validationSchema = Yup.object({
//         name: Yup.string().required("Name is required"),
//         email: Yup.string().email("Invalid Emailaddress").required("Email is required"),
//         password: Yup.string().min(6,"Password must be atleast 6 character").required("password is required."),
//     })

// function LoginForm () {
//        const initialValues = {name:'',email : '',password:''};

//        const handleSubmit = (values) => {
//         console.log("Form submitted",values)
//        }

//     return(
//         <>
//         <div className='text-center'>
//             <h2>Login Form</h2>
//             <Formik initialValues={initialValues}
//                 validationSchema={validationSchema}
//                 handleSubmit={handleSubmit}>
//                     <Form>
//                         <div>
//                             <label>
//                                 <Field name="name" type="text"
//                                   <div style={{color:'red'}}><ErrorMessage name="name"></ErrorMessage></div>
//                             </label>
//                         </div>
//                     </Form>
//                 </Formik>
//         </div>

//         </>
//     )
// }
// export default LoginForm;