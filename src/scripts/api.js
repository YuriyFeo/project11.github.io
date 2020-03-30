export class Api {
    constructor(token, server) {
        this.token = token;
        this.server = server;
    }

    _getResponseData(res) {
        if (!res.ok) {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
        return res.json();
    }

    getInitialCards() {
        return fetch(`${this.server}/cards`, {
                headers: {
                    authorization: this.token,
                    'Content-Type': 'application/json',
                }
            })
            .then(res => this._getResponseData(res))
    }

    getUser() {
        return fetch(this.server + '/users/me', {
                headers: {
                    authorization: this.token
                }
            })
            .then(res => this._getResponseData(res))
    }

    patchUser(newName, newAbout) {
        return fetch(this.server + '/users/me', {
                method: 'PATCH',
                headers: {
                    authorization: this.token,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: `${newName}`,
                    about: `${newAbout}`
                })
            })
            .then(res => this._getResponseData(res))
    }
}