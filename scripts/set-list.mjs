#!/usr/bin/env zx
/* eslint-disable no-undef */
import getList from "./fetch-list.mjs";

const main = async () => {
  const listInfo = await getList();
  // console.log(listInfo);

  const l = listInfo.nameList.reverse();
  await saveJson(l);
  // console.log("done");
};

const saveJson = async (list) => {
  const jsonData = JSON.stringify(list, null, 2);
  // console.log(jsonData);
  await $`echo export const list =  ${jsonData} > posts/.vitepress/list.js`;
};

main();
