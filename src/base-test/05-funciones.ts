export interface UserActive {
  uid: string,
  username: string
}

export const getUser = (): UserActive => ({
  uid: 'ABC123',
  username: 'El_Papi1502'
});

// Tarea
export const getUsuarioActivo = ( nombre: string ): UserActive =>({
  uid: 'ABC567',
  username: nombre
})




