module.exports = {
    name: String,
    tag: {
        type: String, index: true
    },
    email: {
        type: String, index: true
    },
    password: String,
    genre: String,
    birthday: Date,
    bio: String,
    photo: String,
    following: {
        type: [{
            id: String,
            name: String,
            photo: String
        }]
    },
    followers: {
        type: [{
            id: String,
            name: String,
            photo: String
        }]
    },
    active: {
        type: String, index: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}