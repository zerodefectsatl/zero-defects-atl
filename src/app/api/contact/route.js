import { Resend } from 'resend'
import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const { name, phone, email, vehicle, service, message } = await request.json()

    if (!name || !phone || !email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    await resend.emails.send({
      from: 'Zero Defects ATL <quotes@zerodefectsatl.com>',
      to: ['zerodefectsatl@gmail.com'],
      replyTo: email,
      subject: `New Quote Request — ${vehicle || 'Vehicle not specified'}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #080a0c; color: #f0f4f8; padding: 32px; border-radius: 8px;">
          <h2 style="color: #1a8fff; font-size: 24px; margin-bottom: 24px;">New Quote Request</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.07); color: rgba(240,244,248,0.5); width: 140px; font-size: 12px; letter-spacing: 2px; text-transform: uppercase;">Name</td><td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.07);">${name}</td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.07); color: rgba(240,244,248,0.5); font-size: 12px; letter-spacing: 2px; text-transform: uppercase;">Phone</td><td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.07);">${phone}</td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.07); color: rgba(240,244,248,0.5); font-size: 12px; letter-spacing: 2px; text-transform: uppercase;">Email</td><td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.07);"><a href="mailto:${email}" style="color: #1a8fff;">${email}</a></td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.07); color: rgba(240,244,248,0.5); font-size: 12px; letter-spacing: 2px; text-transform: uppercase;">Vehicle</td><td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.07);">${vehicle || '—'}</td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.07); color: rgba(240,244,248,0.5); font-size: 12px; letter-spacing: 2px; text-transform: uppercase;">Service</td><td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.07);">${service || '—'}</td></tr>
            ${message ? `<tr><td style="padding: 10px 0; color: rgba(240,244,248,0.5); font-size: 12px; letter-spacing: 2px; text-transform: uppercase; vertical-align: top;">Message</td><td style="padding: 10px 0;">${message}</td></tr>` : ''}
          </table>
          <p style="margin-top: 24px; font-size: 12px; color: rgba(240,244,248,0.3);">Sent from zerodefectsatl.com</p>
        </div>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Resend error:', err)
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
}
