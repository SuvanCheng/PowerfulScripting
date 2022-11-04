// ==UserScript==
// @name         PowerfulPublish
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Automatically publish Youtube videos, No more posting YouTube videos one by one by hand!
// @author       suvancheng
// @match        https://studio.youtube.com/channel/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    function obsSleep(time, desc = 'obsSleep') {
        return new Promise(resolve => {
            //sleep
            setTimeout(() => {
                console.log(desc, time, 's')
                resolve(time)
            }, Math.floor(Math.abs(time) * 1000))
        })
    }

    function clickk() {
        obsSleep(10)
            //第一步
            .then(() => document.querySelector("#row-container > div:nth-child(9) > ytcp-video-list-cell-actions > div > ytcp-button.edit-draft-button.style-scope.ytcp-video-list-cell-actions > div").click()) //打开编辑页面
            .then(() => obsSleep(5)) //等待5秒

            //第二步
            .then(() => document.querySelector("#step-title-1").click()) //打开创收页面
            .then(() => obsSleep(3))
            .then(() => document.querySelector("#text-container > div > ytcp-icon-button > tp-yt-iron-icon").click()) // 点击创收
            .then(() => obsSleep(3))
            .then(() => document.querySelector("#offRadio").click()) //开启
            .then(() => obsSleep(2))
            .then(() => document.querySelector("#save-button > div").click()) //完成
            .then(() => obsSleep(2))
            .then(() => document.querySelector("#scrollable-content > ytcp-uploads-monetization > ytpp-video-monetization-basics > div > div:nth-child(2) > ytpp-ad-options-settings > div > ytpp-ad-formats-settings > div.ad-formats-row.style-scope.ytpp-ad-formats-settings > div:nth-child(5) > ytcp-checkbox-lit").click()) //不可跳过的视频广告
            .then(() => obsSleep(2))


            //第三步
            .then(() => document.querySelector("#step-badge-2 > div.step-badge.style-scope.ytcp-stepper").click()) //是否适合投放广告页面
            .then(() => obsSleep(2))
            .then(() => document.querySelector("#scrollable-content > ytcp-uploads-content-ratings > ytpp-self-certification-questionnaire > div.main.style-scope.ytpp-self-certification-questionnaire > div > ytcp-checkbox-lit > div.label.style-scope.ytcp-checkbox-lit").click()) //以上都没有
            .then(() => obsSleep(6))
            .then(() => document.querySelector("#submit-questionnaire-button > div").click()) //提交分级结果
            .then(() => obsSleep(7))

            //第四步
            .then(() => document.querySelector("#step-badge-5 > div.step-badge.style-scope.ytcp-stepper").click()) //公开范围
            .then(() => obsSleep(2))
            .then(() => document.querySelector("#done-button > div").click()) //保存
            .then(() => obsSleep(7))
    }

    obsSleep(10) //等待网页加载10秒后开始执行
    window.setInterval( //每隔70秒执行一次
        function () {
            clickk()
        }, 1000 * 70
    );
})();
