class Deck {
	constructor() {
		let suits = ["coeurs", "trefles", "piques", "carreaux", "atouts"];
		this.cards = [];
		for (let i = 0; i < 4; i++) //only goes to 4 bc atouts are different
		{ 
			for (let j = 0; j < 14; j++) 
			{
				this.add(suits[i], j + 1, false); //none are oudlers so
			}
		}
		for (let i = 0; i < 21; i++)
		{
			this.add(suits[4], i + 1, i == 0 || i == 20) //oudlers values off by 1 since we're working on a + 1 system
		}
		this.add(suits[4], 0, true) //idk how to deal w/excuse so, 0!
	}

	add(suit, val, oudlers)
	{
		this.cards.push(new Card(suit, val, oudlers));
	}

	shuffle()
	{
		for(let i = 0; i < this.cards.length; i++)
		{
			let temp = this.cards[i];
			let rand = Math.floor(Math.random() * this.cards.length);
			this.cards[i] = this.cards[rand];
			this.cards[rand] = temp;
		}
	}

	show()
	{
		console.log(this);
		page.drawHand(this);
	}
}