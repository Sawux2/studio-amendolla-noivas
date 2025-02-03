// pages/api/indexnow.js
import fetch from 'node-fetch';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Lista das suas URLs
    const urlList = [
      'https://studioamendollanoivas.com.br/contato',
      'https://studioamendollanoivas.com.br/galeria-de-fotos-maquiagem-e-penteados',
      'https://studioamendollanoivas.com.br/sobre',
      'https://studioamendollanoivas.com.br',
      'https://studioamendollanoivas.com.br/servicos',
      'https://studioamendollanoivas.com.br/casamento',
      'https://studioamendollanoivas.com.br/formatura',
    'https://studioamendollanoivas.com.br/robots.txt',
    'https://studioamendollanoivas.com.br/galeria-de-fotos-maquiagem-e-penteados',
    'https://studioamendollanoivas.com.br',
    'https://studioamendollanoivas.com.br/contato',
    'https://studioamendollanoivas.com.br/atedimento-a-domicilio-para-maquiagem',
    'https://studioamendollanoivas.com.br/amendolla',
    'https://studioamendollanoivas.com.br/beleza-para-formatura-sao-paulo',
    'https://studioamendollanoivas.com.br/beleza-para-noivas-em-sp',
    'https://studioamendollanoivas.com.br/cabelo-e-maquiagem-para-noivas',
    'https://studioamendollanoivas.com.br/cabelo-de-noiva',
    'https://studioamendollanoivas.com.br/cabelo-preso-para-noivas',
    'https://studioamendollanoivas.com.br/combo-madrinhas',
    'https://studioamendollanoivas.com.br/dia-da-noiva-zona-norte',
    'https://studioamendollanoivas.com.br/cuidados-de-beleza-pre-casamento',
    'https://studioamendollanoivas.com.br/dia-de-noiva-beleza-natural',
    'https://studioamendollanoivas.com.br/dia-da-noiva-zona-norte-sp',
    'https://studioamendollanoivas.com.br/dia-da-noiva',
    'https://studioamendollanoivas.com.br/dia-de-noiva',
    'https://studioamendollanoivas.com.br/dia-de-noiva-zona-norte',
    'https://studioamendollanoivas.com.br/dicas-de-maquiagem-para-casamento',
    'https://studioamendollanoivas.com.br/casamento-dia-maquiagem',
    'https://studioamendollanoivas.com.br/estilo-de-maquiagem-de-casamento-em-sao-paulo',
    'https://studioamendollanoivas.com.br/dicas-de-penteado-para-festas',
    'https://studioamendollanoivas.com.br/estilo-de-maquiagem-para-casamento',
    'https://studioamendollanoivas.com.br/glamour-de-noiva-sao-paulo',
    'https://studioamendollanoivas.com.br/estilos-de-noiva',
    'https://studioamendollanoivas.com.br/look-de-festa-zona-norte',
    'https://studioamendollanoivas.com.br/make-e-penteado-para-madrinhas-zona-norte',
    'https://studioamendollanoivas.com.br/make-a-domicilio',
    'https://studioamendollanoivas.com.br/maquiadora-perto-de-mim',
    'https://studioamendollanoivas.com.br/maquiadora-zona-norte',
    'https://studioamendollanoivas.com.br/maquiage-para-eventos-de-gala',
    'https://studioamendollanoivas.com.br/maquiagem-a-domicilio',
    'https://studioamendollanoivas.com.br/maquiagem-de-dia-para-noiva',
    'https://studioamendollanoivas.com.br/maquiagem-de-noiva-dia',
    'https://studioamendollanoivas.com.br/maquiagem-de-noiva-pele-negra',
    'https://studioamendollanoivas.com.br/maquiagem-de-noiva-simples',
    'https://studioamendollanoivas.com.br/maquiagem-de-noiva-sp',
    'https://studioamendollanoivas.com.br/maquiagem-de-noiva-zona-norte',
    'https://studioamendollanoivas.com.br/maquiagem-de-noiva',
    'https://studioamendollanoivas.com.br/maquiagem-de-noivas',
    'https://studioamendollanoivas.com.br/maquiagem-e-penteado-para-aniversario-em-sao-paulo',
    'https://studioamendollanoivas.com.br/maquiagem-e-penteado-para-cha-de-bebe',
    'https://studioamendollanoivas.com.br/maquiagem-e-penteado-para-festas-sp',
    'https://studioamendollanoivas.com.br/maquiagem-e-penteado-para-festas',
    'https://studioamendollanoivas.com.br/maquiagem-e-penteado-para-festival',
    'https://studioamendollanoivas.com.br/maquiagem-em-sao-paulo',
    'https://studioamendollanoivas.com.br/maquiagem-glamour-para-noivas',
    'https://studioamendollanoivas.com.br/maquiagem-natural-para-noiva',
    'https://studioamendollanoivas.com.br/maquiagem-noiva-classica',
    'https://studioamendollanoivas.com.br/maquiagem-noiva-duradoura',
    'https://studioamendollanoivas.com.br/maquiagem-noiva-pele-negra',
    'https://studioamendollanoivas.com.br/maquiagem-para-casamento-a-noite',
    'https://studioamendollanoivas.com.br/maquiagem-para-casamento-de-dia',
    'https://studioamendollanoivas.com.br/maquiagem-para-casamento-em-pele-negra',
    'https://studioamendollanoivas.com.br/maquiagem-para-casamento-rustico',
    'https://studioamendollanoivas.com.br/maquiagem-para-casamento',
    'https://studioamendollanoivas.com.br/maquiagem-para-evento-formal',
    'https://studioamendollanoivas.com.br/maquiagem-para-festa-de-aniversario',
    'https://studioamendollanoivas.com.br/maquiagem-para-festa-de-casamento-ao-ar-livre',
    'https://studioamendollanoivas.com.br/maquiagem-para-festa-de-casamento',
    'https://studioamendollanoivas.com.br/maquiagem-para-festas-de-noite',
    'https://studioamendollanoivas.com.br/maquiagem-para-formatura',
    'https://studioamendollanoivas.com.br/maquiagem-para-jantar-de-gala',
    'https://studioamendollanoivas.com.br/maquiagem-para-noiva-classica',
    'https://studioamendollanoivas.com.br/maquiagem-para-noiva-em-sao-paulo',
    'https://studioamendollanoivas.com.br/maquiagem-para-noiva-natural',
    'https://studioamendollanoivas.com.br/maquiagem-para-noiva-moderna',
    'https://studioamendollanoivas.com.br/maquiagem-para-noiva-romantica',
    'https://studioamendollanoivas.com.br/maquiagem-para-noiva',
    'https://studioamendollanoivas.com.br/maquiagem-para-noivas-em-sao-paulo',
    'https://studioamendollanoivas.com.br/maquiagem-para-noivas-jovem',
    'https://studioamendollanoivas.com.br/maquiagem-para-noivas-sp',
    'https://studioamendollanoivas.com.br/maquiagem-para-noivas-peles-negra',
    'https://studioamendollanoivas.com.br/maquiagem-para-noivas',
    'https://studioamendollanoivas.com.br/maquiagem-para-olhos-grandes',
    'https://studioamendollanoivas.com.br/maquiagem-para-olhos-pequenos',
    'https://studioamendollanoivas.com.br/maquiagem-para-olhos-redondo',
    'https://studioamendollanoivas.com.br/maquiagem-para-pele-madura',
    'https://studioamendollanoivas.com.br/maquiagem-para-pele-clara',
    'https://studioamendollanoivas.com.br/maquiagem-para-pele-oleosa-e-brilho',
    'https://studioamendollanoivas.com.br/maquiagem-para-pele-morena',
    'https://studioamendollanoivas.com.br/maquiagem-para-pele-oleosa',
    'https://studioamendollanoivas.com.br/maquiagem-para-pele-preta-e-radiancia',
    'https://studioamendollanoivas.com.br/maquiagem-para-pele-seca',
    'https://studioamendollanoivas.com.br/maquiagem-para-pele-sensivel',
    'https://studioamendollanoivas.com.br/maquiagem-social-zona-norte',
    'https://studioamendollanoivas.com.br/maquiageme-pentado-para-eventos',
    'https://studioamendollanoivas.com.br/maquiagem-social',
    'https://studioamendollanoivas.com.br/o-que-faz-no-dia-de-noiva',
    'https://studioamendollanoivas.com.br/nosso-espaco',
    'https://studioamendollanoivas.com.br/noiva-maquiagem-social',
    'https://studioamendollanoivas.com.br/pacotes-de-beleza-para-noivas',
    'https://studioamendollanoivas.com.br/onde-fazer-penteado-de-noiva',
    'https://studioamendollanoivas.com.br/onde-fazer-maquiagem',
    'https://studioamendollanoivas.com.br/pentado-de-noiva-em-sp',
    'https://studioamendollanoivas.com.br/penteado-de-debutante-zona-norte-sp',
    'https://studioamendollanoivas.com.br/pacotes-noivas',
    'https://studioamendollanoivas.com.br/penteado-para-noiva-zona-norte',
    'https://studioamendollanoivas.com.br/penteado-para-casamento',
    'https://studioamendollanoivas.com.br/penteado-de-noiva-em-sao-paulo',
    'https://studioamendollanoivas.com.br/penteado-para-noivas',
    'https://studioamendollanoivas.com.br/penteados-para-casamentos',
    'https://studioamendollanoivas.com.br/penteados-para-noivas-em-sao-paulo-zona-norte',
    'https://studioamendollanoivas.com.br/salao-de-beleza-para-noivas-em-sao-paulo',
    'https://studioamendollanoivas.com.br/preparacao-de-noiva-zona-norte',
    'https://studioamendollanoivas.com.br/salao-de-beleza-para-noivas',
    'https://studioamendollanoivas.com.br/salao-de-maquiagem-para-noivas-sao-paulo',
    'https://studioamendollanoivas.com.br/salao-de-noiva',
    'https://studioamendollanoivas.com.br/salao-dia-da-noiva-zona-norte-sp',
    'https://studioamendollanoivas.com.br/salao-dia-da-noiva-zona-norte',
    'https://studioamendollanoivas.com.br/servicos-de-beleza-em-sao-paulo',
    'https://studioamendollanoivas.com.br/salao-para-dia-de-noiva-zona-norte',
    'https://studioamendollanoivas.com.br/spa',
    'https://studioamendollanoivas.com.br/tendencia-de-penteados-para-noivas',
    'https://studioamendollanoivas.com.br/tendencia-de-maquiagem-2024',
    'https://studioamendollanoivas.com.br/testes-de-maquiagem-para-noivas',
    'https://studioamendollanoivas.com.br/tratamento-de-pele-para-noivas-sp',
    'https://studioamendollanoivas.com.br/visagismo-para-maquiagem-de-noiva',

      // Adicione mais URLs se necessário
    ];

    const key = '7f034bef09ed48ce804f25b53dab25a1';  // Sua chave da API
    const keyLocation = 'https://www.studioamendollanoivas.com.br/7f034bef09ed48ce804f25b53dab25a1.txt';  // Local do arquivo .txt que contém a chave

    const requestBody = {
      host: 'www.studioamendollanoivas.com.br',  // Seu domínio
      key: key,  // Sua chave da API
      keyLocation: keyLocation,  // Local do arquivo .txt
      urlList: urlList,  // Lista de URLs
    };

    try {
      const response = await fetch('https://api.indexnow.org/IndexNow', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),  // Envia a requisição com as URLs e dados
      });

      if (response.ok) {
        return res.status(200).json({ message: 'URLs enviadas com sucesso!' });
      } else {
        return res.status(500).json({ message: 'Erro ao enviar URLs.' });
      }
    } catch {
      return res.status(500).json({ message: 'Erro ao se conectar com a API do IndexNow.' });
    }
  } else {
    return res.status(405).json({ message: 'Método não permitido.' });
  }
}
