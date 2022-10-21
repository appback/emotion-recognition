$(document).ready(function () {
	$('#doc').text('문서가 전부 로드됐어요!');
});

$(window).load(function () {
	$('#win').text('창이 모두 로드됐어요!');
});

$(function () {
	/* $("#ptag").click(function() {
		alert('click');
	});
	
	$("button").click(function() {
		alert("button click");
	});
	$("#ptag").on("click", function () {
		alert("p tag");
	});
	 */
	// 자바스크립트 function불러오기  ()없음
	$('button').on('click', buttonClick);
});

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
}
const constraints = {
	video: { facingMode: 'user' },
	audio: false,
};
const video = document.getElementById('video');
const canvas = document.getElementById('output');
canvas.width = width;
canvas.height = height;

function successCallback(stream) {
	video.width = width;
	video.height = height; //prevent Opencv.js error.
	video.srcObject = stream;
	video.play();
}

function errorCallback(error) {
	console.log(error);
}

let streaming = false;
function toggleStream() {
	if (streaming === false) {
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
	streaming = !streaming;
}

let src, dist, cap;
function cvtGray() {
	src = new cv.Mat(height, width, cv.CV_8UC4);
	dst = new cv.Mat(height, width, cv.CV_8UC1);
	cap = new cv.VideoCapture('video');
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