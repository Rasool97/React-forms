import styles from './SignUp.module.css';

const SignUp = () => {
    return (
        <div className={styles.container}>
            <form className={styles.formContainer}>
                <h1 className={styles.header}>SignUp</h1>
                <div className={styles.formField}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" />
                    {/* <small>Name is invalied</small> */}
                </div>
                <div className={styles.formField}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" />
                </div>
                <div className={styles.formField}>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" />
                </div>
                <div className={styles.formField}>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" id="confirmPassword" name="confrimPassword" />
                </div>
                <div className={styles.checkboxContainer}>
                    <label htmlFor="isAccepted">I accept trems of privacy policy</label>
                    <input type="checkbox" name="isAccepted" id="isAccepted" />
                </div>
                <div className={styles.formButtons}>
                    <a href="#">Login</a>
                    <button>Sign Up</button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;

// !/\S+@\S+\.\S+/.test(data.email)