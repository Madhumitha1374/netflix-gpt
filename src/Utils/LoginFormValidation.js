
export const validateForm = ( email, password, name = null) => {
    const isEmailValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z]{8,}$/.test(password)
    // console.log(name , "****")
    if(name != null) {
        // console.log("Sign up form")
         const isNameValid = /^[a-zA-Z]+ [a-zA-Z]+$/.test(name);
         if(!isNameValid) return "Name is not Valid";
    }

    // console.log(email.current.value)
    //     // console.log(name.current.value)
    //     console.log(password.current.value)
    if(!isEmailValid) return "Email is not Valid";
    if(isPasswordValid) return "Password is not valid"

    return null
}