import {useState, useEffect} from 'react';
import styles from './SignUp.module.css';
import validateForm from '../lib/validateForm';

const SignUp = () => {
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        isAccepted: false,
    });

    const [errors, setErrors] = useState({});

    const [touched, setTouched] = useState({
        name: false,
        email: false,
        password: false,
        confirmPassword: false,
        isAccepted: false,
    })

    const changeHandler = event => {
        if(event.target.name === 'isAccepted') {
            setData(prevData => ({
                ...prevData,
                [event.target.name] : event.target.checked,
            }))
        } else {
            setData(prevData => ({
                ...prevData,
                [event.target.name]: event.target.value,
            }))
        }
    }

    const submitHandler = event => {
        event.preventDefault();

        if(Object.keys(errors).length) {
            setTouched({
                name: true,
                email: true,
                password: true,
                confirmPassword: true,
                isAccepted: true,
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
        setErrors(validateForm(data, 'signup'))
    }, [data, touched])

    return (
        <div className={styles.container}>
            <form className={styles.formContainer} onSubmit={submitHandler}>
                <h1 className={styles.header}>SignUp</h1>
                <div className={styles.formField}>
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name"
                        className={(touched.name && errors.name) ? styles.uncompleted : styles.formInput} 
                        onChange={changeHandler} 
                        onFocus={focuseHandler} 
                        value={data.name} />
                    {touched.name && errors.name && <small>{errors.name}</small>}
                </div>
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
                <div className={styles.formField}>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input 
                        type="password" 
                        id="confirmPassword" 
                        name="confirmPassword" 
                        className={(touched.confirmPassword && errors.confirmPassword) ? styles.uncompleted : styles.formInput} 
                        onChange={changeHandler} 
                        onFocus={focuseHandler} 
                        value={data.confirmPassword} />
                    {touched.confirmPassword && errors.confirmPassword && <small>{errors.confirmPassword}</small>}
                </div>
                <div className={styles.formField}>
                   <div className={styles.checkboxContainer}>
                   <label htmlFor="isAccepted">I accept trems of privacy policy</label>
                    <input type="checkbox" name="isAccepted" id="isAccepted" onChange={changeHandler} onFocus={focuseHandler} value={data.isAccepted} />
                   </div>
                    {touched.isAccepted && errors.isAccepted && <small>{errors.isAccepted}</small>}
                </div>
                <div className={styles.formButtons}>
                    <a>Login</a>
                    <button type='submit'>Sign Up</button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;

// !/\S+@\S+\.\S+/.test(data.email)