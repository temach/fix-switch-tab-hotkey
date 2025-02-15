chrome.commands.onCommand.addListener(async (cmd) => {
  let arrTabs = await chrome.tabs.query({ currentWindow: true });

	// Locate the active tab in the array
	let nActive = arrTabs.findIndex( oTab => oTab.active === true );

	if (cmd === 'lefttab') {
		  // Figure out the tab id
		  if (nActive > 0){
		  	var newId = arrTabs[nActive - 1].id;
		  } else {
		  	// go to the last tab
		  	newId = arrTabs[arrTabs.length - 1].id;
		  }
		  // Make it active
		  chrome.tabs.update(newId, {active:true});
   } else if (cmd === 'righttab') {
		  // Figure out the tab id
		  if (nActive < (arrTabs.length - 1)){
		  	newId = arrTabs[nActive + 1].id;
		  } else {
		  	// go to the first tab
		  	newId = arrTabs[0].id;
		  }
		  // Make it active
		  chrome.tabs.update(newId, {active:true});
	 }

});
