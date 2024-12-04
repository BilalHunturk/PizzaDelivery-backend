const UserDetailsService = require('../services/userDetailsService');

class UserDetailsController {
  static async createUserDetails(req, res) {
    const { userId, name, surname, email, phone } = req.body;
    try {
      const userDetails = await UserDetailsService.createUserDetails(req.body);
      res.status(201).json(userDetails);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getAllUserDetails(req, res) {
    try {
      const userDetails = await UserDetailsService.getAllUserDetails();
      res.status(200).json(userDetails);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getUserDetailsByUserId(req, res) {
    const { userId } = req.params;
    try {
      const userDetails = await UserDetailsService.getUserDetailsByUserId(userId);
      if (!userDetails) {
        res.status(404).json({ message: 'User details not found' });
      } else {
        res.status(200).json(userDetails);
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async deleteUserDetailsByUserId(req, res) {
    const { userId } = req.params;
    try {
      await UserDetailsService.deleteUserDetailsById(userId);
      res.status(200).json({ message: `User details with user id ${userId} deleted successfully` });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async updateUserDetailsByUserId(req, res) {
    const { userId, name, surname, email, phone } = req.body;
    try {
      const userDetails = await UserDetailsService.updateUserDetailsById({userId, name, surname, email, phone});
      res.status(200).json(userDetails);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = UserDetailsController;
