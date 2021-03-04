
// $(document).ready(function() {
// 	svg4everybody({});

// });

document.addEventListener("DOMContentLoaded", () => {
	svg4everybody({});


	//Main slider
	const slider = new Swiper('.hero__slider', {
		slidePerview: 1,
		pagination: {
			el: '.hero__pagination',
			type: 'bullets',
			clickable: true,
		}
	});
	//Marketing
	const marketing = document.querySelector('.marketing');
	let counter = 0;
	const delay = 5000;
	const data = [
		{
			title: 'Title of product one',
			where: 'Kyiv, Ukrain'
		},
		{
			title: 'Title of product two',
			where: 'Rome, Italy'
		},
		{
			title: 'Faux shearling double-breasted coat',
			where: 'London, Greate Britain'
		},
	]
	
	const changeMarketingDate = () => {
		marketing.classList.remove('marketing--visible');

		setTimeout(() => {
			marketing.classList.add('marketing--visible');
		}, delay - 4500);

		const stringTitle = `${data[counter].title}`;
		const stringWhere = `15 minutes ago ${data[counter].where}`;
		document.querySelector('.marketing__title').textContent = stringTitle;
		document.querySelector('.marketing__when-from').textContent = stringWhere;
		counter++
		if(counter === data.length ) {
			counter = 0;
		}
	}
	setInterval(changeMarketingDate, delay);
	//Marketing close from button
	const closeMarketing = () => {
		marketing.classList.remove('marketing--visible');
	}
	marketing.addEventListener('click', (e)=>{
		if(e.target.closest('.marketing__close')) {
			closeMarketing();
		}
	});

	//Tabs

	const tab = function() {
		const tabNav = document.querySelectorAll('.main-products__link');
		const tabContent = document.querySelectorAll('.main-products__list');
		let tabName;
		tabNav.forEach(item => {
			item.addEventListener('click', selectTabNav);
		});

		function selectTabNav() {
			tabNav.forEach(item => {
				item.classList.remove('main-products__link--active');
			});
			this.classList.add('main-products__link--active');
			tabName = this.getAttribute('data-filter');
			selectTabContent(tabName);
		};

		function selectTabContent(tabName) {
			tabContent.forEach(item => {
				item.classList.contains(tabName) ? item.classList.add('main-products__list--active') : item.classList.remove('main-products__list--active');
			})
		}
	}
	tab();

	const header = document.querySelector('header');
	console.log(header);
	if(window.location.toString().includes('shop.html')) {
		
		console.log(header);
		header.style.position = 'static ';
	}


});