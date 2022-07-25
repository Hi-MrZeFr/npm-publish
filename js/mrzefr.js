//autumn_banner
var autumnBanner = document.querySelector('#autumnBanner')
if (autumnBanner) {
  var images = document.querySelectorAll('#autumnBanner > div > img')
  autumnBanner.addEventListener('mousemove', (e) => {
    let percentage = e.clientX / window.outerWidth
    let offset = 10 * percentage
    let blur = 20

    for (let [index, image] of images.entries()) {
      offset *= 1.3

      let blurValue = (Math.pow((index / images.length - percentage), 2) * blur)

      image.style.setProperty('--offset', `${offset}px`)
      image.style.setProperty('--blur', `${blurValue}px`)
    }
  })
}
//winter_banner
var winterBanner = document.querySelector('#winterBanner')
if (winterBanner) {
  var startingPoint
  winterBanner.addEventListener('mouseenter', (e) => {
    startingPoint = e.clientX
    winterBanner.classList.add('moving')
  })

  winterBanner.addEventListener('mouseout', (e) => {
    winterBanner.classList.remove('moving')
    winterBanner.style.setProperty('--percentage', 0.5)
  })

  winterBanner.addEventListener('mousemove', (e) => {
    let percentage = (e.clientX - startingPoint) / window.outerWidth + 0.5

    winterBanner.style.setProperty('--percentage', percentage)
  })
}
//智能调整颜色
if (document.getElementById('post-cover')) {
    const img = document.getElementById('post-cover').getAttribute('data-lazy-src')
    RGBaster.colors(img, {
        paletteSize: 30,
        exclude: ["rgb(255,255,255)", "rgb(0,0,0)", "rgb(254,254,254)"],
        success: function(t) {
          if (t.dominant != 'rgb()'){
            const c = t.dominant.match(/\d+/g);
            const Color = `rgba(${c[0]},${c[1]},${c[2]})`;
            let fontColor;
            //const grayLevel = c[0] * 0.299 + c[1] * 0.587 + c[2] * 0.114;
            const grayLevel = c[0] * 0.213 + c[1] * 0.715 + c[2] * 0.072;
            //if (grayLevel >= 190) {
            if (grayLevel >= 255/2) {
              // 若为浅色，把文字设置为黑色
              fontColor = '#000';
              metaColor = '#1C1C1C';
            } else {
              fontColor = '#fff';
              metaColor = '#eee';
            }
            document.styleSheets[0].addRule(":root", "--mr-main:" + Color + "!important")
            document.styleSheets[0].addRule(":root", "--mr-titlecolor:" + fontColor + "!important")
            document.styleSheets[0].addRule(":root", "--mr-metacolor:" + metaColor + "!important")
          } else {
            document.styleSheets[0].addRule(":root", "--mr-main: rgba(255,250,240) !important")
            document.styleSheets[0].addRule(":root", "--mr-titlecolor: #000 !important")
            document.styleSheets[0].addRule(":root", "--mr-metacolor: #1C1C1C !important")
          }
        },
        error: function() {
            document.styleSheets[0].addRule(":root", "--mr-main: rgba(255,250,240) !important")
            document.styleSheets[0].addRule(":root", "--mr-titlecolor: #000 !important")
            document.styleSheets[0].addRule(":root", "--mr-metacolor: #1C1C1C !important")
        }
    })
  } else {
    document.styleSheets[0].addRule(":root", "--mr-main: #007AFF !important")
    document.styleSheets[0].addRule(":root", "--mr-titlecolor: var(--light-grey) !important")
  }
