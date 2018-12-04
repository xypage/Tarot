class Card {
	constructor(_suit, _value, _oudlers) {
		this.suit = _suit;
		this.value = _value;
		this.oudlers = _oudlers;

		//if is oudlers
		if(this.oudlers) 
		{ 
			this.points = 4.5;
		} 
		//else if is num card or atouts
		else if(this.value < 11 || this.suit == "atouts") 
		{ 
			this.points = 0.5;
		} 
		else
		{
			//else it is head then sub 9.5 (valet is 11 && worth 2,
			//but since I'm scoring like this then is worth 1.5, 11 - 9.5 = 1.5)
			this.points = this.value - 9.5;
		}
	}

	equals(card)
	{
		return this.suit == card.suit && this.value == card.value;
	}
}