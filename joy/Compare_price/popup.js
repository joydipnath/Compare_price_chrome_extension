// Inject the payload.js script into the current tab after the popout has loaded
window.addEventListener('load', function (evt) {
	var consoleStrValue = "";
	  OneSignal.getTags(function(tags) {
		console.log(tags);
		consoleStrValue += "getTags: " + JSON.stringify(tags) + "\n\n";;
		if((consoleStrValue.length) > 13)
		  {
		 document.getElementById('tag').style.display = 'none';
		  }
   });
	
	 chrome.extension.getBackgroundPage().chrome.tabs.executeScript(null, { file: 'myScript.js'} );
	 document.getElementById("getIds").onclick = getIds;
     document.getElementById("sendTag").onclick = sendTag;
     document.getElementById("getTags").onclick = getTags;
	 document.getElementById('getIds').style.display = 'none';
	 document.getElementById('getTags').style.display = 'none';
	 document.getElementById('console').style.display = 'none';
			 
});

// Listen to messages from the myScript.js script and write to popup.html
chrome.runtime.onMessage.addListener(function (message) {
        postUrl=message;
        local= 'http://www.valuecart.in/search?type=product&q=';
        local =local+postUrl;
        //console.log(local);
	    //document.getElementById('status').innerHTML = message;
        //loading the iframe just after clicking the icon-------------
        //       var f = $("#iframe");
            
  document.getElementById('iframe').src = local;      
  var myiframe = $("#iframe");

});
