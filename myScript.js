var vendor= document.domain;
var vendor= vendor.trim();
//var vendor1= document.title;

if(vendor == "www.flipkart.com" ){
	chrome.runtime.sendMessage(document.getElementsByTagName("H1")[0].textContent);
}

if(vendor == "www.amazon.in"){
	var x = document.getElementById("title");		 
	chrome.runtime.sendMessage(((x.getElementsByTagName("*")[0].textContent).trim()));
}

if(vendor == "www.snapdeal.com"){
	//var x = document.getElementById("title");
	chrome.runtime.sendMessage((((document.getElementsByTagName("H1")[0].textContent).trim()).split('(')[0]));
}
if(vendor == "www.infibeam.com"){
	var x = document.getElementById("title");
	chrome.runtime.sendMessage((((document.getElementsByTagName("H1")[0].textContent).trim()).split('(')[0]));
}

//else
//{
//chrome.runtime.sendMessage('its else');
//}


/**
 * Modified MIT License
 * 
 * Copyright 2015 OneSignal
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * 1. The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * 2. All copies of substantial portions of the Software may only be used in connection
 * with services provided by OneSignal.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

var consoleStrValue = "";

function getIds() {  
  OneSignal.getIdsAvailable(function(ids) {
	console.log("OneSignal GetIdsAvailable");
	console.log(ids);
	consoleStrValue += "getIdsAvailable:"
					+ "\nUserID: " + ids.userId
					+ "\nRegistration ID: " + ids.registrationId + "\n\n";
	document.getElementById("console").innerText = consoleStrValue;
	  
	
  });
}

function getTags() {
	OneSignal.getTags(function(tags) {
		console.log("OneSignal GetTags:");
		console.log(tags);
		consoleStrValue += "getTags: " + JSON.stringify(tags) + "\n\n";
		document.getElementById("console").innerText = consoleStrValue;
		
		
		
	});
}

function sendTag() {
	// Use sendTags passing in a JSON object if you want to send more than one key value pair at a time.
	OneSignal.sendTag(document.getElementById("tagKey").value, document.getElementById("tagValue").value);
}

OneSignal.addListenerForNotificationOpened(function(data) {
	console.log("Received ONESIGNAL_NOTIFICATION_OPENED:");
	console.log(data);
});
