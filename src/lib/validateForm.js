const validateForm = data => {
    const errors = {};

    if(!data.name.trim()) {
        errors.name = 'Name is required!';
    } else if(data.name.trim().length < 6) {
        errors.name = 'Name must be larger than 6 characters!';
    } else {
        delete errors.name;
    }

    if(!data.email.trim()) {
        errors.email = 'Email is required!';
    }
    else if(!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = 'Email is invalid!';
    } else {
        delete errors.email;
    }

    if(!data.password) {
        errors.password = 'Password is required!';
    } else if(data.password.length < 6) {
        errors.password = 'Password must be larger than 6 characters!';
    } else {
        delete errors.password;
    }

    if(!data.confirmPassword) {
        errors.confirmPassword = 'ConfirmPassword is required!';
    } else if (data.password !== data.confirmPassword) {
        errors.confirmPassword = 'ConfirmPassword must be the same with password!';
    } else {
        delete errors.confirmPassword
    }

    if(!data.isAccepted) {
        errors.isAccepted = 'IsAccepted is required!';
    } else {
        delete errors.isAccepted;
    }

    return errors;
}

export default validateForm;