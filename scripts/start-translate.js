#!/usr/bin/env zx
/* eslint-disable no-undef */
const getMax = require("./fetch-latest");

const main = async () => {
  // 切换到 develop 分支，执行 git pull
  await $`git checkout main`;
  await $`git pull`;
  // 切换回当前分支
  const max = await getMax();
  await $`git checkout -b translate/${max}`;

  console.log("done");
};

main();
