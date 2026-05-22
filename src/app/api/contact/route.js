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
      subject: `New Quote Request — ${service || 'General Inquiry'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0e1216; color: #f0f4f8; padding: 40px; border-radius: 8px;">
          <div style="border-bottom: 2px solid #1a8fff; padding-bottom: 20px; margin-bottom: 28px;">
            <h1 style="margin: 0; font-size: 24px; letter-spacing: 3px; text-transform: uppercase; color: #f0f4f8;">New Quote Request</h1>
            <p style="margin: 6px 0 0; color: #1a8fff; font-size: 11px; letter-spacing: 3px; text-transform: uppercase;">Zero Defects ATL · zerodefectsatl.com</p>
          </div>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.07); color: rgba(240,244,248,0.45); font-size: 11px; letter-spacing: 3px; text-transform: uppercase; width: 130px;">Name</td>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.07); font-size: 15px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.07); color: rgba(240,244,248,0.45); font-size: 11px; letter-spacing: 3px; text-transform: uppercase;">Phone</td>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.07); font-size: 15px;"><a href="tel:${phone}" style="color: #1a8fff; text-decoration: none;">${phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.07); color: rgba(240,244,248,0.45); font-size: 11px; letter-spacing: 3px; text-transform: uppercase;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.07); font-size: 15px;"><a href="mailto:${email}" style="color: #1a8fff; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.07); color: rgba(240,244,248,0.45); font-size: 11px; letter-spacing: 3px; text-transform: uppercase;">Vehicle</td>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.07); font-size: 15px;">${vehicle || '—'}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; ${message ? 'border-bottom: 1px solid rgba(255,255,255,0.07);' : ''} color: rgba(240,244,248,0.45); font-size: 11px; letter-spacing: 3px; text-transform: uppercase;">Service</td>
              <td style="padding: 12px 0; ${message ? 'border-bottom: 1px solid rgba(255,255,255,0.07);' : ''} font-size: 15px; color: #00e5a0;">${service || '—'}</td>
            </tr>
            ${message ? `
            <tr>
              <td style="padding: 12px 0; color: rgba(240,244,248,0.45); font-size: 11px; letter-spacing: 3px; text-transform: uppercase; vertical-align: top;">Message</td>
              <td style="padding: 12px 0; font-size: 15px; line-height: 1.7; color: rgba(240,244,248,0.85);">${message}</td>
            </tr>
            ` : ''}
          </table>

          <div style="margin-top: 28px; padding: 14px 18px; background: rgba(26,143,255,0.08); border-left: 3px solid #1a8fff; border-radius: 2px;">
            <p style="margin: 0; font-size: 13px; color: rgba(240,244,248,0.55);">Reply directly to this email to reach <strong style="color: #f0f4f8;">${name}</strong></p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Resend error:', err)
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
}
