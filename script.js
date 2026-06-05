// 示例
let userName = prompt("请输入你的名字");
alert("你好，" + userName);
console.log("用户输入了：" + userName);
let btn = document.getElementById("themeBtn");

btn.onclick = function() {
    document.body.classList.toggle("dark");
    
    // 改变按钮文字
    if (document.body.classList.contains("dark")) {
        btn.textContent = "切换亮色模式";
    } else {
        btn.textContent = "切换暗色模式";
    }
};