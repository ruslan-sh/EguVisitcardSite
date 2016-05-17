var cmdrs = [
	"Nirgam",
	"AL TARF",
	"H-Arck",
	"Rzhevski",
	"frolik",
	"MoHax",
	"Sover",
	"GIF",
	"Pite [EG]",
	"Star Falcon",
	"KOSH_EG",
	"Kenhen63",
	"Zipun",
	"Zybr78",
	"Etsu Togenada"
];

function getCmdrIndexs(count){
	var indexes = [];
	for (var cmdrIndex = 0; cmdrIndex < count; cmdrIndex++){
		var randomIndex = Math.floor(Math.random() * cmdrs.length);   
		while ($.inArray(randomIndex, indexes) >= 0){
			randomIndex++;
			if (randomIndex >= cmdrs.length)
				randomIndex = 0;
    	}	
	    indexes[cmdrIndex] = randomIndex;
	}
	return indexes;
}

function setCmdrs(count){
	var cmdrIndexes = getCmdrIndexs(count);	
	for (var outIndex = 0; outIndex < count; outIndex++){
		$("#cmdr-" + (outIndex+1)).html("CMDR " + cmdrs[cmdrIndexes[outIndex]]);
	}
}

$(document).ready(function() {
	setCmdrs(6);		
});
