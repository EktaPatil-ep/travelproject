
// let searchBtn = document.querySelector('#search-btn');
// let searchBar = document.querySelector('.search-bar-container');

// // let formBtn = document.querySelector('#login-btn');
// // let loginForm = document.querySelector('.login-form-container');
// // let formClose = document.querySelector('.form-close');
// let menu = document.querySelector('#menu-bar');
// let navbar = document.querySelector('.navbar');

// window.onscroll= () =>{
//     searchBtn.classList.remove('fa-times');
//     searchBar.classList.remove('active');
//     menu.classList.remove('fa-times');
//     navbar.classList.remove('active');
//     // loginForm.classList.remove('active');
// }
    
// menu.addEventListener('click', ()=>{
//     menu.classList.toggle('fa-times');
//     navbar.classList.toggle('active');
// });

// searchBtn.addEventListener('click' , ()=>{
//     searchBtn.classList.toggle('fa-times');
//     searchBar.classList.toggle('active');
// }); 

// formBtn.addEventListener('click' , ()=>{
//     loginForm.classList.add('active');
// });     

// formClose.addEventListener('click' , ()=>{
//     loginForm.classList.remove('active');
// }); 

// const form = document.getElementById('booking-form');
// const messageCard = document.getElementById('message-card');

// 		form.addEventListener('submit', (e) => {
// 			e.preventDefault();
// 			const persons = document.getElementById('persons').value;
// 			const arrival = document.getElementById('arrival').value;
// 			const leaving = document.getElementById('leaving').value;
// 			const packageName = new URLSearchParams(window.location.search).get('package');
// 			const price = new URLSearchParams(window.location.search).get('price');

// 			const message = console.log(message)`
// 				Package: ${packageName}
// 				Price: ${price}
// 				Number of persons: ${persons}
// 				Arrival date: ${arrival}
// 				Leaving date: ${leaving}
// 			`;

// 			messageCard.innerText = message;
// 		});