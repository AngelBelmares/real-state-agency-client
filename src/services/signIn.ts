import type { SignIn } from '../types/auth'
import { z } from 'zod'
import { API_URL } from '../constants/api'

export async function registerUser (form: SignIn): Promise<boolean> {
  const response = await fetch(`${API_URL}/Users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(form)
  })

  if (response.ok) {
    return true
  } else {
    throw new Error('Error al registrar el usuario')
  }
}

export function validateData (data: SignIn & { password2: string }): SignIn | Error {
  const result = signInSchema.safeParse(data)

  if (!result.success) {
    return Error(result.error.errors[0].message)
  }

  return result.data
}

const signInSchema = z.object({
  username: z.string().min(4, 'El nombre de usuario debe tener al menos 4 caracteres'),
  mail: z.string().email('Correo inválido'),
  password: z.string().min(8, 'La contraseña debe tener al menos 8 caracteres'),
  password2: z.string()
}).refine(data => data.password === data.password2, {
  message: 'Las contraseñas no coinciden',
  path: ['password2']
})
