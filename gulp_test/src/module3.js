/**
 * Created by Administrator on 2018/11/21.
 */
export  function sum(...args) {
  return args.reduce((prev, curr) => prev + curr, 0)
};
//分别暴露
