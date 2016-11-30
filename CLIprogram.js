 var request = require('superagent');
 //var readlineSync = require('readline-sync');
 var authorId;

//  var accesstoken = readlineSync.question('Enter your acces token', {
//    hideEchoBack: true
//  });



 request
   .get('https://api.medium.com/v1/me')
   .set({
     Authorization: 'Bearer 255ef8a2976195d21d100d224e3ea903d18deab8d8de75bebb128d0592acee7bd',
     ContentType: 'application/json',
     Accept: 'application / json',
     AcceptCharset: 'utf - 8'
   })
   .end(function (err, res) {
     console.log(res.body);
     authorId = res.body.data.id;
     postToMedium(authorId);
   });

 function postToMedium(authorId) {
   request
     .post('https://api.medium.com/v1/users/' + authorId + '/posts')
     .set({
       Authorization: 'Bearer 255ef8a2976195d21d100d224e3ea903d18deab8d8de75bebb128d0592acee7bd',
       ContentType: 'application / json',
       Accept: 'application / json',
       AcceptCharset: 'utf - 8'
     })
     .send({
       "title": "Learning how to consume APIs",
       "contentFormat": "html",
       "content": "<h1>Hello</h1><p>Self-Learning.</p>",
       "tags": ["Andela", "sport", "AndelaBootcamp"],
       "publishStatus": "draft"
     })
     .end(function (err, res) {
       console.log(res.body);
     });

 }