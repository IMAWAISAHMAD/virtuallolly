const query =  require('./utils/query');

const CREATE_LOLLY = `
    mutation($flavourTop:String!,$flavourMiddle:String!,$flavourBottom:String!,$recipientName:String!,$message:String!,$sendersName:String!){
        createLolly(data:{
            flavourTop:$flavourTop,
            flavourMiddle:$flavourMiddle,
            flavourBottom:$flavourBottom,
            recipientName:$recipientName,
            message:$message,
            sendersName:$sendersName

        }),{
            _id,
            flavourTop,
            flavourMiddle,
            flavourBottom,
            recipientName,
            message,
            sendersName
        }
    }
`   

exports.handler = async event => {
  
  const { flavourTop,flavourMiddle,flavourBottom,recipientName,message,sendersName } = JSON.parse(event.body);
  const { data, errors } = await query(
    CREATE_LOLLY, {flavourTop,flavourMiddle,flavourBottom,recipientName,message,sendersName});
 
  if (errors) {
    return {
      statusCode: 500,
      body: JSON.stringify(errors)
    };
  }
 
  return {
    statusCode: 200,
    body: JSON.stringify({ lolly: data.createLolly })
  };
}; 