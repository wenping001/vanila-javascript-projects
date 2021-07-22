const colors = ['rgb(252, 186, 3)','rgb(3, 161, 252)','#29524A','#E9BCB7'];

const color = document.getElementById('color');

const btn = document.getElementById('btn');

navlink = document.getElementsByClassName('link');

btn.addEventListener('click',()=>{
	const randomNumber = getRandomNumber()
	document.body.style.backgroundColor = colors[randomNumber] ;
	color.textContent = colors[randomNumber];
})


navlink.forEach(element => {
	element.addEventListener('click',(e)=>{
		e.currentTarget.classlist.toggle('active');
	})	
});

function getRandomNumber(){
	return Math.floor(Math.random() * colors.length);
}