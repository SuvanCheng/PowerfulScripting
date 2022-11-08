// ==UserScript==
// @name         Powerful Thumb
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  auto thumb up for juejin.cn
// @author       You
// @match        https://juejin.cn/user/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=juejin.cn
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var i = 1;
    window.setInterval( //每隔1秒执行一次
        function () {
            var str1 = '#juejin > div.view-container > main > div.view.user-view > div.major-area > div.list-block > div > div.list-body > div > div > div > div:nth-child('+(i)+') > div > div.action-box.post-item-actions > div.action.like-action.active > div'
            var str2 = '#juejin > div.view-container > main > div.view.user-view > div.major-area > div.list-block > div > div.list-body > div > div > div > div:nth-child('+(i)+') > div > div.action-box.post-item-actions > div.action.like-action > div'
            var str3 = '#juejin > div.view-container > main > div.view.user-view > div.major-area > div.list-block > div > div.list-body > div > div > div > div:nth-child('+(i)+') > div.post-item.content-item > div.action-box.post-item-actions > div.action.like-action.active > div"'
            var str4 = '#juejin > div.view-container > main > div.view.user-view > div.major-area > div.list-block > div > div.list-body > div > div > div > div:nth-child('+(i)+') > div.post-item.content-item > div.action-box.post-item-actions > div.action.like-action > div"'
            var strS = '#juejin > div.view-container > main > div.view.user-view > div.major-area > div.list-block > div > div.list-body > div > div.entry-list.list.entry-list > li:nth-child('+(i)+') > div > div.content-wrapper > div > ul > li.item.like.active"'
            var strD = '#juejin > div.view-container > main > div.view.user-view > div.major-area > div.list-block > div > div.list-body > div > div.entry-list.list.entry-list > li:nth-child('+(i)+') > div > div.content-wrapper > div > ul > li.item.like"'
            if(document.querySelector(str1) == null || document.querySelector(str3) == null || document.querySelector(strS) == null){
                document.querySelector(str2).click();
                document.querySelector(str4).click();
                document.querySelector(strD).click();
                i++;
            }
            else{
                i++;
            }
        }, 1000);
    // Your code here...
})();