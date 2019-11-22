"use strict";class DayBless{constructor(e){this.global=e,this.states={countdownTime:5},this.sets={today:moment(),manjushriDays:{"初一":"受福-吉","初二":"官事","初三":"歡喜-吉","初四":"富貴-吉","初五":"面黑","初六":"神通-吉","初七":"康寧-吉","初八":"壽長-吉","初九":"聞法-吉","初十":"記別-吉","十一":"眼明-吉","十二":"困苦","十三":"少白","十四":"神定-吉","十五":"大吉-吉","十六":"向益-吉","十七":"多病","十八":"犯盜","十九":"悟道-吉","二十":"禍崇","二一":"患難","二二":"受俱-吉","二三":"多聞-吉","二四":"證果-吉","二五":"鬥諍","二六":"祥瑞-吉","二七":"瘡癬","二八":"受寃","二九":"長慧-吉","三十":"如意-吉"},chtDay:{Sun:"日",Mon:"一",Tue:"二",Wed:"三",Thu:"四",Fri:"五",Sat:"六"}},this.guestIpObj=$.getJSON("https://api.ipify.org?format=jsonp&callback=?"),this.cached=(()=>{if(localStorage.getItem("blessCal")){const e=JSON.parse(localStorage.getItem("blessCal"));return e.date===this.sets.today.format("YYYY-MM-DD")?e:{date:this.sets.today.format("YYYY-MM-DD")}}return{date:this.sets.today.format("YYYY-MM-DD")}})()}calBbuild(){const e=this.sets.today.format("YYYY-MM-DD"),t="1TMZHX9LRmb6ROdXsysHY5hKFubWuM2klz51xLOGYSLE",s=0,a="calRender",o=`${"https://spreadsheets.google.com/tq?"}tqx=responseHandler:${a}&tq=${encodeURI(`select * where A = date '${e}'`)}&key=${t}&gid=${s}`;$.getScript(o),this.global[a]=(e=>{const t=this.sets.today,s=this.sets.chtDay[t.format("ddd")],a=e.table.rows[0].c,o=a[1].v,i=this.sets.manjushriDays[o.slice(o.length-2)];if($("#js-date").text(t.format("YYYY.MM.DD")+"("+s+")").fitText(1.05),$(".bless-title").fitText(.9),$(".cal-lunar__val").text(o),i.indexOf("-")>-1?$(".cal-manjushri__val").addClass("good").text(i.slice(0,2)):$(".cal-manjushri__val").text(i),null!==a[2]&&null!==a[2].v){const e=a[2].v.split(",");for(const t of e)$(".cal-spDay").append(`<div class="item">${t}</div>`)}if(null!==a[3]&&null!==a[3].v){const e=a[3].v.split(",");for(const t of e)$(".buddha-info .list").append(`<li><div class="item">${t}</div></li>`)}$("#js-preToday").text(this.sets.today.format("MM.DD"))})}saveToGdrive(e,t,s){const a=(()=>{try{return this.guestIpObj.responseJSON.ip}catch(e){return""}})(),[o,i]=(()=>FRUBIL?[FRUBIL.client.name,FRUBIL.client.os]:["error","can not import FRUBIL"])(),d={type:"post",url:"https://script.google.com/macros/s/AKfycbx20Lla6yjYC26h7QDNDGv5tTZ-Mft1EhAIWVqYotrtXxjm85Pk/exec",data:{method:"write",time:this.sets.today.format("YYYY-MM-DD hh:mm:ss"),ip:a,browser:o,status:e,note:`${i}`}};"subscribe"===e&&(d.complete=(()=>{(e=>{window.location.href=e})(t)}),d.data.note=`${s}: ${i}`),$.ajax(d)}btnBind(){$(".btn--bless").on("click",()=>{$("body").addClass("day"),this.cached.percent?(alert("您已經看過今日運勢囉😊"),this.dayViewCached()):this.dayView()}),$("#subscribe").on("click",e=>{e.preventDefault();const t=$(e.currentTarget).data("href");$(e.currentTarget).prop("disabled",!0),this.saveToGdrive("subscribe",t,$("#js-blessNum").text())})}dayViewCached(){const[e,t]=[this.cached.percent,this.cached.blessContent],s={videoId:this.cached.videoId,width:"100%",height:300,startSeconds:this.cached.startSeconds};let a,o="";const i=`inset ${.4*e}px -2px #eccc68`;$("#js-blessMoon").css({"box-shadow":i}),$("#js-blessNum").text(e);for(const e of t)o+=`<p>${e}</p>`;$("#js-blessContent").append(o),anime.timeline({easing:"easeOutElastic(1, .8)",begin:()=>{try{a=new YT.Player("ytplayer",{videoId:s.videoId,playerVars:{start:s.startSeconds}})}catch(e){const t=`<iframe width="${s.width}" height="${s.height}" src="https://www.youtube.com/embed/${s.videoId}?start=${s.startSeconds}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;$("#ytplayer").append(t)}},complete:()=>{anime.timeline({complete:()=>{a.playVideo()}}).add({targets:".wrap--day .page-footbox",height:"20.5vh",begin:()=>{$(".page-footbox").addClass("active")}}).add({targets:".wrap--day .ytbox, .wrap--day .ripple",opacity:1})}}).add({targets:"#js-blessMoon",keyframes:[{opacity:1,duration:750,translateY:-10},{translateY:0,duration:250}],delay:1e3}).add({targets:"#js-blessNum",keyframes:[{fontSize:"3em",duration:750},{fontSize:"1em",duration:250}]},1e3).add({targets:".bless__main p",top:0,duration:250,opacity:1,delay:anime.stagger(300),easing:"linear"})}dayView(){const e="1TMZHX9LRmb6ROdXsysHY5hKFubWuM2klz51xLOGYSLE",t=307467837,s="blessRender",a=`${"https://spreadsheets.google.com/tq?"}tqx=responseHandler:${s}&tq=${encodeURI(`select * where A = ${function(e,t=1){return Math.floor(Math.random()*(+e-+t))+ +t}(10)}`)}&key=${e}&gid=${t}`;$.getScript(a),this.global[s]=(e=>{const t=e.table.rows[0].c,[s,a]=[t[1].v||90,t[2].v.split(",")||"今天的您，看來事事得心應手、順心如意、所求皆能如意滿願：),想辦法讓自己的心很穩定，不要心隨萬境波,趁有福報的時候，應該搶時間修福，要時時提醒自己打從我們從娘胎出世，無常就在逼著我們。,無常來了，順境一彈指剎那之間就會變成大逆境！<br>我們要修擺脫三惡道的業力習氣，不要很茫茫然的過日子，要積極的成辦自他二利。"];this.cached.percent=s,this.cached.blessContent=a;const o={videoId:t[4].v||"4ozNk1G4Ao8",width:"100%",height:300,startSeconds:t[5].v||0};let i;this.cached.videoId=o.videoId,this.cached.startSeconds=o.startSeconds,localStorage.setItem("blessCal",JSON.stringify(this.cached));let d="";const r=`inset ${.4*s}px -2px #eccc68`;$("#js-blessMoon").css({"box-shadow":r}),$("#js-blessNum").text(s);for(const e of a)d+=`<p>${e}</p>`;$("#js-blessContent").append(d),anime.timeline({easing:"easeOutElastic(1, .8)",begin:()=>{try{i=new YT.Player("ytplayer",{videoId:o.videoId,playerVars:{start:o.startSeconds}})}catch(e){const t=`<iframe width="${o.width}" height="${o.height}" src="https://www.youtube.com/embed/${o.videoId}?start=${o.startSeconds}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;$("#ytplayer").append(t)}},complete:()=>{anime.timeline({complete:()=>{i.playVideo()}}).add({targets:".wrap--day .page-footbox",height:"20.5vh",begin:()=>{$(".page-footbox").addClass("active")}}).add({targets:".wrap--day .ytbox, .wrap--day .ripple",opacity:1})}}).add({targets:"#js-blessMoon",keyframes:[{opacity:1,duration:750,translateY:-10},{translateY:0,duration:250}],delay:1e3}).add({targets:"#js-blessNum",keyframes:[{fontSize:"3em",duration:750},{fontSize:"1em",duration:250}]},1e3).add({targets:".bless__main p",top:0,duration:250,opacity:1,delay:anime.stagger(300),easing:"linear"})})}devSet(){this.cached={}}devMode(){$(".btn--bless").trigger("click")}main(){this.calBbuild(),this.btnBind()}static pageLoaded(){$("#js-loader").fadeOut("slow"),$("#wrap").css("visibility","visible")}}const pageStartTime=moment();$(()=>{const e=new MobileDetect(window.navigator.userAgent);$("html").addClass(e.os()+" "+e.mobile()),new DayBless(window).main()}),window.addEventListener("load",e=>{const t=moment().diff(pageStartTime);t<5e3?setTimeout(()=>{DayBless.pageLoaded()},5e3-t):DayBless.pageLoaded()});