letter = document.querySelectorAll(".text-zone span");
		letter.forEach(function (L){
			L.addEventListener("mouseover",function(){
				this.classList.add("bounce");
				setTimeout(function (){
					this.classList.remove("bounce");
				}.bind(this), 1000)
			})
		})