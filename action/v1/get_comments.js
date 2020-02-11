module.exports = {

  name: "get_comments",

  title: "Get Comments",

  description: "",
  version: "v1",


/*
  title: "PersonID",
        displayTitle: "Some prefex",
        description: "",
        type: "string",
        minLength: 0,
        propertyOrder: 1,
        lookup: {
          id: "look1",
          dependencies: ["prefex"]

*/


  input:{
    title: "Get Comments",
    type: "object",
    properties: {
          mediaID:{
                title:"mediaID",
                description:"Input the media id",
                type : "string",
                minLength : 0,
                propertyOrder : 1,



          }
    }
  },

  output: {
    title: "output",
  	type: "object",
  	properties: {

    }
  },

  mock_input:{},

  execute: function(input, output){
    var request = require("request");
   // https://api.instagram.com/v1/media/{media-id}/comments?access_token=ACCESS-TOKEN
    var x="https://api.instagram.com/v1/media/"+input.mediaID+"/comments?access_token="+input.auth.access_token;
//var x="https://api.instagram.com/v1/users/self/?access_token="+input.auth.access_token;
  //var x="https://softwareag2.pipedrive.com/v1/persons/"+input.prefex+"?api_token="+input.auth.token;//b6e44370f4062645dab76a989de15b0e263a89a5";
  //var x="https://"+input.auth.Domain+".aha.io/api/v1/products";
//var y="Bearer "+ "b6e44370f4062645dab76a989de15b0e263a89a5";//input.auth.API_Key;
//var pre1=input.prefex;
//var dom= input.name;
//var name= {
  // "name": dom,
   //"description": "update person details",
 //};
   var options = {
    "method": "GET",
     //"api_key": y,
     "url": x,
    
  // body: {
   //"name": dom,
//},
 json: true
  
    }
  
  
  request(options, function (error, response, body) {
 try {
           if (body && typeof(body) === "string") {
               body = JSON.parse(body);
           }
       } catch (e) {
           return output(body);
       };
   
     if (response.statusCode === 403) {
           return output("the authentication information is incorrect.");
       }
    if (response.statusCode === 400) {
           return output("there is an error in the construction of the request. The body of the response will contain more detail of the problem.");
       }
   if (response.statusCode === 404) {
     return output(body);
           return output(" the requested record could not be found. This may also occur if the user does not have access to the requested record");
       }
       if (response.statusCode !== 200) {
           return output(body.status.errorDetails);
       }
    if (response.statusCode === 200) {
          // return output(body);
         
      // }
       //output(body);
       output(null,
        {  
          /*
{
    "data": [
        {
            "created_time": "1280780324",
            "text": "Really amazing photo!",
            "from": {
                "username": "snoopdogg",
                "profile_picture": "http://images.instagram.com/profiles/profile_16_75sq_1305612434.jpg",
                "id": "1574083",
                "full_name": "Snoop Dogg"
            },
            "id": "420"
        },
        ...
    ]
}

          */
         details:body.data,
            
          
          
           // details :



        })
      }
       
});
  
   
   }

  }
