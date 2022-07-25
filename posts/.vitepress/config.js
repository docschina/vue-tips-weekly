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
  },
};
