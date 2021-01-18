$(document).ready(function () {
  $("#gameForm").on("click", function(event) {
      event.preventDefault()
      console.log("gamebtn clicked");
    // make a new game object
    let newGame = {
      name_of_game: $("#nameOfGame").val().trim(),
      story_line: $("#storyLine").val().trim()
    }
    console.log(newGame)

      // create post request for 
    // $.("/api/game", function (req,res) {

    // })
  })
});
