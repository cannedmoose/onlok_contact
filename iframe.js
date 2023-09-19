(() => {
    document.addEventListener("DOMContentLoaded", (event) => {
        document.querySelectorAll("form").forEach(form => {
            form.addEventListener("submit", (ev) => {
                window.top.postMessage('attributer_cookie_reset', '*');
            })
        });
    });
})()