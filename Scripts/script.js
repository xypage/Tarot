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
function go() {
	let d = new Deck();
	//d.shuffle();
	//drawHand(d.cards);
	d.show();

	let database = new DataManager(firebase.database());
}

go();


