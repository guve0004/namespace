var GUVE0004 = {

	init: function() {

		let div = document.createElement(“div”);

		div.setAttribute(“class”, “box”);
		div.textContent = “guve0004";


		div.addEventListener(“click”, () => {
			div.style.borderColor = “blue”;
			div.style.backgroundColor = “aqua”;
		});

		div.addEventListener(“mouseover”, () => {
			div.classList.toggle(“highlight”);
		});

		div.addEventListener(“mouseout”, () => {
			div.classList.toggle(“highlight”);
			div.removeAttribute(“style”);
		});

		let boxes = document.querySelector("#boxes");
		if (boxes) {
			boxes.append(div);
		}
	}
};
