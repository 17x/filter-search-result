let funcs = {
  'baidu': {
    removeAd: () => {
      [
        ...document.querySelectorAll('#content_left>div:has([data-tuiguang])'),
        ...document.querySelectorAll('[data-click*=snapshot]')
      ].map(ele => {
        ele.remove()
      });
    }
  },
  'google': {
    removeAd: () => {
      [
        ...document.querySelectorAll('.uEierd'),
        ...document.querySelectorAll('.commercial-unit-desktop-top'),
        ...document.querySelectorAll('#tads div'),
      ].map(ele => {
        ele.style.height = 0
        ele.style.opacity = 0
      });
    }
  },
  'taobao': {
    removeAd: () => {
      [...document.getElementsByTagName('img')]
        .filter(ele => {
          return ele.className.includes('mainP4pPic')
        })
        .map(ele => ele.closest('a'))
        .filter(ele => ele)
        .map(ele => {
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
      [...document.getElementsByClassName('p-promo-flag')]
        .map(ele => ele.closest('.gl-i-wrap'))
        .filter(ele => ele)
        .map(ele => {
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
      [
        ...document.querySelectorAll('.bili-video-card:has(.bili-video-card__info--ad)'),
        ...document.querySelectorAll('.bili-live-card:has(.bili-live-card__info--living)')
      ]
        .filter(ele => ele)
        .map(ele => {
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