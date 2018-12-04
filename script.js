let holder = document.getElementById("holder");
function drawHand(hand)
{
	//clear it
	while(holder.firstChild)
	{
		holder.removeChild(holder.firstChild);
	}
	//draw it
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

	//The overall card part
	let currCard = document.createElement("div"); 
	//value of card
	let currValue = document.createElement("p"); 
	currValue.innerHTML = cardName;
	//suit
	let currSuit = document.createElement("IMG"); 

	//navigates to folder & then adds .png since
	//that's the names for all the images
	currSuit.setAttribute("src","./CardImages/" + card.suit + ".png"); 
	
	//puts all the parts into the container & then
	//puts all that into the page via holder
	currCard.appendChild(currValue);
	currCard.appendChild(currSuit);
	currCard.classList.add("card");
	holder.appendChild(currCard);
}

//TODO get rid of this
function go()
{
	let d = new Deck();
	//d.shuffle();
	//drawHand(d.cards);
	d.show();
}

go();


