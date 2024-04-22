import CryptoJS from 'crypto-ts'

// const key = cryptojs.enc.Utf8.parse('6bb4837eb74329105ee4568dda7dc67e')
// const iv = cryptojs.enc.Utf8.parse("1234123412341234")

// 十六位十六进制数作为密钥
const SECRET_KEY = CryptoJS.enc.Utf8.parse("6bb4837eb74329105ee4568dda7dc67e");
// 十六位十六进制数作为密钥偏移量
const SECRET_IV = CryptoJS.enc.Utf8.parse("1234123412341234");
export default {
  // encode: (data: string) => {
  //   const value = data.toString()
  //   const encrypted = cryptojs.AES.encrypt(value, key, {
  //     iv,
  //     mode: cryptojs.mode.CBC,
  //     padding: cryptojs.pad.PKCS7
  //   });
  //   return encrypted.toString()
  // },
  // decode: (encryptedByteStr: string) => {
  //   const decrypt = cryptojs.AES.decrypt(encryptedByteStr, key, {
  //     iv,
  //     mode: cryptojs.mode.CBC,
  //     padding: cryptojs.pad.PKCS7
  //   });
  //   return decrypt.toString(cryptojs.enc.Utf8)
  // },
  encode: (data: string) => {
    if (typeof data === "object") {
      try {
        data = JSON.stringify(data);
      } catch (error) {
        console.log("encrypt error:", error);
      }
    }
    const dataHex = CryptoJS.enc.Utf8.parse(data);
    const encrypted = CryptoJS.AES.encrypt(dataHex, SECRET_KEY, {
      iv: SECRET_IV,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.PKCS7
    });
    return encrypted.ciphertext.toString();
  },
  decode: (data: string) => {
    const encryptedHexStr = CryptoJS.enc.Hex.parse(data);
    const str = CryptoJS.enc.Hex.stringify(encryptedHexStr);
    const decrypt = CryptoJS.AES.decrypt(str, SECRET_KEY, {
      iv: SECRET_IV,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.PKCS7
    });
    const decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
    return decryptedStr.toString();
  },

}