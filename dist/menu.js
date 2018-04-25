!function(t){var e={};function s(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=e,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},s.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=1)}([function(t,e){t.exports=jQuery},function(t,e,s){"use strict";s.r(e);var n=s(0),i=s.n(n);const o=27,r=35,h=36,a=37,u=38,l=39,m=40,c=400,p=40,d=400;let f=0;class v{constructor(t,e){this.menu=t,this.$element=e,this.$link=e.find("a").first(),this.open=!1,this.$element.attr("role")||this.$element.attr("role","none"),this.$link.attr("role")||this.$link.attr("role","menuitem");const s=e.find("ul").first();s.length&&(s.attr("id")||s.attr("id",function(){const t=f+1;return f=t,`sl-menu__submenu_${t}`}()),this.submenu=new t.constructor(s,{role:"menu",focusContainer:!1}),this.$element.addClass("sl-menu--has-submenu"),this.$link.attr("aria-haspopup","menu").attr("aria-controls",s.attr("id")),this.$toggle=i()('<button type="button" class="sl-menu__toggle">Toggle menu</button>').attr("aria-controls",s.attr("id")).attr("tabindex","-1").insertAfter(this.$link),s.addClass("sl-menu__submenu"),s.attr("aria-label")||s.attr("aria-label",this.$link.text())),this.update()}setOpen(t){this.submenu&&(this.open=t,this.submenu.setOpenIndex(-1),this.update())}update(){if(!this.submenu)return;this.open?(this.$element.removeClass("sl-menu--closed"),this.$element.addClass("sl-menu--open")):(this.$element.removeClass("sl-menu--open"),this.$element.addClass("sl-menu--closed"));const t=this.submenu.$element.is(":visible")?"true":"false";this.$link.attr("aria-expanded",t),this.$toggle.attr("aria-expanded",t)}focus(){this.$link.focus()}}var x=class{constructor(t,e={}){let s,n;this.$element=t,this.role=e.role||"menubar",this.focusContainer="boolean"!=typeof e.focusContainer||e.focusContainer,this.items=[],this.openIndex=-1,this.hoverMode=!0,this.hoverIntent=!1,this.$element.attr("role")||this.$element.attr("role",this.role),t.focusin(t=>{if(this.focusContainer){const e=i()(t.target);this.setActiveElement(e)}this.setOrientation()}),this.focusContainer&&t.focusout(()=>{setTimeout(()=>{document.activeElement&&0!==t.has(document.activeElement).length||-1!==this.openIndex&&(this.setActiveElement(this.items[this.openIndex].$link),this.setOpenIndex(-1))})}),t.keydown(t=>{if(t.which===o&&-1!==this.openIndex){const e=this.items[this.openIndex];this.setOpenIndex(-1),e.focus(),t.stopPropagation(),t.preventDefault()}}),t.mouseenter(()=>{this.setHoverMode()}),t.children("li").each((t,e)=>{const o=i()(e),f=new v(this,o);this.items.push(f),f.$link.attr("tabindex","-1"),o.keydown(e=>{const s="horizontal"===this.orientation?m:l,n="horizontal"===this.orientation?u:a,i="horizontal"===this.orientation?a:u,o="horizontal"===this.orientation?l:m;switch(e.which){case s:f.submenu&&this.openIndex!==t&&(this.setOpenIndex(t),f.submenu.focusFirstItem(),e.stopPropagation(),e.preventDefault());break;case n:f.submenu&&this.openIndex===t&&(this.setOpenIndex(-1),f.focus(),e.stopPropagation(),e.preventDefault());break;case i:if(t>0){if(t!==this.openIndex||"horizontal"===this.orientation){const e=this.items[t-1];e.submenu&&-1!==this.openIndex?(this.setOpenIndex(t-1),e.submenu.focusFirstItem()):(this.setOpenIndex(-1),e.focus())}e.stopPropagation(),e.preventDefault()}break;case o:if(t<this.items.length-1){const e=this.items[t+1];e.submenu&&-1!==this.openIndex?(this.setOpenIndex(t+1),e.submenu.focusFirstItem()):(this.setOpenIndex(-1),e.focus())}e.stopPropagation(),e.preventDefault();break;case h:if(this.items.length>0){const t=this.items[0];t.submenu&&-1!==this.openIndex?(this.setOpenIndex(1),t.submenu.focusFirstItem()):(this.setOpenIndex(-1),t.focus()),e.stopPropagation(),e.preventDefault()}break;case r:if(this.items.length>0){const t=this.items[this.items.length-1];t.submenu&&-1!==this.openIndex?(this.setOpenIndex(this.items.length-1),t.submenu.focusFirstItem()):(this.setOpenIndex(-1),t.focus()),e.stopPropagation(),e.preventDefault()}}}),o.mouseenter(()=>{this.hoverMode&&(s&&(clearTimeout(s),s=void 0),this.hoverIntent?this.setOpenIndex(t):s=setTimeout(()=>{this.hoverMode&&(this.hoverIntent=!0,this.setOpenIndex(t))},c),n&&(clearTimeout(n),n=void 0))}),o.mousemove(()=>{this.hoverMode&&!this.hoverIntent&&(n&&clearTimeout(n),n=setTimeout(()=>{this.hoverIntent=!0,this.setOpenIndex(t)},p))}),o.mouseleave(()=>{this.hoverMode&&(s&&clearTimeout(s),s=setTimeout(()=>{this.openIndex===t&&(this.hoverIntent=!1,this.setOpenIndex(-1))},d),n&&(clearTimeout(n),n=void 0))}),f.submenu&&f.$toggle&&f.$toggle.click(()=>{this.openIndex===t?(this.setOpenIndex(-1),f.focus()):(this.setOpenIndex(t),f.submenu.focusFirstItem())})}),this.focusContainer&&this.items.length>0&&this.setActiveElement(this.items[0].$link),this.setOrientation(),this.update()}setActiveElement(t){if(0===this.$element.has(t).length)return;this.$prevActiveElement&&this.$prevActiveElement.attr("tabindex","-1");const e=t;e.attr("tabindex","0"),this.$prevActiveElement=e}setOrientation(){if(this.$element.is(":visible")&&this.items.length>=2){const t=this.items[0].$element.offset(),e=this.items[1].$element.offset(),s=Math.abs(e.left-t.left),n=Math.abs(e.top-t.top);this.orientation=s>n?"horizontal":"vertical"}else"menubar"===this.role?this.orientation="horizontal":this.orientation="vertical";this.$element.attr("aria-orientation",this.orientation)}setHoverMode(){this.hoverMode=!this.items.some(t=>t.$toggle&&t.$toggle.is(":visible"))}setOpenIndex(t){this.openIndex=t,this.update()}update(){this.items.forEach((t,e)=>{t.setOpen(e===this.openIndex)})}focusFirstItem(){0!==this.items.length&&this.items[0].focus()}};i.a.fn.slMenu=function(){return new x(this)},i()(document).ready(()=>{i()(".sl-menu").slMenu()})}]);