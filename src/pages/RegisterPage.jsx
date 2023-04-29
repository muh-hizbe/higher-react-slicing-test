import { MainLayout } from '../components/layouts/MainLayout'
import { RegisterForm } from '../components/forms/RegisterForm'
import NotSupportViewPage from './NotSupportViewPage'

export default function RegisterPage() {

  return (
    <MainLayout>
      <div className='text-white md:hidden'>      
        <RegisterForm />
      </div>
      <div className='text-white hidden md:flex'>      
        <NotSupportViewPage />
      </div>
    </MainLayout>
  )
}
