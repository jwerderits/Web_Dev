movies = [
    {
        title: "Star Wars",
        rating: "5 Stars",
        seen: "watched"
    },
    {
        title: "Breakfast Club",
        rating: "2 Stars",
        seen: "watched"
    },
    {
        title: "Avatar",
        rating: "3 Stars",
        seen: "not seen"
    }
]

function display(arr){
    arr.forEach(function(movie){
        read(movie)
    });
}


function read(obj){
    console.log("You have " + obj.seen + ' "'+ obj.title + '" - ' + obj.rating)
};

