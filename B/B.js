//const
const bfq = document.getElementById("bfq")
const scsp = document.getElementById("scsp")
const jt = document.getElementById("jt")
const img = document.getElementById("img")
//上传视频并传入播放器
scsp.onchange = function(){
    //找到文件
    var file = scsp.files[0];
    //转换url
    var url = URL.createObjectURL(file);
    //将url放入video中
    bfq.src = url
}

jt.onclick = function(){
    html2canvas(document.body).then(canvas => {
        img.innerHTML=""
        img.appendChild(canvas)
    }); 
}