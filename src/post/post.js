const worksPost =(data) => {
    const promise = new Promise((resolve, reject) => {
        fetch(`${data.url}`, {
            method: "post",
            body: JSON.stringify(data.params),
            headers: data.headers,
        })
            .then((response) => {
                return response.json();
            })
            .then(data => {
                resolve(data);
            })
            .catch((errMsg) => {
                reject(errMsg);
            });
    });
    postMessage(promise);
}
