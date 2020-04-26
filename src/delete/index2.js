/**
 * 拼接参数
 * @param {url} 路径
 * @param {params} 参数
 * @return 返回拼接好的路径
 * */
const splicing = (url, params) => {
//拼接参数
    let paramsArray = [];
    Object.keys(params).forEach(key => {
        if (params[key]) {
            paramsArray.push(key + "=" + params[key]);
        }
    });
    if (url.search(/\?/) === -1) {
        url += "?" + paramsArray.join("&");
    } else {
        url += "&" + paramsArray.join("&");
    }
    return url;
};

/**
 * delete请求
 * @param {data.url} 路径
 * @param {data.params} 参数
 * @param {data.headers} 请求头
 * @return 成功或失败的值
 * */
export function fetchDelete(data){
    let api = splicing(data.url,data.params);
    const promise = new Promise((resolve, reject) => {
        fetch(api, {
            method: "delete",
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
    return promise;
}