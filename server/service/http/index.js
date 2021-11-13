const fetch = require('node-fetch');

const checkHttp = async(host) => {
    let res = false;
    try {
        res = await fetch(host);
    }
    catch (e) {
        console.log(e);
        return false;
    }
    return res.status === 200 ? true : false;
}

module.exports = checkHttp;