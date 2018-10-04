var botId = "f1ebcea879a463e46ac4c07fab";
function sendText(text){
  UrlFetchApp.fetch("https://api.groupme.com/v3/bots/post", {"method":"post", "payload":'{"bot_id":"' + botId + '","text":"' + text + '"}'})
}

//respond to messages sent to the group. Recieved as POST
//this method is automatically called whenever the Web App's URL is called
function doPost(e){
  var post = JSON.parse(e.postData.getDataAsString());
  var text = post.text;
  var name = post.name
  
  //Says Hello
  if(text.toLowerCase().substring(0, 3) == "!hi"){
    sendText("Hello, " + name);
  }
  //Says a joke
  if(text.toLowerCase().substring(0, 5) == "!joke"){
    getJoke(name);
  }
  //lists commands
   if(text.toLowerCase().substring(0, 6) == "!help"){
    sendText("All commands must start with '!'. ");
    sendText("Current Commands: hi, d20, d12, d10, d8, d6, d4, coin, joke.");
  }
  //DICE FUNCTIONS############################################################################
  //d20---------------------------------------------------------------------------------------
  if(text.toLowerCase().substring(0, 5) == "!d20" || text.toLowerCase().substring(0, 5) == "!2d20" || text.toLowerCase().substring(0, 5) == "!3d20" || text.toLowerCase().substring(0, 5) == "!4d20" || text.toLowerCase().substring(0, 5) == "!5d20" || text.toLowerCase().substring(0, 5) == "!6d20" || text.toLowerCase().substring(0, 5) == "!7d20" || text.toLowerCase().substring(0, 5) == "!8d20" || text.toLowerCase().substring(0, 5) == "!9d20"){
     if(text.toLowerCase().substring(0, 5) == "!d20"){
     sendText(roll20().toString());
     } 
     else{
       var num = parseInt(text.substring(1,2));
       var txt = "";
       for(var i = 0; i < num; i++){
         txt += roll20().toString() + " | ";
       } 
       sendText(txt);
     }
  }
  //d12---------------------------------------------------------------------------------------
  if(text.toLowerCase().substring(0, 5) == "!d12" || text.toLowerCase().substring(0, 5) == "!2d12" || text.toLowerCase().substring(0, 5) == "!3d12" || text.toLowerCase().substring(0, 5) == "!4d12" || text.toLowerCase().substring(0, 5) == "!5d12" || text.toLowerCase().substring(0, 5) == "!6d12" || text.toLowerCase().substring(0, 5) == "!7d12" || text.toLowerCase().substring(0, 5) == "!8d12" || text.toLowerCase().substring(0, 5) == "!9d12"){
     if(text.toLowerCase().substring(0, 5) == "!d12"){
     sendText(roll12().toString());
     } 
     else{
       var num = parseInt(text.substring(1,2));
       var txt = "";
       for(var i = 0; i < num; i++){
         txt += roll12().toString() + " | ";
       } 
       sendText(txt);
     }
  }
  //d10---------------------------------------------------------------------------------------
  if(text.toLowerCase().substring(0, 5) == "!d10" || text.toLowerCase().substring(0, 5) == "!2d10" || text.toLowerCase().substring(0, 5) == "!3d10" || text.toLowerCase().substring(0, 5) == "!4d10" || text.toLowerCase().substring(0, 5) == "!5d10" || text.toLowerCase().substring(0, 5) == "!6d10" || text.toLowerCase().substring(0, 5) == "!7d10" || text.toLowerCase().substring(0, 5) == "!8d10" || text.toLowerCase().substring(0, 5) == "!9d10"){
     if(text.toLowerCase().substring(0, 5) == "!d10"){
     sendText(roll10().toString());
     } 
     else{
       var num = parseInt(text.substring(1,2));
       var txt = "";
       for(var i = 0; i < num; i++){
         txt += roll10().toString() + " | ";
       } 
       sendText(txt);
     }
  }
  //d8---------------------------------------------------------------------------------------
  if(text.toLowerCase().substring(0, 5) == "!d8" || text.toLowerCase().substring(0, 5) == "!2d8" || text.toLowerCase().substring(0, 5) == "!3d8" || text.toLowerCase().substring(0, 5) == "!4d8" || text.toLowerCase().substring(0, 5) == "!5d8" || text.toLowerCase().substring(0, 5) == "!6d8" || text.toLowerCase().substring(0, 5) == "!7d8" || text.toLowerCase().substring(0, 5) == "!8d8" || text.toLowerCase().substring(0, 5) == "!9d8"){
     if(text.toLowerCase().substring(0, 5) == "!d8"){
     sendText(roll8().toString());
     } 
     else{
       var num = parseInt(text.substring(1,2));
       var txt = "";
       for(var i = 0; i < num; i++){
         txt += roll8().toString() + " | ";
       } 
       sendText(txt);
     }
  }
  //d6---------------------------------------------------------------------------------------
   if(text.toLowerCase().substring(0, 5) == "!d6" || text.toLowerCase().substring(0, 5) == "!2d6" || text.toLowerCase().substring(0, 5) == "!3d6" || text.toLowerCase().substring(0, 5) == "!4d6" || text.toLowerCase().substring(0, 5) == "!5d6" || text.toLowerCase().substring(0, 5) == "!6d6" || text.toLowerCase().substring(0, 5) == "!7d6" || text.toLowerCase().substring(0, 5) == "!8d6" || text.toLowerCase().substring(0, 5) == "!9d6"){
     if(text.toLowerCase().substring(0, 5) == "!d6"){
     sendText(roll6().toString());
     } 
     else{
       var num = parseInt(text.substring(1,2));
       var txt = "";
       for(var i = 0; i < num; i++){
         txt += roll6().toString() + " | ";
       } 
       sendText(txt);
     }
  }
  //d4---------------------------------------------------------------------------------------
  if(text.toLowerCase().substring(0, 5) == "!d4" || text.toLowerCase().substring(0, 5) == "!2d4" || text.toLowerCase().substring(0, 5) == "!3d4" || text.toLowerCase().substring(0, 5) == "!4d4" || text.toLowerCase().substring(0, 5) == "!5d4" || text.toLowerCase().substring(0, 5) == "!6d4" || text.toLowerCase().substring(0, 5) == "!7d4" || text.toLowerCase().substring(0, 5) == "!8d4" || text.toLowerCase().substring(0, 5) == "!9d4"){
     if(text.toLowerCase().substring(0, 5) == "!d4"){
     sendText(roll4().toString());
     } 
     else{
       var num = parseInt(text.substring(1,2));
       var txt = "";
       for(var i = 0; i < num; i++){
         txt += roll4().toString() + " | ";
       } 
       sendText(txt);
     }
  }
  //END DICE####################################################################
  
  //Coin Function
   if(text.toLowerCase().substring(0, 5) == "!coin"){
     if(coin() == 2){
       sendText("Heads");
     }else{
       sendText("Tails");
     }
  }
  
  //Image Function BETA/WIP
  if(text.toLowerCase().substring(0, 6) == "!image"){
		var query = text.slice(6);
		sendText(image(query).toString());
     }
 
//END CALL FUNCTIONS
}

