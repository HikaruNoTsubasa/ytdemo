class BathBuddha{constructor(t){this.debug=t,this.debug?this.data={bathCountMax:1,singTime:3e3}:this.data={bathCountMax:3,singTime:6e5},this.data.pageDict=(()=>{const t={};for(const[e,s]of homeNames.entries())t[s]=e;return t})()}init(){$("#js-2bath").on("click",t=>{const e=$(t.currentTarget).attr("id").replace("js-2",""),s=this.data.pageDict[e];this.stepSwitch(s)}),this.bath(),this.stepSwitch(0)}bath(){const t=this,e=this.data.bathCountMax-1;let s=0;$("#js-bath-audio").jPlayer({ready:function(){$(this).jPlayer("setMedia",{mp3:"mv/short.mp3"})},ended:function(){s++,$("#js-bath-current").text(`${s}次`),s>e&&t.sing()},preload:"auto",swfPath:"js/library/jplayer/jplayer",supplied:"mp3",volume:.3,cssSelectorAncestor:"",cssSelector:{play:"#js-bath"}})}stepSwitch(t){$(".homebox-sub").fadeOut(400).eq(t).addClass("active")}sing(){const t=this;this.stepSwitch(t.data.pageDict.sing),$("#js-blessing").addClass("active"),$("#js-long-audio").jPlayer({ready:function(){$(this).jPlayer("setMedia",{mp3:"mv/long5m.mp3"}).jPlayer("play"),setTimeout(()=>{t.storeForm()},t.data.singTime)},ended:function(){},preload:"auto",volume:.3,swfPath:"js/library/jplayer/jplayer",supplied:"mp3",cssSelectorAncestor:""})}storeForm(){$("#js-long-audio").jPlayer("destroy");const t=this;this.stepSwitch(t.data.pageDict.form);let e=0;const s=()=>{$.ajax({method:"GET",url:"https://khbfunc.azurewebsites.net/api/callCS?code=xiH8GZyVTbtfp6EgBaBTCcb666zxxx8Ex8RijvsaE/BKNhXG9o43mw==",success:t=>{const e=JSON.parse(t);$("#js-hotlist").length&&$("#js-hotlist").remove();let s='<ol id="js-hotlist" class="hotlist">';for(const t of e)s+=`<li>${t.name} 唸佛 ${t.count}</li>`;s+="</ol>",$("#homebox-form").prepend(s)}})};s(),$("#js-stored-data").submit(function(a){a.preventDefault(),0===e?($.ajax({method:"POST",url:"https://khbfunc.azurewebsites.net/api/callCS?code=xiH8GZyVTbtfp6EgBaBTCcb666zxxx8Ex8RijvsaE/BKNhXG9o43mw==",data:{name:$("#userName").val(),work:"佛號",count:$("#userWork").val()},success:()=>{$("#js-jqmeter").jQMeter({goal:"$1,000",raised:"$530",width:"100%",height:"5vh"}),$("#js-form-btn").text("迴向文"),s()}}),e++):t.verse()})}verse(){this.stepSwitch(this.data.pageDict.verse),$("#js-verse-next").on("click",t=>{$(t.currentTarget).fadeOut(400),$("#js-bonus").slideDown("slow")})}main(){this.init(),this.debug&&this.stepSwitch(this.debug)}}$(()=>{new BathBuddha(1).main()}),window.addEventListener("load",t=>{$("#js-loader").fadeOut("slow"),$("#wrap").css("visibility","visible")});