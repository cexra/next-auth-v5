'use client'

import logout from '@/actions/logout'

export default function LogoutButton({
  children,
}: {
  children: React.ReactNode
}) {
  function onClick() {
    logout()
  }

  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  )
}
