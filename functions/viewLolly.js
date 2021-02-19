const query = require("./utils/query");
const lollyTemplate = require("./lollyTemplate.js");
 
exports.handler = async event => {
  const path = event.queryStringParameters.id.replace("/", "");
  console.log(typeof(path));
  const VIEW_LOLLY = `
   query {
    lolliesByPath(lollyPath:"${path}") {
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
  const { data, errors } = await query(VIEW_LOLLY);


  if(errors){
    console.log('Error:', errors);
    return{
      body: JSON.stringify(errors),
      statusCode: 301,
      headers: {
        Location: `/melted/index.html`,
      }
    };
  }
  const lollyByPath = data.lolliesByPath.data;
  console.log(lollyByPath);
// if found return a view
return{
    statusCode: 200,
    body: lollyTemplate(lollyByPath)
};

 
  
    

};