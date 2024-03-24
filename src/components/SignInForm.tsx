export function SignInForm (): JSX.Element {
  return (
    <section className='flex flex-col h-auto w-full max-w-screen-sm items-center justify-center text-lg bg-neutral-900 rounded-md py-5 relative'>
      <div className='absolute -z-10 -inset-[2px] w-auto h-auto bg-gradient-to-br from-logan-300/80 via-transparent to-logan-300/80 rounded-md shadow-md' />
      <h1 className='text-3xl font-medium '>Registro</h1>
      <hr className='h-px w-full mt-6 mb-2 bg-gradient-to-r from-transparent via-logan-300 to-transparent border-0' />
      <form action='/login' method='post' className='flex flex-col items-center w-full px-10 mt-10 mb-2'>
        <div className='relative w-full py-1 px-3 ring-2 ring-logan-300 rounded-full focus-within:shadow-[0px_0px_4px_4px_rgba(188,176,217,0.76)]'>
          <label htmlFor='username' className='absolute -top-4 left-5 z-10 bg-neutral-900 px-3 text-base'>Correo</label>
          <input type='text' id='username' name='username' required className='relative z-0 rounded-full focus:outline-none border-2 border-none bg-inherit w-full px-1' />
        </div>
        <div className='relative w-full py-1 px-3 mt-10 ring-2 ring-logan-300 rounded-full focus-within:shadow-[0px_0px_4px_4px_rgba(188,176,217,0.76)]'>
          <label htmlFor='password' className='absolute -top-4 left-5 z-10 bg-neutral-900 px-3 text-base'>Contraseña</label>
          <input type='password' id='password' name='password' required className='relative z-0 rounded-full focus:outline-none border-none bg-inherit w-full px-1' />
        </div>
        <div className='relative w-full py-1 px-3 mt-10 ring-2 ring-logan-300 rounded-full focus-within:shadow-[0px_0px_4px_4px_rgba(188,176,217,0.76)]'>
          <label htmlFor='password' className='absolute -top-4 left-5 z-10 bg-neutral-900 px-3 text-base'>Confirmar Contraseña</label>
          <input type='password2' id='password2' name='password2' required className='relative z-0 rounded-full focus:outline-none border-none bg-inherit w-full px-1' />
        </div>
        <a href='/login' className='text-sm underline ml-1 mt-2 self-start text-logan-300 pl-3'>Ya tengo una cuenta</a>
        <div className='flex relative z-0 mt-8 mb-1 justify-center bg-gradient-to-r from-logan-400/50 to-transparent p-1 rounded-full backdrop-blur-lg'>
          <div className='absolute top-1/2 left-1/2 -z-10 w-[300%] h-[2px] bg-gradient-to-r from-transparent via-logan-300 to-transparent rounded-full transform -translate-x-1/2' />
          <div className='flex w-full justify-center bg-gradient-to-r from-logan-400 to-transparent p-[2px] rounded-full backdrop-blur-lg'>
            <button
              type='submit'
              className='w-full text-white text-lg px-6 bg-neutral-900 rounded-full hover:bg-gradient-to-r hover:from-logan-400/50 hover:to-transparent duration-200'
            >
              Registrarse
            </button>
          </div>
        </div>
      </form>
    </section>
  )
}