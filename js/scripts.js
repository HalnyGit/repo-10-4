// zadanie 10.4

function Telefon(marka, cena, kolor) {
	this.marka = marka; 
	this.cena = cena;
	this.kolor = kolor;
};

Telefon.prototype.printInfo = function() {
	console.log('Marka telefonu to ' + this.marka + ', kolor to ' + this.kolor + ', a cena to ' + this.cena +
'.'); 
};

var galaxyS6 = new Telefon('Samsung', 300, 'black');
var iPhone6 = new Telefon('Apple', 600, 'white');
var onePlusOne = new Telefon('Huawei', 400, 'pink');

galaxyS6.printInfo();
iPhone6.printInfo();
onePlusOne.printInfo();