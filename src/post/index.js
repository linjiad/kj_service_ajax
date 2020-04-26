/**
 * post请求
 * @param {data.url} 路径
 * @param {data.params} 参数
 * @param {data.headers} 请求头
 * @return 成功或失败的值
 * */
export function fetchPost1 (data){
    // const promise = new Promise((resolve, reject) => {
    //     fetch(`${data.url}`, {
    //         method: "post",
    //         body: JSON.stringify(data.params),
    //         headers: data.headers,
    //     })
    //         .then((response) => {
    //             return response.json();
    //         })
    //         .then(data => {
    //             resolve(data);
    //         })
    //         .catch((errMsg) => {
    //             reject(errMsg);
    //         });
    // });
    // return promise;
    const promise = new Promise((resolve, reject) => {
        Promise.race([
            fetch(`${data.url}`, {
                method: "post",
                body: JSON.stringify(data.params),
                headers: data.headers,
                time:(data.time)?data.time:100000
            }),
            new Promise(()=>{
                setTimeout(()=> reject("请求访问超时"),(data.time)?data.time:100000);
            })])
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
    return promise;
}

/**
 * post请求
 * @param {data.url} 路径
 * @param {data.params} 参数
 * @param {data.headers} 请求头
 * @return 成功或失败的值
 * */
export function fetchPost2 (data){
    // const promise = new Promise((resolve, reject) => {
    //     fetch(`${data.url}`, {
    //         method: "post",
    //         body: data.params,
    //         headers: data.headers,
    //     })
    //         .then((response) => {
    //             return response.json();
    //         })
    //         .then(data => {
    //             resolve(data);
    //         })
    //         .catch((errMsg) => {
    //             reject(errMsg);
    //         });
    // });
    // return promise;
    const promise = new Promise((resolve, reject) => {
        Promise.race([
            fetch(`${data.url}`, {
                method: "post",
                body: data.params,
                headers: data.headers,
                time:(data.time)?data.time:100000
            }),
            new Promise(()=>{
                setTimeout(()=> reject("请求访问超时"),(data.time)?data.time:100000);
            })])
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
    return promise;
}


/**
 * post请求
 * @param {data.url} 路径
 * @param {data.params} 参数
 * @param {data.headers} 请求头
 * @return 成功或失败的值
 * */
export function fetchPost(data){
    if(Object.is(data.type,"form")) {
        return fetchPost2(data);
    }else {
        return fetchPost1(data);
    }
}