//START WORK FUNCTIONS
//get the random number
function roll20(){
 return Math.floor(Math.random() * (20 - 1 + 1)) + 1;
}
//get the random number
function roll12(){
 return Math.floor(Math.random() * (12 - 1 + 1)) + 1;
}
//get the random number
function roll10(){
 return Math.floor(Math.random() * (10 - 1 + 1)) + 1;
}
//get the random number
function roll8(){
 return Math.floor(Math.random() * (8 - 1 + 1)) + 1;
}
//get the random number
function roll6(){
 return Math.floor(Math.random() * (6 - 1 + 1)) + 1;
}
//get the random number
function roll4(){
 return Math.floor(Math.random() * (4 - 1 + 1)) + 1;
}
//flip coin
function coin(){
  return Math.floor(Math.random() * (2 - 1 + 1)) + 1;
}
//google image
function image(query) {

    //how many results do you want returned
    var results = 1;
    //on or off for safe images (no porn etc when on)
    var safe = 'off';
   //your google api key
    var api_key = 'AIzaSyDzeWcJLtQ9AfQhBvDRXqeQsbHeFXfweEk';

   //google search engine id https://www.google.com/cse/create/new
    var search_engine_id = '009525499565799670439:rurevivmute';


 var theUrl = 'https://www.googleapis.com/customsearch/v1?q='
  + query + '&safe='+ safe + '&num=' + results + '&cx='
  + search_engine_id + '&searchType=image&key=' + api_key;



  try {
    var response = UrlFetchApp.fetch(theUrl);
    var json = response.getContentText();
    var data = JSON.parse(response);
    //return only the first result
    var link = data.items[0].link;
  }
  catch (Exception)
  {
    Logger.log(Exception);
    var link = 'You pushed me too far, too fast';
  }

    return link;

}
//does nothing for now
function doGet(){}

