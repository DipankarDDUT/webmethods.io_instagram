module.exports = {

  name: "recent_media_details",

  title: "Recent Media Details",

  description: "",
  version: "v1",

  input:{
    title: "Recent Media Details",
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
    var x="https://api.instagram.com/v1/users/self/media/recent/?access_token="+input.auth.access_token;
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
      "data": [{
        "comments": {
            "count": 0
        },
        "caption": {
            "created_time": "1296710352",
            "text": "Inside le truc #foodtruck",
            "from": {
                "username": "kevin",
                "full_name": "Kevin Systrom",
                "type": "user",
                "id": "3"
            },
            "id": "26621408"
        },
        "likes": {
            "count": 15
        },
        "link": "http://instagr.am/p/BWrVZ/",
        "user": {
            "username": "kevin",
            "profile_picture": "http://distillery.s3.amazonaws.com/profiles/profile_3_75sq_1295574122.jpg",
            "id": "3"
        },
        "created_time": "1296710327",
        "images": {
            "low_resolution": {
                "url": "http://distillery.s3.amazonaws.com/media/2011/02/02/6ea7baea55774c5e81e7e3e1f6e791a7_6.jpg",
                "width": 306,
                "height": 306
            },
            "thumbnail": {
                "url": "http://distillery.s3.amazonaws.com/media/2011/02/02/6ea7baea55774c5e81e7e3e1f6e791a7_5.jpg",
                "width": 150,
                "height": 150
            },
            "standard_resolution": {
                "url": "http://distillery.s3.amazonaws.com/media/2011/02/02/6ea7baea55774c5e81e7e3e1f6e791a7_7.jpg",
                "width": 612,
                "height": 612
            }
        },
        "type": "image",
        "users_in_photo": [],
        "filter": "Earlybird",
        "tags": ["foodtruck"],
        "id": "22721881",
        "location": {
            "latitude": 37.778720183610183,
            "longitude": -122.3962783813477,
            "id": "520640",
            "street_address": "",
            "name": "Le Truc"
        }
    },
    {
        "videos": {
            "low_resolution": {
                "url": "http://distilleryvesper9-13.ak.instagram.com/090d06dad9cd11e2aa0912313817975d_102.mp4",
                "width": 480,
                "height": 480
            },
            "standard_resolution": {
                "url": "http://distilleryvesper9-13.ak.instagram.com/090d06dad9cd11e2aa0912313817975d_101.mp4",
                "width": 640,
                "height": 640
            },
        "comments": {
            "count": 2
        },
        "caption": null,
        "likes": {
            "count": 1
        },
        "link": "http://instagr.am/p/D/",
        "created_time": "1279340983",
        "images": {
            "low_resolution": {
                "url": "http://distilleryimage2.ak.instagram.com/11f75f1cd9cc11e2a0fd22000aa8039a_6.jpg",
                "width": 306,
                "height": 306
            },
            "thumbnail": {
                "url": "http://distilleryimage2.ak.instagram.com/11f75f1cd9cc11e2a0fd22000aa8039a_5.jpg",
                "width": 150,
                "height": 150
            },
            "standard_resolution": {
                "url": "http://distilleryimage2.ak.instagram.com/11f75f1cd9cc11e2a0fd22000aa8039a_7.jpg",
                "width": 612,
                "height": 612
            }
        },
        "type": "video",
        "users_in_photo": null,
        "filter": "Vesper",
        "tags": [],
        "id": "363839373298",
        "user": {
            "username": "kevin",
            "full_name": "Kevin S",
            "profile_picture": "http://distillery.s3.amazonaws.com/profiles/profile_3_75sq_1295574122.jpg",
            "id": "3"
        },
        "location": null
    },
   ]
}

          */
/*
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


              */

            details:body.data


        })
      }
       
});
  
   
   }

  }

