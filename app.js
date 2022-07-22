const html2md = require("html-to-md");
const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs/promises");
const path = require("path");
const cli = require("cac")();

cli.option("--url <url>", "输入网址", {
  default: "",
});
const { args, options } = cli.parse();
console.log(args);

// const prettier = require("prettier");

const url = args.length === 1 ? args[0] : null;
if (!url) {
  console.log("No url specified");
  return;
}

const main = () => {
  axios
    .get(url)
    .then((response) => {
      const rawHTML = response.data;
      if (!rawHTML) {
        console.log("No HTML found");
        return;
      }
      const $ = cheerio.load(rawHTML);
      const title = $(".post-header").text();
      let index = url.match(/weekly-(\d*)/);
      console.log(title);
      index = Array.isArray(index) && index.length > 1 ? index[1] : "";

      let post = $(".post-grid").html();
      if (!post) {
        console.log("No post found");
        return;
      }
      post = `# ${title}\n${post}\n## 来源\n\n原文 ${url}\n\n本作品采用<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">知识共享署名-相同方式共享 4.0 国际许可协议</a>进行许可。
`;
      const md = html2md(post, {}, false);
      //  prettier.resolveConfig(filePath).then((options) => {
      //    const md = prettier.format(md, options);
      //  });

      return {
        title,
        index,
        md,
      };
    })
    .then(async ({ index, md }) => {
      const _path = path.resolve(__dirname, "posts/" + index + ".md");

      // prettier.format(text);
      return fs.writeFile(_path, md, "utf8");
    })
    .then(() => {
      console.log("done");
    })
    .catch((error) => {
      console.error(error);
    });
};
main();
