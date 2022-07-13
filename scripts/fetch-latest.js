const { readdir } = require("fs/promises");
const { join } = require("path");

const getMax = async () => {
  try {
    const path = join(__dirname, "../posts");
    const files = await readdir(path);
    // console.log(files);
    // [ '068.md', '069.md']
    const nameList = files
      .map((i) => i.match(/(\d+).md/)[1])
      .map((i) => Number(i));
    // 获取数组最大值
    const max = Math.max(...nameList);
    // console.log(max);
    return max;
  } catch (err) {
    console.error(err);
    return 0;
  }
};

// exports = getMax;
module.exports = getMax;
