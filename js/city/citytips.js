var foreignTips = (function () {
    var onSuccess = function (geoipResponse) {
      if (!geoipResponse.country.iso_code) {
        return;
      }
      var code = geoipResponse.country.iso_code.toLowerCase();
      if (code != 'cn'){
        window.location = "/city.html";
      }
    };
    var onError = function (error) {
    };
    return function () {
      geoip2.country(onSuccess, onError);
    };
  }());
  foreignTips();