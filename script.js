let holder = document.getElementById("holder");
let d;
function drawHand(hand)
{
	while(holder.firstChild)
	{
		holder.removeChild(holder.firstChild);
	}
	for(var i = 0; i < hand.length; i++)
	{
		drawCard(hand[i]);
	}
}

function drawCard(card)
{
	let cardName;
	if(card.value < 11)
	{
		cardName = card.value;
	}
	else if (card.suit != "atouts")
	{
		cardName = (card.value == 11 ? "V" : (card.value == 12 ? "C" : (card.value == 13 ? "D" : "R")));
	}
	else
	{
		cardName = card.value == 0 ? "E" : card.value;
	}

	let currCard = document.createElement("div");
	let currValue = document.createElement("p");
	currValue.innerHTML = cardName;
	let currSuit = document.createElement("IMG");
	currSuit.setAttribute("src","./CardImages/" + card.suit + ".png");
	currCard.appendChild(currValue);
	currCard.appendChild(currSuit);
	currCard.classList.add("card");
	holder.appendChild(currCard);
}

function go()
{
	d = new Deck();
	//d.shuffle();
	drawHand(d.cards);
}
go();



