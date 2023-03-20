import * as shelljs from "shelljs";

shelljs
  .find("src") // 查找src文件夹，并返回一个数组
  .filter((file) => file.match(/\.jsx?$/)) // 过滤出 js/jsx 文件
  .forEach((file) => {
    let newName = file.replace(/\.j(sx?)$/, ".t$1");
    shelljs.mv(file, newName); // 重命名
  });
