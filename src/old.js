		
		const _hmt = window._hmt ?? [], url_token="", tried_login = 1
		(function(){
			var s=document.getElementsByTagName("script")[0];
			if(getUrlParam("token")!=null&&getUrlParam("token")!=""){
				url_token=getUrlParam("token");
				localStorage.removeItem("user_token");
				localStorage.setItem("user_token",url_token);
				localStorage.removeItem("user_token_exist");
				localStorage.setItem("user_token_exist","yes");
			}else if(localStorage.getItem("user_token_exist")=="yes")url_token=localStorage.getItem("user_token");
			else tried_login=0;
			if(tried_login){
				var uap=document.createElement("script");
				uap.src="https://my.pisearch.cn/api-v1.js?token="+url_token;
				s.parentNode.insertBefore(uap,s);
			}
			var ip_api=document.createElement("script");
			ip_api.src="https://pv.sohu.com/cityjson?ie=utf-8";
			s.parentNode.insertBefore(ip_api,s);
			var hm=document.createElement("script");
			hm.src="https://hm.baidu.com/hm.js?9102c84753e73a39a288b0068f342c20";
			s.parentNode.insertBefore(hm,s);
		})()
			if(tried_login==0 || UAPStatus!=1200)logout();
			else{
				$("#usernzaame").text(UAPUsername);
				$("#userid").text(UAPUserid);
				$("#login_link").text("注销");
				$("#login_link").attr("href","javascript:logout()");
			}
			var temp_path_name=window.location.pathname;
			if(temp_path_name=="/bookmarks"||temp_path_name=="/bookmarks/")c.page_pos='bookmarks';
			// else if(temp_path_name=="/friends"||temp_path_name=="/friends/")page_pos="friends";
			else if(temp_path_name=="/tools"||temp_path_name=="/tools/")page_pos="tools";
			else if(temp_path_name=="/news"||temp_path_name=="/news/")page_pos="news";
			else if(temp_path_name=="/about"||temp_path_name=="/about/")page_pos="about";
			else if(temp_path_name=="/setting"||temp_path_name=="/setting/")page_pos="setting";
			else if(temp_path_name=="/account"||temp_path_name=="/account/")page_pos="account";
			else page_pos="";
			$(".top-bar-header").removeClass("active");
			$(".main-tabs").removeClass("active");
			if(page_pos=="")$("#bar-common").addClass("active"),$("#tab-common").addClass("active");
			else $("#bar-"+page_pos).addClass("active"),$("#tab-"+page_pos).addClass("active");
			url_replace();
			$('#ip-user').text(returnCitySN["cip"]);
			$('#ip-user-city').text(returnCitySN["cname"]);

<<<
	
function push_baidu_tongji(){
	_hmt.push(['_trackPageview',get_url()]);
}
function search_text_change(from_box){
    if(from_box=="main")document.getElementById("search_box_top").value=document.getElementById("search_box").value;
    else if(from_box=="top")document.getElementById("search_box").value=document.getElementById("search_box_top").value;
}

<<<
	
function logout(){
	localStorage.removeItem("user_token");
	localStorage.removeItem("user_token_exist");
	localStorage.setItem("user_token_exist","no");
	tried_login=0;
	$("#username").text("未登录用户");
	$("#userid").css("display","none");
	$("#login_link").text("登录");
	$("#login_link").attr("href","https://my.pisearch.cn/login");
}
function set_keyword(name,do_replace=0){
	$("#search_box").val(name["name"]);
	ad_jmp_obj=name["redirect"];
	if(do_replace)url_replace();
}
0 && $.ajax({
	url: 'https://static.pisearch.cn/keywords.json',
	data: {},
	timeout: 3000,
	success: function(result){
		var obj=result;
		var keywords=obj["keywords"];
		var keyword_id=Math.floor(Math.random()*keywords.length);
		var tmp_n=keywords[keyword_id]["name"],tmp_o=keywords[keyword_id]["redirect"];
		$("#search_box").val(tmp_n);
		ad_jmp_obj=tmp_o;
		if(keyword_id)do_ad_jmp=1;
		$("#keywors-ver").text(obj["version"]);
	}
})

/*
function default_engine(){
	engine_id=-1;
	set_engine_css(default_engine_id);
	set_cookie();
}
*/
/*
function set_engine(temp_engine_id){
	if(temp_engine_id==default_engine_id)engine_id=-1;
	else engine_id=temp_engine_id;
	set_engine_css(temp_engine_id);
	set_cookie();
}
*/
/*
function set_default_engine(temp_engine_id,do_set_cookie=1){
	if(engine_id==-1)engine_id=default_engine_id;
	default_engine_id=temp_engine_id;
	$(".dflt_engines").removeClass("reversal");
	$("#default_engine_"+temp_engine_id).addClass("reversal");
	if(engine_id==temp_engine_id)engine_id=-1;
	if(do_set_cookie)set_cookie();
}
*/

