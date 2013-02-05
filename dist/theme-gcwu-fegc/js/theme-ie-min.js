/*!
 *
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * wet-boew.github.com/wet-boew/License-eng.txt / wet-boew.github.com/wet-boew/Licence-fra.txt
 *
 * Version: v3.1.0-b2 Build: 2013-02-05 08:37 AM
 *
 */
(function(c){var b,a;b=(typeof window.wet_boew_theme!=="undefined"&&window.wet_boew_theme!==null)?window.wet_boew_theme:{fn:{}};a={theme:"theme-gcwu-fegc",psnb:null,search:null,bcrumb:null,title:null,sft:null,gcft:null,wmms:c("#gcwu-wmms"),menu:null,init:function(){b.psnb=pe.header.find("#gcwu-psnb");b.menubar=b.psnb.find(".wet-boew-menubar");b.search=pe.header.find("#gcwu-srchbx");b.bcrumb=pe.header.find("#gcwu-bc");b.title=pe.header.find("#gcwu-title");b.sft=pe.footer.find("#gcwu-sft");b.gcft=pe.footer.find("#gcwu-gcft");var e=pe.menu.navcurrent(b.menubar,b.bcrumb),d=e.parents("div.mb-sm");if(d.length!==0){d.prev().children("a").addClass("nav-current")}if(pe.secnav.length!==0){pe.menu.navcurrent(pe.secnav,b.bcrumb)}if(b.psnb.length!==0&&b.search.length===0){b.psnb.addClass("mobile-change")}else{if(b.psnb.length===0&&b.search.length!==0){b.search.addClass("mobile-change")}}},mobileview:function(){var s,A,f="",r=pe.dic.get("%menu"),o=pe.dic.get("%search"),g,x,t,y="",l='data-role="popup" data-overlay-theme="a"',e='<a href="#" data-rel="back" data-role="button" data-theme="a" data-icon="delete" data-iconpos="notext" class="ui-btn-'+((pe.rtl)?"left":"right")+'">'+pe.dic.get("%close")+"</a>",n="",u,d,k,m,j,h,z,B,v,w,p,q;if(b.menubar.length!==0||pe.secnav.length!==0||b.search.length!==0){z=b.menubar.find("ul.mb-menu li");s="<div "+l+' id="jqm-wb-mb"><div data-role="header">';g=(pe.secnav.length!==0?pe.secnav[0].getElementsByTagName("h2")[0]:"");A=(b.menubar.length!==0?b.psnb.children(":header")[0]:(pe.secnav.length!==0?g:b.bcrumb.children(":header")[0])).innerHTML;s+="<h1>"+r+"</h1>"+e+'</div><div data-role="content" data-inset="true"><nav role="navigation">';if(b.bcrumb.length!==0){q=b.bcrumb[0];s+='<section><div id="jqm-mb-location-text">'+q.innerHTML+"</div></section>";q.parentNode.removeChild(q)}else{s+='<div id="jqm-mb-location-text"></div>'}if(pe.secnav.length!==0){f+="<section><div><h2>"+g.innerHTML+'</h2><div data-role="controlgroup">'+pe.menu.buildmobile(pe.secnav.find(".wb-sec-def"),3,"b",false,true,"c",true,true)+"</div></div></section>";q=pe.secnav[0];q.parentNode.removeChild(q)}if(b.menubar.length!==0){f+="<section><div><h2>"+A+'</h2><div data-role="controlgroup">'+pe.menu.buildmobile(z,3,"a",true,true,"c",true,true)+"</div></div></section>"}s+='<div id="jqm-mb-menu"></div></nav></div></div></div>';y+=s;b.menu=f;n+='<li><a data-rel="popup" data-theme="a" data-icon="bars" href="#jqm-wb-mb">'+r+"</a></li>"}if(b.search.length!==0){x=b.search[0].innerHTML;t="<div "+l+' id="jqm-wb-search"><div data-role="header"><h1>'+o+"</h1>"+e+'</div><div data-role="content"><div>'+x.substring(x.indexOf("<form"))+"</div></div></div>";y+=t;n+='<li><a data-rel="popup" data-theme="a" data-icon="search" href="#jqm-wb-search">'+o+"</a></li>"}pe.bodydiv.append(y);if(n.length!==0){u=c('<div data-role="navbar" data-iconpos="right"><ul class="wb-hide">'+n+"</ul></div>");b.title.after(u)}j=document.getElementById("gcwu-lang");if(j!==null){d=j.getElementsByTagName("a");h='<div data-role="navbar"><ul>';for(v=0,w=d.length;v<w;v+=1){k=d[v];h+='<li><a href="'+k.href+'" data-theme="a">'+k.innerHTML+"</a></li>"}h+="</ul></div>";j=document.getElementById("gcwu-ef-lang").parentNode.innerHTML=h;j=document.getElementById("gcwu-other-lang");if(j!==null){j.parentNode.removeChild(j)}}if(b.sft.length!==0){d=b.sft.find("#gcwu-tctr a, .gcwu-col-head a").get();B=document.getElementById("gcwu-sft-in");if(b.gcft.length!==0){q=b.gcft[0];q.parentNode.removeChild(q)}}else{B=document.getElementById("gcwu-tc");if(B!==null){d=B.getElementsByTagName("a")}}if(B!==null){m='<ul class="ui-grid-a">';for(v=0,w=d.length;v<w;v+=1){k=d[v];m+='<li class="ui-block-'+(v%2!==0?"b":"a")+'"><a href="'+k.href+'" data-role="button" data-theme="c" data-corners="false">'+k.innerHTML+"</a></li>"}m+="</ul>";B.id="";B.className="";B.setAttribute("data-role","footer");B.innerHTML=m}if(b.wmms.length!==0){q=b.wmms[0];pe.footer[0].getElementsByTagName("footer")[0].appendChild(q.cloneNode(true));q.parentNode.removeChild(q)}c(document).on("pagecreate",function(){if(b.menubar.length!==0){q=b.psnb[0];q.parentNode.removeChild(q)}if(b.search.length!==0){q=b.search[0];q.parentNode.removeChild(q)}if(n.length!==0){u.children().removeClass("wb-hide");var C=pe.bodydiv.find("#jqm-mb-menu");if(C.length!==0){C.append(b.menu);u.find('a[href="#jqm-wb-mb"]').one("click vclick",function(){C.trigger("create");p=C[0].getElementsByTagName("li");q=p[p.length-1];if(q.className.indexOf("ui-corner-bottom")===-1){q.className+=" ui-corner-bottom"}})}}function i(E,D,H,G){var F;c.mobile.showPageLoadingMsg();F=c.mobile.transitionHandlers.simultaneous("pop",D,H,G);F.done(function(){c.mobile.hidePageLoadingMsg()});return F}c.mobile.transitionHandlers.loadingTransition=i;c.mobile.defaultDialogTransition="loadingTransition"});c(document).trigger("themeviewloaded");return},desktopview:function(){var e,d;if(pe.ie>0&&pe.ie<9){e=c("input, textarea, select, button").get()}else{e=document.querySelectorAll("input, textarea, select, button")}d=e.length;while(d--){e[d].setAttribute("data-role","none")}c(document).trigger("themeviewloaded")}};window.wet_boew_theme=c.extend(true,b,a);return window.wet_boew_theme}(jQuery));