const query =  require('./utils/query');
const axios = require('axios');
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
  
    if(data){
    console.log('data: ',data);

    // Trigger a new build to freeze this lolly forever
     axios.post('https://api.netlify.com/build_hooks/602e3ac0139216d59faf3f11')
    .then(function (response) {
      console.log('build hook response: ',response);
    })
    .catch(function (error) {
      console.error('build hook response: ',error);
    });

    // Success! Go to a page to view the result
    return{
      body: JSON.stringify({ lolly: data.createLolly }),
      statusCode: 302,
      headers: {
        Location: `/lolly/${lollyPath}`,
      }
    };

  }

    if(errors){
    console.error('error', error);
    // Error! return the error with statusCode 400
      return{
        statusCode: 400,
        body: JSON.stringify(error)
      };
    }

}; 