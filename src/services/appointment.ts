import { API_URL } from '../constants/api'
import type { Appointment, AppointmentFilter } from '../types/appointments'
import { z } from 'zod'

export async function registerAppointment (appointment: Appointment, authToken?: string): Promise<string> {
  console.log(`${API_URL}/Appointments`)
  const response = await fetch(`${API_URL}/Appointments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(appointment)
  })

  if (!response.ok) {
    throw new Error('Error al registrar la cita')
  }

  return 'Cita registrada con éxito'
}

export const appointmentSchema = z.object({
  userId: z.number().min(1, { message: 'Hubo un problema, vuelva a iniciar sesión' }),
  houseId: z.number().min(1, { message: 'Debe seleccionar una casa' }),
  date: z.date().refine((date) => date > new Date(), { message: 'La fecha de la cita no puede ser en el pasado' })
})

export const getCurrentTime = (): string => {
  const date = new Date()
  const offset = date.getTimezoneOffset()
  return new Date(date.getTime() - (offset * 60000)).toISOString().slice(0, 16)
}

export async function getAppointments (filter: AppointmentFilter): Promise<Appointment[]> {
  const res = await fetch(`${API_URL}/Appointments` +
    `?AppointmentId=${filter?.appointmentId ?? ''}` +
    `&UserId=${filter?.userId ?? ''}` +
    `&AgentId=${filter?.agentId ?? ''}` +
    `&HouseId=${filter?.houseId ?? ''}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const data = await res.json()
  return data as Appointment[]
}
