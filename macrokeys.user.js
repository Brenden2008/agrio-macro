// ==UserScript==
// @name         agrio-macro
// @namespace    https://github.com
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *.agar.io/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    /*--- Get or set the codes for the arrow keys.
    Firefox gives us nice constants, Chrome does not.
*/
KeyEvent        = (typeof KeyEvent === "object")  ?  KeyEvent  :  [];
const a  = KeyEvent.DOM_VK_LEFT   ||  65;
const RIGHT_KEY = KeyEvent.DOM_VK_RIGHT  ||  39;

window.addEventListener ("keydown", keyboardHandler, false);

function keyboardHandler (zEvent) {
    var bBlockDefaultAction = false;

    //--- Assume we want only the plain keys, not the modified versions.
    if (zEvent.altKey  ||  zEvent.ctrlKey  ||  zEvent.shiftKey) {
        //-- Do nothing (most user-friendly option, in most cases).
    }
    else {
        if (zEvent.which == a) {
             var e = new Event("keydown");
  e.key="w";    // just enter the char you want to send 
  e.keyCode=e.key.charCodeAt(0);
  e.which=e.keyCode;
  e.altKey=false;
  e.ctrlKey=true;
  e.shiftKey=false;
  e.metaKey=false;
  e.bubbles=true;
  document.dispatchEvent(e);
             var e = new Event("keydown");
  e.key="w";    // just enter the char you want to send 
  e.keyCode=e.key.charCodeAt(0);
  e.which=e.keyCode;
  e.altKey=false;
  e.ctrlKey=true;
  e.shiftKey=false;
  e.metaKey=false;
  e.bubbles=true;
  document.dispatchEvent(e);
            bBlockDefaultAction = true;
        }
        else if (zEvent.which == RIGHT_KEY) {
            //DO RIGHT KEY ACTION HERE.
            bBlockDefaultAction = true;
        }
    }

    if (bBlockDefaultAction) {
        zEvent.preventDefault ();
        zEvent.stopPropagation ();
    }
}
})();
