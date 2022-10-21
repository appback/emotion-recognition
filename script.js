
const constraints = {
	video: { facingMode: 'user' },
	audio: false,
};
const video = document.getElementById('video');
const canvas = document.getElementById('output');

var streaming, src, dist, cap, width, height;

function setSize() {
	if (window.orientation == 0) {
		//portrait
		width = 480;
		height = 640;
	} else {
		//landscape
		width = 640;
		height = 480;
	}
	canvas.width = width;
	canvas.height = height;
}


function successCallback(stream) {
	video.width = width;
	video.height = height; //prevent Opencv.js error.
	video.srcObject = stream;
	video.play();
}

function errorCallback(error) {
	console.log(error);
}

function toggleStream() {
	var streaming = !streaming;
	if (streaming === true) {
		navigator.getUserMedia(constraints, successCallback, errorCallback);
		document.getElementById('toggleStream').innerHTML = 'Stop';
		document.getElementById('cvtGray').style.visibility = 'visible';
	} else {
		const stream = video.srcObject;
		const tracks = stream.getTracks();
		tracks.forEach((track) => {
			track.stop();
		});
		document.getElementById('toggleStream').innerHTML = 'Play';
		document.getElementById('cvtGray').style.visibility = 'hidden';
	}
	
}

function cvtGray() {
	var src = new cv.Mat(height, width, cv.CV_8UC4);
	var dst = new cv.Mat(height, width, cv.CV_8UC1);
	var cap = new cv.VideoCapture('video');
	setTimeout(process, 33);
}

function process() {
	if (streaming === true) {
		cap.read(src);
		cv.cvtColor(src, dst, cv.COLOR_RGBA2GRAY);
		cv.imshow('output', dst);
		setTimeout(process, 33);
	}
}