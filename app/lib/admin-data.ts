export type AdminStat = {
  label: string;
  value: string;
  hint: string;
};

export type AdminModule = {
  title: string;
  description: string;
  items: string[];
  status: 'ready' | 'next' | 'planned';
};

export const adminStats: AdminStat[] = [
  {
    label: 'Leads capturados',
    value: 'CRM + WhatsApp',
    hint: 'Centralizar orçamento, origem do lead e acompanhamento comercial.',
  },
  {
    label: 'Agenda operacional',
    value: 'Calendário + bloqueios',
    hint: 'Evitar conflito de datas de noiva, teste e deslocamento.',
  },
  {
    label: 'Conteúdo orgânico',
    value: 'SEO + Schema',
    hint: 'Controlar páginas, FAQs, blog e galerias pelo painel.',
  },
  {
    label: 'Financeiro inicial',
    value: 'Orçamentos + sinais',
    hint: 'Registrar propostas, pagamentos e fechamento de contratos.',
  },
];

export const adminModules: AdminModule[] = [
  {
    title: 'Comercial & Leads',
    description: 'Funil para noivas, madrinhas e eventos com origem do lead e etapa de fechamento.',
    items: ['lead status', 'origem do lead', 'score comercial', 'responsável', 'histórico de contato'],
    status: 'ready',
  },
  {
    title: 'Agenda & Atendimento',
    description: 'Motor para reservas, disponibilidade, equipe, buffer e atendimentos no studio ou a domicílio.',
    items: ['calendário', 'bloqueios', 'regras semanais', 'artista responsável', 'status do atendimento'],
    status: 'ready',
  },
  {
    title: 'Pacotes & Orçamentos',
    description: 'Configuração de serviços, pacotes, adicionais e propostas comerciais com validade.',
    items: ['catálogo', 'pacotes', 'itens do orçamento', 'desconto', 'aprovação'],
    status: 'ready',
  },
  {
    title: 'SEO Programático',
    description: 'CRUD de páginas orgânicas, FAQs, galerias, reviews e blog com governança editorial.',
    items: ['seo pages', 'blog', 'faq', 'galeria', 'schema'],
    status: 'next',
  },
  {
    title: 'Analytics do Studio',
    description: 'Indicadores de conversão, ticket médio, origem de leads e performance orgânica.',
    items: ['dashboards', 'taxa de fechamento', 'ticket médio', 'origem', 'sazonalidade'],
    status: 'planned',
  },
];
