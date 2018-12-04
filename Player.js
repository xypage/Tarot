class Player {
	constructor(_name, startPoints) {
		this.name = _name;
		this.points = startPoints;
		this.deck = [];
	}

	giveCards(cards) {
		this.deck.add(cards);
	}



}