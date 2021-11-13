class HostServiceClass {

    checkHostName = (urlBackend, urlToCheck, serviceTypeToCheck) => {

        const requestOptions = {
            method: 'GET'
        };
        let urlToCheckPrepared = urlToCheck.replace(/(^\w+:|^)\/\//, ''); // remove all protocols initially
        if (serviceTypeToCheck === "http")
            urlToCheckPrepared = "http://"+urlToCheckPrepared;
        if (serviceTypeToCheck === "tcp" || serviceTypeToCheck === "ping")
            urlToCheckPrepared = urlToCheckPrepared.replace(/\//g , '');
        let url = new URL(urlBackend+'/api/check');
        let params = {urlToCheck:urlToCheckPrepared, serviceTypeToCheck:serviceTypeToCheck};
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
        return fetch(url, requestOptions)
            .then(response => {
                if (!response.ok) {
                    return Promise.reject(response.statusText);
                }
                return response.json();
            })
            .then(ok => {
                let resultCheck = ok;
                return Promise.resolve(resultCheck);
            });
    }
}

export const HostService = new HostServiceClass();