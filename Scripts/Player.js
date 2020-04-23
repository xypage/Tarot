class Player {
	constructor(_name, startCash) {
		this.name = _name;
		this.cash = startCash;
		this.inHand = new Deck([]);
		this.wonHands = [];
	}

	//Has to be passed an array, even if just length 1
	giveCards(cardArr) {
		for(var i = 0; i < cardArr.length; i++) {
			this.cards.add(cardArr[i]);
		}
	}

	JSONify() {
		return {
			"name": this.name,
			"cash": this.cash,
			"hand": this.inHand,
			"winnings": this.wonHands
		};
	}

	fromJSON(from) {
		this.name = from.name;
		this.cash = from.cash;
		this.inHand = new Deck([]).fromJSON(from.hand);
		this.wonHands = [];
		from.winnings.forEach(wonHand => {
			this.wonHands.append(new Deck([]).fromJSON(wonHand));
		});
	}
}