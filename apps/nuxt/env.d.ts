/// <reference types="vite/client" />
// noinspection JSFileReferences

interface ImportMetaEnv {
  readonly JWT_SECRET: string | undefined
  readonly PASSWORD_HASH_SALT_ROUNDS: string | undefined
}

declare namespace NodeJS {

  interface Process {
    env: ENV
  }
}
