import { Resend } from 'resend'

const origin = process.env.NEXT_PUBLIC_ORIGIN
const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendPasswordResetEmail(email: string, token: string) {
  const resetLink = `${origin}/auth/new-password?token=${token}`

  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: email,
    subject: 'Reset your password',
    html: `<p>Click <a href="${resetLink}">Here</a> to reset password.</p>`,
  })
}

export async function sendVerificationEmail(email: string, token: string) {
  const confirmLink = `${origin}/auth/new-verification?token=${token}`

  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: email,
    subject: 'Confirm your email',
    html: `<p>Click <a href="${confirmLink}">Here</a> to confirm email.</p>`,
  })
}

export async function sendTwoFactorTokenEmail(email: string, token: string) {
  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: email,
    subject: '2FA Code',
    html: `<p>Your 2FA Code ${token}</p>`,
  })
}
