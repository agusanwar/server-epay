const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  urlDb : process.env.MONGO_URL,
};



// module.exports = {
//   serviceName: process.env.SERVICE_NAME,
//   urlDb: process.env.MONGO_URL,
// //   jwtKey: process.env.SECRET,
// };
