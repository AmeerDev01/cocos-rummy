// import { inject } from "vue"
import cryptojs from 'crypto-ts'
// const cryptojs = inject("cryptojs") as any

export default (data: string) => {
  const encryptedKey = cryptojs.enc.Hex.parse("6bb4837eb74329105ee4568dda7dc67e")
  const encryptedByteStr = cryptojs.enc.Utf8.parse(data)
  const encryptedData = cryptojs.AES.encrypt(encryptedByteStr, encryptedKey, {
    mode: cryptojs.mode.ECB,
    padding: cryptojs.pad.PKCS7
  })
  return encryptedData.ciphertext.toString()
}