import React from 'react';
import { login, getAllUsers, getAllPageUsers, getUserByID, createUserService, updateUserByID, deleteUserByID } from '../../services/axiosCRUDService';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const AxiosCRUDExample = () => {

    const initialCredentials = {
        email: '',
        password: ''
    }

    //Hacer un esquema de validación para la información del formulario
    const loginSchema = Yup.object().shape(
        {
            //Tipo de dato:string() | Validacion:email() | Campo requerido
            email: Yup.string().email('Invalid email format').required('Email is required'),
            //Tipo de dato:string() | Campo requerido
            password: Yup.string().required('Password is required')
        }
    );

    //! ** CRUD Examples **

    const authUser = (values) => {
        login(values.email, values.password)
            .then((response) => {
                if (response.data.token) {
                    alert(JSON.stringify(response.data.token));
                    sessionStorage.setItem('token', response.data.token);
                } else {
                    sessionStorage.removeItem('token');
                    throw new Error('Login failure');
                }

            })
            .catch((error) => {
                alert(`Something went wrong: ${error}`);
                sessionStorage.removeItem('token');
            })
            .finally(() => console.log('Login done'));
    }

    const obtainAllUsers = () => {
        getAllUsers()
            .then((response) => {
                if( response.data.data && response.status === 200){
                    alert(JSON.stringify(response.data.data));
                }else{
                    throw new Error('No users found');
                }
            })
            .catch((error) => {
                alert(`Something went wrong: ${error}`);
            });
    }

    const obtainAllPagedUsers = (page) => {
        getAllPageUsers(page)
            .then((response) => {
                if( response.data.data && response.status === 200){
                    alert(JSON.stringify(response.data.data));
                }else{
                    throw new Error(`No users found in page ${page}`);
                }
            })
            .catch((error) => {
                alert(`Something went wrong: ${error}`);
            });
    }

    const obtainUserByID = (id) => {
        getUserByID(id)
            .then((response) => {
                if( response.data.data && response.status === 200){
                    alert(JSON.stringify(response.data.data));
                }else{
                    throw new Error('User not found');
                }
            })
            .catch((error) => {
                alert(`Something went wrong: ${error}`);
            });
    }

    const createUser = (name,job) => {
        createUserService(name,job)
            .then((response) => {
                if( response.data && response.status === 201){
                    alert(JSON.stringify(response.data));
                }else{
                    throw new Error('User not created');
                }
                
            })
            .catch((error) => {
                alert(`Something went wrong: ${error}`);
            });
    }

    const updateUser = (id, name, job) => {
        updateUserByID(id,name,job)
            .then((response) => {
                if( response.data && response.status === 200){
                    alert(JSON.stringify(response.data));
                }else{
                    throw new Error('User not found & no update done');
                }
            })
            .catch((error) => {
                alert(`Something went wrong: ${error}`);
            });
    }

    const deleteUser = (id) => {
        deleteUserByID(id)
            .then((response) => {
                if(response.status === 204){
                    alert(`User with id: ${id} successfully deleted`);
                }else{
                    throw new Error('User not found & no delete done');
                }
            })
            .catch((error) => {
                alert(`Something went wrong: ${error}`);
            });
    }

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
                    authUser(values)
                }}
            >
                {/* Obtenemos las props de Formik */}

                {({ values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur }) => (

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
            {/* Example buttons to test API responses */}
            <div>
                <button onClick={obtainAllUsers}>Get All Users with Axios</button>
                <button onClick={() => obtainAllPagedUsers(1)}>Get All Users (Page 1) with Axios</button>
                <button onClick={() => obtainUserByID(1)}>Get User 1</button>
                <button onClick={() => createUser('morpheus','leader')}>Create User</button>
                <button onClick={() => updateUser(1,'morpheus','developer')}>Update User</button>
                <button onClick={() => deleteUser(1)}>Delete User</button>
            </div>
            
        </div>
    );
}

export default AxiosCRUDExample;
