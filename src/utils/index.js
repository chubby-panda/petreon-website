export const isLogin = () => {
    if (localStorage.token && localStorage.token !== undefined) {
        return true;
    }

    return false;
}