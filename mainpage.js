(() => {
    function get_cookie(name) {
        return document.cookie.split(';').some(c => {
            return c.trim().startsWith(name + '=');
        });
    }

    function delete_cookie(name, path, domain) {
        if (get_cookie(name)) {
            document.cookie = name + "=" +
                ((path) ? ";path=" + path : "") +
                ((domain) ? ";domain=" + domain : "") +
                ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
        }
    }

    function delete_all_cookies() {
        const name = "flaretrk";
        const domain = document.location.hostname;
        const parts = domain.toString().split(".");
        for (let i = parts.length - 2; i >= 0; i--) {
            const cookie_domain = parts.slice(i).join(".");
            delete_cookie(name, "/", cookie_domain);
        }
    }


    window.onmessage = function (e) {
        if (e.data == 'attributer_cookie_reset') {
            delete_all_cookies();
        }
    };
})()