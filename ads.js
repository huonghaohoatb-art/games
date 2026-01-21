(function() {
    var script = document.createElement('script');
    script.src = 'https://securepubads.g.doubleclick.net/tag/js/gpt.js';
    script.async = true;
    document.head.appendChild(script);

    window.googletag = window.googletag || {cmd: []};

    googletag.cmd.push(function() {
        googletag.defineSlot('/23323875495/game_interstitial', [320, 480], 'div-gpt-ad-rescue')
                 .addService(googletag.pubads());
        googletag.pubads().enableSingleRequest();
        googletag.enableServices();
    });

    function showRescueAd() {
        
        setTimeout(function() {
            var overlay = document.createElement('div');
            overlay.id = 'rescue-overlay';
            overlay.style.cssText = 'position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.85); z-index:2147483647; display:flex; justify-content:center; align-items:center; flex-direction:column;';
            
            var adBox = document.createElement('div');
            adBox.style.cssText = 'background:white; padding:0; border-radius:4px; position:relative; box-shadow: 0 0 15px rgba(255,255,255,0.2);';
            var closeBtn = document.createElement('div');
            closeBtn.innerText = '❌';
            closeBtn.style.cssText = 'position:absolute; top:-30px; right:0; color:white; font-family:sans-serif; cursor:pointer; font-weight:bold; font-size:14px; padding:5px;';
            closeBtn.onclick = function() { document.getElementById('rescue-overlay').remove(); };
            
            var adSlot = document.createElement('div');
            adSlot.id = 'div-gpt-ad-rescue';
            adSlot.style.width = '320px';
            adSlot.style.height = '480px';
            
            adBox.appendChild(closeBtn);
            adBox.appendChild(adSlot);
            overlay.appendChild(adBox);
            document.body.appendChild(overlay);

            googletag.cmd.push(function() {
                googletag.display('div-gpt-ad-rescue');
            });
            
        }, 5000);
    }

    if (document.readyState === 'complete') {
        showRescueAd();
    } else {
        window.addEventListener('load', showRescueAd);
    }
})();