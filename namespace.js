var GUVE0004 = {

	init: function () {

		let div = document.createElement("div");

		div.className = "box";
		div.textContent = "guve0004";

		document.getElementById("boxes").appendChild(div);

		div.addEventListener("click", function () {
			div.style.borderColor = "blue";
			div.style.backgroundColor = "aqua";
		});

		div.addEventListener("mouseover", function () {
			div.classList.toggle("highlight");
		});

		div.addEventListener("mouseout", function () {
			div.classList.toggle("highlight");
			div.removeAttribute("style");
		});
	}
};