//svg图标
!function(a){var t,l,e,h,n,i='<svg><symbol id="icon-analitic" viewBox="0 0 1024 1024"><path d="M912 128a80 80 0 0 0-80 80v208a209.6 209.6 0 0 0-112-112l-7.84-3.04-4.64-1.76-5.92-1.92c-4.48-1.44-8.96-2.56-13.6-3.68a177.28 177.28 0 0 0-18.4-3.36 80 80 0 0 0-8.64-1.12L656 288h-16a208 208 0 0 0 0 416h20.96a80 80 0 0 0 8.64-1.12 177.28 177.28 0 0 0 18.4-4.48 195.52 195.52 0 0 0 19.52-5.6l4.64-1.76L720 688a192.8 192.8 0 0 0 33.12-17.6L832 749.28V816a80 80 0 0 1-80 80 75.36 75.36 0 0 1-16-1.6 80 80 0 0 1-64-78.4v-48H208V208a80 80 0 0 1 80-80z" fill="#CEE6F4" ></path><path d="M816 880H208v-64a608 608 0 0 0 608-608z" fill="#ACD5EA" ></path><path d="M992 208v48H832v-48a80 80 0 1 1 160 0zM736 894.4v1.6H128a80 80 0 0 1-80-80v-48h624v48a80 80 0 0 0 64 78.4z" fill="#76B4E2" ></path><path d="M784 496a144 144 0 0 1-64 119.68 100.16 100.16 0 0 1-8.8 5.44A67.68 67.68 0 0 1 704 624a64 64 0 0 1-5.76 2.72 18.4 18.4 0 0 1-3.68 1.6l-6.72 2.56-5.6 1.92a144 144 0 0 1-164.8-62.4 129.28 129.28 0 0 1-13.12-27.2A140.8 140.8 0 0 1 496 496a144 144 0 0 1 186.24-137.6l5.6 1.92 6.72 2.56a18.4 18.4 0 0 1 3.68 1.6A64 64 0 0 1 704 368a67.68 67.68 0 0 1 6.72 3.52l3.52 2.08 5.28 3.36A144 144 0 0 1 784 496z" fill="#5EA2CC" ></path><path d="M736 448a144 144 0 0 1-64 119.68 100.16 100.16 0 0 1-8.8 5.44A67.68 67.68 0 0 1 656 576a64 64 0 0 1-5.76 2.72 18.4 18.4 0 0 1-3.68 1.6l-6.72 2.56-5.6 1.92a144 144 0 0 1-116.8-14.4 129.28 129.28 0 0 1-13.12-27.2A140.8 140.8 0 0 1 496 496a144 144 0 0 1 186.24-137.6l5.6 1.92 6.72 2.56a18.4 18.4 0 0 1 3.68 1.6A64 64 0 0 1 704 368a67.68 67.68 0 0 1 6.72 3.52l3.52 2.08A141.44 141.44 0 0 1 736 448z" fill="#76B4E2" ></path><path d="M832 576v48l-16-16a193.44 193.44 0 0 0 16-32zM752 896h-16v-1.6a75.36 75.36 0 0 0 16 1.6z" fill="#CEE6F4" ></path><path d="M921.76 761.76L768 608a193.44 193.44 0 0 0 16-32 203.04 203.04 0 0 0 16-80 208 208 0 0 0-128-192l-7.84-3.04-4.64-1.76-5.92-1.92c-4.48-1.44-8.96-2.56-13.6-3.68a177.28 177.28 0 0 0-18.4-3.36l-5.76-0.8a208 208 0 0 0 0 413.12A200 200 0 0 0 640 704h20.96a80 80 0 0 0 8.64-1.12 177.28 177.28 0 0 0 18.4-4.48 195.52 195.52 0 0 0 19.52-5.6l4.64-1.76L720 688h1.92a182.56 182.56 0 0 0 32-16.8l154.08 154.08a35.36 35.36 0 0 0 7.36 5.76 40.64 40.64 0 0 0 7.2-5.76 44.48 44.48 0 0 0-0.8-63.52zM720 615.68a100.16 100.16 0 0 1-8.8 5.44A67.68 67.68 0 0 1 704 624a64 64 0 0 1-5.76 2.72 18.4 18.4 0 0 1-3.68 1.6l-6.72 2.56-5.6 1.92A142.08 142.08 0 0 1 640 640a134.88 134.88 0 0 1-24.32-2.08 144 144 0 0 1-112-93.92 140.8 140.8 0 0 1-7.68-48 144 144 0 0 1 119.68-141.92A134.88 134.88 0 0 1 640 352a142.08 142.08 0 0 1 42.24 6.4l5.6 1.92 6.72 2.56a18.4 18.4 0 0 1 3.68 1.6A64 64 0 0 1 704 368a67.68 67.68 0 0 1 6.72 3.52 100.16 100.16 0 0 1 8.8 5.44 144 144 0 0 1 0 240z" fill="#D1B339" ></path><path d="M969.76 824.48a44 44 0 0 1-55.2 5.76 40.64 40.64 0 0 0 7.2-5.76 44.48 44.48 0 0 0 0-62.72L768 608a193.44 193.44 0 0 0 16-32 203.04 203.04 0 0 0 16-80 208 208 0 0 0-128-192l-7.84-3.04-4.64-1.76-5.92-1.92c-4.48-1.44-8.96-2.56-13.6-3.68a177.28 177.28 0 0 0-18.4-3.36l-5.76-0.8A200 200 0 0 1 640 288h21.28a80 80 0 0 1 8.64 1.12 177.28 177.28 0 0 1 18.4 3.36c4.64 1.12 9.12 2.24 13.6 3.68l5.92 1.92 4.64 1.76 7.52 4.16a208 208 0 0 1 112 272 193.44 193.44 0 0 1-16 32l154.24 154.24a44.48 44.48 0 0 1-0.48 62.24z" fill="#AA9335" ></path><path d="M992 272H832a16 16 0 0 1-16-16v-48a96 96 0 1 1 192 0v48a16 16 0 0 1-16 16z m-144-32h128v-32a64 64 0 0 0-64-64 64 64 0 0 0-64 64zM736 912H576a16 16 0 0 1 0-32h104.32A96 96 0 0 1 656 816v-32H64v32a64 64 0 0 0 64 64h384a16 16 0 0 1 0 32H128a96 96 0 0 1-96-96v-48a16 16 0 0 1 16-16h624a16 16 0 0 1 16 16v48a64 64 0 0 0 18.72 45.44 64 64 0 0 0 32 17.28 16 16 0 0 1 12.8 16V896a16 16 0 0 1-15.52 16zM640 656a160 160 0 0 1-150.72-106.72A152.96 152.96 0 0 1 480 496a159.04 159.04 0 0 1 16.8-71.2 16 16 0 1 1 28.48 14.4A126.08 126.08 0 0 0 512 496a123.36 123.36 0 0 0 7.36 42.56A128 128 0 0 0 640 624a124.32 124.32 0 0 0 37.44-5.76l4.96-1.6 5.76-2.24h2.4l1.76-0.96 3.2-1.6 2.08-0.96A38.08 38.08 0 0 0 704 608a84.16 84.16 0 0 0 7.84-4.8 128 128 0 0 0 0-212.8c-2.4-1.6-4.8-3.2-7.2-4.48a52.16 52.16 0 0 0-5.6-3.04l-2.08-0.96-3.2-1.6-2.24-0.96a9.76 9.76 0 0 1-1.92-0.8l-5.76-2.08-4.96-1.76A128.96 128.96 0 0 0 560 396.48a16 16 0 1 1-20.16-24.96 161.92 161.92 0 0 1 147.52-28.48l5.76 2.08h0.96l6.72 2.56a23.52 23.52 0 0 1 4.8 2.08l5.44 2.4 8.48 4.48c2.88 1.6 6.24 3.84 9.6 5.92a160 160 0 0 1 0 266.08c-3.52 2.24-6.88 4.48-10.4 6.4s-4.96 2.72-7.84 4a44.16 44.16 0 0 1-6.24 2.88 16.8 16.8 0 0 1-4 1.76c-2.08 0.96-4.16 1.6-6.24 2.4h-2.08l-4.64 1.6A158.08 158.08 0 0 1 640 656zM832 640a16 16 0 0 1-11.36-4.64l-16-16a16 16 0 0 1-2.08-20 168.16 168.16 0 0 0 15.04-29.12A16 16 0 0 1 848 576v48a16 16 0 0 1-9.92 14.72 13.44 13.44 0 0 1-6.08 1.28z" fill="#0D182D" ></path><path d="M752 912a92.32 92.32 0 0 1-19.36-1.92A96 96 0 0 1 656 816v-32H208a16 16 0 0 1-16-16V336a16 16 0 0 1 32 0v416h448a16 16 0 0 1 16 16v48a64 64 0 0 0 18.72 45.44A64 64 0 0 0 816 816v-60.16l-65.28-65.12a194.24 194.24 0 0 1-24.64 12 75.04 75.04 0 0 1-8.64 3.36l-2.56 0.96-2.08 0.8a192 192 0 0 1-21.12 6.08 176 176 0 0 1-20 3.68 85.12 85.12 0 0 1-9.76 1.28h-10.72L640 720a224 224 0 0 1 0-448H662.4c2.88 0 6.4 0.8 9.92 1.28a194.24 194.24 0 0 1 19.36 3.68c5.12 1.12 9.92 2.4 14.88 4l8.32 2.88a18.72 18.72 0 0 1 3.84 1.44c1.92 0 4.8 1.6 7.68 2.88a220.8 220.8 0 0 1 68.64 45.28A204.64 204.64 0 0 1 816 357.6V208a96 96 0 0 1 24.48-64H288a64 64 0 0 0-64 64v64a16 16 0 0 1-32 0v-64a96 96 0 0 1 96-96h624a16 16 0 0 1 0 32 64 64 0 0 0-64 64v208a16 16 0 0 1-30.72 6.08 194.4 194.4 0 0 0-44.32-64 192 192 0 0 0-59.04-38.88l-7.04-2.72-10.4-3.52c-3.84-1.28-8-2.24-12.16-3.36s-11.04-2.24-16.8-3.04l-7.52-0.96h-9.44L640 304a192 192 0 0 0 0 384h9.76a81.44 81.44 0 0 0 8.96 0 62.88 62.88 0 0 0 8.16-1.12 171.2 171.2 0 0 0 17.44-3.04c6.08-1.6 12-3.2 17.92-5.12h1.92l2.72-0.96 6.72-2.72a176 176 0 0 0 30.72-16 16 16 0 0 1 20.16 1.92l78.88 78.88a16 16 0 0 1 4.64 11.36V816a96 96 0 0 1-96 96z" fill="#0D182D" ></path><path d="M752 912h-16a16 16 0 0 1-16-16v-1.6a16 16 0 0 1 19.36-16 61.44 61.44 0 0 0 12.64 1.6 16 16 0 0 1 0 32zM938.56 853.44a60 60 0 0 1-42.56-17.6l-145.12-145.12a194.24 194.24 0 0 1-24.64 12 75.04 75.04 0 0 1-8.64 3.36l-2.56 0.96-2.08 0.8a192 192 0 0 1-21.12 6.08 176 176 0 0 1-20 3.68 85.12 85.12 0 0 1-9.76 1.28h-10.4L640 720a224 224 0 1 1 11.36-448h11.04c2.88 0 6.4 0.8 9.92 1.28a194.24 194.24 0 0 1 19.36 3.68c5.12 1.12 9.92 2.4 14.88 4l8.32 2.88a18.72 18.72 0 0 1 3.84 1.44c1.92 0 4.8 1.6 7.68 2.88a225.92 225.92 0 0 1 120.32 120.64 222.72 222.72 0 0 1 0 172 188.64 188.64 0 0 1-11.04 23.04l145.44 145.44a60.32 60.32 0 0 1-42.56 103.04zM753.12 654.4a16 16 0 0 1 11.36 4.64l154.08 154.08a28.64 28.64 0 0 0 39.84 0 28.16 28.16 0 0 0 0-40l-154.24-154.24a16 16 0 0 1-2.08-20 168.16 168.16 0 0 0 15.04-29.12A187.04 187.04 0 0 0 832 496a189.12 189.12 0 0 0-14.72-73.76 193.6 193.6 0 0 0-103.36-103.52l-7.04-2.72-10.4-3.52c-3.84-1.28-8-2.24-12.16-3.36s-11.04-2.24-16.8-3.04l-7.52-0.96h-9.44L640 304a192 192 0 0 0-192 192 195.2 195.2 0 0 0 5.12 44.32A192 192 0 0 0 649.76 688h8.96a62.88 62.88 0 0 0 8.16-1.12 171.2 171.2 0 0 0 17.44-3.04c6.08-1.6 12-3.2 17.92-5.12h1.92l2.72-0.96 6.72-2.72a176 176 0 0 0 30.72-16 15.04 15.04 0 0 1 8.8-4.64zM640 656a160 160 0 0 1-150.72-106.72A152.96 152.96 0 0 1 480 496a159.04 159.04 0 0 1 16.8-71.2 16 16 0 1 1 28.48 14.4A126.08 126.08 0 0 0 512 496a123.36 123.36 0 0 0 7.36 42.56A128 128 0 0 0 640 624a124.32 124.32 0 0 0 37.44-5.76l4.96-1.6 5.76-2.24h2.4l1.76-0.96 3.2-1.6 2.08-0.96A38.08 38.08 0 0 0 704 608a84.16 84.16 0 0 0 7.84-4.8 128 128 0 0 0 0-212.8c-2.4-1.6-4.8-3.2-7.2-4.48a52.16 52.16 0 0 0-5.6-3.04l-2.08-0.96-3.2-1.6-2.24-0.96a9.76 9.76 0 0 1-1.92-0.8l-5.76-2.08-4.96-1.76A128.96 128.96 0 0 0 560 396.48a16 16 0 1 1-20.16-24.96 161.92 161.92 0 0 1 147.52-28.48l5.76 2.08h0.96l6.72 2.56a23.52 23.52 0 0 1 4.8 2.08l5.44 2.4 8.48 4.48c2.88 1.6 6.24 3.84 9.6 5.92a160 160 0 0 1 0 266.08c-3.52 2.24-6.88 4.48-10.4 6.4s-4.96 2.72-7.84 4a44.16 44.16 0 0 1-6.24 2.88 16.8 16.8 0 0 1-4 1.76c-2.08 0.96-4.16 1.6-6.24 2.4h-2.08l-4.64 1.6A158.08 158.08 0 0 1 640 656z" fill="#0D182D" ></path><path d="M640 576h-32a16 16 0 0 1 0-32h32a16 16 0 0 0 0-32 48 48 0 0 1 0-96h32a16 16 0 0 1 0 32h-32a16 16 0 0 0 0 32 48 48 0 0 1 0 96z" fill="#0D182D" ></path><path d="M640 448a16 16 0 0 1-16-16v-32a16 16 0 0 1 32 0v32a16 16 0 0 1-16 16zM640 608a16 16 0 0 1-16-16v-32a16 16 0 0 1 32 0v32a16 16 0 0 1-16 16zM416 240h-112a16 16 0 0 1 0-32h112a16 16 0 0 1 0 32zM416 320h-112a16 16 0 0 1 0-32h112a16 16 0 0 1 0 32z" fill="#0D182D" ></path></symbol></svg>',c=(c=document.getElementsByTagName("script"))[c.length-1].getAttribute("data-injectcss"),o=function(a,t){t.parentNode.insertBefore(a,t)};if(c&&!a.__iconfont__svg__cssinject__){a.__iconfont__svg__cssinject__=!0;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(a){console&&console.log(a)}}function d(){n||(n=!0,e())}function v(){try{h.documentElement.doScroll("left")}catch(a){return void setTimeout(v,50)}d()}t=function(){var a,t=document.createElement("div");t.innerHTML=i,i=null,(t=t.getElementsByTagName("svg")[0])&&(t.setAttribute("aria-hidden","true"),t.style.position="absolute",t.style.width=0,t.style.height=0,t.style.overflow="hidden",t=t,(a=document.body).firstChild?o(t,a.firstChild):a.appendChild(t))},document.addEventListener?~["complete","loaded","interactive"].indexOf(document.readyState)?setTimeout(t,0):(l=function(){document.removeEventListener("DOMContentLoaded",l,!1),t()},document.addEventListener("DOMContentLoaded",l,!1)):document.attachEvent&&(e=t,h=a.document,n=!1,v(),h.onreadystatechange=function(){"complete"==h.readyState&&(h.onreadystatechange=null,d())})}(window);
//F12提示
document.onkeydown = function () {
    if (window.event && window.event.keyCode == 123) {
      event.keyCode = 0;
      event.returnValue = false;
      btf.snackbarShow("请从浏览器工具中打开控制台!")
      return false;
    }
  };
