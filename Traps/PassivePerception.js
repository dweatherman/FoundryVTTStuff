//DanW
//Called from Multi Level Tokens...
//arguments example = "A trap opens up!","DC15 Dex, 1d6 bludgeoning"
//args[0]=message to player
//args[1]=whisper to gm
//console.log(region);
let trapToken = canvas.drawings.placeables.find(t=>t.id === region.data.id)
if(trapToken)
{
  //console.log("found trap");
  trapToken.update({"hidden" : false});
  let chatData = {
           user: game.user._id,
           speaker: ChatMessage.getSpeaker(),
           content: args[0]
  };
  ChatMessage.create(chatData, {});
  
  let privateChat = {
    user: game.user._id,
	//speaker: ChatMessage.getSpeaker(),
	whisper : ChatMessage.getWhisperRecipients("GM"),
	content: args[1]
  };
  ChatMessage.create(privateChat, {});
  trapToken.update({flags: {"multilevel-tokens": {disabled: !trapToken.data.flags["multilevel-tokens"].disabled}}});
  
}
