function unitime(){var Q='bootstrap',R='begin',S='gwt.codesvr.unitime=',T='gwt.codesvr=',U='unitime',V='startup',W='DUMMY',X=0,Y=1,Z='iframe',$='position:absolute; width:0; height:0; border:none; left: -1000px;',_=' top: -1000px;',ab='CSS1Compat',bb='<!doctype html>',cb='',db='<html><head><\/head><body><\/body><\/html>',eb='undefined',fb='readystatechange',gb=10,hb='Chrome',ib='eval("',jb='");',kb='script',lb='javascript',mb='moduleStartup',nb='moduleRequested',ob='Failed to load ',pb='head',qb='meta',rb='name',sb='unitime::',tb='::',ub='gwt:property',vb='content',wb='=',xb='gwt:onPropertyErrorFn',yb='Bad handler "',zb='" for "gwt:onPropertyErrorFn"',Ab='gwt:onLoadErrorFn',Bb='" for "gwt:onLoadErrorFn"',Cb='#',Db='?',Eb='/',Fb='img',Gb='clear.cache.gif',Hb='baseUrl',Ib='unitime.nocache.js',Jb='base',Kb='//',Lb='locale',Mb='en',Nb='locale=',Ob=7,Pb='&',Qb='__gwt_Locale',Rb='_',Sb='Unexpected exception in locale detection, using default: ',Tb=2,Ub=3,Vb=4,Wb=5,Xb='user.agent',Yb='webkit',Zb='safari',$b='gecko',_b=11,ac='gecko1_8',bc='selectingPermutation',cc='unitime.devmode.js',dc='126CD0066812506F30C835B3AC8D952B',ec='default',fc='2561D9BB27F64FA11C00CE447AC96E4C',gc='37E8B26096110BB71B4C6F5D2EEF4022',hc='pl',ic='3E31FA970D1DB827CD8156E2E7903B9C',jc='42B7F77793D954A429715211B3EB349D',kc='en_UK',lc='44D92C055950641E044576295582F866',mc='ar',nc='5982571BA94D398EBAE915E07214AA0B',oc='856751D21B2CFF02E47A1A219CAB31B0',pc='cs',qc='8CD2DFDB8A36E626E7A492D85A27CAFB',rc='9E33793EBC73CC1933A0385392AF17ED',sc='E78EEFCF99A7B9EB4DF00994FD7AFD5D',tc='EBD9284CAD39C8316CFA2D75535FD09D',uc=':',vc='.cache.js',wc='loadExternalRefs',xc='end',yc='http:',zc='file:',Ac='_gwt_dummy_',Bc='__gwtDevModeHook:unitime',Cc='Ignoring non-whitelisted Dev Mode URL: ',Dc=':moduleBase';var q=window;var r=document;t(Q,R);function s(){var a=q.location.search;return a.indexOf(S)!=-1||a.indexOf(T)!=-1}
function t(a,b){if(q.__gwtStatsEvent){q.__gwtStatsEvent({moduleName:U,sessionId:q.__gwtStatsSessionId,subSystem:V,evtGroup:a,millis:(new Date).getTime(),type:b})}}
unitime.__sendStats=t;unitime.__moduleName=U;unitime.__errFn=null;unitime.__moduleBase=W;unitime.__softPermutationId=X;unitime.__computePropValue=null;unitime.__getPropMap=null;unitime.__installRunAsyncCode=function(){};unitime.__gwtStartLoadingFragment=function(){return null};unitime.__gwt_isKnownPropertyValue=function(){return false};unitime.__gwt_getMetaProperty=function(){return null};var u=null;var v=q.__gwt_activeModules=q.__gwt_activeModules||{};v[U]={moduleName:U};unitime.__moduleStartupDone=function(e){var f=v[U].bindings;v[U].bindings=function(){var a=f?f():{};var b=e[unitime.__softPermutationId];for(var c=X;c<b.length;c++){var d=b[c];a[d[X]]=d[Y]}return a}};var w;function A(){B();return w}
function B(){if(w){return}var a=r.createElement(Z);a.id=U;a.style.cssText=$+_;a.tabIndex=-1;r.body.appendChild(a);w=a.contentWindow.document;w.open();var b=document.compatMode==ab?bb:cb;w.write(b+db);w.close()}
function C(k){function l(a){function b(){if(typeof r.readyState==eb){return typeof r.body!=eb&&r.body!=null}return /loaded|complete/.test(r.readyState)}
var c=b();if(c){a();return}function d(){if(!c){if(!b()){return}c=true;a();if(r.removeEventListener){r.removeEventListener(fb,d,false)}if(e){clearInterval(e)}}}
if(r.addEventListener){r.addEventListener(fb,d,false)}var e=setInterval(function(){d()},gb)}
function m(c){function d(a,b){a.removeChild(b)}
var e=A();var f=e.body;var g;if(navigator.userAgent.indexOf(hb)>-1&&window.JSON){var h=e.createDocumentFragment();h.appendChild(e.createTextNode(ib));for(var i=X;i<c.length;i++){var j=window.JSON.stringify(c[i]);h.appendChild(e.createTextNode(j.substring(Y,j.length-Y)))}h.appendChild(e.createTextNode(jb));g=e.createElement(kb);g.language=lb;g.appendChild(h);f.appendChild(g);d(f,g)}else{for(var i=X;i<c.length;i++){g=e.createElement(kb);g.language=lb;g.text=c[i];f.appendChild(g);d(f,g)}}}
unitime.onScriptDownloaded=function(a){l(function(){m(a)})};t(mb,nb);var n=r.createElement(kb);n.src=k;if(unitime.__errFn){n.onerror=function(){unitime.__errFn(U,new Error(ob+code))}}r.getElementsByTagName(pb)[X].appendChild(n)}
unitime.__startLoadingFragment=function(a){return G(a)};unitime.__installRunAsyncCode=function(a){var b=A();var c=b.body;var d=b.createElement(kb);d.language=lb;d.text=a;c.appendChild(d);c.removeChild(d)};function D(){var c={};var d;var e;var f=r.getElementsByTagName(qb);for(var g=X,h=f.length;g<h;++g){var i=f[g],j=i.getAttribute(rb),k;if(j){j=j.replace(sb,cb);if(j.indexOf(tb)>=X){continue}if(j==ub){k=i.getAttribute(vb);if(k){var l,m=k.indexOf(wb);if(m>=X){j=k.substring(X,m);l=k.substring(m+Y)}else{j=k;l=cb}c[j]=l}}else if(j==xb){k=i.getAttribute(vb);if(k){try{d=eval(k)}catch(a){alert(yb+k+zb)}}}else if(j==Ab){k=i.getAttribute(vb);if(k){try{e=eval(k)}catch(a){alert(yb+k+Bb)}}}}}__gwt_getMetaProperty=function(a){var b=c[a];return b==null?null:b};u=d;unitime.__errFn=e}
function F(){function e(a){var b=a.lastIndexOf(Cb);if(b==-1){b=a.length}var c=a.indexOf(Db);if(c==-1){c=a.length}var d=a.lastIndexOf(Eb,Math.min(c,b));return d>=X?a.substring(X,d+Y):cb}
function f(a){if(a.match(/^\w+:\/\//)){}else{var b=r.createElement(Fb);b.src=a+Gb;a=e(b.src)}return a}
function g(){var a=__gwt_getMetaProperty(Hb);if(a!=null){return a}return cb}
function h(){var a=r.getElementsByTagName(kb);for(var b=X;b<a.length;++b){if(a[b].src.indexOf(Ib)!=-1){return e(a[b].src)}}return cb}
function i(){var a=r.getElementsByTagName(Jb);if(a.length>X){return a[a.length-Y].href}return cb}
function j(){var a=r.location;return a.href==a.protocol+Kb+a.host+a.pathname+a.search+a.hash}
var k=g();if(k==cb){k=h()}if(k==cb){k=i()}if(k==cb&&j()){k=e(r.location.href)}k=f(k);return k}
function G(a){if(a.match(/^\//)){return a}if(a.match(/^[a-zA-Z]+:\/\//)){return a}return unitime.__moduleBase+a}
function H(){var i=[];var j=X;function k(a,b){var c=i;for(var d=X,e=a.length-Y;d<e;++d){c=c[a[d]]||(c[a[d]]=[])}c[a[e]]=b}
var l=[];var m=[];function n(a){var b=m[a](),c=l[a];if(b in c){return b}var d=[];for(var e in c){d[c[e]]=e}if(u){u(a,d,b)}throw null}
m[Lb]=function(){var b=null;var c=Mb;try{if(!b){var d=location.search;var e=d.indexOf(Nb);if(e>=X){var f=d.substring(e+Ob);var g=d.indexOf(Pb,e);if(g<X){g=d.length}b=d.substring(e+Ob,g)}}if(!b){b=__gwt_getMetaProperty(Lb)}if(!b){b=q[Qb]}if(b){c=b}while(b&&!__gwt_isKnownPropertyValue(Lb,b)){var h=b.lastIndexOf(Rb);if(h<X){b=null;break}b=b.substring(X,h)}}catch(a){alert(Sb+a)}q[Qb]=c;return b||Mb};l[Lb]={'ar':X,'cs':Y,'default':Tb,'en':Ub,'en_UK':Vb,'pl':Wb};m[Xb]=function(){var a=navigator.userAgent.toLowerCase();var b=r.documentMode;if(function(){return a.indexOf(Yb)!=-1}())return Zb;if(function(){return a.indexOf($b)!=-1||b>=_b}())return ac;return cb};l[Xb]={'gecko1_8':X,'safari':Y};__gwt_isKnownPropertyValue=function(a,b){return b in l[a]};unitime.__getPropMap=function(){var a={};for(var b in l){if(l.hasOwnProperty(b)){a[b]=n(b)}}return a};unitime.__computePropValue=n;q.__gwt_activeModules[U].bindings=unitime.__getPropMap;t(Q,bc);if(s()){return G(cc)}var o;try{k([Mb,ac],dc);k([ec,ac],fc);k([ec,Zb],gc);k([hc,Zb],ic);k([hc,ac],jc);k([kc,ac],lc);k([mc,Zb],nc);k([kc,Zb],oc);k([pc,Zb],qc);k([pc,ac],rc);k([mc,ac],sc);k([Mb,Zb],tc);o=i[n(Lb)][n(Xb)];var p=o.indexOf(uc);if(p!=-1){j=parseInt(o.substring(p+Y),gb);o=o.substring(X,p)}}catch(a){}unitime.__softPermutationId=j;return G(o+vc)}
function I(){if(!q.__gwt_stylesLoaded){q.__gwt_stylesLoaded={}}t(wc,R);t(wc,xc)}
D();unitime.__moduleBase=F();v[U].moduleBase=unitime.__moduleBase;var J=H();if(q){var K=!!(q.location.protocol==yc||q.location.protocol==zc);q.__gwt_activeModules[U].canRedirect=K;function L(){var b=Ac;try{q.sessionStorage.setItem(b,b);q.sessionStorage.removeItem(b);return true}catch(a){return false}}
if(K&&L()){var M=Bc;var N=q.sessionStorage[M];if(!/^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?\/.*$/.test(N)){if(N&&(window.console&&console.log)){console.log(Cc+N)}N=cb}if(N&&!q[M]){q[M]=true;q[M+Dc]=F();var O=r.createElement(kb);O.src=N;var P=r.getElementsByTagName(pb)[X];P.insertBefore(O,P.firstElementChild||P.children[X]);return false}}}I();t(Q,xc);C(J);return true}
unitime.succeeded=unitime();