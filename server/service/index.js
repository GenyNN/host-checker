const checkPing = require('service/ping');
const checkHttp = require('service/http');
const checkTcp = require('service/tcp');

class HostCheckService {
    async checkHost(urlToCheck, serviceTypeToCheck, hostName) {
        let result = false;
        switch (serviceTypeToCheck) {
            case 'ping':
                result = await checkPing(urlToCheck);
                break;
            case 'http':
                result = await checkHttp(urlToCheck);
                break;
            case 'tcp':
                result = await checkTcp(urlToCheck);
                break;
            default:
                return {"result":false, "serviceTypeToCheck": "unknown", "hostName":hostName};
        }

        return {"result":result, "serviceTypeToCheck": serviceTypeToCheck, "hostName":hostName};
    }
}

module.exports = new HostCheckService();


