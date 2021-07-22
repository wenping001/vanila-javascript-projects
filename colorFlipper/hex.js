
const btn = document.getElementById('btn');

const colorSpan = document.getElementById('color')

btn.addEventListener('click',()=>{
	let color = '#'
	for (let index = 0; index < 6; index++) {
		color += getHexNumber();	
	}
	document.body.style.backgroundColor = color ;
	colorSpan.textContent = color;
})

function getHexNumber(){
	return Math.floor(Math.random()*16).toString(16);
}

