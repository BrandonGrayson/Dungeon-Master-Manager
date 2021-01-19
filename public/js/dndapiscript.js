// const { ConnectionError } = require("sequelize/types");

$.ajax({
  url: "https://www.dnd5eapi.co/api/races",
  method: "GET"
}).then(function (res) {
  for (let i = 0; i < res.results.length; i++) {
$("<option>").attr("id", res.results[i].name).attr("value", res.results[i].name).text(res.results[i].name).appendTo("#raceChoice");
}});

$.ajax({
  url: "https://www.dnd5eapi.co/api/classes",
  method: "GET"
}).then(function (res) {
  for (let i = 0; i < res.results.length; i++) {
    $("<option>").attr("id", res.results[i].name).attr("value", res.results[i].name).text(res.results[i].name).appendTo("#classChoice");
}});

$.ajax({
  url: "https://www.dnd5eapi.co/api/equipment-categories/simple-weapons",
  method: "GET"
}).then(function (res) {
  // console.log(character)
  for (let i = 0; i < res.equipment.length; i++) {
    // console.log(res.starting_equipment[0].equipment.name)
    $("<option>").attr("id", res.equipment[i].name).attr("value", res.equipment[i].name).text(res.equipment[i].name).appendTo("#simpleweaponChoice");
}});

$("#raceClassBtn").on("click", function (event) {
  event.preventDefault()
  var nameValue = $("#characterName").val()
  var raceChoice = $("#raceChoice").val()
  var classChoice = $("#classChoice").val()
  var weaponChoice = $("#simpleweaponChoice").val()

  if (nameValue === ""){
    alert("Please Enter a Name")
    return
  }

  let character = {
    characterName: nameValue,
    race: raceChoice,
    class: classChoice,
    weapon: weaponChoice
  }

  // console.log(character)
  var attributesArray = ["str","int","wis","dex","con","cha"];
  var attributesArrayLength = attributesArray.length;	
  var diceRoll;	
  var rollNumber;
  var totalRoll;
  var counter;
  var d100;
  var attribValue

  console.log(`Character data is here ${character.characterName}`)

  $("<h1>").text($("#characterName").val()).appendTo("#createdCharacter")
  $("<h2>").text($("#raceChoice").val()).appendTo("#createdCharacter")
  $("<h2>").text($("#classChoice").val()).appendTo("#createdCharacter")
  $("<h2>").text($("#simpleweaponChoice").val()).appendTo("#createdCharacter")
  for (counter=0;counter<attributesArrayLength;counter++) {
    totalRoll=0;
    for (rollNumber=0;rollNumber<3;rollNumber++) {
      diceRoll = Math.floor(Math.random()*6)+1;
      totalRoll +=diceRoll;
    }
    d100=Math.floor(Math.random()*100);
    attribValue=totalRoll + (d100 * 0.01)
    document.getElementById(attributesArray[counter]).textContent=attributesArray[counter] + ":" + attribValue.toFixed(0);
    }
console.log(character);



    // $.post("/api/create", character)
    // .then(function () {
    //   console.log("made it to post request!")
    // })
});
