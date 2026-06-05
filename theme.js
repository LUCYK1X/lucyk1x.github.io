// 切换暗色模式
function toggleDarkMode() {
    document.body.classList.toggle("dark");
    
    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    
    const toggleBtn = document.getElementById("darkModeToggle");
    if (toggleBtn) {
        toggleBtn.textContent = isDark ? "☀️ 亮色模式" : "🌙 暗色模式";
    }
}

// 应用保存的主题
function applySavedTheme() {
    const savedTheme = localStorage.getItem("theme");
    
    if (savedTheme === "dark") {
        document.body.classList.add("dark");
    } else {
        document.body.classList.remove("dark");
    }
}

// 页面加载时应用主题
applySavedTheme();

// 页面加载完成后绑定按钮事件
document.addEventListener("DOMContentLoaded", function() {
    const toggleBtn = document.getElementById("darkModeToggle");
    
    if (toggleBtn) {
        toggleBtn.onclick = toggleDarkMode;
        
        // 初始化按钮文字
        const isDark = document.body.classList.contains("dark");
        toggleBtn.textContent = isDark ? "☀️ 亮色模式" : "🌙 暗色模式";
    }
});