var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name:"Lake Tahoe",
        image:"https://cdn.theatlantic.com/assets/media/img/mt/2015/11/CB053713/lead_960.jpg?1447245902",
        description: "Lorem ipsum dolor sit amet, enim elit consectetuer vitae rutrum amet dictum. Mollis wisi venenatis in praesent luctus senectus. Condimentum mi mollis, in vitae suscipit accumsan lacinia. Vestibulum fringilla scelerisque neque quisque consectetuer vestibulum, feugiat quisque ut dui. Non sollicitudin ac molestie, consequat lobortis enim nibh vestibulum mauris dui, quis iaculis nunc venenatis dui."
    },    {
        name:"Lake Tahoe 2",
        image:"http://tahoejacks.com/wp-content/uploads/2015/09/lake-tahoe-kayaking-tours.jpg",
        description: "Lorem ipsum dolor sit amet, enim elit consectetuer vitae rutrum amet dictum. Mollis wisi venenatis in praesent luctus senectus. Condimentum mi mollis, in vitae suscipit accumsan lacinia. Vestibulum fringilla scelerisque neque quisque consectetuer vestibulum, feugiat quisque ut dui. Non sollicitudin ac molestie, consequat lobortis enim nibh vestibulum mauris dui, quis iaculis nunc venenatis dui."
    },    {
        name:"Lake Tahoe 3",
        image:"http://www.visitinglaketahoe.com/images/summer1.jpg",
        description: "Lorem ipsum dolor sit amet, enim elit consectetuer vitae rutrum amet dictum. Mollis wisi venenatis in praesent luctus senectus. Condimentum mi mollis, in vitae suscipit accumsan lacinia. Vestibulum fringilla scelerisque neque quisque consectetuer vestibulum, feugiat quisque ut dui. Non sollicitudin ac molestie, consequat lobortis enim nibh vestibulum mauris dui, quis iaculis nunc venenatis dui."
    }
]


function seedDB(){ 
    //remove all campgrounds
    Campground.remove({},function(err){
        if(err){
            console.log(err);
        }
        console.log("removed");

        //add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed,function(err,campground){
                if(err){
                    console.log(err);
                } else {
                    console.log("campground added");
                    //add a few commments
                    Comment.create(
                        {
                            text: "This is a wonderful place",
                            author: "Homer"
                        }, function(err,comment){
                            if(err){
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log("created a new comment");
                            }
                        });
                }
            })
        });
    });
}    
    


module.exports = seedDB;