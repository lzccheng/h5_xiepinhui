// jsencrypt加密
import { JSEncrypt } from 'jsencrypt'

let publicKey = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDHs6oti/Pl8zgw+pP9fCZWeXpSwfDn7QhqiFf6XE2g4qWT9b1ZPDLXpvkGfOmU9ndAJC+/L148CYxjOe6qeZbhyCxpHoJfB/kQGsAnEjgc/oD6v4lRVZRVnkw7SWmRXYUHNinY9uWWbv2kUFjPyb5qswv+mBcpi24EN7I41c0YaQIDAQAB"

let encryptor = new JSEncrypt()

encryptor.setPublicKey(publicKey) // 设置公钥

export const encrypt = function toEncrypt(str) {
  return encryptor.encrypt(str)
}
