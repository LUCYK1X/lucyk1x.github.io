// 示例
let userName = prompt("请输入你的名字");
alert("你好，" + userName);
console.log("用户输入了：" + userName);




// 初始电影数组
let movies = ["肖申克的救赎", "盗梦空间", "楚门的世界"];

// 获取元素
const movieListUl = document.getElementById("movieList");
const movieInput = document.getElementById("movieInput");
const addBtn = document.getElementById("addBtn");

// 渲染电影列表（把数组显示到页面上）
function renderMovies() {
    // 清空列表
    movieListUl.innerHTML = "";
    
    // 遍历数组，每个电影生成一个 <li>
    for (let i = 0; i < movies.length; i++) {
        let li = document.createElement("li");
        li.textContent = movies[i];
        
        // 添加删除按钮
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "删除";
        deleteBtn.onclick = function() {
            movies.splice(i, 1);  // 从数组中删除
            renderMovies();        // 重新渲染
        };
        
        li.appendChild(deleteBtn);
        movieListUl.appendChild(li);
    }
}

// 添加电影
addBtn.onclick = function() {
    let newMovie = movieInput.value.trim();
    if (newMovie !== "") {
        movies.push(newMovie);
        movieInput.value = "";  // 清空输入框
        renderMovies();          // 重新渲染
    }
};

// 页面加载时显示列表
renderMovies();



