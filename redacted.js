var script = document.createElement("script");

script.innerHTML = "" +
    "(function() {\n" +
    "    var create = window.webkitNotifications.createNotification;\n" +
    "    var newCreate = function(icon, title, text) {\n" +
    "        return create.call(this, icon, title, '[REDACTED]');\n" +
    "    };\n" +
    "    window.webkitNotifications.createNotification = newCreate;\n" +
    "    window.webkitNotifications.constructor.prototype.createNotification = newCreate;\n" +
    "})();"

document.head.insertBefore(script, document.head.firstChild);
