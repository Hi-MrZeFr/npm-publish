var back = 5;  
var intervalid;   
intervalid = setInterval("cutdown()", 1000);   
function cutdown() {   
    if (back == 0) {   
        window.history.back(); //倒计时完成后跳转的地址  
        clearInterval(intervalid);   
    }   
    document.getElementById("back-home").innerHTML = back;   
    back--;   
}  
window.onload = cutdown;  