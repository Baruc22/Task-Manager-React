import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

//Modelos
import { User } from '../../../models/user.class';
import { ROLES } from '../../../models/roles.enum';

const RegisterFormik = () => {

    let user = new User();

    const inicialValues = {
        username: '',
        email: '',
        password: '',
        confirm: '', //Para confirmar password
        role: ROLES.USER
    }

    const registerSchema = Yup.object().shape(

        {
            username: Yup.string()
                .min(6,'username too short')
                .max(12,'username too long')
                .required('Username is required'),
            email: Yup.string()
                .email('Invalid email format')
                .required('Email is required'),
            role: Yup.string()
                .oneOf([ROLES.USER, ROLES.ADMIN],'You must select a Role: User/Admin')
                .required('Role is required'),
            password: Yup.string()
                .min(8,'Password too short')
                .required('Password is required'),
            confirm: Yup.string()
                .when('password',{
                    is: value => (value && value.length > 0 ? true : false),
                    then: () => Yup.string().oneOf(
                        [Yup.ref("password")], '¡Password must match!'
                    )
                }).required('You must confirm the password')
            
        }

    )

    const submit = () => {
        alert('Register user')
    }

    return (
        <div>
            <h4>Register Formik</h4>
            <Formik
                // ** Inicialización de valores que tomara el formulario **
                initialValues={inicialValues}
                // ** Validacion de esquema de Yup **
                validationSchema={registerSchema}
                // ** Evento onSubmit **
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                }}
            >

                {({ values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur}) => (
                        <Form>
                            <label htmlFor="username">Username</label>
                            <Field id="username" type="text" name="username" placeholder="Your username" />

                            {/* Gestion de errores en "username" usando Formik */}
                            {
                                errors.username && touched.username && (                                    
                                    <div>
                                        <ErrorMessage name="username"></ErrorMessage>
                                    </div>                                    
                                )
                            }

                            <label htmlFor="email">Email</label>
                            <Field id="email" type="email" name="email" placeholder="example@emial.com" />
                            
                            {/* Gestion de errores en "email" usando Formik (usando component='div')*/}
                            {
                                errors.email && touched.email && (                                    
                                    
                                    <ErrorMessage name="email" component='div'></ErrorMessage>                                                                      
                                )
                            }

                            <label htmlFor="password">Password</label>
                            <Field
                                id="password"
                                name="password"
                                placeholder="password"
                                type="password"
                            />

                            {/* Gestion de errores de "Password" de forma normal */}
                            {
                                errors.password && touched.password && (
                                    <div className='error'>
                                        <p> {errors.password} </p>
                                    </div>
                                )
                            }

                            <label htmlFor="password">Password</label>
                            <Field
                                id="confirm"
                                name="confirm"
                                placeholder="Confirm password"
                                type="password"
                            />

                            {/* Gestion de errores de "Confirmacion de password" de forma normal */}
                            {
                                errors.confirm && touched.confirm && (
                                    <div className='error'>
                                        <p> {errors.confirm} </p>
                                    </div>
                                )
                            }

                            <button type="submit">Register Account</button>
                            {isSubmitting ? (<p>Sending your Credentials ...</p>) : null}
                        </Form>
                    )}

            </Formik>
        </div>
    );
}

export default RegisterFormik;
