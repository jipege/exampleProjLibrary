let db;

class DB {
    constructor(initialState = {
        users: [],
        books: [],
        collections: [],
    }) {
        this.state = initialState
    }

    immutableModification(data) {
        this.state = Object.assign({}, this.state, data);
    }

    pushUser(user) {
        this.immutableModification({
            users: this.state.users.concat([user])
        })
    }

    getState() {
        return this.state;
    }
}

module.exports.db = new DB();

