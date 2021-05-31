
let names = localStorage['name'];
while (names == undefined || names == 'null' || names == '') {
	names = 'Player';
	localStorage['name'] = names;
}
document.getElementById("name").innerHTML = names;

function doFunction() {
	let	names = noname(localStorage['name']);
	while (names == undefined || names == null || names == '')
		names = noname(names)
	localStorage['name'] = names;
	document.getElementById("name").innerHTML = names;
}

function noname(names) {
	let named = '';
	if (named = prompt('Ваше имя: ', 'Player')){
		names = named;
	}
	console.log(names);
	return names;
}