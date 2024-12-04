const MongoDbBaseRepository = require('./mongoDbBaseRepository');
const UserDetails = require('../../../models/mongoDb/userDetails');

class UserDetailsRepository extends MongoDbBaseRepository {
    constructor() {
        super(UserDetails);
    }
    // NOT COMPLETED.....Ç.
    async getUserDetailsByUserId(userId){
        return await UserDetails.find({userId :userId})
    }

    async deleteUserDetailsByUserId(userId){
        return await UserDetails.deleteOne({userId:userId})
    }

    async updateUserDetailsById(params) {
        const { userId, name, surname, email, phone } = params;
        return await UserDetails.findOneAndUpdate({userId:userId}, { name: name, surname: surname, email: email, phone: phone })
    }
}

module.exports = UserDetailsRepository;