class Player {
	constructor(_name, startCash) {
		this.name = _name;
		this.cash = startCash;
		this.inHand = new Deck([]);
		this.wonHands = new Deck([]);
	}

	//Has to be passed an array, even if just length 1
	giveCards(cardArr) {
		for(var i = 0; i < cardArr.length; i++) {
			this.cards.add(cardArr[i]);
		}
	}




}