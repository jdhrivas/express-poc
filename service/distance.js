var request = require('request');

const apiKey = process.env.ZIPCODE_API_KEY || "t1DSryH5HhxLHB9P95a6z16V8CkIPvlwGl82e99WMq69wGvjpPqEMVjbiZv9spIu";
const zipCodeURL = 'https://www.zipcodeapi.com/rest/';

var distance = {
   find: function(req, res, next) {
       request(zipCodeURL + apiKey 
               + '/distance.json/' + req.params.zipcode1 + '/' 
               + req.params.zipcode2 + '/mile',
       function (error, response, body) {
           if (!error && response.statusCode == 200) {
               response = JSON.parse(body);
               res.send(response);
           } else {
               console.log(response.statusCode + response.body);
               res.send({distance: -1});
           }
       });

   }
};

module.exports = distance;