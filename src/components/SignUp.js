import React from 'react';

const SignUp = () => {
    return (
        <div>
            <form>
                <h1>SignUp</h1>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" />
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" id="confirmPassword" name="confrimPassword" />
                </div>
                <div>
                    <div>
                        <label htmlFor="isAccepted">I accept trems of privacy policy</label>
                        <input type="checkbox" name="isAccepted" id="isAccepted" />
                    </div>
                </div>
                <div>
                    <a href="#">Login</a>
                    <button>Sign Up</button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;

// !/\S+@\S+\.\S+/.test(data.email)