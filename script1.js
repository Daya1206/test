var database = [
    {
        username:"daya1206",
        password: "secret"
    },
    {
        username:"anu",
        password: "anu@143"
    },
    {
        username:"km",
        password: "km"
    }
 ];

 var newsFeed = [
    {
     username:"Bobby",
     timeline:" In love With Bangalore Climate ",
    },
    {
     username:" johnny",
     timeline:" javascript is pretty cool Dude!"
    }
 ];

 var userNamePrompt = prompt("what's ur name ?");
 var passWordPrompt = prompt("what's ur password?");

 function isUserValid(username , password){
    for (var i=0; i<database.length; i++){
        if(database[i].username === username && database[i].password === password ){
         return true;
        }
    }
     return false;
 }

 function signIn(username , password){
     
    if(isUserValid(username , password)){
        console.log("newsFeed");
    }else{
       alert ("Sorry! F**k off");
   }
}
signIn(userNamePrompt , passWordPrompt);