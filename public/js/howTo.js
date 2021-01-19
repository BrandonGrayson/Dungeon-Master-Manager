$(document).ready(function () {
    $("#ready").on("click", function () {
        console.log("Ready btn clicked") 
        window.location.replace("/create")
    })
})