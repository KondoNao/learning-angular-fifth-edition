var i=Object.defineProperty;var t=(o,e)=>i(o,"name",{value:e,configurable:!0});var u="angular-devtools",g=chrome.devtools.panels.themeName;chrome.storage.local.get("isGoogler",o=>{let e=o.isGoogler===!0;h(e?"Angular & Wiz":"Angular")});function h(o){chrome.devtools.panels.create(o,g==="dark"?"assets/icon16.png":"assets/icon-bw16.png","index.html",e=>{let n=null;e.onShown.addListener(s=>{n=s}),e.onHidden.addListener(()=>{n=null});let d=chrome.devtools.panels.setOpenResourceHandler;d(s=>{let r=s.url.match(/^angular-devtools:\/\/component\/(\d+)$/);if(!r)return;let l=parseInt(r[1],10);if(e.show(),n)n.postMessage({type:"angular-devtools-deep-link",instanceId:l},"*");else{let a=t(c=>{e.onShown.removeListener(a),c.postMessage({type:"angular-devtools-deep-link",instanceId:l},"*")},"onShown");e.onShown.addListener(a)}},u)})}t(h,"createDevToolsPanel");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
