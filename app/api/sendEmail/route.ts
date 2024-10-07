import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, phone, eventDate, service, message } = await req.json();

    // Configuração do nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Enviar o email
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: 'aandreviniciuss@gmail.com',
      subject: `Solicitação de Orçamento: ${service}`,
      text: `Nome: ${name}\nEmail: ${email}\nTelefone: ${phone}\nData do Evento: ${eventDate}\nServiço: ${service}\nObservações: ${message}`,
    });

    return NextResponse.json({ message: 'Email enviado com sucesso!' }, { status: 200 });
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return NextResponse.json({ error: 'Erro ao enviar email' }, { status: 500 });
  }
}
