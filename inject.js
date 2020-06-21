//插入到目标网页coursera.org的js
//coursera双语字幕

window.onload = function () {
        console.log("111111111");
        var myvideo = document.getElementsByTagName('video')[0];
        var alist = document.getElementsByTagName("div");
        // console.log(alist);
        // console.log(myvideo.textTracks);
        for (var i = 0; i < myvideo.textTracks.length; i++) {
                ["en", "zh-CN"].indexOf(myvideo.textTracks[i].language) > -1 ? myvideo.textTracks[i].mode = "showing" : myvideo.textTracks[i].mode = "hidden";
        }
}