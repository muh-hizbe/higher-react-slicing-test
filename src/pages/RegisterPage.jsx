import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import { MainLayout } from '../components/layouts/MainLayout'
import { RegisterForm } from '../components/forms/RegisterForm'

export default function RegisterPage() {
  const [count, setCount] = useState(0)

  return (
    <MainLayout>
      <div className='text-white'>
        <RegisterForm />
      </div>
    </MainLayout>
  )
}
