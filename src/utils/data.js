/*
 * @Author: Jianbinbing
 * @since: Do not edit
 * @lastTime: 2020-08-16 23:42:58
 * @LastEditors: Jianbinbing
 * @Description:
 */
import {Decrypt,Encrypt,GetKey} from "@/utils/cryptoJS";
import {RSAencrypt,RSAdencrypt,getRSAKey} from "@/utils/jsEncrypt";

/**
 * 将请求数据使用rsa+ase混合加密
 * @param object
 * @returns {{data: *, aseKey: *}}
 */
export function getEncryptedJson(object) {
  //获取对称密钥
  let key=GetKey(16)
  //ase加密
  let data=Encrypt(JSON.stringify(object),key)
  //rsa加密
  let aseKey=RSAencrypt(key)
  let json={
    "data":data,
    "aseKey":aseKey
  }
  return json
}

/**
 * 使用rsa+ase解密返回的数据
 * @param data
 * @param key
 * @returns {*}
 */
export function getDecryptJson(data,key) {
  let aseKey=RSAdencrypt(key);
  let rs=JSON.parse(Decrypt(data,aseKey))
  console.log('rs', rs)
  return rs.data
}