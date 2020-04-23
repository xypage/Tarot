class Player {
	constructor(_name, startCash) {
		if(startCash) {
			this.name = _name;
			this.cash = startCash;
			this.inHand = new Deck([]);
			this.wonHands = [];
		} else if(_name) { //TODO fix this, should either only use JSON to construct or need to find better name for this variable
			this.fromJSON(_name);
		}
	}

	//Has to be passed an array, even if just length 1
	giveCards(cardArr) {
		for(var i = 0; i < cardArr.length; i++) {
			this.cards.add(cardArr[i]);
		}
	}

	JSONify() {
		return {
			name: this.name,
			cash: this.cash,
			hand: this.inHand.JSONify().cards,
			winnings: this.wonHands
		};
	}

	fromJSON(from) {
		this.name = from.name;
		this.cash = from.cash;
		console.log(from.hand);
		this.inHand = new Deck([from.hand]);
		this.wonHands = [];
	}
}