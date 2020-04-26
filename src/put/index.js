/**
 * put请求
 * @param {data.url} 路径
 * @param {data.params} 参数
 * @param {data.headers} 请求头
 * @return 成功或失败的值
 * */
export function fetchPut(data){
    const promise = new Promise((resolve, reject) => {
        Promise.race([
            fetch(`${data.url}`, {
                method: "put",
                body: JSON.stringify(data.params),
                headers: data.headers,
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