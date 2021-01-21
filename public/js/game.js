// eslint-disable-next-line prefer-arrow-callback
  // eslint-disable-next-line prefer-arrow-callback


  $("#gameForm").on("submit", function(event) {
    event.preventDefault();
    console.log("gamebtn clicked");
    console.log('THE EVENT ----> ', event)
    let map = $('input[name="mapOfGame"]:checked').val();
    console.log(map);
    // check to figure out which map id was selected
    // make a new game object
    const newGame = {
      // eslint-disable-next-line camelcase
      name_of_game: $("#nameOfGame")
        .val()
        .trim(),
      // eslint-disable-next-line camelcase
      story_line: $("#storyLine")
        .val()
        .trim(),
      map_id: map
    };
    console.log("NEW GAME VARIABLE--->", newGame);

    // create post request for
    $.post("/api/new", newGame).then(() => {
      console.log("Game data was sent!");
    });
    // location.reload();
  });