// 宇宙背景
function dark() {window.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;var n,e,i,h,t=.05,s=document.getElementById("universe"),o=!0,a="180,184,240",r="226,225,142",d="226,225,224",c=[];function f(){n=window.innerWidth,e=window.innerHeight,i=.216*n,s.setAttribute("width",n),s.setAttribute("height",e)}function u(){h.clearRect(0,0,n,e);for(var t=c.length,i=0;i<t;i++){var s=c[i];s.move(),s.fadeIn(),s.fadeOut(),s.draw()}}function y(){this.reset=function(){this.giant=m(3),this.comet=!this.giant&&!o&&m(10),this.x=l(0,n-10),this.y=l(0,e),this.r=l(1.1,2.6),this.dx=l(t,6*t)+(this.comet+1-1)*t*l(50,120)+2*t,this.dy=-l(t,6*t)-(this.comet+1-1)*t*l(50,120),this.fadingOut=null,this.fadingIn=!0,this.opacity=0,this.opacityTresh=l(.2,1-.4*(this.comet+1-1)),this.do=l(5e-4,.002)+.001*(this.comet+1-1)},this.fadeIn=function(){this.fadingIn&&(this.fadingIn=!(this.opacity>this.opacityTresh),this.opacity+=this.do)},this.fadeOut=function(){this.fadingOut&&(this.fadingOut=!(this.opacity<0),this.opacity-=this.do/2,(this.x>n||this.y<0)&&(this.fadingOut=!1,this.reset()))},this.draw=function(){if(h.beginPath(),this.giant)h.fillStyle="rgba("+a+","+this.opacity+")",h.arc(this.x,this.y,2,0,2*Math.PI,!1);else if(this.comet){h.fillStyle="rgba("+d+","+this.opacity+")",h.arc(this.x,this.y,1.5,0,2*Math.PI,!1);for(var t=0;t<30;t++)h.fillStyle="rgba("+d+","+(this.opacity-this.opacity/20*t)+")",h.rect(this.x-this.dx/4*t,this.y-this.dy/4*t-2,2,2),h.fill()}else h.fillStyle="rgba("+r+","+this.opacity+")",h.rect(this.x,this.y,this.r,this.r);h.closePath(),h.fill()},this.move=function(){this.x+=this.dx,this.y+=this.dy,!1===this.fadingOut&&this.reset(),(this.x>n-n/4||this.y<0)&&(this.fadingOut=!0)},setTimeout(function(){o=!1},50)}function m(t){return Math.floor(1e3*Math.random())+1<10*t}function l(t,i){return Math.random()*(i-t)+t}f(),window.addEventListener("resize",f,!1),function(){h=s.getContext("2d");for(var t=0;t<i;t++)c[t]=new y,c[t].reset();u()}(),function t(){document.getElementsByTagName('html')[0].getAttribute('data-theme')=='dark'&&u(),window.requestAnimationFrame(t)}()};
dark()
// 复制弹窗
document.addEventListener('copy', function () {
    copyContentFn(this)
})

