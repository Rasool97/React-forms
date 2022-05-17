import {useState, useEffect} from 'react';
import styles from './SignUp.module.css';
import validateForm from '../lib/validateForm';

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
        } else {
            console.log('ok');
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
                    <a>Sign Up</a>
                    <button type='submit'>Login</button>
                </div>
            </form>
        </div>
    );
};

export default Login;