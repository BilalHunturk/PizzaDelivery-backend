class BaseRepository {
    async create(data) {
        throw new Error('create() method is not implemented.');
    }

    async getAll() {
        throw new Error('getAll() method is not implemented.');
    }

    async update(id, data) {
        throw new Error('update() method is not implemented.');
    }

    async deleteById(id) {
        throw new Error('deleteById() method is not implemented.');
    }

    async getById(id) {
        throw new Error('getById() method is not implemented.');
    }
}

module.exports = BaseRepository;