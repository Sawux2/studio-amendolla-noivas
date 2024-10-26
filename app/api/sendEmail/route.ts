import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    // Parse do corpo da requisição
    const { name, email, phone, eventDate, service, message } = await req.json();

    // Verifica se todas as informações necessárias foram fornecidas
    if (!name || !email || !phone || !eventDate || !service) {
      return NextResponse.json({ error: 'Todos os campos são obrigatórios.' }, { status: 400 });
    }

    // Configuração do nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // O email do remetente
        pass: process.env.EMAIL_PASS, // A senha do remetente (ou senha de app no caso de Gmail)
      },
    });

    // Monta o email
    await transporter.sendMail({
      from: `"${name}" <${email}>`, // O email do cliente que está solicitando o orçamento
      to: 'aandreviniciuss@gmail.com', // Email que vai receber a solicitação de orçamento
      subject: `Solicitação de Orçamento: ${service}`, // Assunto do email
      text: `Nome: ${name}\nEmail: ${email}\nTelefone: ${phone}\nData do Evento: ${eventDate}\nServiço: ${service}\nObservações: ${message}`,
    });

    // Resposta de sucesso
    return NextResponse.json({ message: 'Email enviado com sucesso!' }, { status: 200 });
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return NextResponse.json({ error: 'Erro ao enviar email' }, { status: 500 });
  }
}
