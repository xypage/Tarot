class Card {
	constructor(_suit, _value, _oudlers) {
		this.suit = _suit;
		this.value = _value;

		if(this.suit == "atouts" && 
			(this.value == 0 || this.value == 1 || this.value == 21)) {
			this.oudlers = true;
		} else {
			this.oudlers = false;
		}
		//if is oudlers
		if(this.oudlers) { 
			this.points = 4.5;
		} 
		//else if is num card or atouts
		else if(this.value < 11 || this.suit == "atouts") { 
			this.points = 0.5;
		} else {
			//else it is head then sub 9.5 (valet is 11 && worth 2,
			//but since I'm scoring like this then is worth 1.5, 11 - 9.5 = 1.5)
			this.points = this.value - 9.5;
		}
	}

	equals(card) {
		return this.suit == card.suit && this.value == card.value;
	}

	build() {
		let cardName;
		switch(this.value) {
			case 11:
				cardName = "V";
				break;
			case 12:
				cardName = "C";
				break;
			case 13:
				cardName = "D";
				break;
			case 14:
				cardName = "R";
				break;
			case 0:
				cardName = "E";
				break;
			default:
				cardName = this.value;
		}

		//The overall card part
		let cardHTML = document.createElement("div"); 
		//value of card
		let currValue = document.createElement("p"); 
		currValue.innerHTML = cardName;
		//suit
		let currSuit = document.createElement("IMG"); 

		//navigates to folder & then adds .png since
		//that's the names for all the images
		currSuit.setAttribute("src","./CardImages/" + this.suit + ".png"); 
		
		//puts all the parts into the container & then
		//puts all that into the page via holder
		cardHTML.appendChild(currValue);
		cardHTML.appendChild(currSuit);
		cardHTML.classList.add("card");
		return cardHTML;
	}

	JSONify() {
		return {
			suit: this.suit,
			value: this.value,
			oudlers: this.oudlers,
			points: this.points
		}
	}

	fromJSON(from) {
		this.suit = from.suit;
		this.value = from.value;
		this.oudlers = from.oudlers;
		this.points = from.points;
	}
}