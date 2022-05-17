const validateForm = data => {
    const errors = {};

    if(!data.name.trim()) {
        errors.name = 'name is required!';
    } else if(data.name.trim().length < 6) {
        errors.name = 'name must be larger than 6 characters!';
    } else {
        delete errors.name;
    }

    if(!data.email.trim()) {
        errors.email = 'email is required!';
    }
    else if(!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = 'email is not valid!';
    } else {
        delete errors.email;
    }

    if(!data.password) {
        errors.password = 'password is required!';
    } else if(data.password.length < 6) {
        errors.password = 'password must be larger than 6 characters!';
    } else {
        delete errors.password;
    }

    if(!data.confirmPassword) {
        errors.confirmPassword = 'confirmPassword is required!';
    } else if (data.password !== data.confirmPassword) {
        errors.confirmPassword = 'confirmPassword is not the same with password!';
    } else {
        delete errors.confirmPassword
    }

    if(!data.isAccepted) {
        errors.isAccepted = 'isAccepted is required!';
    } else {
        delete errors.isAccepted;
    }

    return errors;
}

export default validateForm;