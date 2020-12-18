let filterRules = {
	'baidu'    : {
		removeAds: () => {
			let oContentLeft = document.getElementById('content_left');
			let oContentRight = document.getElementById('content_right');

			if(!oContentLeft || !oContentRight){
				return
			}
			let listLeft = [
				...oContentLeft.children,
			];
			let listRight= [
				...oContentRight.getElementsByTagName('a')
			];

			const determine = (ele) =>{
				return ele.innerHTML.indexOf('data-tuiguang') !== -1;
			}

			listLeft.map(ele => {
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

			listRight.map(ele => {
				if(ele.innerText.indexOf('广告') !== -1){
					let rect = ele.getBoundingClientRect();
					let style=`
						background-color:#ECECEC;
						width:${rect.width}px;
						height:${rect.height}px;
						line-height:${rect.height}px;
						text-align:center;					
					`
					ele.outerHTML = `<div style="${style}"><span>AD</span></div>`;
				}
			});
		}
	},
	'google'   : {
		removeAds: () => {
			let oTADs = document.getElementById('tads');
			if(!oTADs)return;
			let list = [
				...oTADs.getElementsByTagName('div')
			];

			// console.log(list);

			list.map(ele => {
				// if(ele.innerText.indexOf('广告') !== -1){}
				let rect = ele.getBoundingClientRect();

				ele.style.backgroundColor = '#ECECEC';
				ele.style.width = rect.width + 'px';
				ele.style.height = rect.height + 'px';
				ele.style.lineHeight = rect.height + 'px';
				ele.style.textAlign = 'center';
				ele.innerHTML = '<span>AD</span>';

			});
		}
	},
	'blackList': []
};