const query = require("./utils/query");
 
const VIEW_LOLLY = `
   query($path:String!) {
    lolliesByPath(lollyPath:$path) {
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

exports.handler = async event => {
  const path = event.queryStringParameters.id.replace("/", "");
  
  const { data, errors } = await query(VIEW_LOLLY,{path});


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
/*   const lollyByPath = data.lolliesByPath.data;
  console.log(lollyByPath); */
// if found return a view
return{
    statusCode: 200,
    body: JSON.stringify({lollyByPath:data.lolliesByPath.data})
};

 
  
    

};