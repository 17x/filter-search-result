let funcs = {
  'baidu': {
    removeAd: () => {
      let oContentLeft = document.getElementById('content_left');
      let oContentRight = document.getElementById('content_right');

      if (!oContentLeft || !oContentRight) {
        return
      }

      let listLeft = [
        ...oContentLeft.children,
        ...document.querySelectorAll('[data-click*=snapshot]')
      ];
      let listRight = [
        ...oContentRight.getElementsByTagName('a')
      ];

      const determine = (ele) => {
        return ele.innerHTML.indexOf('data-tuiguang') !== -1;
      }

      listLeft.map(ele => {
        if (determine(ele)) {
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
        if (ele.innerText.indexOf('广告') !== -1) {
          let rect = ele.getBoundingClientRect();
          let style = `
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
  'google': {
    removeAd: () => {
      let oTADs = document.getElementById('tads');

      let list = [
        ...document.querySelectorAll('.uEierd'),
        ...document.querySelectorAll('.commercial-unit-desktop-top'),
        ...oTADs ? oTADs.getElementsByTagName('div') : []
      ];

      list.map(ele => {
        ele.style.height = 0
        ele.style.opacity = 0
      });
    }
  },
  'taobao': {
    removeAd: () => {
      let items = [...document.getElementsByTagName('img')]
        .filter(ele => {
          return ele.className.includes('mainP4pPic')
        })
        .map(ele => ele.closest('a'))
        .filter(ele => ele);

      items.map(ele => {
        ele.style.opacity = '0.02'
        ele.style.pointerEvents = 'none'

        ;[...ele.getElementsByTagName('img')].map(img => {
          img.src = ''
        })
      });
    },
    helper: () => {
      document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
          let prev = document.querySelector('.next-pagination-pages .next-prev')

          prev && prev.click()
        }

        if (e.key === 'ArrowRight') {
          let next = document.querySelector('.next-pagination-pages .next-next')

          next && next.click()
        }
      })
    }
  },
  'jd': {
    removeAd: () => {
      let items = [...document.getElementsByClassName('p-promo-flag')]
        .map(ele => ele.closest('.gl-i-wrap'))
        .filter(ele => ele);

      items.map(ele => {
        ele.style.opacity = '0.02'
        ele.style.pointerEvents = 'none'

        ;[...ele.getElementsByTagName('img')].map(img => {
          img.src = ''
        })
      });
    }
  },
  'bilibili': {
    removeAd: () => {
      let items = [...document.querySelectorAll('.bili-video-card:has(.bili-video-card__info--ad)')]
        .filter(ele => ele);

      items.map(ele => {
        ele.style.opacity = '0'
        ele.style.pointerEvents = 'none'

        ;[...ele.getElementsByTagName('img')].map(img => {
          img.src = ''
        })
      });
    },

    helper: () => {
      const ele = document.querySelector('.bpx-player-ending-wrap')
      const isBangumi = location.host.match(/bilibili.com\/bangumi/);

      if (ele && !isBangumi) {
        const func = (e) => {
          const style = window.getComputedStyle(ele);

          if (style.visibility === 'visible') {
            setTimeout(() => {
              const btn = document.querySelector('.bpx-player-ending-related-item-cancel')
              btn && btn.click()
            }, 0)
          }
        }

        const observer = new MutationObserver(func);

        observer.observe(ele, {attributes: true});
      }
    }
  },
  'blackList': [],
};