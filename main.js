let upload = document.getElementById("upload");
let saturate = document.getElementById("saturate");
let contrast = document.getElementById("contrast");
let brightness = document.getElementById("brightness");
let sepia = document.getElementById("sepia");
let grayscale = document.getElementById("grayscale");
let blurs = document.getElementById("blur");
let hueRotate = document.getElementById("hue-rotate");
let download = document.getElementById("download");
let reset = document.getElementById("reset");
let filters = document.querySelectorAll("ul li input");
let img = document.querySelector("img");
let canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");



canvas.style.display = 'none';
upload.onchange = function () {
    console.log("change a image");
    if (upload.value) {
        img.src = URL.createObjectURL(upload.files[0]);
    }
    img.onload = function () {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        canvas.style.display = 'block';
        img.style.display = 'none';
    }
    resetSetting();
}

filters.forEach(f => {
    f.addEventListener('input', function () {
        ctx.filter = `
        saturate(${saturate.value}%) 
        contrast(${contrast.value}%) 
        brightness(${brightness.value}%) 
        sepia(${sepia.value}%) 
        grayscale(${grayscale.value}) 
        blur(${blurs.value}px) 
        hue-rotate(${hueRotate.value}deg) `;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    })
})
function resetSetting() {
    saturate.value = 100;
    contrast.value = 100;
    brightness.value = 100;
    sepia.value = 0;
    grayscale.value = 0;
    blurs.value = 0;
    hueRotate.value = 0;
    canvas.style.filter = "none";

}
download.onclick = function () {
    console.log('download a pictor')
    download.href = canvas.toDataURL('image/jpeg');
}
















