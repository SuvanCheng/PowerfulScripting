// ==UserScript==
// @name         ÏÂÔØdmg
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://appstorrent.ru/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
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

    obsSleep(6)
    .then(() => document.querySelector("#dle-content > article > div.content > article > div.mob-block-info > div.info > div > div.btn-block > a:nth-child(1) > button").click())
    .then(() => obsSleep(1))
    .then(() => window.open(document.querySelector("#GroupButton > div.list_link > p > a").href,'_self'))
    .then(() => obsSleep(16))
    .then(() => window.close())

})();