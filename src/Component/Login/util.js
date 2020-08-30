export function isValidEmail(email = ""){
    const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailReg.test(email);
}


export function isValidPassword(password = ""){
    let isPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$/;
    return isPassword.test(password) ? true : false;
}

export function setCookie(cname, cvalue){
    document.cookie = `${cname}=${cvalue}; path=/;`;
}

export function readCookie(cname){
    const cookieList = document.cookie.split(";");
    const value = cookieList.find((cookie = "") => {
        const [cookieName] = cookie.split("=");
        return cookieName.trim() === cname.trim();
    });
    return value ? (value.split("=")[1] || "") : "";
}

export function eraseCookie(name) {   
    document.cookie = name+'=; Max-Age=-99999999;';  
}