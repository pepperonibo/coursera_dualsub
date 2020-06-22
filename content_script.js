function injectCustomJs(jsPath)
{
	jsPath = jsPath || 'inject.js';
	var temp = document.createElement('script');
	temp.setAttribute('type', 'text/javascript');
	// 获得的地址类似：chrome-extension://ihcokhadfjfchaeagdoclpnjdiokfakg/js/inject.js
	temp.src = chrome.extension.getURL(jsPath);
	temp.onload = function()
	{
		// 执行完后移除掉
		this.parentNode.removeChild(this);
	};
	document.head.appendChild(temp);
}

injectCustomJs();
