const url =
	'https://api.openweathermap.org/data/2.5/weather';
const apiKey =
	'f00c38e0279b7bc85480c3fe775d518c';

$(document).ready(function () {
	weatherFn('dehradun');
});

async function weatherFn(cName) {
	const temp =
		`${url}?q=${cName}&appid=${apiKey}&units=metric`;
	try {
		const res = await fetch(temp);
		const data = await res.json();
		if (res.ok) {
			weatherShowFn(data);
		} else {
			alert('City not found. Please try again.');
		}
	} catch (error) {
		console.error('Error fetching weather data:', error);
	}
}

function weatherShowFn(data) {
	$('#city-name').text(data.name);
	$('#date').text(moment().
		format('MMMM Do YYYY, h:mm:ss a'));
	$('#temperature').
		html(`${data.main.temp}°C`);
	$('#description').
		text(data.weather[0].description);
	$('#wind-speed').
		html(`Wind Speed: ${data.wind.speed} m/s`);
	$('#weather-icon').
		attr('src',
			`Weather Icon.jpeg`);
	$('#weather-info').fadeIn();
}

//clock//
function rotateClock() {
    
    let now=new Date();
    let hour= now.getHours() %12;
    let minute=now.getMinutes();
    let second=now.getSeconds();


    let hourHand=document.getElementById("hour");
    let minuteHand=document.getElementById("minute");
    let secondHand=document.getElementById("second");


    let hourRotates=(hour * 30) + (minute / 2);
    let minuteRotates=(minute * 6) + (second / 10);
    let secondRotates=(second * 6);

{
    hourHand.style.transform="rotate("+hourRotates+"deg)";
    minuteHand.style.transform="rotate("+minuteRotates+"deg)";
    secondHand.style.transform="rotate("+secondRotates+"deg)";
}

}
setInterval(rotateClock,1000);