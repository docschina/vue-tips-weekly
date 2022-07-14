const { readdir } = require("fs/promises");
const { join } = require("path");

const getList = async () => {
  try {
    const path = join(__dirname, "../posts");
    const files = await readdir(path);
    console.log(files);
    // [ '068.md', '069.md','index.md']
    const nameList = files
      .filter((i) => /(\d+)\.md/.test(i))
      .map((i) => i.replace(/\.md$/, ".html"));
    console.log(nameList);
    //  返回列表
  } catch (err) {
    console.error(err);
    return 0;
  }
};

// exports = getMax;
module.exports = getMax;
