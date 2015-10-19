//Nt needed for document ready-maps

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 38.8895563, lng: -77.0352546 },
    zoom: 10
  });
}


//Not needed for document ready- work images

var myPhotography = [ { Where: "A pumpkin patch near Germantown, MD", pic: "img/Pumpkin-Patch.jpg" }, 
{ Where: "Side of a house in Old Town, Alexandria, VA", pic: "img/OT-Side-House.jpg" },
{ Where: "A beautiful house in Old Town, Alexandria, VA", pic: "img/OT-House-Windows.jpg" },
{ Where: "The fence of a well maintained yard in Old Town, Alexandria, VA", pic: "img/OT-Fence.jpg" }
];

//Document Ready

//Functions Related to Message Box, Contact Me Section

$("#submit-button").on("click", function() {
	console.log("clicked");
	var comment = $(".message-box").val();
console.log(comment);
$("#visible-comment").html("Thank you for your message!");
return false;
});

$(".message-box").on("keyup", function() {
	console.log("keyup happened");
	var charCount = $(".message-box").val().length;
	console.log(charCount);
	$("#char-count").html(charCount);
if (charCount > 50) {
		$("#char-count").css("color", "red");
	} else {
		$("#char-count").css("color", "white");
	};
	})

//Functions Related to Pricing Comparison Table, Work Section
var rows = $(".my-row");
for (var i=0; i<rows.length; ++i) {
	if (i%2===0) {
		$(rows[i]).css("background-color", "gold");
	} else {
		$(rows[i]).css("background-color", "white");
	};
};

//Functions Related to Work Showcase Images, Work Section


//Looping through to make image properties of each div appear
for(var i=0; i<myPhotography.length; ++i) {
      $( "#" + i ).css("background-image", "url(" + myPhotography[i].pic + ")" );
};

//Making Titles Appear for Each Picture

$(".image").mouseenter( function() {
      console.log(myPhotography[this.id].Where);
      $(this).html("<p class='info'><span class='proj-title'>Where:</span> " + myPhotography[this.id].Where + "</p>");
}).mouseleave( function() {
      $("p.info").html("");
});