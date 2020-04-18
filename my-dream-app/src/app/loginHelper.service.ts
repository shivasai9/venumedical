export class LoginHelper {
    loggedIn = false;
    isAuthenticated() {
        const promise = new Promise(
            (resolve, reject) => {
                resolve(this.loggedIn);
            }
        );
        return promise;
    }
    login() {
        return this.loggedIn = true;
    }
    logout() {
        return this.loggedIn = false;
    }
}