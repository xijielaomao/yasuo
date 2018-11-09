define("mip-bsml-followbar/mip-bsml-followbar",["require","customElement","zepto"],function(t){var i=t("customElement").create(),e=t("zepto");return i.prototype.build=function(){function t(t,o){var n=e(".body-wrapper"),s=['<div class="follow-tips-lay">','<div class="follow-tips-main">','<div class="follow-tips-box">','<span class="follow-tips-icon follow-tips-icon-'+t+'"></span>',"</div>",'<div class="follow-tips-box">','<span class="follow-tips-txt">'+o+"</span>","</div>",'<div class="follow-tips-btn">我知道了</div>',"</div>","</div>"].join("");n.prepend(s),n.find(".follow-tips-lay").height(e("body").height()),n.css("overflow-y","visible"),i(n)}function i(t){t.find(".follow-tips-lay").on("click",".follow-tips-btn",function(){t.css("overflow-y","auto"),e(this).parents(".follow-tips-lay").remove()})}var o=this,n=o.element,s=e("#pageinfo").attr("ucid")||"",r=e("#pageinfo").attr("gfhid")||"",a=e("#pageinfo").attr("appid")||"",l=e("#pageinfo").attr("followbartype")||2,c=window.getQueryString("of"),h=!1;if(5===+a||6===+a)h=!0;else if(1===+l)h=!0;else if("0"===c||"2"===c)h=!0;var d="/feedflow/cambrian/getcambrianinfo?office_id="+r+"&ucid="+s+"&appid="+a;h&&r&&e.ajax({url:d,cache:!1,dataType:"jsonp",success:function(i){if(i&&0===i.status){var o='<section class="bsml-follow-bar"><div class="bsml-follow-bar-logo bsml-follow-bar-link"><img src="'+i.data.avatar+'" /></div><div class="bsml-follow-bar-text bsml-follow-bar-link"><p class="bsml-follow-bar-text-p bsml-follow-bar-link">'+i.data.name+"</p></div>";if("1"===i.data.subscribe)o+='<div class="follow-btn">+关注</div>';else o+='<div class="follow-btn-ed">已关注</div>';o+="</section>",e(n).append(o),e(n).closest(".body-wrapper").css("paddingTop","80px");var s="/feedflow/cambrian/addsubscribe?office_id="+i.data.office_id;e(n).find(".bsml-follow-bar").delegate(".follow-btn","click",function(o){var n={action_id:"site_bar_click",action_name:"关注组件点击",type:"follow",target:r};if(window.addLog(n),+i.data.login)e.ajax({url:s,cache:!1,dataType:"jsonp",success:function(i){if(i.data)e(".follow-btn").addClass("follow-btn-ed").removeClass("follow-btn").html("已关注");else t(2,"关注失败,请重试")}});else{var a="https://wappass.baidu.com/passport/?login&u="+encodeURIComponent(location.href);location.href=a}}),e(n).find(".bsml-follow-bar").delegate(".bsml-follow-bar-link","click",function(t){location.href=i.data.homepage}),e(n).find(".bsml-follow-bar").delegate(".follow-btn-ed","click",function(t){location.href=i.data.homepage})}else;}})},i}),define("mip-bsml-followbar",["mip-bsml-followbar/mip-bsml-followbar"],function(t){return t}),function(){function t(t,i){t.registerMipElement("mip-bsml-followbar",i,".bsml-follow-bar{font-size:28px;position:fixed;left:0;top:0;overflow:hidden;padding-bottom:15px;background:#fff;width:100%;z-index:9}.bsml-follow-bar .bsml-follow-bar-logo{float:left;margin-left:15px;margin-top:15px;height:37px;width:37px;border-radius:100%;overflow:hidden}.bsml-follow-bar .bsml-follow-bar-logo img{width:100%}.bsml-follow-bar .bsml-follow-bar-text{margin-top:15px;padding-left:14px;font-size:16px;line-height:37px;width:50%;color:#fff;float:left}.bsml-follow-bar .bsml-follow-bar-text .bsml-follow-bar-text-p{overflow:hidden;color:#555}.bsml-follow-bar .bsml-follow-bar-text .bsml-follow-bar-text-span{float:left;margin-top:3px;color:#999;height:18px;line-height:18px;font-size:13px;font-weight:normal;overflow:hidden}.bsml-follow-bar .bsml-follow-bar-text .bsml-follow-bar-text-b{width:14px;height:14px;margin-top:-3px;margin-left:3px;padding:0 3px;text-align:center;font-size:6px;color:#2b99ff;border:1px solid #b3d4f3}.bsml-follow-bar .follow-btn{background-color:#3d3d3d;color:#fff;float:right;font-size:13px;margin-top:20px;margin-right:15px;padding:5px 10px;border-radius:5px}.bsml-follow-bar .follow-btn-ed{background-color:#fff;color:#555;border:1px solid #555;float:right;font-size:13px;margin-top:20px;margin-right:17px;padding:5px 8px;border-radius:5px}.follow-tips{display:none;position:absolute;width:120px;height:rem(60);line-height:rem(60);text-align:center;font-size:rem(12);color:#fff;bottom:30%;left:50%;margin-left:-80px;z-index:999;border-radius:5px;background:rgba(0,0,0,0.3);white-space:nowrap;word-wrap:normal;overflow:hidden;text-overflow:ellipsis}.follow-tips-lay{width:100%;position:fixed;left:0;bottom:0;height:207px;z-index:99999;background:rgba(0,0,0,0.5)}.follow-tips-main{width:281px;position:fixed;left:50%;top:50%;height:145px;margin-top:-72.5px;margin-left:-140px;z-index:100;background:#fff;border-radius:6px}.follow-tips-btn{position:absolute;left:0;bottom:0;width:100%;height:42px;line-height:42px;text-align:center;border-top:1px solid #f1f1f1;color:#333;font-size:14px}.follow-tips-icon-1{display:inline-block;margin-top:19px;width:35px;height:35px;background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEcAAABHCAYAAABVsFofAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxZjJiY2VlMC1mMjljLTQ3N2ItYjUxNS0zMmU2ZTU0ZjZmOGEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDNDMzI1MzM0NzgxMTFFN0I0MDlEN0I5NzBCNzAxMTUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDNDMzI1MzI0NzgxMTFFN0I0MDlEN0I5NzBCNzAxMTUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozMDU0MGM0MC02Y2Q1LTQwNWMtOWZiYy05NmU4YTJlNGFmMmEiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo3Y2ZiYzg3Ny04MmQ2LTExN2EtYWRi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') 0 0 no-repeat;background-size:100%}.follow-tips-icon-2{display:inline-block;margin-top:19px;width:35px;height:35px;background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxZjJiY2VlMC1mMjljLTQ3N2ItYjUxNS0zMmU2ZTU0ZjZmOGEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjY0QzQ1MDU0ODBGMTFFN0E3QzFGOEQ3MkU5NTExMzQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjY0QzQ1MDQ0ODBGMTFFN0E3QzFGOEQ3MkU5NTExMzQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozMDU0MGM0MC02Y2Q1LTQwNWMtOWZiYy05NmU4YTJlNGFmMmEiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo3Y2ZiYzg3Ny04MmQ2LTExN2EtYWRi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') 0 0 no-repeat;background-size:100%}.follow-tips-box{text-align:center}.follow-tips-txt{display:inline-block;font-size:14px;color:#333;margin-top:12px}")}if(window.MIP)require(["mip-bsml-followbar"],function(i){t(window.MIP,i)});else require(["mip","mip-bsml-followbar"],t)}();