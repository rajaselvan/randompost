Template.feedsList.onRendered(function () {

  (function () {
    var Loader;

    Loader = (function () {
      function Loader() {
        this.$loader = $('.loader');
        this.$inc = $('.loader-increment');
        this.$percent = $('.loader-percent');
        this.$loader_text = $('.loader-text');
        this.loaded = 0;
        this.increments = $.makeArray(this.$inc);
        this.loader_length = this.increments.length;
        this.ratio = Math.round(100 / this.loader_length);
        this.current_inc = null;
        this._load();
      }

      Loader.prototype._load = function () {
        var loading;
        return loading = setInterval((function (_this) {
          return function () {
            if (_this.loaded < 99.9) {
              _this.loaded += .1;
              return _this._update_display();
            } else {
              _this.$loader_text.text('Loaded');
              return _this.$percent.text('100.0%');
            }
          };
        })(this), 17);
      };

      Loader.prototype._update_display = function () {
        var new_inc, percent, prepend;
        percent = Math.round(this.loaded * 10) / 10;
        prepend = '';
        if (this.loaded < 10) {
          prepend = "  ";
        } else if (this.loaded < 100) {
          prepend = " ";
        } else {
          prepend = "";
        }
        this.$percent.text("" + prepend + percent + "%");
        new_inc = Math.round(this.loaded / this.ratio);
        if (new_inc !== this.current_inc) {
          this.current_inc = new_inc;
          return $(this.increments[this.current_inc]).text("#");
        }
      };

      return Loader;

    })();

    $(function () {
      if (window.App == null) {
        window.App = {};
      }
      return window.App.Loader = new Loader;
    });

  }).call(this);

  

});

Template.feedsList.created = function () {
  
    Meteor.call('fetchRandomRecord', function (err,url) {
    
    $.getJSON("https://www.readability.com/api/content/v1/parser?url=" + url + "&token=8e60ed9bd69fe25d2c3d433c1a3a3d85dc9461b1&callback=?",
      function (data) {
       
       
       Session.set('content', data);
        
        setTimeout(loader,3000);

      });
  });
};



Template.feedsList.helpers({
  post: function () {
    var item = Session.get("content");

    return {
      title: item.title,
      content: item.content,
      url: item.url,
      provider_name: item.domain
    }
  }
});




function loader() {

  var articleHeight = $('.article').height();
  var toTop;
  var perc;
  var windowHeight = $(window).height();

  $(window).on('scroll', function () {
    checkProg();
  });
  function checkProg() {
    toTop = ($(window).scrollTop() + windowHeight) - $('.article').offset().top;
    perc = toTop / articleHeight;
    fillProgressBar(perc);
  }

  function fillProgressBar(p) {
    p = (p * 100) + "%";
    $('#progress-bar').width(p);
  }

  checkProg();

}