//插入到目标网页coursera.org的js
//coursera双语字幕

window.onload = function () {
        var myvideo = document.getElementsByTagName('video')[0];
        var alist = document.getElementsByTagName("div");
        for (var i = 0; i < myvideo.textTracks.length; i++) {
                ["en", "zh-CN"].indexOf(myvideo.textTracks[i].language) > -1 ? myvideo.textTracks[i].mode = "showing" : myvideo.textTracks[i].mode = "hidden";
        }
}
