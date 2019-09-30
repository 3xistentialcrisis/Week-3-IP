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
var portfolioIds = ['port1','port2','port3','port4','port5','port6','port7','port8'];
    portfolioIds.forEach(function(id){
        $(id).hover(function () {
            $(id).show();
        });
        $(id).hover(function () {
            $(id).hide();
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
$("button").click(function(event){
    $(".message")[0].reset();
});

//MAILCHIMP API
$(".message").bind("#submit",function(){
    var name = $("#name").val;
    var email= $("#email").val;
    var message = $(".message").val;
    var link = "https://us20.api.mailchimp.com/2.0/lists/subscribe.json?" + "apikey=ad9f836f93af6bdcba872119e1a0860c-us20id=2b641f2179" +
    "&email[email]="+ email +
    "&merge_vars[NAME]="+ name+
    "&merge_vars[MESSAGE]=" +message+
    "&send_welcome=false";
}
    
$.ajax({
    type:"POST",
    url:link,
    dataType:'json',
    success: function(data){
        var name = $("#name").val();
    alert(name + " " + " we have received your message. Thank you for subscribing");
    },
    error: function(jqXHR,textStatus,errorThrown){
        alert(errorThrown);
    }
});
});