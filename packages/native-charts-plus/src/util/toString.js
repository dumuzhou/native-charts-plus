export default function toString(obj) {
  let result = JSON.stringify(obj, function(key, val) {
    if (typeof val === "function") {
      //return `~--demo--~${val}~--demo--~`;
      return val.toString();
    }
    return val;
  });

  result = result.replace(/\\n/g, "").replace(/\\\"/g, '"');
  //do {
  //result = result.replace('\"~--demo--~', '').replace('~--demo--~\"', '').replace(/\\n/g, '').replace(/\\\"/g,"\"");//最后一个replace将release模式中莫名生成的\"转换成"
  //} while (result.indexOf('~--demo--~') >= 0);
  return result;
}
