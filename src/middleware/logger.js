const logger = (req, res, next) => {
    console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
    
    const startTime = Date.now();
    
    res.on('finish', () => {
      const duration = Date.now() - startTime;
      console.log(`Request Method: ${req.method}, Request URL: ${req.url}, Status Code: ${res.statusCode}, Duration: ${duration}ms`);
    });
    
    next();
  };
  
  module.exports = logger;