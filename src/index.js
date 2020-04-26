import * as Post from "./post";
import * as Del from "./delete";
import * as Get from "./get";
import * as Put from "./put";
const del = Del.fetchDelete;
const post = Post.fetchPost;
const get = Get.fetchGet;
const put = Put.fetchPut;
export default { post, del ,get,put};


