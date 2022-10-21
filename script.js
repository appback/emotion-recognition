(function () {
	'user strict';
	var root = this;
	var streaming = false;
	function setSize() {
		alert("setSize");
	}
	function toggleStream() {
		if (streaming == false) {
			alert("false");
		} else {
			alert("true");
		}
		streaming = !streaming;
	}
}.call(this));

// const constraints = {
// 	video: { facingMode: 'user' },
// 	audio: false,
// };
// const video = document.getElementById('video');
// const canvas = document.getElementById('output');
// var stream,tracks;
// var streaming = false;
// var width, height;
// var src, dist, cap;

// function setSize() {
// 	if (window.orientation == 0) {
// 		//portrait
// 		width = 480;
// 		height = 640;
// 	} else {
// 		//landscape
// 		width = 640;
// 		height = 480;
// 	}
// 	canvas.width = width;
// 	canvas.height = height;
// }

// function successCallback(stream) {
// 	video.width = width;
// 	video.height = height; //prevent Opencv.js error.
// 	video.srcObject = stream;
// 	video.play();
// }

// function errorCallback(error) {
// 	console.log(error);
// }

// function toggleStream() {
// 	if (streaming == false) {
// 		navigator.getUserMedia(constraints, successCallback, errorCallback);
// 		document.getElementById('toggleStream').innerHTML = 'Stop';
// 		document.getElementById('cvtGray').style.visibility = 'visible';
// 		streaming = true;
// 	} else {
// 		stream = video.srcObject;
// 		tracks = stream.getTracks();
// 		tracks.forEach((track) => {
// 			track.stop();
// 		});
// 		document.getElementById('toggleStream').innerHTML = 'Play';
// 		document.getElementById('cvtGray').style.visibility = 'hidden';
// 		streaming = false;
// 	}
// }

// function cvtGray() {
// 	src = new cv.Mat(height, width, cv.CV_8UC4);
// 	dst = new cv.Mat(height, width, cv.CV_8UC1);
// 	cap = new cv.VideoCapture('video');
// 	setTimeout(process, 33);
// }

// function process() {
// 	if (streaming === true) {
// 		cap.read(src);
// 		cv.cvtColor(src, dst, cv.COLOR_RGBA2GRAY);
// 		cv.imshow('output', dst);
// 		setTimeout(process, 33);
// 	}
// }