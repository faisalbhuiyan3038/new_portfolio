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
const ab = document.getElementById("about");
console.log(ab);
const skill = document.getElementById("skill");
const education = document.getElementById("education");
const contact = document.getElementById("contact");
// const work = document.getElementById("about");

toggleBtn.addEventListener("click", function () {
	menu.classList.add("open-nav");
	
});
closeBtn.addEventListener("click", function () {
	menu.classList.remove("open-nav");
});
ab.addEventListener("click", function () {
	console.log("hi");
});

