if (document.getElementById('post-bg')) {
  const img = document.getElementById('post-bg').getAttribute('data-lazy-src')
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