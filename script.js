var colors = ['#F7DC6F', '#F5B041', '#F4D03F', '#E67E22', '#E59866', '#DC7633', '#D35400', '#D98880', '#CD6155', '#C0392B', '#EC7063', '#F1948A', '#F5B7B1', '#AF7AC5', '#9B59B6', '#BB8FCE', '#8E44AD', '#2980B9', '#5DADE2', '#85C1E9', '#76D7C4', '#1ABC9C', '#48C9B0', '#A3E4D7', '#F7DCDC', '#F5CBA7', '#E8DAEF', '#D2B4DE', '#A9CCE3', '#A9DFBF', '#A3E4D7', '#F9E79F', '#FAD7A0', '#EDBB99', '#D7BDE2', '#C39BD3', '#B2BABB', '#A2D9CE', '#AED6F1', '#85C1E9', '#A9DFBF', '#A3E4D7', '#F9E79F', '#FAD7A0', '#EDBB99', '#D7BDE2', '#C39BD3', '#B2BABB', '#A2D9CE', '#AED6F1', '#85C1E9'];
var i = 0;
var speed = 300;
var interval = setInterval(changeColor, speed);
s
function changeColor() {
	document.body.style.backgroundColor = colors[i];
		i = (i + 1) % colors.length;
}