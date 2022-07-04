letter = document.querySelectorAll(".text-zone span");
		letter.forEach(function (L){
			L.addEventListener("mouseover",function(){
				this.classList.add("bounce");
				setTimeout(function (){
					this.classList.remove("bounce");
				}.bind(this), 1000)
			})
		});


const toggleBtn = document.querySelector(".sidebar-toggle")
const menu = document.querySelector(".main-menu");
const closeBtn = document.querySelector(".close-btn");
const about = document.getElementById("aboutLink");
const skill = document.getElementById("skillLink");
const work = document.getElementById("workLink");
const education = document.getElementById("educationLink");
const contact = document.getElementById("contactLink");


about.addEventListener("click", function () {
	menu.classList.remove("open-nav");
});
skill.addEventListener("click", function () {
	menu.classList.remove("open-nav");
});
work.addEventListener("click", function () {
	menu.classList.remove("open-nav");
});
education.addEventListener("click", function () {
	menu.classList.remove("open-nav");
});
contact.addEventListener("click", function () {
	menu.classList.remove("open-nav");
});

toggleBtn.addEventListener("click", function () {
	menu.classList.add("open-nav");
	
});
closeBtn.addEventListener("click", function () {
	menu.classList.remove("open-nav");
});

