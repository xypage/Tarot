class Card {
	constructor(_suit, _value, _oudlers) {
		this.suit = _suit;
		this.value = _value;
		this.oudlers = _oudlers;

		if(this.oudlers) { //if is oudlers
			this.points = 5;
		} else if(this.value < 11 || this.suit == "atouts") { //else if is num card or atouts
			this.points = 0.5;
		} else if (this.value > 10) { //else if is head then sub 9.5 (valet is 11 && worth 2, but since I'm scoring like this then is worth 1.5, 11 - 9.5 = 1.5)
			this.points = this.value - 9.5;
		} else { //just in case
			console.error("Card w/val of 0: " + this);
		}

	}
}