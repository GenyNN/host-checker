const hostCheckService = require("service");

module.exports = {
    name: "ApiPlugin",
    register: async (server, options) => {
        var hostName =  server.settings.app.hostName;
        server.route([
            {
                method: "GET",
                path: "/api/check",
                handler: async (req, h) => {
                    const params = req.query
                    let res = hostCheckService.checkHost(params.urlToCheck, params.serviceTypeToCheck, hostName);
                    return res;
                }

            }
        ]);


    }
}