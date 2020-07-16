let changeColor = document.getElementById('changeColor');
/*

chrome.storage.sync.get('color', function(data) {
	changeColor.style.backgroundColor = data.color;
	changeColor.setAttribute('value', data.color);
});
*/

changeColor.onclick = function(element){
	let color = element.target.value;
	console.log('change');
	chrome.tabs.query({
		active       : true,
		currentWindow: true
	}, function(tabs){
		console.log(tabs,color);
		chrome.tabs.executeScript(
			tabs[0].id,
			// {code: 'document.body.style.backgroundColor = "' + color + '";'}
			{code: 'console.log(999)'}
		);
	});
};