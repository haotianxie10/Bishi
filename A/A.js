//const
const textE = window.document.getElementById("textE")
const cPicker = document.getElementById("cPicker")
const xhx = document.getElementById("xhx")    

//颜色变化
cPicker.onchange = function(){
    //获取option中的value
    var col = cPicker[cPicker.selectedIndex].value
    //使textarea的color变成option值
    textE.style.color = col
}

//下划线
xhx.onclick = function(){
    switch(xhx.className){
        case "clicked":
            xhx.className = "unclick"
            textE.style.textDecoration = "none"
            break
        case "unclick":
            xhx.className = "clicked"
            textE.style.textDecoration = "underline"
            break
    }
}

//加粗
jc.onclick = function(){
    switch(jc.className){
        case "clicked":
            jc.className = "unclick"
            textE.style.fontWeight = "normal"
            break
        case "unclick":
            jc.className = "clicked"
            textE.style.fontWeight = "bold"
            break
    }
}