class Deck {
	constructor(_cards) {
		if(_cards) {
			this.cards = _cards;
		} else {
			let suits = ["coeurs", "trefles", "piques", "carreaux", "atouts"];
			this.cards = [];
			//only goes to 4 bc atouts are different
			for (let i = 0; i < 4; i++) { 
				for (let j = 0; j < 14; j++) {
					//none are oudlers so
					this.add(new Card(suits[i], j + 1, false)); 
				}
			}

			
			for (let i = 0; i < 21; i++) {
				//oudlers values off by 1 since we're working on a + 1 system
				this.add(new Card(suits[4], i + 1, i == 0 || i == 20)); 
			}
			//idk how to deal w/excuse so, 0!
			this.add(new Card(suits[4], 0, true));
		}
	}

	//needs the card to be made already
	add(card) {
		this.cards.push(card);
	}

	//maybe more efficient way exists
	remove(card) {
		this.cards = this.cards.filter(function(elem) {
			return !elem.equals(card);
		});
	}

	shuffle() {
		for(let i = 0; i < this.cards.length; i++)
		{
			let temp = this.cards[i];
			let rand = Math.floor(Math.random() * this.cards.length);
			this.cards[i] = this.cards[rand];
			this.cards[rand] = temp;
		}
	}

	sort() {
		//TODO
	}

	score() {
		let num = 0;
		cards.array.forEach(card => {
			num += card.points;
		});
		return num;
	}

	show() {
		//TODO get rid of the console.log
		console.log(this);
		clear();
		this.cards.forEach(card => {
			draw(card.build());
		});
	}

	JSONify() {
		let JSONCards = []
		this.cards.forEach(card => {
			JSONCards.push(card.JSONify());
		})
		return {
			cards: JSONCards
		}
	}

	fromJSON(from) {
		this.cards = [];
		from.forEach(card => {
			this.cards.push(new Card(card.suit, card.value, card.oudlers));
		});
	}
}