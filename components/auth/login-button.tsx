'use client'

import LoginForm from '@/components/auth/login-form'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { useRouter } from 'next/navigation'

interface LoginButtonProps {
  children: React.ReactNode
  mode?: 'modal' | 'redirect'
  asChild?: boolean
}

export default function LoginButton({
  children,
  mode = 'redirect',
  asChild,
}: LoginButtonProps) {
  const router = useRouter()

  function onClick() {
    router.push('/auth/login')
  }

  if (mode === 'modal') {
    return (
      <Dialog>
        <DialogTrigger asChild={asChild}>{children}</DialogTrigger>
        <DialogContent className="p-0 w-auto bg-transparent border-none">
          <LoginForm />
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <span className="cursor-pointer" onClick={onClick}>
      {children}
    </span>
  )
}