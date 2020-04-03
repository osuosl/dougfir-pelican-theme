(function ($) {

  Drupal.behaviors.codefilter = {
    attach:function (context) {
      // Provide expanding text boxes when code blocks are too long.
      $("div.codeblock.nowrap-expand", context).each(function () {
          var contents_width = $(this).contents().width();
          var width = $(this).width();
          if (contents_width > width) {
            $(this).hover(function () {
              // Add a small right margin to width.
              $(this).animate({ width:(contents_width + 10) + "px"}, 250, function () {
                $(this).css('overflow-x', 'visible');
              });
            },
            function () {
              $(this).css('overflow-x', 'hidden').animate({ width:width + "px" }, 250);
            });
          }
        }
      );
    }
  }

})(jQuery);
;
/* Feature Stories - rotating files/images 
 * Adding touch support (swipe left or right)
 * Depends on JQuery Mobile
 */
jQuery(document).ready(function($) {
  
  $("#osu-feature-story").swiperight(function() {
    $("#osu-feature-story").carousel('prev');
  });
  
  $("#osu-feature-story").swipeleft(function() {
    $("#osu-feature-story").carousel('next');
  });
  
  /* Auto Rotates bootstrap carousel */
  $('#osu-feature-story').carousel({
      interval: 5000
  });

});;
'video audio source track'.replace(/\w+/g, function(n){ document.createElement(n); });
/**
* Kaltura HTML5 Library v1.6.12.21c 
* Library Page http://www.kaltura.org/project/HTML5_Video_Media_JavaScript_Library
* 
* Common configuration options see: 
* http://html5video.org/wiki/Kaltura_SaaS_FAQ
*
* Whats in this version of Kaltura HTML5
* http://html5video.org/wiki/Kaltura_HTML5_Release_Notes
* 
*/