function copyContentFn(ctx) {
    if (document.queryCommandSupported && document.queryCommandSupported('copy')) {
        if (GLOBAL_CONFIG.Snackbar !== undefined) {
            btf.snackbarShow(GLOBAL_CONFIG.copy.success)
        } else {
            const prevEle = ctx.previousElementSibling
            prevEle.innerText = GLOBAL_CONFIG.copy.success
            prevEle.style.opacity = 1
            setTimeout(() => {
                prevEle.style.opacity = 0
            }, 700)
        }
    } else {
        if (GLOBAL_CONFIG.Snackbar !== undefined) {
            btf.snackbarShow(GLOBAL_CONFIG.copy.noSupport)
        } else {
            ctx.previousElementSibling.innerText = GLOBAL_CONFIG.copy.noSupport
        }
    }
}

function copyClickFn(text, ctx) {
    if (document.queryCommandSupported && document.queryCommandSupported('copy')) {
        document.execCommand('copy')
        if (GLOBAL_CONFIG.Snackbar !== undefined) {
            btf.snackbarShow(GLOBAL_CONFIG.copy.success)
        } else {
            const prevEle = ctx.previousElementSibling
            prevEle.innerText = GLOBAL_CONFIG.copy.success
            prevEle.style.opacity = 1
            setTimeout(() => {
                prevEle.style.opacity = 0
            }, 700)
        }
    } else {
        if (GLOBAL_CONFIG.Snackbar !== undefined) {
            btf.snackbarShow(GLOBAL_CONFIG.copy.noSupport)
        } else {
            ctx.previousElementSibling.innerText = GLOBAL_CONFIG.copy.noSupport
        }
    }
}

function postUrlCopyFn(ele) {
    const $buttonParent = ele.parentNode
    $buttonParent.classList.add('copy-true')
    const selection = window.getSelection()
    const range = document.createRange()
    range.selectNodeContents($buttonParent.querySelectorAll('#post-url')[0])
    selection.removeAllRanges()
    selection.addRange(range)
    const text = selection.toString()
    copyClickFn(text, ele.prevEle)
    selection.removeAllRanges()
    $buttonParent.classList.remove('copy-true')
}
//版权信息
console.clear();
console.log('%cPowered By %cMrZeFr的小窝%cCopyright © 2021-2022 MrZeFr', 'color: rgba(255,255,255,.6); background: #5e72e4; font-size: 15px;border-radius:5px 0 0 5px;padding:10px 0 10px 20px;','color: rgba(255,255,255,1); background: #5e72e4; font-size: 15px;border-radius:0;padding:10px 15px 10px 0px;','color: #fff; background: #92A1F4; font-size: 15px;border-radius:0 5px 5px 0;padding:10px 20px 10px 15px;');
console.log(`嗨！欢迎访问我的博客😀,你为啥又来扒我的代码了?😤`)
console.log(`好吧,好吧,随便你扒我的代码,扒完之后考不考虑加个友联?😃`)
