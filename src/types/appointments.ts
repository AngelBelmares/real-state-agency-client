export interface Appointment {
  appointmentId?: number
  userId?: number
  userCompleteName?: string
  agentId?: number
  agentCompleteName?: string
  houseId?: number
  houseLocation?: string
  houseImage?: string
  date?: Date
  createdAt?: Date
}

export interface AppointmentFilter {
  appointmentId?: number
  userId?: number
  agentId?: number
  houseId?: number
}
