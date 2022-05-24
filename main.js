Webcam.set({
    width: 370,
    height: 320,
    image_format: 'jpeg',
    jpeg_quality: 90
});
Webcam.attach('#camera');

function takesnap() {
    Webcam.snap(function (data_uri) {
        document.getElementById('result').innerHTML =
            '<img style= "object-fit: cover;" src="' + data_uri + '"/>';
    });
}

var classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/j_bkkF83z/model.json", modelReady)

function modelReady() {
    console.log("modelReady")
}
