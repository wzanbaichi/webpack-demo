import _ from 'lodash';
import j from 'jquery';
import foo from './foo';
function component() {
  var element = j('<div></div>');
  element.html(_.join(['Hello','webpack'], ' '));
  return element.get(0);
}
console.log(111);
console.log(j);
console.log(foo);
console.log(foo());
console.log(j('body')  //测试压缩后的代码有没有被破坏
document.body.appendChild(component());