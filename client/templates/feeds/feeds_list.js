Template.feedsList.onRendered(function(){
  
   
  setTimeout(loader,15000);
  
});

Template.feedsList.created = function () {
  Meteor.call('fetchRandomRecord', function (err, result) {
    if (result && !err) {
      
      Session.set("content", result);
    }
    else {
      Router.go("/");
    }
  });
};



Template.feedsList.helpers({
  post: function () {
    var item=Session.get("content");
    console.log(item.content);
    return {
      title: item.title,
      content: item.content,
      url:item.url,
      provider_name:item.provider_name
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