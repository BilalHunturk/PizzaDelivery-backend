const UserDetialsRepository = require('./repositories/userDetailsRepository');
const userDetailsRepository = new UserDetialsRepository()


class UserDetailsService{

    static async createUserDetails(userData) {
        return await userDetailsRepository.create(userData);
    } 

    static async getAllUserDetails() {
        return await userDetailsRepository.getAll()
    }
    
    static async getUserDetailsByUserId(id) {
        return await userDetailsRepository.getUserDetailsByUserId(id);
    }

    static async deleteUserDetailsById(id) {
        return await userDetailsRepository.deleteUserDetailsByUserId(id);
    }

    static async updateUserDetailsById(params) {
        return await userDetailsRepository.updateUserDetailsById(params);
    }
}
module.exports = UserDetailsService;