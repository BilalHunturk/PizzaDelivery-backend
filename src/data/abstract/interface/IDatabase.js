class IDatabase {
    connect() {
      throw new Error('connect method not implemented');
    }
  
    disconnect() {
      throw new Error('disconnect method not implemented');
    }
  
    query(sql, params) {
      throw new Error('query method not implemented');
    }
  
    run(sql, params) {
      throw new Error('run method not implemented');
    }
  }
  
  module.exports = IDatabase;