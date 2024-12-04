const CartItemRepository = require('./repositories/cartItemRepository');
const cartItemRepository = new CartItemRepository();


class CartItemService {

    static async createCartItem(data) {
        return await cartItemRepository.createCartItem(data);
    }

    static async getCartItemById(id) {
        return await cartItemRepository.getById(id);
    }

    static async getAllCartItems() {
        return await cartItemRepository.getAll();
    }
    static async deleteCartItemById(id) {
        return await cartItemRepository.deleteById(id);
    }

    static async updateCartItemById(params) {
        return await cartItemRepository.updateCartItemById(params);
    }

    static async getCartItemsByUserId(userId){
        return await cartItemRepository.getCartItemsByUserId(userId);
    }
}
module.exports = CartItemService;