// document.getElementById("au").autoplay;

alert("chuc em yêu vui vẻ nà :3")
setTimeout(function(){document.getElementById('cl1').setAttribute('class', 'btnClick1')}, 3000);

function clickStar() {
    alert("Anh có điều này muốn nói với em... thật ra anh thích từ lâu lắm rồi, anh cũng rất muốn trở thành người yêu của em, mãi cố gắng phấn đấu dành cho em điều hp nhất");
    document.getElementById('cl1').setAttribute("class", "none");
    document.getElementById('cl2').setAttribute('class', ' ');

}
var tyLe = 10;
var x = 0;
function khongDongY() {
    x = x + 50;
    var y = Math.random() * 10 + 30;
    console.log(x)
    document.getElementById('no').setAttribute("style", "margin-top: " + x + "px");
}
function yes() {
 tyLe = tyLe +10;
 document.getElementById('phanTram').innerHTML = "em chắc chứ " + tyLe + " %";
 if(tyLe == 100) {
    window.location.assign("CauHoi/indexCauHoi.html")
 }
 
}
