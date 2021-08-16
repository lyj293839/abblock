import CryptoJS from 'crypto-js';

// MD5
const md5 = (data) => {
  return CryptoJS.MD5(data).toString();
};
const sign = (timestamp) => {
let signsrc = '%t%GUZCT*W&Nb5MDeEnrf59@myG!KKab' + timestamp;
  return md5(signsrc);
};

export {
  sign
};