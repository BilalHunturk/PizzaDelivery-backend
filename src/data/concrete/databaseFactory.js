const SQLiteDatabase = require('./sqlite/sqlitedatabase');
class DatabaseFactory {
    static createDatabase(type) {
      switch (type) {
        case 'sqlite':
          return new SQLiteDatabase();
        // Diğer veritabanları buraya eklenebilir
        // case 'mysql':
        //   return new MySQLDatabase(config);
        // case 'postgresql':
        //   return new PostgreSQLDatabase(config);
        default:
          throw new Error('Unsupported database type');
      }
    }
  }
  
  module.exports = DatabaseFactory;