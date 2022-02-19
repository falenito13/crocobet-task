class User {

    constructor() {
        this.init()
    }

    init() {
        this.token = localStorage.getItem('userToken')
    }

    authenticated(data, callback) {
        localStorage.setItem('userToken', data.token)
        this.init()
        callback()
    }

    isLoggedIn() {
        return localStorage.getItem('userToken');
    }

    logout(callback) {
        localStorage.removeItem('userToken')
        this.init();
        callback();
    }

}

export default new User()

