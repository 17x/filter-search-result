let lists = ['baidu.com', 'google.com'];
let rule = null;
let reg = /baidu.com|google.com/g;
let match = location.host.match(reg);
if(match){
	rule = filterRules[match[0].replace('.com', '')];

	rule.removeAds();

	// console.log(document.body);

	const callback = function(mutationsList, observer) {
		rule && rule.removeAds();
		// console.log(mutationsList);
		/*for(let mutation of mutationsList) {
			if (mutation.type === 'childList') {
				console.log('A child node has been added or removed.');
			}
		}*/
	};

	const observer = new MutationObserver(callback);

	observer.observe(document.body, {attributes: false, childList: true, subtree: true});

} else{
	// console.warning('No rule here');
	// throw new Error('No rule here');
}
