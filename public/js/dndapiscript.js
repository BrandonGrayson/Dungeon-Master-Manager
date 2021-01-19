$.ajax({
  url: "https://www.dnd5eapi.co/api/races",
  method: "GET"
}).then(res => {
  for (let i = 0; i < res.results.length; i++) {
    $("<option>")
      .attr("id", res.results[i].name)
      .attr("value", res.results[i].name)
      .text(res.results[i].name)
      .appendTo("#raceChoice");
  }
});

$.ajax({
  url: "https://www.dnd5eapi.co/api/classes",
  method: "GET"
}).then(res => {
  for (let i = 0; i < res.results.length; i++) {
    $("<option>")
      .attr("id", res.results[i].name)
      .attr("value", res.results[i].name)
      .text(res.results[i].name)
      .appendTo("#classChoice");
  }
});

$.ajax({
  url: "https://www.dnd5eapi.co/api/equipment-categories/simple-weapons",
  method: "GET"
}).then(res => {
  for (let i = 0; i < res.equipment.length; i++) {
    $("<option>")
      .attr("id", res.equipment[i].name)
      .attr("value", res.equipment[i].name)
      .text(res.equipment[i].name)
      .appendTo("#simpleweaponChoice");
  }
});

$(document).ready(() => {
  //GETS ALL LIST OF GAMES
  function getGames() {
    $.get("/api/games/", data => {
      for (let i = 0; i < data.length; i++) {
        $("<button>")
          .attr("id", data[i].name_of_game)
          .attr("type", "submit")
          .attr("class", "gamebutton")
          .attr("value", data[i].story_line)
          .text(data[i].name_of_game)
          .appendTo("#list-of-games");
      }
    });
    // eslint-disable-next-line prefer-arrow-callback
    $(document).on("click", ".gamebutton", function(event) {
      event.preventDefault();
      document.getElementById("name_of_game").innerText = this.id;
      document.getElementById("story_line").innerText = this.value;
    });
  }
  getGames();
});

$("#raceClassBtn").on("click", event => {
  event.preventDefault();
  const nameValue = $("#characterName").val();
  const raceChoice = $("#raceChoice").val();
  const classChoice = $("#classChoice").val();
  const weaponChoice = $("#simpleweaponChoice").val();
  const alignmentChoice = $("#alignmentChoice").val();
  const strAtributeInput = $("#strAtribute").val();
  const dexAtributeInput = $("#dexAtribute").val();
  const constAtributeInput = $("#constAtribute").val();
  const intAtributeInput = $("#intAtribute").val();
  const wisAtributeInput = $("#wisAtribute").val();
  const charAtributeInput = $("#charAtribute").val();
  const gamedId = 1;

  if (nameValue === "") {
    alert("Please Enter a Name");
    return;
  }

  $("<h1>")
    .text($("#characterName").val())
    .attr("class", "mt-0")
    .appendTo("#nameText");
  $("<h4>")
    .text($("#raceChoice").val())
    .attr("class", "mt-0")
    .appendTo("#raceText");
  $("<h4>")
    .text($("#classChoice").val())
    .attr("class", "mt-0")
    .appendTo("#classText");
  $("<h4>")
    .text($("#simpleweaponChoice").val())
    .attr("class", "mt-0")
    .appendTo("#simpleWeaponText");
  $("<h4>")
    .text($("#alignmentChoice").val())
    .attr("class", "mt-0")
    .appendTo("#alignmentText");
  $("<h4>")
    .text($("#strAtribute").val())
    .attr("class", "mt-0")
    .appendTo("#strengthText");
  $("<h4>")
    .text($("#dexAtribute").val())
    .attr("class", "mt-0")
    .appendTo("#dexterityText");
  $("<h4>")
    .text($("#constAtribute").val())
    .attr("class", "mt-0")
    .appendTo("#constText");
  $("<h4>")
    .text($("#intAtribute").val())
    .attr("class", "mt-0")
    .appendTo("#intellText");
  $("<h4>")
    .text($("#wisAtribute").val())
    .attr("class", "mt-0")
    .appendTo("#wisdomText");
  $("<h4>")
    .text($("#charAtribute").val())
    .attr("class", "mt-0")
    .appendTo("#charText");

  const characters = [];

  const character = {
    id: characters.length,
    name: nameValue,
    race: raceChoice,
    class: classChoice,
    alignment: alignmentChoice,
    gameid: gamedId,
    strength: parseInt(strAtributeInput),
    dexterity: parseInt(dexAtributeInput),
    constituition: parseInt(constAtributeInput),
    intelligence: parseInt(intAtributeInput),
    wisdom: parseInt(wisAtributeInput),
    charisma: parseInt(charAtributeInput),
    weapon: weaponChoice
  };

  //CREATES CHARACTER FOR SPECIFIC GAMEID
  $.post("/api/" + `${character.gameid}` + "/characters", character).then(
    () => {
      console.log("made it to post request!");
    }
  );
});

// $("randomAtrBtn").on("click", event => {
//   event.preventDefault();
//   console.log()
//   const attributesArray = [
//     "strAtribute",
//     "intAtribute",
//     "wisAtribute",
//     "dexAtribute",
//     "constAtribute",
//     "charAtribute"
//   ];
//   const attributesArrayLength = attributesArray.length;
//   let diceRoll;
//   let rollNumber;
//   let totalRoll;
//   let counter;
//   let d100;
//   let attribValue;

//   //RANDOM ATTRIBUTE GENERATOR
//   for (counter = 0; counter < attributesArrayLength; counter++) {
//     totalRoll = 0;
//     for (rollNumber = 0; rollNumber < 3; rollNumber++) {
//       diceRoll = Math.floor(Math.random() * 6) + 1;
//       totalRoll += diceRoll;
//     }
//     d100 = Math.floor(Math.random() * 100);
//     attribValue = totalRoll + d100 * 0.01;
//     document.getElementById(
//       attributesArray[counter]
//     ).textContent = attribValue.toFixed(0);
//   }
// });
