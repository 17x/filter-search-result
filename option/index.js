let page = document.getElementById('buttonDiv');
const kButtonColors = ['#3AA757', '#E8453C', '#F9BB2D', '#4688F1'];

function constructOptions(kButtonColors){
	for(let item of kButtonColors){
		let button = document.createElement('button');
		button.style.backgroundColor = item;
		button.addEventListener('click', function(){
			chrome.storage.sync.set({color: item}, function(){
				console.log('color is ' + item);
			});
		});
		page.appendChild(button);
	}
}

constructOptions(kButtonColors);