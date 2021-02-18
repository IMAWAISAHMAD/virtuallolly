const query =  require('./utils/query');
const {nanoid} = require('nanoid');
const CREATE_LOLLY = `
    mutation($flavourTop:String!,$flavourMiddle:String!,$flavourBottom:String!,$recipientName:String!,$message:String!,$senderName:String!,$lollyPath:String!){
        createLolly(data:{
            flavourTop:$flavourTop,
            flavourMiddle:$flavourMiddle,
            flavourBottom:$flavourBottom,
            recipientName:$recipientName,
            message:$message,
            senderName:$senderName,
            lollyPath:$lollyPath

        }),{
            _id,
            flavourTop,
            flavourMiddle,
            flavourBottom,
            recipientName,
            message,
            senderName,
            lollyPath
        }
    }
`   

exports.handler = async event => {
  const { flavourTop,flavourMiddle,flavourBottom,recipientName,message,senderName } = JSON.parse(event.body);
  const lollyPath = nanoid();
  const { data, errors } = await query(
    CREATE_LOLLY, {flavourTop,flavourMiddle,flavourBottom,recipientName,message,senderName,lollyPath});
 
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