//your JS code here. If required.
function showTime() {
	
	const now = new Date();

	const month = now.getMonth() + 1; // Month is zero-indexed, so we add 1
	const day = now.getDate();
	const year = now.getFullYear();

	const hours = now.getHours();
	const minutes = now.getMinutes();
	const seconds = now.getSeconds();

	let meridiem = 'AM';
	if (hours >= 12) {
    meridiem = 'PM';
	}

	// Convert hours from 24-hour format to 12-hour format
	let hours12 = hours % 12;
	hours12 = hours12 === 0 ? 12 : hours12;

	const timeString = `${month}/${day}/${year}, ${hours12}:${minutes}:${seconds} ${meridiem}`;
	document.getElementById('timer').innerHTML = timeString;
	 
}
showTime();
setInterval(function () {
	showTime();
}, 1000);