
import CryptoJS from "crypto-js";
/**
 * 解密
 * @param word
 * @return {String}
 */
export const decrypt = (word, keyStr) => {
    keyStr = keyStr ? keyStr : 'abcdefgrbcdefg12';
    var key  = CryptoJS.enc.Utf8.parse(keyStr);//Latin1 w8m31+Yy/Nw6thPsMpO5fg==
    var decrypt = CryptoJS.AES.decrypt(word, key, {mode:CryptoJS.mode.ECB,padding: CryptoJS.pad.Pkcs7});
    return CryptoJS.enc.Utf8.stringify(decrypt).toString();
}

/**
 * 加密
 * @param word
 * @return {String}
 */
export const encrypt = (word, keyStr) => { 
    keyStr = keyStr ? keyStr : 'abcdefgabcdefg12';
    var key  = CryptoJS.enc.Utf8.parse(keyStr);//Latin1 w8m31+Yy/Nw6thPsMpO5fg==
    var srcs = CryptoJS.enc.Utf8.parse(word);
    var encrypted = CryptoJS.AES.encrypt(srcs, key, {mode:CryptoJS.mode.ECB,padding: CryptoJS.pad.Pkcs7});
    return encrypted.toString();
}