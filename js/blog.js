$(function() {

  Parse.$ = jQuery;

  // Replace this line with the one on your Quickstart Guide Page
	Parse.initialize("wvDyd5bUb21IT06nIpTiT6JA1yJs5U3rlulji88L", "uQpmFA2WcWykDNZBYaAJv6zxnOe8r6Sf1USVix3x");
  
  var Blog = Parse.Object.extend("Blog");

  var Blogs = Parse.Collection.extend({
  	model: Blog
  });

  var blogs = new Blogs();
  blogs.fetch({
  	success: function(blogs) {
  		console.log(blogs);
  		var blogsView = new BlogView({collection: blogs});
  		blogsView.render();
  		$('.main-container').html(blogsView.el)
  	},
  	error: function(blogs, error) {
  		console.log(error);
  	}
  });

  var BlogView = Parse.View.extend({
  	template: Handlebars.compile($('#blogs-tpl').html()),
  	render: function() {
  		var collection = {blog: this.collection.toJSON()};
  		this.$el.html(this.template(collection));
  	}
  });
 
});