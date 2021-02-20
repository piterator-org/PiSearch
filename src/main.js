const qs		= require("qs")

const pi		= {				// Note:
	c: {						// Configs start with "_" have getters & setters, in default, they are bound to `localStorage` |
								// 以下划线开头的配置项拥有 getter 和 setter，默认的行为是与 `localStorage` 绑定。如 `_eid_dft`。
		debug: true,			// debug mode | 调试模式
		_eid: [ "0",				// To assign another getter and/or setter, the value should be |
								// 要指定另外的 getter 和/或 setter，其值应为 `[ dft, getter, setter ]`。
								// `getter` and `setter` needn't to operate the backing field, but should do only the extra task.
								// `getter` 和 `setter` 中无需包含对幕后字段的读写操作，而应仅执行额外任务。如 `_eid` 的 `setter` 仅更改引擎按钮的样式。
			null,
			() => pi.engine.choice_upd()
		],
		_eid_dft: [ "0",
			null,
			() => pi.engine.choice_upd()
		],
		_page_pos: [
			"/",
			null,
			() => {
				const t = pi._page_title_prefix() + "Pi Search · 搜索派"
				pi.$.title.text(t)
				pi.history_upd()
			}
		],
		engine: [				// Each item is | 数组中每个元素都是 `[ url, [ name, alias_1, ... ] ]`
								// All engines use https. "{w}" in `url` is what to search. | 所有引擎使用 https。`url` 中 "{w}" 是搜索内容。
			[ "www.baidu.com/s?ie=utf-8&wd={w}", [ "百度一下", "baidu", "du/niang" ] ],
			[ "cn.bing.com/search?ensearch=0&q={w}", [ "Bing 必应国内", "bing" ] ],
			[ "cn.bing.com/search?ensearch=1&q={w}", [ "Bing 必应国际版", "bing/global" ] ],
			[ "www.so.com/s?q={w}", [ "360 搜索", "360" ] ],
			[ "www.sogou.com/web?query={w}", [ "搜狗搜索", "so/gou", "sou/gou" ] ],
			[ "github.com/search?q={w}", [ "GitHub", "github" ] ],
			[ "search.gitee.com/?q={w}", [ "码云 Gitee", "gitee" ] ],
			[ "gitlab.com/search?utf8=%E2%9C%93&search={w}", [ "GitLab", "gitlab" ] ],
			[ "www.oschina.net/search?scope=all&q={w}", [ "OSCHINA", "os/china" ] ],
			[ "www.youdao.com/w/{w}", [ "有道词典", "you/dao" ] ],
			[ "zh.moegirl.org/index.php?search={w}", [ "萌娘百科", "moe/girl" ] ],
			[ "buy.cloud.tencent.com/domain?domain={w}", [ "DNSPod 域名", "dns/pod" ] ],
			[ "wanwang.aliyun.com/domain/searchresult/#/?keyword={w}", [ "万网域名", "wan/wang" ] ],
			[ "www.zhihu.com/search?type=content&q={w}", [ "知乎", "zhi/hu" ] ],
			[ "search.bilibili.com/all?keyword={w}", [ "哔哩哔哩", "bili", "bili/bili" ] ],
			[ "www.luogu.com.cn/problem/list?keyword={w}", [ "洛谷", "luo/gu" ] ],
			[ "so.csdn.net/so/search/s.do?q={w}", [ "CSDN", "csdn" ] ],
			[ "s.taobao.com/search?q={w}", [ "淘宝", "tao/bao" ] ],
			[ "search.jd.com/Search?enc=utf-8&keyword=${w}&wq={w}", [ "京东", "jd", "jing/dong" ] ],
			[ "search.yhd.com/c0-0/k{w}", [ "1号店", "1hd", "yhd", "1/hao/dian", "yi/hao/dian" ] ],
			[ "list.tmall.com/search_product.htm?q={w}", [ "天猫", "t/mall", "tian/mao" ] ],
			[ "www.google.com/search?q={w}", [ "谷歌 Google", "google" ] ],
			[ "zh.wikipedia.org/w/index.php?search={w}", [ "维基百科", "wiki", "wiki/pedia" ] ],
			[ "www.youtube.com/results?search_query={w}", [ "油管 YouTube", "you/tube" ] ],
			[ "namebeta.com/search/{w}", [ "NameBeta", "name/beta", ] ],
			[ "image.baidu.com/search/index?tn=baiduimage&word={w}", [ "百度图片", "baidu/image", ] ],
			[ "www.wikihow.com/wikiHowTo?search={w}", [ "WikiHow", "wiki/how" ] ],
			[ "search.yahoo.com/search?p={w}", [ "雅虎 Yahoo", "yahoo", "yahu" ] ],
			[ "baike.baidu.com/search?word={w}", [ "百度百科", "baike", "baidu/baike" ] ],
			[ "mijisou.com/?q={w}", [ "秘迹搜索", "miji", "mijisou", "mijiso" ] ],
			[ "oj.piterator.com/?kw={w}", [ "PiOJ", "pioj", ] ],
			[ "music.163.com/#/search/m/?s={w}", [ "网易云音乐", "wyyyy", "wyy", "163/music" ] ],
			[ "y.qq.com/portal/search.html#w={w}", [ "QQ 音乐", "qqyy", "qq/yin/yue", "qq/music" ] ],
			[ "jikipedia.com/search?phrase={w}", [ "小鸡词典", "jiki", "jiki/pedia", "xiao/ji", "xiao/ji/ci/dian" ] ],
			[ "weixin.sogou.com/weixin?type=2&ie=utf8&query={w}", [ "微信公众号", "weixin", "wechat", "gong/zhong/hao" ] ],
		],
		common: [
			[ "推荐", [
				[ "oj.piterator.com/", "PiOJ", true ],
				[ "www.piterator.com/", "Piterator" ],
				[ "nazo.oier.fun/", "OierNazo" ],
				[ "logo.oier.fun/", "OierLogo" ],
				[ "periodic.oier.fun/", "元素周期表" ],
			] ],
			[ "工具", [
				[ "free-site.ga/", "永久免费建站", true ],
				[ "github.com/", "GitHub" ],
				[ "gitee.com/", "Gitee" ],
				[ "gitlab.com/", "GitLab" ],
				[ "periodic.oier.fun/", "元素周期表" ],
				[ "www.youdao.com/", "有道词典" ],
			] ],
			[ "服务", [
				[ "cn.aliyun.com/activity/daily/bestoffer?userCode=95xvcae5", "云服务器低至8.1元/月", true ],
				[ "cn.aliyun.com/", "阿里云" ],
				[ "cloud.tencent.com/", "腾讯云" ],
				[ "www.cloudflare.com/zh-cn/", "Cloudflare" ],
				[ "cloud.baidu.com/", "百度智能云" ],
				[ "coding.net/", "Coding" ],
			] ],
			[ "娱乐", [
				[ "www.bilibili.com/", "哔哩哔哩" ],
				[ "www.iqiyi.com/", "爱奇艺" ],
				[ "v.qq.com/", "腾讯视频" ],
				[ "2048.org/", "2048" ],
				[ "www.acfun.cn/", "AcFun" ],
				[ "movie.douban.com/", "豆瓣电影" ],
				[ "www.hao4k.cn/", "Hao4K" ],
				[ "weibo.com/", "微博" ],
			] ],
			[ "音乐", [
				[ "music.163.com/", "网易云音乐" ],
				[ "y.qq.com/", "QQ音乐" ],
				[ "www.kugou.com/", "酷狗音乐" ],
				[ "www.bilibili.com/v/music/", "哔哩哔哩音乐" ],
				[ "www.xiami.com/", "虾米音乐" ],
				[ "kuwo.cn/", "酷我音乐" ],
				[ "music.migu.cn/", "咪咕音乐" ],
			] ],
			[ "学习", [
				[ "www.zhihu.com/", "知乎" ],
				[ "www.luogu.com.cn/", "洛谷" ],
				[ "ti.luogu.com.cn/", "洛谷有题" ],
				[ "class.luogu.com.cn/course", "洛谷网校" ],
				[ "www.wikihow.com/Main-Page", "WikiHow" ],
				[ "www.jianshu.com/", "简书" ],
				[ "www.ximalaya.com/", "喜马拉雅FM" ],
			] ],
			[ "技术", [
				[ "www.runoob.com/", "菜鸟教程" ],
				[ "www.csdn.net/", "CSDN" ],
				[ "www.oschina.net/", "OSCHINA" ],
				[ "www.w3school.com.cn/", "W3school" ],
				[ "stackoverflow.com/", "StackOverFlow" ],
				[ "segmentfault.com/", "SegmentFault" ],
				[ "www.v2ex.com/", "V2EX" ],
			] ],
			[ "购物", [
				[ "www.taobao.com/", "淘宝网" ],
				[ "www.tmall.com/", "天猫" ],
				[ "www.jd.com/", "京东" ],
				[ "chaoshi.tmall.com/", "天猫超市" ],
				[ "www.tmall.hk/", "天猫国际" ],
				[ "www.suning.com/", "苏宁易购" ],
				[ "www.yhd.com/", "1号店" ],
			] ],
			[ "域名", [
				[ "namebeta.com/", "NameBeta" ],
				[ "wanwang.aliyun.com/", "万网(阿里云)" ],
				[ "www.west.cn/", "西部数码" ],
				[ "www.dnspod.cn/", "DNSPod(腾讯云)" ],
				[ "cloud.baidu.com/product/bcd/search.html", "百度智能云域名服务" ],
			] ],
			[ "邮箱", [
				[ "email.163.com/", "网易免费邮箱" ],
				[ "mail.qq.com/", "QQ邮箱" ],
				[ "outlook.live.com/owa/", "Outlook" ],
				[ "mail.google.com/mail/u/0/", "Gmail" ],
				[ "www.88.com/", "完美邮箱" ],
			] ],
		],
		has_folded: false,
		ad_jmp: false,
		ad_jmp_obj: "",
		bookmark: new Array(48)	// TODO: Each item is | 数组中每个元素都是 `{ title, url, icon }`.
	},
	$: {						// Lazy selectors. | 懒选择器，避免某些高频使用的元素被查询多次。
								// A single character "@", "." & "#" means the label, class & id selector. |
								// 单个字符 at，句点和井号表示，使用标签，类名和 id 选择器。
		window,
		body: "@",
		title: "@",
		search_btn: "#",
		search_box: "#",
		bars: ".bar",
		tabs: ".tab",
		clock_top: "#",
		clock_bottom: "#",
		common_holder: "#tab-common tbody",
		setting_engine: "#",
		engine_holder: "#setting-engine > div",
		engine_tier: "#setting-engine > h3 > mark"
	},
	init() {
		// Note: Expose useful variables to `window` in debug mode. | 调试模式下将有用的变量暴露到 `window`。
		if (pi.c.debug) Object.assign(window, { qs, $, pi })

		// Note: Bind marked configs to `localStorage`. | 绑定标记的配置项到 localStorage。
		for (let n in pi.c) if (n[0] === "_") {
			const k = n.slice(1)
			let d = pi.c[n], getter, setter
			if (Array.isArray(d)) [ d, getter, setter ] = d
			Object.defineProperty(pi.c, n.slice(1), {
				get: () => (getter?.(), localStorage.getItem(k) ?? d),
				set: v => {
					localStorage.setItem(k, v)
					setter?.(v)
				}
			})
		}

		// Note: Load lazy selectors. | 加载懒选择器。
		for (let [ n, s ] of Object.entries(pi.$)) {
			let r; switch (s) {
			case "#":
			case ".":
				r = s + n.replaceAll("_", "-")
				break
			case "@":
				r = n
				break
			default:
				r = s
			}
			pi.$[n] = $(r)
		}

		// Note:
		// Check the query string. Abort initialization when jumping. |
		// 检查 URL 参数。若跳转，中断页面初始化。
		if (pi.search.query()) return

		// Note: Enable searching. | 开启搜索。
		pi.$.window.on("keydown", e => {
			if (e.keyCode === 13) pi.search.open()
		})
		pi.$.search_btn.on("click", pi.search.open)

		// Note: Tab switching. | 标签页切换。
		pi.$.bars.on("focus", e => { // Note:
			pi.c.page_pos = $(e.currentTarget).data("tab").split("-")[1]
			const b = pi.c.page_pos || "common"
			pi.$.bars.removeClass("active")
			pi.$.tabs.removeClass("active")
			$("#bar-" + b).addClass("active")
			$("#tab-" + b).addClass("active")
		}).tab() // Note: Construct tabs by `semantic`. | 用 semantic 构建标签页。

		// Note: Update `q` in the query string after inputting. | 输入搜索内容后更新 URL 中参数 `q`.
		pi.$.search_box.on("input", () => {
			pi.ad_jmp = false
			pi.history_upd()
		})

		// Note: Show time at top and date at bottom. | 显示顶部时间和底部时期。
		setInterval(pi.clock, 800)

		// Note: Generate DOM from config. | 从配置生成 DOM 结构。
		pi.common.generate()
		pi.engine.generate()

		// Note: Show the page. | 显示加载好的页面。
		pi.$.body.show()
	},
	// Note: Methods start with "_" are pure functions. | 下划线开头的方法是纯函数。一般用于计算某个值，且函数名应直接描述此值。
	search: {
		query() {
			if (! location.search) return

			let { q, j } = qs.parse(location.search.slice(1))
			// Note:
			// As long as `j` is existed in the query string, it's considered as to jump. |
			// 只要参数 `j` 存在，就视为将直接跳转。给它赋值是无意义的。
			j = typeof j === "string" 
			q = q.split("*")
			// Note:
			// When there's a "*" in `q`, the part before "*" is considered as an `e`ngine. Either id & alias is OK. |
			// `q` 中可存在星号，此时星号前的部分被视作一个引擎 `e`。id 和别名都可以指定引擎。
			// The other part is obviously `w`hat to search. | 显然另一部分既是搜索的内容。
			let e = q.length === 2 ? q[0] : pi.c.eid, w = q.length === 2 ? q[1] : q[0]
			if (typeof e === "string") e = /^\d+$/.test(e) ? + e : pi.search._eid_by_alias(e)

			if (j) { // Note: You can search nothing. | 你可以什么都不搜，达到仅跳转的目的。
				location.href = pi.search._target_url(w, e)
				return true
			}
			
			pi.c.eid = e
			pi.$.search_box.val(w)
		},
		open() {
			if(pi.c.ad_jmp) {
				window.open(pi.c.ad_jmp_obj)
				return
			}

			let what = pi.$.search_box.val()
			if (! what) return

			window.open(pi.search._target_url(encodeURI(what)))
		},
		_target_url(w, e) {
			e ??= pi.c.eid_dft
			if (e < 0 || e >= pi.c.engine.length) e = pi.c.eid_dft
			return "https://" + pi.c.engine[e][0].replaceAll("{w}", w)
		},
		_current_url() {
			const w = pi.$.search_box.val()
			return location.origin + (! pi.c.ad_jmp && w ? "?q=" + encodeURI(w) : "")
		},
		_eid_by_alias(a) {
			a = a.toLowerCase().replace(/[ _-]/g, "/")
			for (let [ id, e ] of Object.entries(pi.c.engine))
				if (e[1].includes(a) || e[1].map(e => e.replaceAll("/", "")).includes(a))
					return + id
		}
	},
	common: {
		generate() {
			pi.c.common.forEach(g => {
				const $g = $(`<tr><td class="collapsing">${g[0]}</td><td></td></tr>`)
				const $l = $g.children(":last-child")
				pi.$.common_holder.append($g)
				g[1].forEach(l => $(`<a class="teal ${(l[2] ? " bolder" : "")}"` +
					`href="https://${l[0]}" rel="nofollow" tabindex="-1"> ${l[1]} </a>`).appendTo($l))
			})
		}
	},
	engine: {
		generate() {
			pi.c.engine.forEach(e => pi.$.engine_holder.append(`<mark>${ e[1][0] }</mark>`))
			pi.$.engine_holder.on("click", "mark", e => pi.c[ pi.engine.act._c() ]
				= $(e.currentTarget).index())
			pi.$.engine_tier.on("click", e => {
				if (pi.engine.act._btn()[0] === e.currentTarget) return
				pi.$.engine_tier.toggleClass("act")
				pi.engine.choice_upd()
			})
			pi.engine.choice_upd()
		},
		act: {
			_btn: () => pi.$.engine_tier.filter(".act"),
			_id: () => [ "当前", "默认" ].indexOf(pi.engine.act._btn().text()),
			_c: () => pi.engine.act._id() ? "eid_dft" : "eid"
		},
		choice_upd() {
			pi.$.engine_holder.children(".act").removeClass("act")
			$(pi.$.engine_holder.children()[ + pi.c[ pi.engine.act._c() ] ]).addClass("act")
		}
	},
	history_upd() {
		if (location.protocol !== "file:")
			history.replaceState(null, pi.$.title.text(), pi.search._current_url())
	},
	_page_title_prefix() {
		const z = {
			"bookmarks": "书签",
			"friends": "友链",
			"tools": "工具",
			"news": "新闻",
			"about": "关于",
			"setting": "设置",
			"account": "账户"
		}[ pi.c._page_pos ]
		return z ? z + " · " : ""
	},
	clock() {
		const d = new Date()
		pi.$.clock_top.attr("data-clock", Date().match(/\d\d:\d\d:\d\d/)[0])
		pi.$.clock_bottom.attr("data-clock", d.getFullYear() + "年" + (d.getMonth() + 1) + "月" + d.getDate() + "日")
	}
}

$(pi.init)

