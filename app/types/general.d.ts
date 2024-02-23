export interface UserAbout {
  desc: string
  interests: string[]
  opinions: string[]
  prompts: Record<string, string>
}

export type User = {
  id: string
  username: string
  email?: string
  role: string
  gender: string
  image: string
  about: UserAbout
  createdAt: Date
  updatedAt: Date
}
