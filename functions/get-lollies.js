 
const query = require("./utils/query");
 
const GET_LOLLIES = `
   query {
       allLollies {
        data {
          _id
          flavourTop
          flavourMiddle
          flavourBottom
          recipientName
          message
          senderName
          lollyPath
        }
      } 
   }  
`;
 
exports.handler = async () => {
  const { data, errors } = await query(GET_LOLLIES);
 
  if (errors) {
    return {
      statusCode: 500,
      body: JSON.stringify(errors)
    };
  }
 
  return {
    statusCode: 200,
    body: JSON.stringify({ lollies: data.allLollies.data })
  };
};