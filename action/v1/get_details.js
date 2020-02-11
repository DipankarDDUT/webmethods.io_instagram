module.exports = {

  name: "get_details",

  title: "Get Details",

  description: "",
  version: "v1",

  input:{
    title: "Get Details",
    type: "object",
    properties: {

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
var x="https://api.instagram.com/v1/users/self/?access_token="+input.auth.access_token;
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
  "data": {
    "id": "1574083",
    "username": "snoopdogg",
    "full_name": "Snoop Dogg",
    "profile_picture": "http://distillery.s3.amazonaws.com/profiles/profile_1574083_75sq_1295469061.jpg",
    "bio": "This is my bio",
    "website": "http://snoopdogg.com",
    "is_business": false,
    "counts": {
      "media": 1320,
      "follows": 420,
      "followed_by": 3410
    }
  }
}


          */

            id : body.data.id,
            username : body.data.username,
            profile_picture_link : body.data.profile_picture,
            bio : body.data.bio,
            website : body.data.website,
            is_business : body.data.is_business,
            no_of_media : body.data.counts.media,
            no_of_followers : body.data.counts.followed_by,
            no_of_follows : body.data.counts.follows,
           // details :



        })
      }
       
});
  
   
   }

  }
