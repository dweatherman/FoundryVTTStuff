//DanW  
//Called from Multi Level Tokens... 
//passes in token and args
console.log(region);
if(token.actor.data.type === "character" || token.actor.getUsers() !== []) {
    if(actor.data.data.skills.prc.passive >= args[0]) {
      let chatData = {
           user: game.user._id,
           speaker: ChatMessage.getSpeaker(),
           content: args[1]
      };
      ChatMessage.create(chatData, {});
	  let trapToken = canvas.drawings.placeables.find(t=>t.id === region.data._id);
	  console.log(trapToken);
	  trapToken.update({flags: {"multilevel-tokens": {disabled: !trapToken.data.flags["multilevel-tokens"].disabled}}});
      AudioHelper.play({src: "audio/Sounds/navi-hey-listen.mp3", volume: 0.8, autoplay: true, loop: false}, true);
   }
}
