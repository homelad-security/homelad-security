Template.loginButtons.events({
  'click .login-text-and-button': function (event) {
	Router.go('/');
  },
  'click #login-buttons-logout': function (event) {
    Router.go('/');
  }
});