#!/usr/bin/env zx
/* eslint-disable no-undef */
import getList from "./fetch-list.mjs";

const main = async () => {
  // 切换到 develop 分支，执行 git pull
  await $`git checkout main`;
  await $`git pull`;
  // 切换回当前分支
  const listInfo = await getList();
  // console.log(listInfo.max);

  await $`git checkout -b translate/${listInfo.max}`;
  console.log("done");
};

main();
