import jwt, {SignOptions, VerifyOptions} from 'jsonwebtoken'
import {jwtSecret} from './env'

export const signUser = <T extends Record<string, any>>(data: T, options: SignOptions = {}) => {
  return new Promise((resolve, reject) => {
    jwt.sign(data, jwtSecret(), options, (error, encoded) => {
      if (error) {
        reject(error)
        return
      }
      if (typeof encoded === 'string') {
        resolve(encoded)
      }
      reject(new Error('encoded result should be string'))
    })
  })
}

export const verifyUser = <T extends Record<string, any>>(
  token: string,
  options: VerifyOptions = {},
): Promise<T> => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, jwtSecret(), options, (error, decoded: any) => {
      if (error) {
        reject(error)
        return
      }
      if (typeof decoded === 'object') {
        resolve(decoded)
        return
      }
      reject(new Error('decoded data should be an object'))
    })
  })
}
