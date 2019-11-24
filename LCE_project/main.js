function getword(info,tab) {
    console.log("Change" + info.selectionText + "Right?");
    chrome.tabs.create({  
      url: "http://www.google.com/search?q=" + info.selectionText
    });
  }


chrome.contextMenus.create({
    title: "LCE-Project", 
    contexts:["selection"], 
    onclick: getword
});