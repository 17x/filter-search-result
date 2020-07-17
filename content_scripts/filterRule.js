let filterRules = {
	'baidu'    : {
		removeAds: () => {
			let oContentLeft = document.getElementById('content_left');
			let oContentRight = document.getElementById('content_right');

			if(!oContentLeft || !oContentRight){
				return
			}
			let list = [...oContentLeft.children];

			const determine = (ele) =>{
				return ele.innerText.indexOf('广告') !== -1;
			}

			Array.prototype.push.apply(list, [...oContentRight.children]);

		/*	console.log(
				oContentLeft.children.length,
				oContentRight.children.length
			);
			console.log(list.length);*/

			list.map(ele => {
				if(determine(ele)){
					let rect = ele.getBoundingClientRect();

					ele.style.backgroundColor = '#ECECEC';
					ele.style.width = rect.width + 'px';
					ele.style.height = rect.height + 'px';
					ele.style.lineHeight = rect.height + 'px';
					ele.style.textAlign = 'center';
					ele.innerHTML = '<span>AD</span>';
				}
			});
		}
	},
	'google'   : {
		removeAds: () => {
			return;
			console.log(window);
			let oContentLeft = document.getElementById('content_left');
			let oContentRight = document.getElementById('content_right');
			let list = [...oContentLeft.children];
			console.log(
				oContentLeft.children.length,
				oContentRight.children.length
			);
			Array.prototype.push.apply(list, [...oContentRight.children]);

			console.log(list.length);

			list.map(ele => {
				if(ele.innerText.indexOf('广告') !== -1){
					let rect = ele.getBoundingClientRect();

					ele.style.backgroundColor = '#ECECEC';
					ele.style.width = rect.width + 'px';
					ele.style.height = rect.height + 'px';
					ele.style.lineHeight = rect.height + 'px';
					ele.style.textAlign = 'center';
					ele.innerHTML = '<span>AD</span>';
				}
			});
		}
	},
	'blackList': []
};