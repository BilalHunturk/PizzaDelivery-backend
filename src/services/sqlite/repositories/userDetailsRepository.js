const SQLiteBaseRepository = require('./sqliteBaseRepository');
const UserDetails = require('../../../models/userdetailsDTO');
const modelName = "user_details";

class UserDetailsRepository extends SQLiteBaseRepository {
    constructor() {
        super(UserDetails,modelName);
    }

    // const data = {userId,name, surname, email, phone}
    async createUserDetails(parameters){
        const sql = 'INSERT INTO '+modelName+' (user_id,name,surname,email,phone) VALUES (?,?,?,?,?)';
        const params = [parameters.userId, parameters.name, parameters.surname, parameters.email, parameters.phone];
        const id = this.create({sql,params});
        return new UserDetails(parameters.userId, parameters.name, parameters.surname, parameters.email, parameters.phone);
    }

    // const params = {userId, name, surname, email, phone}
    async updateUserDetailsById(parameters){
        const sql = 'UPDATE '+modelName+' SET name = ? , surname = ? , email = ? , phone = ? WHERE user_id = ?';
        const params = [parameters.name, parameters.surname, parameters.email, parameters.phone, parameters.userId]
        const updatedPizza = this.updateById({sql,params});
        return updatedPizza;
    }

    async getUserDetailsByUserId(userId){
        const sql = 'SELECT * FROM ' + this.modelName.toLowerCase() + ' WHERE user_id = ?';
        const params = [userId]
        const res = this.runSqlWithParams({sql,params});
        return res;
    }

    async deleteUserDetailsByUserId(userId){
        const sql = 'DELETE FROM ' + this.modelName.toLowerCase() + ' WHERE user_id = ?';
        const params = [userId]
        const res = this.runSqlWithParams({sql,params});
        return res;
    }

}

module.exports = UserDetailsRepository;