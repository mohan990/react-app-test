// "use client"

import { z } from "zod"


export const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
  // gender: z.string().min(1,{
  //   message: "Please select your gender."
  // }),
  // fruits: z.string().min(1,{
  //   message: "Please select fruits."
  // })
});