!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;n="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,n.LgFullscreen=e()}}(function(){var e;return function n(e,l,t){function r(o,c){if(!l[o]){if(!e[o]){var s="function"==typeof require&&require;if(!c&&s)return s(o,!0);if(u)return u(o,!0);var i=new Error("Cannot find module '"+o+"'");throw i.code="MODULE_NOT_FOUND",i}var f=l[o]={exports:{}};e[o][0].call(f.exports,function(n){var l=e[o][1][n];return r(l?l:n)},f,f.exports,n,e,l,t)}return l[o].exports}for(var u="function"==typeof require&&require,o=0;o<t.length;o++)r(t[o]);return r}({1:[function(n,l,t){!function(n,l){if("function"==typeof e&&e.amd)e([],l);else if("undefined"!=typeof t)l();else{var r={exports:{}};l(),n.lgFullscreen=r.exports}}(this,function(){"use strict";var e=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var l=arguments[n];for(var t in l)Object.prototype.hasOwnProperty.call(l,t)&&(e[t]=l[t])}return e},n={fullScreen:!0},l=function(l){return this.el=l,this.core=window.lgData[this.el.getAttribute("lg-uid")],this.core.s=e({},n,this.core.s),this.init(),this};l.prototype.init=function(){var e="";if(this.core.s.fullScreen){if(!(document.fullscreenEnabled||document.webkitFullscreenEnabled||document.mozFullScreenEnabled||document.msFullscreenEnabled))return;e='<span class="lg-fullscreen lg-icon"></span>',this.core.outer.querySelector(".lg-toolbar").insertAdjacentHTML("beforeend",e),this.fullScreen()}},l.prototype.requestFullscreen=function(){var e=document.documentElement;e.requestFullscreen?e.requestFullscreen():e.msRequestFullscreen?e.msRequestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen&&e.webkitRequestFullscreen()},l.prototype.exitFullscreen=function(){document.exitFullscreen?document.exitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()},l.prototype.fullScreen=function(){var e=this;utils.on(document,"fullscreenchange.lgfullscreen webkitfullscreenchange.lgfullscreen mozfullscreenchange.lgfullscreen MSFullscreenChange.lgfullscreen",function(){utils.hasClass(e.core.outer,"lg-fullscreen-on")?utils.removeClass(e.core.outer,"lg-fullscreen-on"):utils.addClass(e.core.outer,"lg-fullscreen-on")}),utils.on(this.core.outer.querySelector(".lg-fullscreen"),"click.lg",function(){document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement?e.exitFullscreen():e.requestFullscreen()})},l.prototype.destroy=function(){this.exitFullscreen(),utils.off(document,".lgfullscreen")},window.lgModules.fullscreen=l})},{}]},{},[1])(1)});