let holder = document.getElementById("holder");

function draw(item) {
	holder.appendChild(item);
}

function clear() {
	while(holder.firstChild) {
		holder.removeChild(holder.firstChild);
	}
}

//TODO get rid of this
let players = [];
let p = new Player("Xavier", 400);
p.inHand = new Deck();
p.winnings = [];
db.collection('Players').get().then(snapshot => {
	snapshot.docs.forEach(doc => {
		let currentPlayer = new Player(doc.data());
		players.push(currentPlayer);
	})
});