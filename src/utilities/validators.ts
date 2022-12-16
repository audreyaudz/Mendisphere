
export function IsValidEmail(email: string) {
    return /\S+@\S+\.\S+/.test(email);
}

export function IsPasswordMinLength(password: string) {
    return password.length >= 8;
}

export function DoPasswordsMatch(password: string, confirmPassword: string) {

    if (!password){
        return false;
    }

    if (!confirmPassword){
        return false;
    }

    return password === confirmPassword;
}