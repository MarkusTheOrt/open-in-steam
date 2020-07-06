'use strict';

chrome.contextMenus.removeAll();
chrome.contextMenus.create({
	  title: "Open in Steam",
	  id: "OpenInSteam",
	  visible: true,
	  contexts: ["link", "all"],
	  onclick: function(e) {
		 if(e.linkUrl === undefined){
			chrome.tabs.create({"url": `steam://openurl/${e.pageUrl}`});
		 }
		 else{
			 chrome.tabs.create({"url": `steam://openurl/${e.linkUrl}`});
		 }
	  }
});