//Selects a joke at random
function getJoke(x){
  var user = x.toString();
  var num = Math.floor(Math.random() * (34 - 1 + 1)) + 1;
  if(num == 1){
    sendText("What smells worse than a goblin? Oh yeah, " + user + "!");
  }
  else if(num == 2){
    sendText("You're going to make an excellent belt!");
  }
  else if(num == 3){
    sendText("I'm glad " + user + " is tall...It means there's more of you I can despise!");
  }
  else if(num == 4){
    sendText("I don't know whether to use charm person or hold monster!");
  }
  else if(num == 5){
    sendText("Ugh. What the hell is that all over your face? Oh...its just your face!");
  } 
  else if(num == 6){
    sendText(user + " is the feces that is created when shame eats too much stupidly!");
  }
  else if(num == 7){
    sendText(user + " would bore the legs off a village idiot!");
  }
  else if(num == 8){
    sendText(user + " It gives me a headache just trying to think down to your level!");
  }
  else if(num == 9){
    sendText(user + " is not a complete idiot...Some parts are obviously missing!");
  }
  else if(num == 10){
    sendText("You're like a trained ape, only, without the training!");
  }
  else if(num == 11){
    sendText(user + " Are you always stupid, or are you making a special effort today!");
  }
  else if(num == 12){
    sendText("Some day you'll go far and I hope you stay there!");
  }
  else if(num == 13){
    sendText(user + " is so lucky to have been born beautiful, unlike me, who was born a big liar!");
  }
  else if(num == 14){
    sendText("Hey " + user + " I'd like to leave you with one thought...but I'm not sure you have anywhere to put it!");
  }
  else if(num == 15){
    sendText("A wet cat is tougher than " + user + "!");
  }
  else if(num == 16){
    sendText("If ignorance is bliss, " + user + " must be the happiest person alive!");
  }
  else if(num == 17){
    sendText("Wow, that's a fat ass. I guess those behind " + user + " are gaining cover for this fight!");
  }
  else if(num == 18){
    sendText("I could say " + user + " is as ugly as an ogre, but that would be an insult to ogres!");
  }
  else if(num == 19){
    sendText("A goblin with one hand nailed to a tree would be more of a threat than " + user + "!");
  }
  else if(num == 20){
    sendText(user + ", You are the worst example of your class that I've ever come across!");
  }
  else if(num == 21){
    sendText("Hey " + user + " Why don't you give me your weapon so I can hit myself with it, because that'd be more effective than you using it!");
  }
  else if(num == 22){
    sendText("I'd insult " + user + "'s parents, but they probably don't know who they are!");
  }
  else if(num == 23){
    sendText("Whomever is willing to have sex with " + user + " is just too lazy to jerk off!");
  }
  else if(num == 24){
    sendText("Somewhere " + user + " is depriving a village of it's idiot!");
  }
  else if(num == 25){
    sendText("You call that an attack, I've seen dead kittens hit harder than that!");
  }
  else if(num == 26){
    sendText("Excuse me " + user + " do you have a pen? Well you'd better get back to it before the farmer knows you are missing!");
  }
  else if(num == 27){
    sendText("By looking at " + user + ", I now know what you get when you scrape out the bottom of the barrel!");
  }
  else if(num == 28){
    sendText("You're like a gnome on stilts, real cute, but it's not working!");
  }
  else if(num == 29){
    sendText("One day I'm going to make a ballad of this fight. Tell me your name, I hope it rhymes with horribly slaughtered!");
  }
  else if(num == 30){
    sendText("Wait, wait, " + user + " I just need to ask, what do you need us to put on your headstone!");
  }
  else if(num == 31){
    sendText("I've heard of schoolgirls with better fighting skills than " + user + "!");
  }
  else if(num == 32){
    sendText("You do know the pointy end is suppose to go in the other guy, right!");
  }
  else if(num == 33){
    sendText(user + "I was wondering what you're going to do for a face when the monkey wants his arse back?");
  }
  else if(num == 34){
    sendText(user + ", I find thy face apelike and thy form misshapen. Thy beard, moreover, is an offense against decency, resembling more closely the scabrous fur which doth decorate the hinder portion of a mongrel dog than a proper adornement for a human face. Is it possible that thy mother, seized by some wild lechery, did dally at some time past with a random goat?");
  }
 // else if(num == 35){
 //   sendText("");
 // }  
//End Joke Function    
}
