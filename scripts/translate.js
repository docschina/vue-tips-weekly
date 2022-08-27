const { default: axios } = require("axios");
const crypto = require("crypto"); // 导入 node 的 crypto 库（node 自带）
const fs = require("fs/promises");
const qs = require("qs");
const path = require("path");
require("dotenv-flow").config();

console.log(process.env);

const md5String = (password) => {
  // 调用加密算法的函数，使用 md5 加密的方式
  const md5 = crypto.createHash("md5"); // 这是一个对象

  // 利用 md5 对象进行加密
  const result = md5.update(password).digest("hex");

  return result; // 返回
};

const query = {
  appid: process.env.Baidu_translate_appid,
  q: "",
  salt: "1",
  secret: process.env.Baidu_translate_secret,
  sign: "",
  from: "en",
  to: "zh",
};

const setQuery = (str = "") => {
  query.q = str;
  const _str = query.appid + query.q + query.salt + query.secret;
  // console.log("str,", _str);
  const sign = md5String(_str);
  // console.log("sign", sign);
  query.sign = sign;
  return query;
};

const trans = (str = "") => {
  const query = setQuery(str);
  axios({
    url: "https://fanyi-api.baidu.com/api/trans/vip/translate",
    method: "post",
    headers: {
      "content-type": "application/x-www-form-urlencoded;charset=utf-8",
    },
    data: qs.stringify(query),
  })
    .then((res) => {
      console.log("res", res.data);
    })
    .catch((e) => {
      console.log("err", e);
    });
};

const main = async () => {
  const _file = path.resolve(__dirname, "./posts/075.md");
  const _con = await fs.readFile(_file);
  const _str = _con.toString();
  const _arr = _str.split("##");
  trans(_arr[2]);
};

// trans("apple");
// main();
