// WHAT WE DO
$(document).ready(function() {
    $(".clickable_1").click(function() {
        $(".hidedesign").toggle();
    });
});

$(document).ready(function() {
    $(".clickable_2").click(function() {
        $(".hidedevelopment").toggle();
    });
});

$(document).ready(function() {
    $(".clickable_3").click(function() {
        $(".hideproduct").toggle();
    });
});

//PORTFOLIO SECTION
$(document).ready(function() {
var portfolioIds = ['port1','port2','port3','port4','port5','port6','port7','port8'];
    portfolioIds.forEach(function(portfolioId){
        $(portfolioId).hover(function () {
            $(id).show();
        });
        $(portfolioId).hover(function () {
            $(id).hide();
        });
    });
});

//SUBMIT FORM
$(document).ready(function(){
    $("form").submit(function(event){
        var name = $("input#name").val();
        alert(name + " " + "we have received your message. Thank you for reaching out to us.");;
    });
});

// RESET FORM
$(document).ready(function() {
    $("button").click(function(event){
        $(".message")[0].reset();
    });
});
