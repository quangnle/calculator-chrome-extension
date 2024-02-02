var menuItem = {
    "id": "calculate",
    "title": "Calculate it!",
    "contexts": ["selection"]
};

chrome.contextMenus.create(menuItem);

chrome.contextMenus.onClicked.addListener(function(context, tab){   
    if (context.menuItemId == "calculate" && context.selectionText){   
        chrome.storage.sync.set({'expr': context.selectionText, 'tab': tab.id});
        //alert(tab.id)
        if (tab.url.includes('chrome://')){
            console.log('can`t run on start page')
        } else {
            console.log(tab.url);
            chrome.scripting.executeScript({
                target: {tabId: tab.id},
                files: ["open-modal-script.js", "math.js"]
           });
        }
    }
});