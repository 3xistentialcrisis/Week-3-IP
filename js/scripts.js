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

//SUBMIT FORM
$("button").click(function(event){
    var name = $("#name").val();
    alert(name + "we have received your message. Thank you for reaching out to us.");
    event.preventDefault();
});

// RESET FORM
$("button").click(function(event){
    $(".message")[0].reset();
});
//MAILCHIMP API
$(".message").bind("#submit",function(){
    var name = $("#name").val;
    var email= $("#email").val;
    var message = $("#message").val;
    var link = "https://us20.api.mailchimp.com/2.0/lists/subscribe.json?" + "apikey=ad9f836f93af6bdcba872119e1a0860c-us20id=2b641f2179" +
    "&email[email]="+ email +
    "&merge_vars[NAME]="+ name+
    "&merge_vars[MESSAGE]=" +message+
    "&send_welcome=false";
    
$.ajax({
    type:"POST",
    url:link,
    dataType:'json',
    success: function(data){
        var name = $("#name").val();
    alert(name + " we have received your message. Thank you for subscribing");
    },
    error: function(jqXHR,textStatus,errorThrown){
        alert(errorThrown);
    }
});
});