window['SCRIPT_LOADER_URL']='http://cdnakmi.kaltura.org/apis/html5versions/1.6.12.21/ResourceLoader.php';window['KALTURA_LOADER_VERSION']='1.6.12.21c';(function(){"use strict";var kWidget={readyWidgets:{},readyCallbacks:[],destroyedWidgets:{},perWidgetCallback:{},setup:function(){var _this=this;this.checkEnvironment();this.overrideFlashEmbedMethods();this.proxyJsCallbackready();this.domReady(function(){_this.proxyJsCallbackready();});this.domReady(function(){_this.rewriteObjectTags();});},checkEnvironment:function(){if(document.URL.indexOf('forceMobileHTML5')!==-1&&!mw.getConfig('disableForceMobileHTML5')){mw.setConfig('forceMobileHTML5',true);}
var ua=navigator.userAgent;var ieMatch=ua.match(/MSIE\s([0-9])/);if(ieMatch&&parseInt(ieMatch[1])<9){mw.setConfig('Kaltura.ForceFlashOnDesktop',true);}
if(ua.indexOf('BlackBerry')!=-1){mw.setConfig('EmbedPlayer.DisableVideoTagSupport',true);mw.setConfig('EmbedPlayer.NotPlayableDownloadLink',true);}
if(window.jQuery&&!mw.versionIsAtLeast('1.3.2',jQuery.fn.jquery)){kWidget.log('Kaltura HTML5 works best with jQuery 1.3.2 or above');mw.setConfig('EmbedPlayer.EnableIframeApi',false);}
if(!mw.getConfig('EmbedPlayer.IsIframeServer')){mw.setConfig('EmbedPlayer.IframeParentUrl',document.URL);mw.setConfig('EmbedPlayer.IframeParentTitle',document.title);mw.setConfig('EmbedPlayer.IframeParentReferrer',document.referrer);if((/iphone|ipod|ipad.*os 5/gi).test(navigator.appVersion)){window.onpageshow=function(evt){if(evt.persisted){document.body.style.display="none";location.reload();}};}}},proxiedJsCallback:null,waitForLibraryChecks:true,jsReadyCalledForIds:[],proxyJsCallbackready:function(){var _this=this;if(!this.proxiedJsCallback&&(window['jsCallbackReady']||this.readyCallbacks.length)){this.proxiedJsCallback=window['jsCallbackReady']||true;window['jsCallbackReady']=function(widgetId){if(_this.waitForLibraryChecks){_this.jsReadyCalledForIds.push(widgetId);return;}
_this.jsCallbackReady(widgetId);}}},jsCallbackReady:function(widgetId){if(this.destroyedWidgets[widgetId]){return;}
if(typeof this.proxiedJsCallback=='function'){this.proxiedJsCallback(widgetId);}
for(var i=0;i<this.readyCallbacks.length;i++){this.readyCallbacks[i](widgetId);}
this.readyWidgets[widgetId]=true;},playerModeChecksDone:function(){this.waitForLibraryChecks=false;for(var i=0;i<this.jsReadyCalledForIds.length;i++){var widgetId=this.jsReadyCalledForIds[i];this.jsCallbackReady(widgetId);}
this.jsReadyCalledForIds=[];},embed:function(targetId,settings){var _this=this;if(typeof targetId==='object'){settings=targetId;if(!settings.targetId){this.log('Error: Missing target element Id');}
targetId=settings.targetId;}
if(!settings.wid){this.log("Error: kWidget.embed missing wid");return;}
var uiconf_id=settings.uiconf_id;if(!uiconf_id){this.log("Error: kWidget.embed missing uiconf_id");return;}
var elm=document.getElementById(targetId);if(!elm){this.log("Error: kWidget.embed could not find target: "+targetId);return false;}
if(elm.getAttribute('name')=='kaltura_player_iframe_no_rewrite'){return;}
if(this.destroyedWidgets[targetId]){delete(this.destroyedWidgets[targetId]);}
if(settings.readyCallback){var adCallback=!this.perWidgetCallback[targetId];this.perWidgetCallback[targetId]=settings.readyCallback;if(adCallback){this.addReadyCallback(function(videoId){if(_this.perWidgetCallback[videoId]){_this.perWidgetCallback[videoId](videoId);}});}}
this.proxyJsCallbackready();settings.isHTML5=this.isUiConfIdHTML5(uiconf_id)
if(uiconf_id&&window.kUserAgentPlayerRules&&kUserAgentPlayerRules[uiconf_id]){var playerAction=window.checkUserAgentPlayerRules(kUserAgentPlayerRules[uiconf_id]);switch(playerAction.mode){case'flash':if(!this.isHTML5FallForward()&&elm.nodeName.toLowerCase()=='object'){return;}
break;case'forceMsg':var msg=playerAction.val;if(elm&&elm.parentNode){var divTarget=document.createElement("div");divTarget.innerHTML=unescape(msg);elm.parentNode.replaceChild(divTarget,elm);}
break;}}
if(settings.isHTML5){this.outputHTML5Iframe(targetId,settings);}else{this.outputFlashObject(targetId,settings);}},destroy:function(target){if(typeof target=='string'){target=document.getElmentById(target);}
if(!target){this.log("Error destory called without valid target");return;}
var destoryId=target.getAttribute('id');for(var id in this.readyWidgets){if(id==destoryId){delete(this.readyWidgets[id]);}}
this.destroyedWidgets[destoryId]=true;target.parentNode.removeChild(target);target=null;},embedFromObjects:function(rewriteObjects){for(var i=0;i<rewriteObjects.length;i++){var settings=rewriteObjects[i].kEmbedSettings;settings.width=rewriteObjects[i].width;settings.height=rewriteObjects[i].height;this.embed(rewriteObjects[i].id,rewriteObjects[i].kEmbedSettings);}},outputFlashObject:function(targetId,settings){var elm=document.getElementById(targetId);if(!elm&&!elm.parentNode){kWidget.log("Error embed target missing");return;}
if(!settings.src){var swfUrl=mw.getConfig('Kaltura.ServiceUrl')+'/index.php/kwidget'+'/wid/'+settings.wid+'/uiconf_id/'+settings.uiconf_id;if(settings.entry_id){swfUrl+='/entry_id/'+settings.entry_id;}
if(settings.cache_st){swfUrl+='/cache_st/'+settings.cache_st;}
settings['src']=swfUrl;}
settings['id']=elm.id;elm.setAttribute('id',elm.id+'_container');var spanTarget=document.createElement("span");var width=(settings.width)?settings.width:(elm.width)?elm.width:(elm.style.width)?parseInt(elm.style.width):400;var height=(settings.height)?settings.height:(elm.height)?elm.height:(elm.style.height)?parseInt(elm.style.height):300;if(!settings.flashvars){settings.flashvars={};}
if(settings.flashvars['jsCallbackReadyFunc']){kWidget.log("Error: Setting jsCallbackReadyFunc is not compatible with kWidget embed");}
var flashvarValue=this.flashVarsToString(settings.flashvars);var defaultParamSet={'allowFullScreen':'true','allowNetworking':'all','allowScriptAccess':'always','bgcolor':'#000000'};var output='<object width="'+width+'" height="'+height+'" style="width:'+width+'px;height:'+height+'px;'+'" id="'+targetId+'" name="'+targetId+'"';output+=' data="'+settings['src']+'" type="application/x-shockwave-flash"';if(window.ActiveXObject){output+=' classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"';}
output+='>';output+='<param name="movie" value="'+settings['src']+'" />';output+='<param name="flashvars" value="'+flashvarValue+'" />';if(settings['params']){for(var key in settings['params']){if(defaultParamSet[key]){defaultParamSet[key]=settings['params'][key];}else{output+='<param name="'+key+'" value="'+settings['params'][key]+'" />';}}}
for(var key in defaultParamSet){if(defaultParamSet[key]){output+='<param name="'+key+'" value="'+defaultParamSet[key]+'" />';}}
output+="</object>";var outputElemnt=function(){elm.parentNode.replaceChild(spanTarget,elm);spanTarget.innerHTML=output;}
if(window.console&&(window.console.firebug||window.console.exception)){console.log('Warning firebug + firefox and dynamic flash kdp embed causes lockups in firefox'+', ( delaying embed )');this.domReady(function(){setTimeout(function(){outputElemnt();},2000);});}else{if(navigator.userAgent.indexOf("MSIE")!=-1){setTimeout(function(){outputElemnt();},0);}else{outputElemnt();}}},outputHTML5Iframe:function(targetId,settings){var elm=document.getElementById(targetId);if(!mw.getConfig('EmbedPlayer.EnableIframeApi')){this.outputIframeWithoutApi(targetId,settings);return;}
this.loadHTML5Lib(function(){var width=(settings.width)?settings.width:jQuery(elm).width()?jQuery(elm).width():400;var height=(settings.height)?settings.height:jQuery(elm).height()?jQuery(elm).height():300;if(typeof width=='string'&&width.indexOf('%')===-1){width=parseInt(width);}
if(typeof height=='string'&&height.indexOf('%')===-1){height=parseInt(height);}
var targetCss={'width':width,'height':height};var additionalTargetCss=kWidget.getAdditionalTargetCss();jQuery.extend(targetCss,additionalTargetCss);jQuery('#'+targetId).css(targetCss);jQuery('#'+targetId).kalturaIframePlayer(settings);});},outputIframeWithoutApi:function(targetId,settings){var iframeSrc=SCRIPT_LOADER_URL.replace('ResourceLoader.php','mwEmbedFrame.php');iframeSrc+='?'+this.embedSettingsToUrl(settings);if(mw.getConfig('Kaltura.AllowIframeRemoteService')&&(mw.getConfig("Kaltura.ServiceUrl").indexOf('kaltura.com')===-1&&mw.getConfig("Kaltura.ServiceUrl").indexOf('kaltura.org')===-1)){iframeSrc+=this.serviceConfigToUrl();}
if(mw.getConfig('forceMobileHTML5')){iframeSrc+='&forceMobileHTML5=true';}
if(mw.getConfig('debug')){iframeSrc+='&debug=true';}
iframeSrc+='&urid='+KALTURA_LOADER_VERSION;var targetNode=document.getElementById(targetId);var parentNode=targetNode.parentNode;var iframe=document.createElement('iframe');iframe.src=iframeSrc;iframe.id=targetId;iframe.width=(settings.width)?settings.width.replace(/px/,''):'100%';iframe.height=(settings.height)?settings.height.replace(/px/,''):'100%';iframe.style.border='0px';iframe.style.overflow='hidden';parentNode.replaceChild(iframe,targetNode);},addReadyCallback:function(readyCallback){for(var widgetId in this.readyWidgets){if(document.getElementById(widgetId)){readyCallback(widgetId);}}
this.readyCallbacks.push(readyCallback);},rewriteObjectTags:function(){var playerList=this.getKalutaObjectList();var _this=this;if(this.isMissingUiConfJs(playerList)){this.loadUiConfJs(playerList,function(){_this.rewriteObjectTags();})
return;}
var loadHTML5LibAndRewriteTags=function(){if(_this.depDoneLoading){mw.rewritePagePlayerTags(function(){});}else{_this.loadHTML5Lib();}}
var serviceUrl=mw.getConfig('Kaltura.ServiceUrl');if(!mw.getConfig('Kaltura.AllowIframeRemoteService')){if(!serviceUrl||serviceUrl.indexOf('kaltura.com')===-1){mw.setConfig('Kaltura.IframeRewrite',false);mw.setConfig('Kaltura.UseManifestUrls',false);}}
if(window.preMwEmbedReady.length){loadHTML5LibAndRewriteTags();return;}
if(!mw.getConfig('Kaltura.ForceFlashOnDesktop')&&(mw.getConfig('Kaltura.LoadScriptForVideoTags')&&this.pageHasAudioOrVideoTags())){loadHTML5LibAndRewriteTags();return;}
if(this.isHTML5FallForward()&&playerList.length){loadHTML5LibAndRewriteTags();return;}
if(!this.supportsFlash()&&!this.supportsHTML5()&&!mw.getConfig('Kaltura.ForceFlashOnDesktop')){this.embedFromObjects(playerList);return;}
this.playerModeChecksDone();},uiConfScriptLoadList:{},isMissingUiConfJs:function(playerList){if(playerList.length==0||!mw.getConfig('Kaltura.EnableEmbedUiConfJs')||mw.getConfig('EmbedPlayer.IsIframeServer'))
{return false;}
for(var i=0;i<playerList.length;i++){var settings=playerList[i].kEmbedSettings;if(!this.uiConfScriptLoadList[settings.uiconf_id]){return true;}}
return false;},loadUiConfJs:function(playerList,callback){var _this=this;var baseUiConfJsUrl=SCRIPT_LOADER_URL.replace('ResourceLoader.php','services.php?service=uiconfJs');if(!this.isMissingUiConfJs(playerList)){callback();return;}
for(var i=0;i<playerList.length;i++){(function(settings){if(_this.uiConfScriptLoadList[settings.uiconf_id]){return;}
_this.appendScriptUrl(baseUiConfJsUrl+_this.embedSettingsToUrl(settings),function(){_this.uiConfScriptLoadList[settings.uiconf_id]=true;if(!_this.isMissingUiConfJs(playerList)){callback();}else{}});})(playerList[i].kEmbedSettings);}},log:function(msg){if(typeof console!='undefined'&&console.log){console.log(msg);}},supportsHTML5:function(){if(mw.getConfig('EmbedPlayer.DisableVideoTagSupport')){return false;}
var dummyvid=document.createElement("video");if(navigator.userAgent.indexOf('MSIE 9.')!=-1){return false;}
if(dummyvid.canPlayType){return true;}
return false;},supportsFlash:function(){if(mw.getConfig('EmbedPlayer.DisableHTML5FlashFallback')){return false;}
var version=this.getFlashVersion().split(',').shift();if(version<10){return false;}else{return true;}},getFlashVersion:function(){if(navigator.plugins&&navigator.plugins.length){try{if(navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin){return(navigator.plugins["Shockwave Flash 2.0"]||navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g,",").match(/^,?(.+),?$/)[1];}}catch(e){}}
try{try{if(typeof ActiveXObject!='undefined'){var axo=new ActiveXObject('ShockwaveFlash.ShockwaveFlash.6');try{axo.AllowScriptAccess='always';}catch(e){return'6,0,0';}}}catch(e){}
return new ActiveXObject('ShockwaveFlash.ShockwaveFlash').GetVariable('$version').replace(/\D+/g,',').match(/^,?(.+),?$/)[1];}catch(e){}
return'0,0,0';},isIOS:function(){return((navigator.userAgent.indexOf('iPhone')!=-1)||(navigator.userAgent.indexOf('iPod')!=-1)||(navigator.userAgent.indexOf('iPad')!=-1));},isUiConfIdHTML5:function(uiconf_id){var isHTML5=this.isHTML5FallForward();if(window.kUserAgentPlayerRules&&kUserAgentPlayerRules[uiconf_id]){var playerAction=window.checkUserAgentPlayerRules(kUserAgentPlayerRules[uiconf_id]);if(playerAction.mode=='leadWithHTML5'){isHTML5=this.supportsHTML5();}}
return isHTML5;},isHTML5FallForward:function(){if(this.isIOS()||mw.getConfig('forceMobileHTML5')){return true;}
if(mw.getConfig('KalturaSupport.LeadWithHTML5')||mw.getConfig('Kaltura.LeadWithHTML5')){return this.supportsHTML5();}
if(navigator.userAgent.indexOf('Android ')!=-1){if(mw.getConfig('EmbedPlayer.UseFlashOnAndroid')&&kWidget.supportsFlash()){return false;}else{return true;}}
if(kWidget.supportsFlash()){return false;}
if(mw.getConfig('Kaltura.ForceFlashOnDesktop')){return false;}
if(kWidget.supportsHTML5()){return true;}
if(mw.getConfig('Kaltura.IframeRewrite')){return true;}
return false;},getKalturaThumbUrl:function(entry){if(entry.width=='100%'){entry.width=400;}
if(entry.height=='100%'){entry.height=300;}
var ks=(entry.ks)?'?ks='+entry.ks:'';if(entry.widget_id&&!entry.partner_id){entry.partner_id=entry.widget_id.substr(1);}
return mw.getConfig('Kaltura.CdnUrl')+'/p/'+entry.partner_id+'/sp/'+
entry.partner_id+'00/thumbnail/entry_id/'+entry.entry_id+'/width/'+
parseInt(entry.width)+'/height/'+parseInt(entry.height)+ks;},getEmbedSettings:function(swfUrl,flashvars){var embedSettings={};if(typeof flashvars=='string'){flashvars=this.flashVars2Object(flashvars);}
if(!flashvars){flashvars={};}
var trim=function(str){return str.replace(/^\s+|\s+$/g,"");}
embedSettings.flashvars=flashvars;var dataUrlParts=swfUrl.split('/');var prevUrlPart=null;while(dataUrlParts.length){var curUrlPart=dataUrlParts.pop();switch(curUrlPart){case'p':embedSettings.wid='_'+prevUrlPart;embedSettings.p=prevUrlPart;break;case'wid':embedSettings.wid=prevUrlPart;embedSettings.p=prevUrlPart.replace(/_/,'');break;case'entry_id':embedSettings.entry_id=prevUrlPart;break;case'uiconf_id':case'ui_conf_id':embedSettings.uiconf_id=prevUrlPart;break;case'cache_st':embedSettings.cache_st=prevUrlPart;break;}
prevUrlPart=trim(curUrlPart);}
for(var key in flashvars){var val=flashvars[key];key=key.toLowerCase();if(key=='entryid'){embedSettings.entry_id=val;}
if(key=='uiconfid'){embedSettings.uiconf_id=val;}
if(key=='widgetid'||key=='widget_id'){embedSettings.wid=val;embedSettings.p=val.replace(/_/,'');}
if(key=='partnerid'||key=='partner_id'){embedSettings.wid='_'+val;embedSettings.p=val;}
if(key=='referenceid'){embedSettings.reference_id=val;}}
if(!embedSettings.cache_st){embedSettings.cache_st=1;}
return embedSettings;},flashVars2Object:function(flashvarsString){var flashVarsSet=(flashvarsString)?flashvarsString.split('&'):[];var flashvars={};for(var i=0;i<flashVarsSet.length;i++){var currentVar=flashVarsSet[i].split('=');if(currentVar[0]&&currentVar[1]){flashvars[currentVar[0]]=currentVar[1];}}
return flashvars;},flashVarsToString:function(flashVarsObject){var params='';for(var i in flashVarsObject){params+='&'+''+encodeURIComponent(i)+'='+encodeURIComponent(flashVarsObject[i]);}
return params;},flashVarsToUrl:function(flashVarsObject){var params='';for(var i in flashVarsObject){params+='&'+'flashvars['+encodeURIComponent(i)+']='+encodeURIComponent(flashVarsObject[i]);}
return params;},pageHasAudioOrVideoTags:function(){if(mw.getConfig('EmbedPlayer.RewriteSelector')===false||mw.getConfig('EmbedPlayer.RewriteSelector')==''){return false;}
if(document.getElementsByTagName('video').length!=0||document.getElementsByTagName('audio').length!=0){return true;}
return false;},getKalutaObjectList:function(){var _this=this;var kalturaPlayerList=[];var objectList=document.getElementsByTagName('object');if(!objectList.length&&document.getElementById('kaltura_player')){objectList=[document.getElementById('kaltura_player')];}
var tryAddKalturaEmbed=function(url,flashvars){var settings=_this.getEmbedSettings(url,flashvars);if(settings&&settings.uiconf_id&&settings.wid){objectList[i].kEmbedSettings=settings;kalturaPlayerList.push(objectList[i]);return true;}
return false;};for(var i=0;i<objectList.length;i++){if(!objectList[i]){continue;}
var swfUrl='';var flashvars={};var paramTags=objectList[i].getElementsByTagName('param');for(var j=0;j<paramTags.length;j++){var pName=paramTags[j].getAttribute('name').toLowerCase();var pVal=paramTags[j].getAttribute('value');if(pName=='data'||pName=='src'||pName=='movie'){swfUrl=pVal;}
if(pName=='flashvars'){flashvars=this.flashVars2Object(pVal);}}
if(tryAddKalturaEmbed(swfUrl,flashvars)){continue;}
if(objectList[i].getAttribute('data')){if(tryAddKalturaEmbed(objectList[i].getAttribute('data'),flashvars)){continue;}}}
return kalturaPlayerList;},library:{core:['mwEmbed','mw.style.mwCommon','mw.style.EmbedPlayer','mw.PlayerSkinMvpcf','mw.style.PlayerSkinMvpcf','$j.cookie','$j.postMessage','mw.EmbedPlayerNative','mw.KWidgetSupport','mw.KDPMapping','JSON'],playerClient:['mw.IFramePlayerApiClient','fullScreenApi'],playerServer:['mw.IFramePlayerApiServer'],player:['mw.Uri','fullScreenApi','mw.style.mwCommon','mw.EmbedPlayer','mw.processEmbedPlayers','mw.MediaElement','mw.MediaPlayer','mw.MediaPlayers','mw.MediaSource','mw.EmbedTypes','mw.style.EmbedPlayer','mw.PlayerControlBuilder','mw.EmbedPlayerKplayer','mw.EmbedPlayerJava','$j.ui','$j.widget','$j.ui.mouse','$j.fn.hoverIntent','$j.ui.slider','$j.fn.menu','$j.ui.touchPunch','mw.style.jquerymenu','mw.TimedText','mw.style.TimedText'],kalturaSupport:['MD5','utf8_encode','base64_encode',"mw.KApi",'mw.KAnalytics','mw.KCuePoints','mw.KTimedText','mw.KLayout','mw.style.klayout','titleLayout','volumeBarLayout','playlistPlugin','controlbarLayout','faderPlugin','watermarkPlugin','adPlugin','acPreview','captionPlugin','bumperPlugin','myLogo'],playlist:['mw.Playlist','mw.style.playlist','mw.PlaylistHandlerMediaRss','mw.PlaylistHandlerKaltura','mw.PlaylistHandlerKalturaRss','iScroll']},depStartedLoading:false,depDoneLoading:false,queuedLoadDepsCallbacks:[],loadHTML5Lib:function(callback){var _this=this;if(this.depDoneLoading){if(callback){callback();}
return;}
if(callback){this.queuedLoadDepsCallbacks.push(callback);}
if(this.depStartedLoading){return;}
this.depStartedLoading=true;var jsRequestSet=[];if(typeof window.jQuery=='undefined'){jsRequestSet.push(['window.jQuery']);}
jsRequestSet.push(this.library.core);var continueLoadingHTML5Lib=function(){jsRequestSet=[];if(mw.getConfig('Kaltura.IframeRewrite')&&!window.kUserAgentPlayerRules&&mw.getConfig('EmbedPlayer.EnableIframeApi')&&(kWidget.supportsFlash()||kWidget.supportsHTML5()))
{jsRequestSet.push(_this.library.playerClient);_this.loadRequestSets(jsRequestSet);return;}
if(mw.getConfig('EmbedPlayer.IsIframeServer')){jsRequestSet.push(_this.library.playerServer);}
if(!mw.getConfig('IframeCustomjQueryUISkinCss')){if(mw.getConfig('jQueryUISkin')){jsRequestSet.push(['mw.style.ui_'+mw.getConfig('jQueryUISkin')]);}else{jsRequestSet[jsRequestSet.length-1].push(['mw.style.ui_kdark']);}}
if(kWidget.isHTML5FallForward()||kWidget.getKalutaObjectList().length){jsRequestSet[jsRequestSet.length-1].push(_this.library.kalturaSupport);jsRequestSet[jsRequestSet.length-1].push(_this.library.playlist);}
_this.loadRequestSets(jsRequestSet);}
this.loadSet(jsRequestSet[0],function(){if(jsRequestSet[1]){_this.loadSet(jsRequestSet[1],function(){continueLoadingHTML5Lib();})}else{continueLoadingHTML5Lib();}});},loadRequestSets:function(requestSets,callback){var _this=this;var callbackCount=0;for(var i=0;i<requestSets.length;i++){var libSet=requestSets[i];callbackCount++;this.loadSet(libSet,function(){callbackCount--;if(callbackCount==0){while(_this.queuedLoadDepsCallbacks.length){_this.queuedLoadDepsCallbacks.shift()();}
_this.depDoneLoading=true;}});}},loadSet:function(jsRequestSet,callback){if(typeof SCRIPT_LOADER_URL=='undefined'){alert('Error missing SCRIPT_LOADER_URL');return;}
var url=SCRIPT_LOADER_URL+'?class=';url+=jsRequestSet.join(',')+',';url+='&urid='+KALTURA_LOADER_VERSION;url+='&uselang=en';if(mw.getConfig('debug')){url+='&debug=true';}
if(typeof $!='undefined'&&!$.jquery){window['pre$Lib']=$;}
this.appendScriptUrl(url,function(){if(window['pre$Lib']){jQuery.noConflict();window['$']=window['pre$Lib'];}
if(callback){callback();}});},appendScriptUrl:function(url,callback){var head=document.getElementsByTagName("head")[0]||document.documentElement;var script=document.createElement("script");script.src=url;var done=false;script.onload=script.onreadystatechange=function(){if(!done&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")){done=true;if(typeof callback=='function'){callback();}
script.onload=script.onreadystatechange=null;if(head&&script.parentNode){head.removeChild(script);}}};head.insertBefore(script,head.firstChild);},appendCssUrl:function(url){var head=document.getElementsByTagName("head")[0];var cssNode=document.createElement('link');cssNode.type='text/css';cssNode.rel='stylesheet';cssNode.media='screen';cssNode.href=url;head.appendChild(cssNode);},serviceConfigToUrl:function(){var serviceVars=['ServiceUrl','CdnUrl','ServiceBase','UseManifestUrls'];var urlParam='';for(var i=0;i<serviceVars.length;i++){if(mw.getConfig('Kaltura.'+serviceVars[i])!==null){urlParam+='&'+serviceVars[i]+'='+encodeURIComponent(mw.getConfig('Kaltura.'+serviceVars[i]));}}
return urlParam;},embedSettingsToUrl:function(settings){var url='';var kalturaAttributeList=['uiconf_id','entry_id','wid','p','cache_st'];for(var attrKey in settings){for(var i=0;i<kalturaAttributeList.length;i++){if(kalturaAttributeList[i]==attrKey){url+='&'+attrKey+'='+encodeURIComponent(settings[attrKey]);}}}
url+=this.flashVarsToUrl(settings.flashvars);return url;},getAdditionalTargetCss:function(){var ua=navigator.userAgent;if(mw.getConfig('FramesetSupport.Enabled')&&kWidget.isIOS()&&(ua.indexOf('OS 3')>0||ua.indexOf('OS 4')>0)){return mw.getConfig('FramesetSupport.PlayerCssProperties')||{};}
return{};},overrideFlashEmbedMethods:function(){var _this=this;var doEmbedSettingsWrite=function(settings,replaceTargetId,widthStr,heightStr){if(widthStr){settings.width=widthStr;}
if(heightStr){settings.height=heightStr;}
kWidget.embed(replaceTargetId,settings);};if(window['flashembed']&&!window['originalFlashembed']){window['originalFlashembed']=window['flashembed'];window['flashembed']=function(targetId,attributes,flashvars){_this.domReady(function(){var kEmbedSettings=kWidget.getEmbedSettings(attributes.src,flashvars);kEmbedSettings.width=attributes.width;kEmbedSettings.height=attributes.height;if(kEmbedSettings.uiconf_id&&(kWidget.isHTML5FallForward()||!kWidget.supportsFlash())){document.getElementById(targetId).innerHTML='<div id="'+attributes.id+'"></div>';doEmbedSettingsWrite(kEmbedSettings,attributes.id,attributes.width,attributes.height);}else{originalFlashembed(targetId,attributes,flashvars);}});};}
if(window['SWFObject']&&!window['SWFObject'].prototype['originalWrite']){window['SWFObject'].prototype['originalWrite']=window['SWFObject'].prototype.write;window['SWFObject'].prototype['write']=function(targetId){var swfObj=this;_this.domReady(function(){var kEmbedSettings=kWidget.getEmbedSettings(swfObj.attributes.swf,swfObj.params.flashVars);if(kEmbedSettings.uiconf_id&&(kWidget.isHTML5FallForward()||!kWidget.supportsFlash())){doEmbedSettingsWrite(kEmbedSettings,targetId,swfObj.attributes.width,swfObj.attributes.height);}else{swfObj.originalWrite(targetId);}});};}
if(window['swfobject']&&!window['swfobject']['originalEmbedSWF']){window['swfobject']['originalEmbedSWF']=window['swfobject']['embedSWF'];window['swfobject']['embedSWF']=function(swfUrlStr,replaceElemIdStr,widthStr,heightStr,swfVersionStr,xiSwfUrlStr,flashvarsObj,parObj,attObj,callbackFn)
{_this.domReady(function(){var kEmbedSettings=kWidget.getEmbedSettings(swfUrlStr,flashvarsObj);if(kEmbedSettings.uiconf_id&&(kWidget.isHTML5FallForward()||!kWidget.supportsFlash())){doEmbedSettingsWrite(kEmbedSettings,replaceElemIdStr,widthStr,heightStr);}else{window['swfobject']['originalEmbedSWF'](swfUrlStr,replaceElemIdStr,widthStr,heightStr,swfVersionStr,xiSwfUrlStr,flashvarsObj,parObj,attObj,callbackFn);}});};}}};window.KWidget=kWidget;window.kWidget=kWidget;})();(function(mw,kWidget){kWidget.deprecatedGlobals=function(){var globalFunctionMap={'kIsIOS':'isIOS','kSupportsHTML5':'supportsHTML5','kGetFlashVersion':'getFlashVersion','kSupportsFlash':'supportsFlash','kalturaIframeEmbed':'embed','kOutputFlashObject':'outputFlashObject','kIsHTML5FallForward':'isHTML5FallForward','kIframeWithoutApi':'outputIframeWithoutApi','kDirectDownloadFallback':'outputDirectDownload','kGetKalturaEmbedSettings':'getEmbedSetting','kGetKalturaPlayerList':'getKalutaObjectList','kCheckAddScript':'rewriteObjectTags','kAddScript':'loadHTML5Lib','kPageHasAudioOrVideoTags':'pageHasAudioOrVideoTags','kLoadJsRequestSet':'loadRequestSet','kOverideJsFlashEmbed':'overrideFlashEmbedMethods','kDoIframeRewriteList':'embedFromObjects','kEmbedSettingsToUrl':'embedSettingsToUrl','kGetAdditionalTargetCss':'getAdditionalTargetCss','kAppendCssUrl':'appendCssUrl','kAppendScriptUrl':'appendScriptUrl','kFlashVars2Object':'flashVars2Object','kFlashVarsToUrl':'flashVarsToUrl','kFlashVarsToString':'flashVarsToString','kServiceConfigToUrl':'serviceConfigToUrl','kRunMwDomReady':'rewriteObjectTags','restoreKalturaKDPCallback':false}
for(var gName in globalFunctionMap){(function(gName){window[gName]=function(){if(globalFunctionMap[gName]===false){kWidget.log(gName+' is deprecated. This method no longer serves any purpose.');return;}
kWidget.log(gName+' is deprecated. Please use kWidget.'+globalFunctionMap[gName]);var args=Array.prototype.slice.call(arguments,0);if(typeof kWidget[globalFunctionMap[gName]]!='function'){kWidget.log("Error kWidget missing method: "+globalFunctionMap[gName]);return;}
return kWidget[globalFunctionMap[gName]].apply(kWidget,args);}})(gName);}}
kWidget.deprecatedGlobals();})(window.mw,window.kWidget);(function(kWidget){var DomReady=window.DomReady={};var userAgent=navigator.userAgent.toLowerCase();var browser={version:(userAgent.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[])[1],safari:/webkit/.test(userAgent),opera:/opera/.test(userAgent),msie:(/msie/.test(userAgent))&&(!/opera/.test(userAgent)),mozilla:(/mozilla/.test(userAgent))&&(!/(compatible|webkit)/.test(userAgent))};var readyBound=false;var isReady=false;var readyList=[];function domReady(){if(!isReady){isReady=true;if(readyList){for(var fn=0;fn<readyList.length;fn++){readyList[fn].call(window,[]);}
readyList=[];}}};function addLoadEvent(func){var oldonload=window.onload;if(typeof window.onload!='function'){window.onload=func;}else{window.onload=function(){if(oldonload){oldonload();}
func();}}};function bindReady(){if(readyBound){return;}
readyBound=true;if(document.addEventListener&&!browser.opera){document.addEventListener("DOMContentLoaded",domReady,false);}
if(browser.msie&&window==top)(function(){if(isReady)return;try{document.documentElement.doScroll("left");}catch(error){setTimeout(arguments.callee,0);return;}
domReady();})();if(browser.opera){document.addEventListener("DOMContentLoaded",function(){if(isReady)return;for(var i=0;i<document.styleSheets.length;i++)
if(document.styleSheets[i].disabled){setTimeout(arguments.callee,0);return;}
domReady();},false);}
if(browser.safari){var numStyles;(function(){if(isReady)return;if(document.readyState!="loaded"&&document.readyState!="complete"){setTimeout(arguments.callee,0);return;}
if(numStyles===undefined){var links=document.getElementsByTagName("link");for(var i=0;i<links.length;i++){if(links[i].getAttribute('rel')=='stylesheet'){numStyles++;}}
var styles=document.getElementsByTagName("style");numStyles+=styles.length;}
if(document.styleSheets.length!=numStyles){setTimeout(arguments.callee,0);return;}
domReady();})();}
addLoadEvent(domReady);};DomReady.ready=function(fn,args){bindReady();if(isReady||/loaded|complete/.test(document.readyState)){fn.call(window,[]);}else{readyList.push(function(){return fn.call(window,[]);});}};bindReady();kWidget.domReady=DomReady.ready;})(window.kWidget);var logIfInIframe=(typeof preMwEmbedConfig!='undefined'&&preMwEmbedConfig['EmbedPlayer.IsIframeServer'])?' ( iframe ) ':'';kWidget.log('Kaltura HTML5 Version: '+KALTURA_LOADER_VERSION+logIfInIframe);if(!window['mw']){window['mw']={};}
if(!window['preMwEmbedReady']){window.preMwEmbedReady=[];}
if(!window['preMwEmbedConfig']){window.preMwEmbedConfig={};}
if(!mw.setConfig){mw.setConfig=function(set,value){var valueQueue={};if(typeof value!='undefined'){window.preMwEmbedConfig[set]=value;}else if(typeof set=='object'){for(var i in set){window.preMwEmbedConfig[i]=set[i];}}};}
if(!mw.getConfig){mw.getConfig=function(key,defaultValue){if(typeof window.preMwEmbedConfig[key]=='undefined'){if(typeof defaultValue!='undefined'){return defaultValue;}
return null;}else{return window.preMwEmbedConfig[key];}};}
if(!mw.versionIsAtLeast){mw.versionIsAtLeast=function(minVersion,clientVersion){var minVersionParts=minVersion.split('.');var clientVersionParts=clientVersion.split('.');for(var i=0;i<minVersionParts.length;i++){if(parseInt(clientVersionParts[i])>parseInt(minVersionParts[i])){return true;}
if(parseInt(clientVersionParts[i])<parseInt(minVersionParts[i])){return false;}}
return true;};}
if(!mw.ready){mw.ready=function(fn){window.preMwEmbedReady.push(fn);kWidget.domReady(function(){kWidget.loadHTML5Lib();});};}
mw.getKalturaThumbUrl=function(entry){kWidget.log('mw.getKalturaThumbUrl is deprecated. Please use kWidget.getKalturaThumbUrl');return kWidget.getKalturaThumbUrl(entry);};kWidget.setup();window.getUserAgentPlayerRulesMsg=function(ruleSet){return window.checkUserAgentPlayerRules(ruleSet,true);};window.checkUserAgentPlayerRules=function(ruleSet,getMsg){var ua=(mw.getConfig('KalturaSupport_ForceUserAgent'))?mw.getConfig('KalturaSupport_ForceUserAgent'):navigator.userAgent;var flashMode={mode:'flash',val:true};if(!ruleSet.rules){return flashMode;}
var getAction=function(inx){if(ruleSet.actions&&ruleSet.actions[inx]){return ruleSet.actions[inx];}
return flashMode;};for(var i in ruleSet.rules){var rule=ruleSet.rules[i];if(rule.match){if(ua.indexOf(rule.match)!==-1)
return getAction(i);}else if(rule.regMatch){if(ua.match(eval(rule.regMatch)))
return getAction(i);}}
return flashMode;};mw.setConfig('debug',false);mw.setConfig('Kaltura.UseManifestUrls',true);mw.setConfig('Kaltura.Protocol','http');mw.setConfig('Kaltura.ServiceUrl','http://cdnapi.kaltura.com');mw.setConfig('Kaltura.ServiceBase','/api_v3/index.php?service=');mw.setConfig('Kaltura.CdnUrl','http://cdnbakmi.kaltura.com');mw.setConfig('Kaltura.StatsServiceUrl','http://stats.kaltura.com');mw.setConfig('Kaltura.IframeRewrite',true);mw.setConfig('EmbedPlayer.EnableIframeApi',true);mw.setConfig('EmbedPlayer.EnableIpadHTMLControls',true);mw.setConfig('EmbedPlayer.UseFlashOnAndroid',true);mw.setConfig('Kaltura.LoadScriptForVideoTags',true);mw.setConfig('Kaltura.AllowIframeRemoteService',true);mw.setConfig('Kaltura.UseAppleAdaptive',true);mw.setConfig('Kaltura.EnableEmbedUiConfJs',false);;
