const CartRepository = require('./repositories/cartRepository');
const cartRepository = new CartRepository();


class CartItemService {

    static async createCart(data) {
        return await cartRepository.createCart(data);
    }

    static async getCartById(id) {
        return await cartRepository.getById(id);
    }

    static async getAllCarts() {
        return await cartRepository.getAll();
    }
    static async deleteCartById(id) {
        return await cartRepository.deleteById(id);
    }

    static async updateCartById(params) {
        return await cartRepository.updateCartById(params);
    }

    static async getCartByUserId(userId){
        return await cartRepository.getCartByUserId(userId);
    }
}
module.exports = CartItemService;