// import foo from './foo.js';
// export default function () {
//   console.log(foo);
// }

// src/main.js
import { devDependencies } from '../package.json';

export default function () {
  console.log('version ' + devDependencies);
}
