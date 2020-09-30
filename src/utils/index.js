export const isLogin = () => {
    if (localStorage.token && (localStorage.token !== undefined)) {
        console.log("Is logged in")
        return true;
    }
    
    return false;
}