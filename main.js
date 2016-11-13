// var posts = [];

// var Post = function(text, id){
// 	this.text = text;
// 	this.id = id;
// 	this.comments = [];
// };

// var Comment = function(com, user) {
// 	this.comment = com;
// 	this.user = user;
// };

// var createPost = function(text) {
// 	var id = posts.length;
// 	var p = new Post(text, id);
// 	posts.push(p);
// };

// var createComment = function(obj, com, user) {
// 	var newComment = new Comment(com, user);
// 	console.log(newComment);
// 	console.log(obj); 
// 	obj["comments"].push(newComment);
// }

// var appender = function(posts) {
// 	for(var i=0; i<posts.length; i++) {
// 		console.log(posts[i].text);
// 		var pos = $('<div></div>').text(posts[i].text);
// 		for(var j=0; j<posts[i].comments.length; j++) {
// 			var com = $('<p></p>').text(posts[i].comments[j]["comment"] + " by: " + posts[i].comments[j].user);
// 			pos.append(com);
// 			console.log(pos);
// 		}
// 		$('.posts').append(pos);
// 	}
// }


// $('.add-post').click(function() {
// 	$('.posts').empty();
// 	createPost($('#post-name').val());
// 	for (var i = 0; i< posts.length; i++) {
// 		$('.posts').append('<p class="post" data-id="' + posts[i].id + '">' +'<a href="#" class="remove">remove</a> ' + posts[i].text + " - " + posts[i].id + '</p>').addClass('post');
// 		$('.posts').find('p').append('<input type="text" class="comment" placeholder="comment" />');
// 		$('.posts').find('p').append('<input type="text" class="user" placeholder="enter user name" />');
// 		$('.posts').find('p').append('<button class="add-comment">post comment</button>');
// 		$('#post-name').val('');
// 	}
// 	$('.remove').click(function() {
// 		$(this).closest("p").remove();
// 		var reId = $(this).closest("p").data().id;
// 		posts.splice(posts.indexOf(this.id));
// 		// console.log(reId);
// 		// console.log(posts);
// 	});

// 	$('.add-comment').click(function() {
// 		$('.posts').empty();
// 		var postId = $(this).closest("p").attr("data-id");
// 		createComment(posts[postId], $('.comment').val(), $('.user').val());
// 		console.log(postId);
// 		appender(posts);
// 		// for(var i = 0; i<posts.length; i++) {
// 		// 	$('.posts').find('p').append('<p class="commentP">' + posts[i].comment.value + " - " + posts[i].user.value + '</p>');
// 		// 	$('.comment').val('');
// 		// 	$('.user').val('');	
// 		// }
// 		// $('.comment').val('') === "" || $('.user').val('') === ""
		
		
// 	});
// });




var posts = [];

var Post = function(text, id){
	this.text = text;
	this.id = id;
	this.comments = [];
};

var Comment = function(com, user) {
	this.comment = com;
	this.user = user;
};

var createPost = function(text) {
	var id = posts.length;
	var p = new Post(text, id);
	posts.push(p);
};

var createComment = function(obj, com, user,id) {

	var newComment = new Comment(com, user);
	//console.log(newComment);
	//console.log(obj); 
	obj["comments"].push(newComment);
	//console.log(obj);
}


$('.add-post').click(function() {
	$('.posts').empty();
	var p = $('.posts');
	createPost($('#post-name').val());
	console.log(posts[0].comments.length);
	for (var i = 0; i< posts.length; i++) {
		p.append('<p class="post" data-id="' + posts[i].id + '">' +
					'<a href="#" class="remove">remove</a> ' + posts[i].text + " - " + posts[i].id + 
				'</p>');
		console.log(posts[i].comments.length);
		for(var j=0; j<posts[i].comments.length; j++) {
			p.find("[data-di='"+posts[i].id+ "']")
			 .append('<p class= "comment" id="' + j + '">' + posts[i].comments[j].comment +
			  " " + posts[i].comments[j].user);
		}
	}
		$('.posts')
			.find('p')
			.append('<input type="text" class="comment" placeholder="comment"/>' + 
					'<input type="text" class="user" placeholder="enter user name"/>' +
					'<button class="add-comment">post comment</button>');
		$('#post-name').val('');
	
	$('.remove').click(function() {
		$(this).closest("p").remove();
		var reId = $(this).closest("p").data().id;
		posts.splice(posts.indexOf(this.id));
		// console.log(reId);
		// console.log(posts);
	});

	$('.add-comment').click(function() {
		var postId = $(this).closest("p").attr("data-id");
		var c = $('.comment').val();
		var u = $('.user').val();
		console.log(c +" "+ u);
		// $('.posts').empty();
		createComment(posts[postId], c, u);
		console.log(postId);
		
		// $('.comment').val('') === "" || $('.user').val('') === ""
		$(this).closest('p').append('<p class="commentP">' + $('.comment').val() + " - " + $('.user').val() + '</p>');
		$('.comment').val('');
		$('.user').val('');
		

	});
});


