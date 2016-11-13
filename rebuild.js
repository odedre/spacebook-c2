 // var post = function (id, sometext) {
 //     function addCommentToPage(comment ){
 //           $(id)
 //             .find('p')
 //             .append(`<div>You'r moma!!!2</div>`)
 //     }
 //     var comments = [];
 //     return {
 //      addComment: function(comment){
 //       comments.push(comment)
 //       addCommentToPage(comment )
 //      }
 //    }
 //  }
 
 //  var p = post(10, 'lala');
 //  p.addComment({msg:'some comment'})



var post = function (sometext, id) { 

	var comments = [];

	function resetCommentList() {
		$('#commentContainer'+ id).empty();
		$('#commentContainer'+ id).append(createCommentsString());
	}
    
    function createCommentsString() {
    	return comments.map(function(comment) {
      			return '<div id ="comment' +comment.id +'">' + comment.text + '</div>'
      		}).join('');
    }

    return {
     	addComment: function(text){
       		comments.push({text:text, id:comments.length});
       		resetCommentList();
      	},

      	toDOMString: function() {
      		return '<div id="post'+ id+ '">' + 
      					'<h2>' + 
      					sometext +
      					'</h2><div id="commentContainer'+id+'">' + (createCommentsString()) + '</div>' +
      					'<button class="rem" id="remove'+id +'" href="#">remove</button>'+
      					'<input class="commentInput" id="commentInput'+ id + '"/>' +
      					'<button class="add-comment" id="post'+ id +'">post comment</button>' +
      				'</div>';	
      	}
    }
}

var postList = function(containerId) {
	function resetContainer() {
		$(containerId).empty();
		$(containerId).append(postArray.map(function(post) {
			return post.toDOMString();	
		}).join(' '));
		//adds click functionality to button
		Array.prototype.slice.call(document.querySelectorAll('.add-comment')).map(function (nodeButton) {
			nodeButton.onclick = function() {
				var postId = nodeButton.id.replace('post', '');
				var text = $('#commentInput'+ postId).val();
				postArray[postId].addComment(text)
			}
		});
	}

	var postArray = [];
	resetContainer();
	return {
		addPost: function(sometext) {
			postArray.push(post(sometext, postArray.length));
			resetContainer();

		},

	}
}

$(document).ready(function() {
	var container = postList('.posts');
	$('#input_post').click(function() {
		container.addPost($('#post-name').val());
	});	
}); 