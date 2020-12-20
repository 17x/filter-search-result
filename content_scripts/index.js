// let lists = ['baidu.com', 'google.com'];
let rule = null;
let reg = /baidu.com|google.com|taobao.com|jd.com/g;
let match = location.host.match(reg);
if(match){
	rule = filterRules[match[0].replace('.com', '')];

	const throttle = (fn,threshold = 1000) =>{
		let timer;
		let _last = false;

		return (e)=>{
			if(!_last){
				_last = true;

				fn(e);

				timer = setTimeout(() => {
					// reset
					_last = null;
				}, threshold);
			}
		}
	}

	const callback = function(mutationsList, observer) {
		rule && rule.removeAds();
		// console.log(mutationsList);
		/*for(let mutation of mutationsList) {
			if (mutation.type === 'childList') {
				console.log('A child node has been added or removed.');
			}
		}*/
	};

	const observer = new MutationObserver(throttle((e) => callback()));

	observer.observe(document.body, {attributes: false, childList: true, subtree: true});

	callback();

} else{
	// console.warning('No rule here');
	// throw new Error('No rule here');
}