<<<

/*
function siteTime(){
	window.setTimeout("siteTime()",1000);
	var seconds=1000;
	var minutes=seconds*60;
	var hours=minutes*60;
	var days=hours*24;
	var years=days*365;
	var d=new Date();
	var dYear=d.getFullYear();
	var dMonth=d.getMonth()+1;
	var dDate=d.getDate();
	var dHour=d.getHours();
	var dMinute=d.getMinutes();
	var dSecond=d.getSeconds();
	var t1=Date.UTC(2020,6,1,00,00,00);
	var t2=Date.UTC(dYear,dMonth,dDate,dHour,dMinute,dSecond);
	var diff=t2-t1;
	var diffYears=Math.floor(diff/years);
	var diffDays=Math.floor((diff/days)-diffYears*365);
	var diffHours=Math.floor((diff-(diffYears*365+diffDays)*days)/hours);
	var diffMinutes=Math.floor((diff-(diffYears*365+diffDays)*days-diffHours*hours)/minutes);
	var diffSeconds=Math.floor((diff-(diffYears*365+diffDays)*days-diffHours*hours-diffMinutes*minutes)/seconds);
	$('#sitetime').attr("data-time","已在风雨中度过 "+(diffYears*365+diffDays)+" 天 "+diffHours+" 小时 "+diffMinutes+" 分 "+diffSeconds+" 秒");
}
siteTime();
*/

