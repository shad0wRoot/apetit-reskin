/**********************/
/*      skin.js       */
/* from apetit-reskin */
/*   by shad0wRoot    */
/*       © 2024       */
/**********************/


/*  EDIT THIS PART  */
var apetitReskinInfo = {
        originalUrl: "<your original url>"
}




/*  DO NOT EDIT  */

setTimeout(()=>document.body.innerHTML += `<p class="moreInfo"><a href="${apetitReskinInfo.originalUrl}">viac info (originálna stránka)</a></p>`, 500);

//Original script content:
var mt=Class.create();mt.prototype={initialize:function(tabs_container,tabs_class){this.bgcolor="#FFFFFF";this.activeColor="#F0FAFF";this.tc=tabs_container;this.tbClass=tabs_class;this.elm=$(tabs_container);new Insertion.Top(this.elm,'<div id="tab-bar"></div>');this.tabs=$$(tabs_class);this.clear(this.tabs);MT=this},clear:function(tabs){tabs.each(function(elm){elm.setStyle({display:"none"})})},makeActive:function(tab_id){$(tab_id).setStyle({display:"block"});$("mt-"+tab_id).setStyle({backgroundColor:MT.activeColor});$$("div.mt-tab").each(function(elm){if(elm.hasClassName("mt-tab-active")){elm.removeClassName("mt-tab-active");elm.setStyle({backgroundColor:MT.bgcolor})}});$("mt-"+tab_id).addClassName("mt-tab-active")},addTab:function(tab_id,text){new Insertion.Bottom($("tab-bar"),'<div id="mt-'+tab_id+'" class="mt-tab">'+text+"</div>");var elmnt=$("mt-"+tab_id);elmnt.setStyle({backgroundColor:this.bgcolor});Event.observe(elmnt,"click",function(){if(!elmnt.hasClassName("mt-tab-active")){window.mt.prototype.clear(MT.tabs);window.mt.prototype.makeActive(tab_id,MT.tbClass)}});Event.observe(elmnt,"mouseover",function(nn){if(!elmnt.hasClassName("mt-tab-active")){elmnt.setStyle({backgroundColor:MT.activeColor})}});Event.observe(elmnt,"mouseout",function(nn){if(!elmnt.hasClassName("mt-tab-active")){elmnt.setStyle({backgroundColor:MT.bgcolor})}})},removeTabTitles:function(tabTitlesClass){this.tabsTitles=$$(tabTitlesClass);this.tabsTitles.each(function(elm){elm.setStyle({display:"none"})})}};

// Include manifest:
let link = document.createElement('link');
link.rel = 'manifest';
link.href = '/skin/manifest.json';
document.head.appendChild(link);

// Include meta viewport tag:
let meta = document.createElement('meta');
meta.name = 'viewport';
meta.content = 'width=device-width, initial-scale=1';
document.getElementsByTagName('head')[0].appendChild(meta);

// Add copyright:
setTimeout(()=>document.body.innerHTML += '<p class="copyright"><a href="https://github.com/shad0wRoot/apetit-reskin">&copy; 2024 shad0wRoot</a></p>', 500);

// Save inline style of body:
let bodyInlineStyle = document.body.getAttribute('style');

// Remove existing styles:
document.querySelectorAll('*').forEach(el => el.removeAttribute('style'));
document.querySelectorAll('style').forEach(styleTag => styleTag.remove());
window.addEventListener('load', () => {
  document.querySelectorAll('*').forEach(el => el.removeAttribute('style'));
});

// Apply inline style of body:
document.body.setAttribute('style', bodyInlineStyle);

