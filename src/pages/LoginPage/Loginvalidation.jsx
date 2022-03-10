
const validation = (values) => {

    let errors={};



    if(!values.email){
        errors.email="email is required !"
    }else if(!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email="Email is invalid"
    }

    if(!values.password){
        errors.password="Password is required !"
    }
    // else if(values.password.length >4 && values.password.length <6) {
    //     errors.password="Password is must be more 5 characters"
    // }

    return errors;
};

export default validation;
