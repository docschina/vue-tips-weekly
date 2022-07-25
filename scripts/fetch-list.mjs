import { readdir } from "fs/promises";
import { join } from "path";

const getList = async () => {
  try {
    const path = join(__dirname, "../posts");
    const files = await readdir(path);
    // console.log(files);
    // [ '068.md', '069.md','index.md']
    const nameList = files
      .filter((i) => /(\d+)\.md/.test(i))
      .map((i) => i.replace(/\.md$/, ".html"));
    // console.log(nameList);

    const weeklyFiles = files
      .filter((i) => /(\d+)\.md/.test(i))
      .map((i) => i.match(/(\d+).md/)[1])
      .map((i) => Number(i));
    // 获取数组最大值
    const max = Math.max(...weeklyFiles);
    // console.log(max);
    return {
      nameList,
      max,
    };
    //  返回列表
  } catch (err) {
    console.error(err);
    return {
      nameList: [],
      max: 0,
    };
  }
};

export default getList;
