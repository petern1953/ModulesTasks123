import { storeCookie } from './StorageTasks123/moduleF01.js';
import cookieHandler from './StorageTasks123/moduleF02.js';
import { toDiv, toDiv2 } from './StorageTasks123/moduleF03.js';

storeCookie();

console.log(cookieHandler.getCookies());
// console.log(cookieHandler.storeInSessionStorage());
// console.log(cookieHandler.deleteCookies());

toDiv();
toDiv2();