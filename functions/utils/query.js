const axios = require("axios");
const dotEnv = require("dotenv");
dotEnv.config();
module.exports = async (query, variables) => {
  const result = await axios({
      url: "https://graphql.fauna.com/graphql",
      method: "POST",
      headers: {
          Authorization: `Bearer ${process.env.FAUNA_DB_SECRET}`
      },
      data: {
        query,
        variables
      }
 });
 
 return result.data;
};