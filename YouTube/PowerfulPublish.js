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
            //��һ��
            .then(() => document.querySelector("#row-container > div:nth-child(9) > ytcp-video-list-cell-actions > div > ytcp-button.edit-draft-button.style-scope.ytcp-video-list-cell-actions > div").click()) //�򿪱༭ҳ��
            .then(() => obsSleep(5)) //�ȴ�5��

            //�ڶ���
            .then(() => document.querySelector("#step-title-1").click()) //�򿪴���ҳ��
            .then(() => obsSleep(3))
            .then(() => document.querySelector("#text-container > div > ytcp-icon-button > tp-yt-iron-icon").click()) // �������
            .then(() => obsSleep(3))
            .then(() => document.querySelector("#offRadio").click()) //����
            .then(() => obsSleep(2))
            .then(() => document.querySelector("#save-button > div").click()) //���
            .then(() => obsSleep(2))
            .then(() => document.querySelector("#scrollable-content > ytcp-uploads-monetization > ytpp-video-monetization-basics > div > div:nth-child(2) > ytpp-ad-options-settings > div > ytpp-ad-formats-settings > div.ad-formats-row.style-scope.ytpp-ad-formats-settings > div:nth-child(5) > ytcp-checkbox-lit").click()) //������������Ƶ���
            .then(() => obsSleep(2))


            //������
            .then(() => document.querySelector("#step-badge-2 > div.step-badge.style-scope.ytcp-stepper").click()) //�Ƿ��ʺ�Ͷ�Ź��ҳ��
            .then(() => obsSleep(2))
            .then(() => document.querySelector("#scrollable-content > ytcp-uploads-content-ratings > ytpp-self-certification-questionnaire > div.main.style-scope.ytpp-self-certification-questionnaire > div > ytcp-checkbox-lit > div.label.style-scope.ytcp-checkbox-lit").click()) //���϶�û��
            .then(() => obsSleep(6))
            .then(() => document.querySelector("#submit-questionnaire-button > div").click()) //�ύ�ּ����
            .then(() => obsSleep(7))

            //���Ĳ�
            .then(() => document.querySelector("#step-badge-5 > div.step-badge.style-scope.ytcp-stepper").click()) //������Χ
            .then(() => obsSleep(2))
            .then(() => document.querySelector("#done-button > div").click()) //����
            .then(() => obsSleep(7))
    }

    obsSleep(10) //�ȴ���ҳ����10���ʼִ��
    window.setInterval( //ÿ��70��ִ��һ��
        function () {
            clickk()
        }, 1000 * 70
    );
})();
