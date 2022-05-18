import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import validateForm from '../lib/validateForm';
import Toast from './Toast';

import styles from './SignUp.module.css';

const Login = () => {
    const [data, setData] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({});

    const [touched, setTouched] = useState({
        email: false,
        password: false,
    })

    const [toast, setToast] = useState({
        type: '',
        message: '',
    })

    const changeHandler = event => {
        
        setData(prevData => ({
            ...prevData,
            [event.target.name]: event.target.value,
        })) 
    }

    const submitHandler = event => {
        event.preventDefault();

        if(Object.keys(errors).length) {
            setTouched({
                email: true,
                password: true,
            })

            setToast({
                type: 'error',
                message: 'Invalid data!',
            })
        } else {
            setToast({
                type: 'success',
                message: 'You login successfully',
            })
        }
    }

    const focuseHandler = event => {
        setTouched(prevTouched => ({
                ...prevTouched,
                [event.target.name]: true,
            }))
    } 

    useEffect(() => {
        setErrors(validateForm(data, 'login'))
    }, [data, touched])

    return (
        <div className={styles.container}>
            <form className={styles.formContainer} onSubmit={submitHandler}>
                <h1 className={styles.header}>Login</h1>
                <div className={styles.formField}>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        className={(touched.email && errors.email) ? styles.uncompleted : styles.formInput} 
                        onChange={changeHandler} 
                        onFocus={focuseHandler} 
                        value={data.email} />
                    {touched.email && errors.email && <small>{errors.email}</small>}
                </div>
                <div className={styles.formField}>
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        className={(touched.password && errors.password) ? styles.uncompleted : styles.formInput} 
                        onChange={changeHandler} 
                        onFocus={focuseHandler} 
                        value={data.password} />
                    {touched.password && errors.password && <small>{errors.password}</small>}
                </div>
                <div className={styles.formButtons}>
                    <Link to='/signup'>Sign Up</Link>
                    <button type='submit'>Login</button>
                </div>
            </form>
            <Toast type={toast.type} message={toast.message} />
        </div>
    );
};

export default Login;