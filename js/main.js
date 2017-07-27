'use strict';

var myCanvas = document.getElementById('my-canvas');
var ctx = myCanvas.getContext('2d');

let makeShapes = () => {
	ctx.fillStyle = 'rgb(100, 0, 0)';
	ctx.fillRect(10, 10, 100, 100);

	ctx.fillStyle = 'rgb(100, 0, 0)';
	ctx.fillRect(120, 10, 50, 200);

	ctx.fillStyle = 'rgb(100, 0, 0)';
	ctx.fillRect(180, 10, 100, 150);
	ctx.clearRect(230, 10, 100, 100);

	ctx.fillStyle = 'rgb(100, 0, 0)';
	ctx.fillRect(290, 10, 100, 150);
	ctx.clearRect(340, 10, 50, 50);
	ctx.clearRect(290, 110, 50, 50);
};


makeShapes();

