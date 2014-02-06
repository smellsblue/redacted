var script = document.createElement("script");

script.innerHTML = "" +
    "(function() {\n" +
    "    if (window.webkitNotifications) {\n" +
    "        var create = window.webkitNotifications.createNotification;\n" +
    "        var newCreate = function(icon, title, text) {\n" +
    "            return create.call(this, icon, title, '[REDACTED]');\n" +
    "        };\n" +
    "        window.webkitNotifications.createNotification = newCreate;\n" +
    "        window.webkitNotifications.constructor.prototype.createNotification = newCreate;\n" +
    "    }\n" +
    "    if (window.Notification) {\n" +
    "        var notification = window.Notification;\n" +
    "        var newNotification = function(title, options) {\n" +
    "            options.body = '[REDACTED]';\n" +
    "            return new notification(title, options);\n" +
    "        }\n" +
    "        newNotification.prototype = window.Notification.prototype;\n" +
    "        for (key in window.Notification) {\n" +
    "            newNotification[key] = window.Notification[key];\n" +
    "        }\n" +
    "        window.Notification = newNotification;\n" +
    "    }\n" +
    "})();";

(document.head || document.documentElement).appendChild(script);
