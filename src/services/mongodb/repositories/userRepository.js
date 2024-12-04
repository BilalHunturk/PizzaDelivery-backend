const MongoDbBaseRepository = require('./mongoDbBaseRepository');
const User = require('../../../models/mongoDb/user');

class UserRepository extends MongoDbBaseRepository {
    constructor() {
        super(User);
    }
    async updateUserById(params) {
        const { id, username, password, role } = params;
        return await User.findByIdAndUpdate(id, { username: username, password: password, role: role})
    }
    async getUserByUsername(userName){
        return await User.findOne({username:userName});
    }
}

module.exports = UserRepository;