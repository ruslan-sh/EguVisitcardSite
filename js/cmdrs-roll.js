var cmdrs = [
	"AL TARF",
	"Etsu Togenada",
	"frolik",
	"GIF",
	"H-Arck",
	"Kenhen63",
	"Kosh_EG",
	"MoHax",
	"Nirgam",
	"Pite [EG]",
	"Rzhevski [EG]",
	"Sover",
	"Star Falcon",
	"Zipun",
	"Zybr78_RUS",
	"Arilent",
	"DiRaven",
	"I0GER",
	"Shiaver",
	"VaVylon",
	"John Mc'Hamster",
	"capt.ShaDe_Gastovsky",
	"Djeam",
	"KyDecHuK"
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
