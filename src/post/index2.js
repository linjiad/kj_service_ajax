/**
 * 单线程post请求
 * @param {data.url} 路径
 * @param {data.params} 参数
 * @param {data.headers} 请求头
 * @return 成功或失败的值
 * */
const work = (data)=>{
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
    return promise;
};
/**
 * 多线程post请求
 * @param {data.url} 路径
 * @param {data.params} 参数
 * @param {data.headers} 请求头
 * @return 成功或失败的值
 * */
const works = (data)=>{
    let w;
    if(typeof(w) === "undefined") {
        w = new Worker("post.js");
    }
    w.postMessage(data);
    w.onmessage = (event) => {
        return event.data;
    };
};

/**
 * post请求
 * @param {data.url} 路径
 * @param {data.params} 参数
 * @param {data.headers} 请求头
 * @return 成功或失败的值
 * */
export function fetchPost (data){

    if(typeof(Worker) !== "undefined") {
        return works(data);
    }else{
        return work(data);
    }

}