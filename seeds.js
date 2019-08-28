var mongoose      = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment")

var data = [
	{name: "cloud's rest", 
	 image:"https://images.unsplash.com/photo-1565740443574-2c5423adeb27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", 
	 description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur"},
	{name: "big basin", 
	 image:"https://images.unsplash.com/photo-1565772838322-88efbec05502?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", 
	 description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur"},
	{name: "redwood pan", 
	 image:"https://images.unsplash.com/photo-1560237731-890b122a9b6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", 
	 description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur"}
]

function seedDB(){
	Campground.remove({},function(err){
	// if (err){
	// 	console.log(err);
	// }   console.log("removed campgrounds");
	// 	Comment.remove({},function(err){
	// 		if (err){
	// 			console.log(err);
	// 		}   console.log("removed comments!");
	// 				data.forEach(function(seed){
	// 					Campground.create(seed,function(err,campground){
	// 						if (err){
	// 							console.log(err)
	// 						} else {
	// 							   console.log("added a campground");
	// 							   Comment.create(
	// 							   {
	// 								   text:"This place is great, I wish there is internet",
	// 								   author:"Homer"
	// 							   }, function(err, comment){
	// 								   if (err){
	// 									   console.log(err);
	// 								   } else {
	// 									   campground.comments.push(comment);
	// 									   campground.save();
	// 									   console.log("Created a new comment");
	// 								   }
	// 			  		 });
	// 	    		}
	// 			});
	// 		});
    	// });
	});	
	
	
}




module.exports = seedDB;