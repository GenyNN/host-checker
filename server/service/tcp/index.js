const net = require('net');
const Bluebird = require('bluebird');

const checkTcp = async(host) => {
    let res = await isHostPortAvailable(host, 443);
    return res;
}


function isHostPortAvailable(host, port) {
    return new Bluebird(function resolveWithAvailable(resolve) {
        let socket = net.connect(port, host);
        socket.setTimeout(1000, function onTimeout() {
            socket.destroy();
            var error = new Error('ETIMEDOUT');
            console.log(error);
            resolve(false);
        });
        socket.on('error', function onError(error) {
            console.log(error);
            socket.destroy();
            resolve(false);
        });
        socket.on('connect', function onConnect() {
            socket.destroy();
            resolve(true);
        });
    });
}

module.exports = checkTcp;