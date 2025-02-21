import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


//Hacer un esquema de validación para la información del formulario
const loginSchema = Yup.object().shape(
    {
        //Tipo de dato:string() | Validacion:email() | Campo requerido
        email: Yup.string().email('Invalid email format').required('Email is required'),
        //Tipo de dato:string() | Campo requerido
        password: Yup.string().required('Password is required')
    }
);




const LoginFormik = () => {

    const initialCredentials = {
        email: '',
        password: ''
    }

    const history = useNavigate();

    return (
        <div>
            <h4>Login Formik</h4>
            {/* Configuración de Formik */}
            <Formik
                // ** Inicialización de valores que tomara el formulario **
                initialValues={initialCredentials}
                // ** Validacion de esquema de Yup **
                validationSchema={loginSchema}
                // ** Evento onSubmit **
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                    // Al loguearse los datos pueden quedar guardados en el localstorage del navegador
                    await localStorage.setItem('credentials',values);
                    history('/profile');
                }}
            >
                {/* Obtenemos las props de Formik */}

                {({ values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur}) => (

                        <Form>
                            <label htmlFor="email">Email</label>
                            <Field id="email" type="email" name="email" placeholder="example@emial.com" />

                            {/* Gestion de errores en email usando Formik */}
                            {
                                errors.email && touched.email && (
                                    
                                    <div>
                                        <ErrorMessage name="email"></ErrorMessage>
                                    </div>
                                    
                                )
                            }

                            <label htmlFor="password">Password</label>
                            <Field
                                id="password"
                                name="password"
                                placeholder="password"
                                type="password"
                            />

                            {/* Gestion de errores de Password de forma normal */}
                            {
                                errors.password && touched.password && (
                                    <div className='error'>
                                        <p> {errors.password} </p>
                                    </div>
                                )
                            }

                            <button type="submit">Login</button>
                            {isSubmitting ? (<p>Login your Credentials ...</p>) : null}
                        </Form>

                    )                     
                }
                
            </Formik>
        </div>
    );
}

export default LoginFormik;
