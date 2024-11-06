export interface User {
  userId: number
  username: string
  mail: string
  name: string
  lastname: string
}

export interface Session {
  user: User
  token: string
}

export interface SignIn {
  username?: string
  mail?: string
  password: string
}

export interface Login {
  username?: string
  mail?: string
  password: string
}
