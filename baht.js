var slaveonline = new String("online");
alert("online.");
API.on(API.CHAT, ChatExample);

function ChatExample(data) {
    if (data.message.toLowerCase() == "?status") {
        API.sendChat("@Slave Bot is: " + slaveonline + "!");
    } else {}

    if (data.message.toLowerCase() == "?offline" && data.from == "ϟ ๖ۣۜPaۣƦۣa๖ۣۜDۣoۣXۣۜ ϟ") { // Put your own name here or change to .fromID and put your ID.
        slaveonline = "offline";
        API.sendChat("@Slave Bot has been manually set offline.");
    } else {}
    if (data.message.toLowerCase() == "?online" && data.from == "ϟ ๖ۣۜPaۣƦۣa๖ۣۜDۣoۣXۣۜ ϟ") { // Same as above <3
        slaveonline = "online";
        API.sendChat("@Slave Bot has been manually set online.");
    } else {}
    if (data.message.toLowerCase() == "?check") {
        API.sendChat("I'm working, bellend.");
    } else {}
    if (data.messsage.toLowerCase() == ":trollface:") {
    	API.sendChat(":trollface:");
    } else {}
}


API.on(API.USER_LEAVE, offline);

function offline(user) {
    var slaveonline = 0;
    if (user.username == "Slave Bot") {
        API.sendChat(user.username + " went offline :'(")
    } else {}
}



API.on(API.USER_JOIN, online);

function online(user) {
    if (user.username == "Slave Bot") {
        var slaveonline = 1;
        API.sendChat(user.username + " is back online :D")
    }
}