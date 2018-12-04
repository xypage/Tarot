class Player {
	constructor(_name, startCash) {
		this.name = _name;
		this.cash = startCash;
		let temp = new Card("atouts", 2, false);
		this.cards = new Deck([temp]);
		this.cards.remove(temp);
	}

	//Has to be passed an array, even if just length 1
	giveCards(cardArr) {
		for(var i = 0; i < cardArr.length; i++) {
			this.cards.add(cardArr[i]);
		}
	}




}