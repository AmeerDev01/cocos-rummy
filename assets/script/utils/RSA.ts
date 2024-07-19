import JSEncrypt from "jsencrypt";
import { keyPem } from "../config/gameConfig";

// var encrypt = new JSEncrypt();
// encrypt.setPublicKey(`-----BEGIN PUBLIC KEY-----${keyPem.key_2048.publicStr}-----END PUBLIC KEY-----`);
// var encryptedStr = encrypt.encrypt('Message too long for RSAMessage too long for RSAMessage too long for RSAMessage too long for RSAMessage too long for RSAMessage too long for RSAMessage too long for RSAMessage too long for RSAMessage too long for RSAMessage too long for RSAMessage too long for RSAMessage too long for RSAMessage too long for RSAMessage too long for RSAMessage too long for RSA')
// console.log('encryptedStr', encryptedStr)

// var decrypt = new JSEncrypt();
// decrypt.setPrivateKey(`-----BEGIN PRIVATE KEY-----${keyPem.key_2048.privateStr}-----END PRIVATE KEY-----`);
// var decryptedStr = decrypt.decrypt(encryptedStr as string);
// console.log('decryptedStr', decryptedStr)

/**
 * 使用私钥解密数据
 * @param dataToEncrypt 要解密的数据
 * @returns
 */
export const encodeRSA = (dataToEncrypt: string) => {
  const encrypt = new JSEncrypt();
  encrypt.setPublicKey(
    `-----BEGIN PUBLIC KEY-----${keyPem.key1.publicStr}-----END PUBLIC KEY-----`
  );
  return encrypt.encrypt(dataToEncrypt);
};

/**
 * 使用公钥加密数据
 * @param dataToDecrypt 要解密的数据
 * @returns
 */
export const decodeRSA = (dataToDecrypt: string) => {
  const decrypt = new JSEncrypt();
  decrypt.setPrivateKey(
    `-----BEGIN PRIVATE KEY-----${keyPem.key1.privateStr}-----END PRIVATE KEY-----`
  );
  return decrypt.decrypt(dataToDecrypt);
};
