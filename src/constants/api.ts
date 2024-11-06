export const API_URL = import.meta.env.VITE_API_URL as string

export type State =
  | { status: 'idle', message?: string } // Estado inicial, sin carga activa
  | { status: 'loading', message?: string } // Cargando datos
  | { status: 'fetching', message?: string } // Refetch con indicador opcional
  | { status: 'success', message?: string } // Datos cargados exitosamente
  | { status: 'error', message?: string } // Error al cargar datos
