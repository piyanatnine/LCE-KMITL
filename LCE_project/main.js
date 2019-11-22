var texter = chrome.contexxtMenus.create({
                                            title: "Changing",
                                            contexts: ["selection"],
                                            onclick: changing
                                        });

changing = funtion(word){
    var text = word.selectionText;
    chrome.pages.
}