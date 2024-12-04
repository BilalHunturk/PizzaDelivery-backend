const UserService = require('../services/userService');

class UserController {

  static async createUser(req, res) {
    const { username, password, role } = req.body;
    try {
      const user = await UserService.createUser(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getAllUsers(req, res) {
    try {
      const users = await UserService.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getUserById(req, res) {
    const { id } = req.params;
    try {
      const user = await UserService.getUserById(id);
      if (!user) {
        res.status(404).json({ message: 'User not found' });
      } else {
        res.status(200).json(user);
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async deleteUserById(req, res) {
    const { id } = req.params;
    try {
      await UserService.deleteUserById(id);
      res.status(200).json({ message: `User with id ${id} deleted successfully` });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async updateUserById(req, res) {
    const { id } = req.params;
    const { username, password, role } = req.body;
    try {
      const user = await UserService.updateUserById({id, username, password, role});
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = UserController;
