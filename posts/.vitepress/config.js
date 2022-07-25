import { list } from "./list.js";

const items = list.map((i) => {
  const title = (i.match(/^(\d+)(?=\.html)/g) ?? [])[0];

  return {
    text: title,
    link: `/${i}`,
  };
});
console.log(3, items);
export default {
  title: "Vue Tips",
  description: "Vue Tips",
  themeConfig: {
    sidebar: [
      {
        text: "Posts",
        items,
      },
    ],
    // footer: {
    //   message: "Released under the MIT License.",
    //   copyright:
    //     '<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br />本作品采用<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">知识共享署名-相同方式共享 4.0 国际许可协议</a>进行许可。',
    // },
  },
};
