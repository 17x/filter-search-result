// let lists = ['baidu.com', 'google.com'];
let rule = null;
let reg = /baidu.com|google.com|taobao.com|jd.com/g;
let match = location.host.match(reg);
if (match) {
  rule = funcs[match[0].replace('.com', '')];

  let {removeAd, helper} = rule

  if (removeAd) {
    const throttle = (fn, threshold = 1000) => {
      let timer;
      let _last = false;

      return (e) => {
        if (!_last) {
          _last = true;

          fn(e);

          timer = setTimeout(() => {
            // reset
            _last = null;
          }, threshold);
        }
      }
    }

    const observer = new MutationObserver(throttle((e) => removeAd(), 100));

    observer.observe(document.body, {attributes: false, childList: true, subtree: true});

    removeAd();

    document.addEventListener("DOMContentLoaded", removeAd);
  }

  window.addEventListener("load", () => {
    removeAd && removeAd()
    helper && helper()
  });

} else {
  // console.warning('No rule here');
  // throw new Error('No rule here');
}
