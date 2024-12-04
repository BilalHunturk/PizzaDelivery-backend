const UserRepository = require('./repositories/userRepository');
const userRepository = new UserRepository()


class UserService{

    // userData = {username, password, role}
    static async createUser(userData) {
        return await userRepository.createUser(userData);
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

    // const params = {id, username, password, role}
    static async updateUserById(params) {
        return await userRepository.updateUserById(params);
    }

    static async getUserByUserName(username){
        return await userRepository.getUserByUserName(username);
    }
}
module.exports = UserService;