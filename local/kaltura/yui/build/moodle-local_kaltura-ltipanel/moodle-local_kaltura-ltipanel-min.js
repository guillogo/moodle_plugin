YUI.add("moodle-local_kaltura-ltipanel",function(e,t){var n=function(){n.superclass.constructor.apply(this,arguments)};e.extend(n,e.Base,{modulename:null,addvidbtnid:null,init:function(t){if("0"===t.addvidbtnid||"0"===t.ltilaunchurl||0===t.courseid||0===t.height||0===t.width){alert("Some parameters were not initialized.");return}this.modulename=t.modulename,this.addvidbtnid=t.addvidbtnid;var n=e.one("#"+t.addvidbtnid);n.on("click",this.open_bse_popup_callback,this,t.ltilaunchurl,t.height,t.width)},open_bse_popup_callback:function(e,t,n,r){var i=1200,s=700,o=window.screenLeft!=undefined?window.screenLeft:screen.left,u=window.screenTop!=undefined?window.screenTop:screen.top,r=window.innerWidth?window.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:screen.width,n=window.innerHeight?window.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:screen.height,a=r/2-i/2+o,f=n/2-s/2+u,l=window.open(t,M.util.get_string("browse_and_embed","local_kaltura"),"scrollbars=yes, width="+i+", height="+s+", top="+f+", left="+a);window.focus&&l.focus(),document.body.bsePopup=l;var c=this.createEntrySelectedEvent();document.body.entrySelectedEvent=c,document.body.addEventListener("entrySelected",this.close_popup_callback.bind(this),!1)},createEntrySelectedEvent:function(){var e;return typeof window.CustomEvent=="function"?e=new CustomEvent("entrySelected"):(e=document.createEvent("CustomEvent"),e.initCustomEvent("entrySelected",!1,!1,{})),e},close_popup_callback:function(){var t=e.one("img[id=video_thumbnail]");t.setStyle("display","none");var n=e.one("iframe[id=contentframe]");n.setAttribute("width",e.one("input[id=width]").getAttribute("value")),n.setAttribute("height",e.one("input[id=height]").getAttribute("value")),n.setStyle("display","inline");var r=e.one("input[name=modulename]");undefined!==r&&"kalvidres"===this.modulename)&&this.lti_panel_change_add_media_button_caption(),document.body.bsePopup.close()},lti_panel_change_add_media_button_caption:function(){var t=M.util.get_string("replace_video",this.modulename);t!==e.one("#"+this.addvidbtnid).getAttribute("value")&&e.one("#"+this.addvidbtnid).setAttribute("value",t)}},{NAME:"moodle-local_kaltura-ltipanel",ATTRS:{addvidbtnid:{value:"0"},ltilaunchurl:{value:"0"},height:{value:0},width:{value:0},modulename:{value:""}}});var r=function(){r.superclass.constructor.apply(this,arguments)};e.extend(r,e.Base,{init:function(t){if("0"===t.addvidbtnid||"0"===t.ltilaunchurl||0===t.courseid||0===t.height||0===t.width)return;var n=e.one("#"+t.addvidbtnid);n.on("click",this.open_bse_popup_callback,this,t.ltilaunchurl,t.height,t.width)},open_bse_popup_callback:function(e,t,n,r){var i=1200,s=700,o=window.screenLeft!=undefined?window.screenLeft:screen.left,u=window.screenTop!=undefined?window.screenTop:screen.top,r=window.innerWidth?window.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:screen.width,n=window.innerHeight?window.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:screen.height,a=r/2-i/2+o,f=n/2-s/2+u,l=window.open(t,M.util.get_string("browse_and_embed","local_kaltura"),"scrollbars=yes, width="+i+", height="+s+", top="+f+", left="+a);window.focus&&l.focus(),document.body.bsePopup=l;var c=this.createEntrySelectedEvent();document.body.entrySelectedEvent=c,document.body.addEventListener("entrySelected",this.close_popup_callback.bind(this),!1)},createEntrySelectedEvent:function(){var e;return typeof window.CustomEvent=="function"?e=new CustomEvent("entrySelected"):(e=document.createEvent("CustomEvent"),e.initCustomEvent("entrySelected",!1,!1,{})),e},close_popup_callback:function(){e.one("input[id=submit_video]").removeAttribute("disabled");var t=e.one("img[id=video_thumbnail]");t.setStyle("display","none");var n=e.one("iframe[id=contentframe]");n.setAttribute("width",e.one("input[id=width]").getAttribute("value")),n.setAttribute("height",e.one("input[id=height]").getAttribute("value")),n.setStyle("display","inline"),e.one("#id_add_video").set("value",M.util.get_string("replacevideo","kalvidassign")),e.one("#id_add_video").addClass("btn-secondary"),e.one("#submit_video").addClass("btn-primary"),e.one("#id_add_video").removeClass("btn-primary"),e.one("#submit_video").removeClass("btn-secondary"),document.body.bsePopup.close()}},{NAME:"moodle-local_kaltura-ltipanel",ATTRS:{addvidbtnid:{value:"0"},ltilaunchurl:{value:"0"},height:{value:0},width:{value:0}}});var i=function(){i.superclass.constructor.apply(this,arguments)};e.extend(i,e.Base,{ltimediaassignment:null,init:function(t){this.ltimediaassignment=t,e.one("form[id=fastgrade]").delegate("click",this.review_submission,"a[name=submission_source]",this)},review_submission:function(e){e.preventDefault();var t,n,r;e.target.test("a")?(t=e.target.getAttribute("href"),n=e.target.ancestor("div[name=media_submission]").get("childNodes").filter("input[name=height]").get("value"),r=e.target.ancestor("div[name=media_submission]").get("childNodes").filter("input[name=width]").get("value")):(t=e.target.ancestor("a[name=submission_source]").getAttribute("href"),n=e.target.ancestor("div[name=media_submission]").get("childNodes").filter("input[name=height]").get("value"),r=e.target.ancestor("div[name=media_submission]").get("childNodes").filter("input[name=width]").get("value")),this.ltimediaassignment.open_bse_popup_callback(null,t,n,r)}},{NAME:"moodle-local_kaltura-ltipanel"}),M.local_kaltura=M.local_kaltura||{},M.local_kaltura.init=function(e){return new n(e)},M.local_kaltura.initmediaassignment=function(e){return new r(e)},M.local_kaltura.initreviewsubmission=function(){var e={addvidbtnid:"0",ltilaunchurl:"0",courseid:0,height:0,width:0},t=new r(e);return new i(t)}},"@VERSION@",{requires:["base","node","panel","node-event-simulate"]});
