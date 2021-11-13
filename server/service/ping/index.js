const ping = require('ping');

const checkPing = async (host) => {
    let res = false;
    try {
        res = await ping.promise.probe(host);
    }
    catch (e) {
        console.log(e);
        return false;
    }
    return res.alive ? true : false;
}

module.exports = checkPing;