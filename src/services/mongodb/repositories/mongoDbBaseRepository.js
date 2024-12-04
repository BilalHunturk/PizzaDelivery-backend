class MongoDbBaseRepository {
    constructor(model) {
        this.Model = model;
    }

    async create(data) {
        console.log(data)
        const modelInstance = new this.Model(data);
        return await modelInstance.save();
    }

    async getAll() {
        console.log(this.Model)
        return await this.Model.find();
    }

    async deleteById(id) {
        return await this.Model.findByIdAndDelete(id);
    }

    async getById(id) {
        return await this.Model.findOne({_id:id});
    }

}

module.exports = MongoDbBaseRepository;