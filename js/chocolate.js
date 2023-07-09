

// 友情链接页面 头像找不到时 替换图片
if (location.href.indexOf("link") !== -1) {
    var imgObj = document.getElementsByTagName("img");
    for (i = 0; i < imgObj.length; i++) {
        imgObj[i].onerror = function () { this.src = "https://cdn.jsdelivr.net/gh/tzy13755126023/BLOG_SOURCE/theme_f/friend_404.gif" }
    }
}

$(function () {

    // 气泡
    function bubble() {
        $('#page-header').circleMagic({
            radius: 10,
            density: .2,
            color: 'rgba(255,255,255,.4)',
            clearOffset: 0.99
        });
    } ! function (p) {
        p.fn.circleMagic = function (t) {
            var o, a, n, r, e = !0,
                i = [],
                d = p.extend({ color: "rgba(255,0,0,.5)", radius: 10, density: .3, clearOffset: .2 }, t),
                l = this[0];

            function c() { e = !(document.body.scrollTop > a) }

            function s() { o = l.clientWidth, a = l.clientHeight, l.height = a + "px", n.width = o, n.height = a }

            function h() {
                if (e)
                    for (var t in r.clearRect(0, 0, o, a), i) i[t].draw();
                requestAnimationFrame(h)
            }

            function f() {
                var t = this;

                function e() { t.pos.x = Math.random() * o, t.pos.y = a + 100 * Math.random(), t.alpha = .1 + Math.random() * d.clearOffset, t.scale = .1 + .3 * Math.random(), t.speed = Math.random(), "random" === d.color ? t.color = "rgba(" + Math.floor(255 * Math.random()) + ", " + Math.floor(0 * Math.random()) + ", " + Math.floor(0 * Math.random()) + ", " + Math.random().toPrecision(2) + ")" : t.color = d.color }
                t.pos = {}, e(), this.draw = function () { t.alpha <= 0 && e(), t.pos.y -= t.speed, t.alpha -= 5e-4, r.beginPath(), r.arc(t.pos.x, t.pos.y, t.scale * d.radius, 0, 2 * Math.PI, !1), r.fillStyle = t.color, r.fill(), r.closePath() }
            } ! function () {
                o = l.offsetWidth, a = l.offsetHeight,
                    function () {
                        var t = document.createElement("canvas");
                        t.id = "canvas", t.style.top = 0, t.style.zIndex = 0, t.style.position = "absolute", l.appendChild(t), t.parentElement.style.overflow = "hidden"
                    }(), (n = document.getElementById("canvas")).width = o, n.height = a, r = n.getContext("2d");
                for (var t = 0; t < o * d.density; t++) {
                    var e = new f;
                    i.push(e)
                }
                h()
            }(), window.addEventListener("scroll", c, !1), window.addEventListener("resize", s, !1)
        }
    }(jQuery);

    // 调用气泡方法
    bubble();
})
// 手机默认不展开标题栏
var mobile_sidebar_menus = document.getElementById("mobile-sidebar-menus");
var menus_item_child = mobile_sidebar_menus.getElementsByClassName(
    "menus_item_child"
);
var menus_expand = mobile_sidebar_menus.getElementsByClassName("menus-expand");
for (var i = 0; i < menus_item_child.length; i++) {
    menus_item_child[i].style.display = "none";
    menus_expand[i].className += " menus-closed";
}
// 分类收起
var card_category_list = document.getElementsByClassName("card-category-list child"); 
var item = document.getElementsByClassName("card-category-list-item");
 function toggle(t) { var display = t.parentElement.nextSibling.style.display; 
    if (display == "none") { t.parentElement.nextSibling.style.display = "block"; 
    t.parentElement.nextSibling.style.height = "100%";
     t.className = t.className.replace("fa-chevron-up", "fa-chevron-down"); } else { t.parentElement.nextSibling.style.display = "none"; 
     t.className = t.className.replace("fa-chevron-down", "fa-chevron-up"); } } for (var i = 0; i < card_category_list.length; i++) { card_category_list[i].style.display = "none";
      card_category_list[i].style.transition = "all 1s"; card_category_list[i].previousSibling.innerHTML += '<i class="fa fa-chevron-up menus-expand  menus-closed" aria-hidden="true" style="margin-left:20px;" onclick="toggle(this)"></i>'; }


// 标签外挂
/* eslint-disable */
(function ($) {
    "use strict";
    function setTabs() {
      const $tabs = $(".tabs");
      if ($tabs.length === 0) return;
      let $navs = $tabs.find(".nav-tabs .tab");
      for (var i = 0; i < $navs.length; i++) {
        let $a = $tabs.find($navs[i].children[0]);
        $a.addClass($a.attr("href"));
        $a.removeAttr("href");
      }
      $(".tabs .nav-tabs").on("click", "a", (e) => {
        e.preventDefault();
        e.stopPropagation();
        let $tab = $(e.target.parentElement.parentElement.parentElement);
        $tab.find(".nav-tabs .active").removeClass("active");
        $tab.find(e.target.parentElement).addClass("active");
        $tab.find(".tab-content .active").removeClass("active");
        $tab.find($(e.target).attr("class")).addClass("active");
        return false;
      });
    }
  
    $(function () {
      setTabs();
      // $(".article .video-container").fitVids();
      $(".scroll-down").on("click", function () {
        scrolltoElement(".l_body");
      });
      setTimeout(function () {
        $("#loading-bar-wrapper").fadeOut(500);
      }, 300);
    });
  })(jQuery);
  