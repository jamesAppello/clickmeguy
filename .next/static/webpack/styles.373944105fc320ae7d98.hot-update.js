webpackHotUpdate("styles",{

/***/ "./components/Score/Score.css":
/*!************************************!*\
  !*** ./components/Score/Score.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"score":"_3xTb0w4Rt5zP4pL__KV_hp","current-score":"OCrinvS0NdUPBC4_0gst0","scoreToWin":"ZMLDoi4JwJwZZs5AUI1L0"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1578629484053");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.373944105fc320ae7d98.hot-update.js.map