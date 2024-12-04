const SQLiteBaseRepository = require('./sqliteBaseRepository');
const User = require('../../../models/userDTO');
const passwordHelper = require('../../../middleware/helper/passwordHelper')
const modelName = 'user'+'s';

class UserRepository extends SQLiteBaseRepository {
    constructor() {
        super(User,modelName);
    }

    // userData = {username, password, role}
    async createUser(parameters){
        const sql = 'INSERT INTO '+modelName+' (username,password,role) VALUES (?,?,?)';
        const params = [parameters.username, await passwordHelper.hashPasword(parameters.password), parameters.role];
        const id = this.create({sql,params});
        return new User(id,parameters.username,parameters.password,parameters.role);
    }

    // const params = { id, username, password, role}
    async updateUserById(parameters){
        const sql = 'UPDATE '+modelName+' SET username = ?, password = ?, role = ? WHERE id = ?';
        const params = [parameters.username, parameters.password, parameters.role, parameters.id];
        const updatedUser = this.updateById({sql,params});
        return updatedUser;
    }
    async getUserByUserName(username){
        const sql = 'SELECT * FROM '+modelName+' WHERE username = ? LIMIT 1';
        const params = [username];
        const id = await this.runSqlWithParams({sql,params});
        return id[0];
    }
}

module.exports = UserRepository;