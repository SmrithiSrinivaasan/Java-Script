/*
 * Programming Quiz: Facebook Friends (7-5)
 */

// your code goes here
var facebookProfile = {
    name : "Smrithi",
    friends : 700,
    messages : ["m1", "m2", "m3"],
    postMessage : function (message){
        return facebookProfile.messages.push(message);
    },
    deleteMessage : function (index) {
        return facebookProfile.messages.splice(index,1);
    },
    addFriend : function () {
        return facebookProfile.friends += 1; 
    },
    removeFriend : function () {
        return facebookProfile.friends -= 1; 
    }
};

console.log(facebookProfile.name);
console.log(facebookProfile.friends);
console.log(facebookProfile.messages);
console.log(facebookProfile.postMessage("m4"));
console.log(facebookProfile.messages);
console.log(facebookProfile.deleteMessage(2));
console.log(facebookProfile.messages);
console.log(facebookProfile.addFriend());
console.log(facebookProfile.friends);
console.log(facebookProfile.removeFriend());
console.log(facebookProfile.friends);