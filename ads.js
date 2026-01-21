// 1. Khai báo thư viện Google
window.googletag = window.googletag || {cmd: []};

googletag.cmd.push(function() {
    // Đã điền sẵn mã mạng 23323875495 và mã quảng cáo game_interstitial bạn vừa tạo
    googletag.defineSlot('/23323875495/game_interstitial', [300, 250], 'div-gpt-ad-rescue')
             .addService(googletag.pubads());
    googletag.pubads().enableSingleRequest();
    googletag.enableServices();
});

function showRescueAd() {
    console.log("Đang đếm ngược 5s để hiện quảng cáo...");
    
    setTimeout(function() {
        var overlay = document.createElement('div');
        overlay.id = 'rescue-overlay';
        overlay.style.cssText = 'position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.8); z-index:99999; display:flex; justify-content:center; align-items:center; flex-direction:column;';
        
        var adBox = document.createElement('div');
        adBox.style.cssText = 'background:white; padding:10px; border-radius:5px; position:relative;';
        
        var closeBtn = document.createElement('button');
        closeBtn.innerText = 'Đóng quảng cáo [X]';
        closeBtn.style.cssText = 'margin-bottom:10px; cursor:pointer; padding:5px 10px; border:none; background:#ff4444; color:white; border-radius:3px;';
        closeBtn.onclick = function() { document.getElementById('rescue-overlay').remove(); };
        
        var adSlot = document.createElement('div');
        adSlot.id = 'div-gpt-ad-rescue';
        adSlot.style.width = '300px';
        adSlot.style.height = '250px';
        
        adBox.appendChild(closeBtn);
        adBox.appendChild(adSlot);
        overlay.appendChild(adBox);
        document.body.appendChild(overlay);

        googletag.cmd.push(function() {
            googletag.display('div-gpt-ad-rescue');
        });
        
    }, 5000); 
}

window.addEventListener('load', showRescueAd);