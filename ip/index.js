import axios from 'axios';


var benimIP;


// ------------ değiştirmeyin --------------
// licensed to Ergineer 2022
require("babel-core/register");
require("babel-polyfill");
async function ipAdresimiAl(){
	await axios({
		method: 'get',
		url: 'https://apis.ergineer.com/ipadresim',
	})
	.then(function (response) {
		return response.data
	})
	.then(function (a) {
		benimIP=a
	});
}				
// ------------ değiştirmeyin --------------


/*
ADIM 1: axios kullanarak, aşağıdaki URL'ye GET sorgusu atacağız
(tag içindeki yere kendi ipnizi yazarak URL'yi oluşturun):
https://apis.ergineer.com/ipgeoapi/<ipniz>

NOT: Bilgisayarın IP adresini öğrenmek için: https://apis.ergineer.com/ipadresim 
ADIM 5'e gelene kadar fonksiyonunuzu test etmek için ip nizi URL'ye manuel olarak ekleyebilirsiniz.
*/

/*
ADIM 2: Geri döndürülen verileri inceleyin, bu sizin ip bilgileriniz! Bileşen fonksiyonunuzu geliştirmek içindeki bu veri yapısını
iyice anlamanız gerekmektedir.

*/
/*
ADIM 3: Argümanı sadece 1 nesne kabül eden bir fonksiyon oluşturun.
DOM metotlarını ve özelliklerini kullanarak, şunları gerçekleştirin:

<div class="card">
<img src={ülke bayrağı url} />
<div class="card-info">
<h3 class="ip">{ip adresi}</h3>
<p class="ulke">{ülke bilgisi (ülke kodu)}</p>
<p>Enlem: {enlem} Boylam: {boylam}</p>
<p>Şehir: {şehir}</p>
<p>Saat dilimi: {saat dilimi}</p>
<p>Para birimi: {para birimi}</p>
<p>ISP: {isp}</p>
</div>
</div>
*/

/*
ADIM 4: API'den alınan verileri kullanarak ADIM 3'te verilen yapıda bir kart oluşturun ve 
bu kartı DOM olarak .cards elementinin içine ekleyin. 
*/

/*
ADIM 5: Manuel olarak eklediğiniz IP adresini dinamiğe dönüştürün. 
Sayfanın en üstünde ---değiştirmeyin--- etiketleri arasında yer alan asenkron ipAdresimiAl() fonksiyonuna 
sorgu atarak bilgisayarınız IP adresini dinamik olarak aldıracaksınız. Bu fonksiyon asenkron olarak çağırıldığında `benimIP` değişkenine 
bilgisayarınızın IP adresini atayacaktır. 
Örnek dinamik URL kullanımı: var url = "https://apis.ergineer.com/ipgeoapi/"+benimIP; 
*/



//kodlar buraya gelecek

function ipFinder(param){
	
	let container = document.createElement('div');
	container.classList.add('card');
	
	const image = document.createElement('img');
	image.setAttribute('src', param.ülkebayrağı);
	container.appendChild(image);
	
	
	const cardInfo = document.createElement('div');
	cardInfo.classList.add('card-info');
	container.appendChild(cardInfo);
	
	const addHeader = document.createElement('h3');
	addHeader.classList.add('ip');
	addHeader.textContent = param.sorgu;
	cardInfo.appendChild(addHeader);
	
	const addParag = document.createElement('p');
	addParag.classList.add('ulke');
	addParag.textContent = param.ülkeKodu;
	cardInfo.appendChild(addParag);
	
	const addParag2 = document.createElement('p');
	addParag2.textContent = 'Enlem: ' + param.enlem + ' Boylam: ' + param.boylam;
	cardInfo.appendChild(addParag2);
	
	const addParag3 = document.createElement('p');
	addParag3.textContent = 'Şehir: ' +param.şehir;
	cardInfo.appendChild(addParag3);
	
	const addParag4 = document.createElement('p');
	addParag4.textContent = 'Saat dilimi: ' + param.saatdilimi;
	cardInfo.appendChild(addParag4);
	
	const addParag5 = document.createElement('p');
	addParag5.textContent = 'Para birimi: ' + param.parabirimi;
	cardInfo.appendChild(addParag5);
	
	const addParag6 = document.createElement('p');
	addParag6.textContent = 'ISP: ' +param.isp;
	cardInfo.appendChild(addParag6);
	
	return container;
	
	
	
}

ipAdresimiAl();
let cardsRead = document.querySelector('.cards');

const productPromise = axios.get("https://apis.ergineer.com/ipgeoapi/78.186.125.243");
	
productPromise.then((response) => {
			cardsRead.appendChild(ipFinder(response.data));
	})
productPromise.catch((err) => {
		console.log('Software stopped working unexpectedly')
	})

	



	