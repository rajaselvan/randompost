Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
});

RandomController = RouteController.extend({
  template: 'feedsList'
});


Router.route('/', {
  controller: RandomController
});





