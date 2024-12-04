const UserRepository = require('./repositories/userRepository');
const userRepository = new UserRepository();


class UserService{

    static async createUser(userData) {
        return await userRepository.create(userData);
    } 

    static async getAllUsers() {
        return await userRepository.getAll()
    }
    
    static async getUserById(id) {
        return await userRepository.getById(id);
    }

    static async deleteUserById(id) {
        return await userRepository.deleteById(id);
    }

    static async updateUserById(params) {
        return await userRepository.updateUserById(params);
    }
    
    static async getUserByUserName(userName){
        return await userRepository.getUserByUsername(userName);
    } 
}
module.exports = UserService;