/*
function name_to_id(name){
	name=name.toLowerCase;
	else return -1;
}
*/
/* -> set pi.c._eid
function set_engine_css(temp_engine_id,do_dfs=1){
	if(temp_engine_id==-1){if(do_dfs==1)set_engine_css(default_engine_id,0);}
	else{
		$(".engines").removeClass("reversal");
		$("#engine_"+temp_engine_id).addClass("reversal");
	}
}
*/
/* -> qs
function getUrlParam(name){
	var reg=new RegExp("(^|&)"+name+"=([^&]*)(&|$)");
	var r=window.location.search.substr(1).match(reg);
	if(r!=null)return unescape(decodeURI(r[2]));
	return null;
}
*/
/* Useless
function set_cookie(){
	// localStorage.removeItem("engine");
	localStorage.removeItem("default_engine");
	// localStorage.setItem("engine",engine_id);
	localStorage.setItem("default_engine",default_engine_id);
}
*/
/* Useless -> encodeURI
function path_encode(url){
	return url.replace(/%/g,'%25')//必须在最前面
			  .replace(/#/g,'%23')
			  .replace(/\$/g,'%24')
			  .replace(/&/g,'%26')
			  .replace(/\+/g,'%2B')
			  .replace(/,/g,'%2C')
			  .replace(/\//g,'%2F')
			  .replace(/:/g,'%3A')
			  .replace(/=/g,'%3D')
			  .replace(/\?/g,'%3F')
			  .replace(/@/g,'%40')
			  .replace(/\[/g,'%5B')
			  .replace(/\\/g,'%5C')
			  .replace(/\]/g,'%5D')
			  .replace(/\^/g,'%5E')
			  .replace(/`/g,'%60')
			  .replace(/{/g,'%7B')
			  .replace(/}/g,'%7D');
}
*/
/*
function get_url_jump(temp_engine_id,temp_key_final,do_dfs=1){
	var ret_url_jump="";
	if(temp_engine_id==0)ret_url_jump="https://www.baidu.com/s?ie=utf-8&wd="+temp_key_final;
	else if(temp_engine_id==1)ret_url_jump="https://cn.bing.com/search?ensearch=0&q="+temp_key_final;
	else if(temp_engine_id==2)ret_url_jump="https://cn.bing.com/search?ensearch=1&q="+temp_key_final;
	else if(temp_engine_id==3)ret_url_jump="https://www.so.com/s?q="+temp_key_final;
	else if(temp_engine_id==4)ret_url_jump="https://www.sogou.com/web?query="+temp_key_final;
	else if(temp_engine_id==5)ret_url_jump="https://github.com/search?q="+temp_key_final;
	else if(temp_engine_id==6)ret_url_jump="https://search.gitee.com/?q="+temp_key_final;
	else if(temp_engine_id==7)ret_url_jump="https://www.oschina.net/search?scope=all&q="+temp_key_final;
	else if(temp_engine_id==8)ret_url_jump="https://www.youdao.com/w/"+temp_key_final;
	else if(temp_engine_id==9)ret_url_jump="https://zh.moegirl.org/index.php?search="+temp_key_final;
	else if(temp_engine_id==10)ret_url_jump="https://buy.cloud.tencent.com/domain?domain="+temp_key_final;
	else if(temp_engine_id==11)ret_url_jump="https://wanwang.aliyun.com/domain/searchresult/#/?keyword="+temp_key_final;
	else if(temp_engine_id==12)ret_url_jump="https://www.zhihu.com/search?type=content&q="+temp_key_final;
	else if(temp_engine_id==13)ret_url_jump="https://search.bilibili.com/all?keyword="+temp_key_final;
	else if(temp_engine_id==14)ret_url_jump="https://www.luogu.com.cn/problem/list?keyword="+temp_key_final;
	else if(temp_engine_id==15)ret_url_jump="https://so.csdn.net/so/search/s.do?q="+temp_key_final;
	else if(temp_engine_id==16)ret_url_jump="https://s.taobao.com/search?q="+temp_key_final;
	else if(temp_engine_id==17)ret_url_jump="https://search.jd.com/Search?enc=utf-8&keyword="+temp_key_final+"&wq="+temp_key_final;
	else if(temp_engine_id==18)ret_url_jump="https://search.yhd.com/c0-0/k"+temp_key_final;
	else if(temp_engine_id==19)ret_url_jump="https://list.tmall.com/search_product.htm?q="+temp_key_final;
	else if(temp_engine_id==20)ret_url_jump="https://www.google.com/search?q="+temp_key_final;
	else if(temp_engine_id==21)ret_url_jump="https://zh.wikipedia.org/w/index.php?search="+temp_key_final;
	else if(temp_engine_id==22)ret_url_jump="https://www.youtube.com/results?search_query="+temp_key_final;
	else if(temp_engine_id==23)ret_url_jump="https://namebeta.com/search/"+temp_key_final;
	else if(temp_engine_id==24)ret_url_jump="https://image.baidu.com/search/index?tn=baiduimage&word="+temp_key_final;
	else if(temp_engine_id==25)ret_url_jump="https://gitlab.com/search?utf8=%E2%9C%93&search="+temp_key_final;
	else if(temp_engine_id==26)ret_url_jump="https://www.wikihow.com/wikiHowTo?search="+temp_key_final;
	else if(temp_engine_id==27)ret_url_jump="https://search.yahoo.com/search?p="+temp_key_final;
	else if(temp_engine_id==28)ret_url_jump="https://baike.baidu.com/search?word="+temp_key_final;
	else if(temp_engine_id==29)ret_url_jump="https://mijisou.com/?q="+temp_key_final;
	else if(temp_engine_id==30)ret_url_jump="https://oj.piterator.com/?kw="+temp_key_final;
	else if(temp_engine_id==31)ret_url_jump="https://music.163.com/#/search/m/?s="+temp_key_final;
	else if(temp_engine_id==32)ret_url_jump="https://y.qq.com/portal/search.html#w="+temp_key_final;
	else if(temp_engine_id==33)ret_url_jump="https://jikipedia.com/search?phrase="+temp_key_final;
	else if(temp_engine_id==34)ret_url_jump="https://weixin.sogou.com/weixin?type=2&ie=utf8&query="+temp_key_final;
	else if(do_dfs)return get_url_jump(default_engine_id,temp_key_final,0);
	return ret_url_jump;
}
*/
/* -> p._page_title_prefix
function get_pos_title_before(){
	if(page_pos=="bookmarks")return "书签 · ";
	// else if(page_pos=="friends")return "友链 · ";
	else if(page_pos=="tools")return "工具 · ";
	else if(page_pos=="news")return "新闻 · ";
	else if(page_pos=="about")return "关于 · ";
	else if(page_pos=="setting")return "设置 · ";
	else if(page_pos=="account")return "账户 · ";
	else return "";
}
*/

/* -> set pi.c.page_pos
function set_page_pos(){
	$(".top-bar-header").removeClass("active");
	$(".main-tabs").removeClass("active");
	if(page_pos=="")$("#bar-common").addClass("active"),$("#tab-common").addClass("active");
	else $("#bar-"+page_pos).addClass("active"),$("#tab-"+page_pos).addClass("active");
}
*/
/*
function url_replace(){
	var temp_url=get_url();
	if(document.domain=="")console.log(temp_url);
	else history.replaceState({},get_pos_title_before()+"Pi Search · 搜索派",temp_url);
	$("title").text(get_pos_title_before()+"Pi Search · 搜索派");
}
*/
/* -> pi.search._current_url
function get_url(){
	return path_obj+page_pos+(document.getElementById("search_box").value!=""&&do_ad_jmp==0?"?q="+path_encode(document.getElementById("search_box").value):"");
}
*/
