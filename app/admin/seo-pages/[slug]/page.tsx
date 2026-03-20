import Link from 'next/link';
import { notFound } from 'next/navigation';
import { findSeoPageRecord } from '@/lib/seo-page-records';

export default async function SeoPageDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const record = findSeoPageRecord(slug);

  if (!record) {
    notFound();
  }

  return (
    <main style={{ background: '#fffaf7', minHeight: '100vh', color: '#2f1f1b' }}>
      <section style={{ maxWidth: 980, margin: '0 auto', padding: '48px 24px 56px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
          <div>
            <p style={{ margin: 0, color: '#8f5b4d', textTransform: 'uppercase', letterSpacing: 1.2, fontSize: 12 }}>
              Admin • SEO Pages • Editar
            </p>
            <h1 style={{ margin: '12px 0 8px', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>{record.title}</h1>
            <p style={{ margin: 0, lineHeight: 1.7, maxWidth: 720 }}>
              Tela inicial de edição da página orgânica. Na próxima etapa, vou transformar isso em formulário persistido no banco.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/admin/seo-pages" style={buttonSecondary}>Voltar à listagem</Link>
            <Link href={`/${record.slug}`} style={buttonPrimary}>Abrir página pública</Link>
          </div>
        </div>

        <div style={{ marginTop: 28, display: 'grid', gap: 18 }}>
          <section style={cardStyle}>
            <h2 style={sectionTitle}>Resumo editorial</h2>
            <dl style={{ margin: 0, display: 'grid', gap: 14 }}>
              <MetaRow label="Slug" value={record.slug} />
              <MetaRow label="Status" value={record.status} />
              <MetaRow label="Categoria" value={record.category} />
              <MetaRow label="Keyword principal" value={record.primaryKeyword} />
              <MetaRow label="Meta title" value={record.metaTitle} />
              <MetaRow label="Meta description" value={record.metaDescription} />
              <MetaRow label="Última atualização" value={record.updatedAt} />
            </dl>
          </section>

          <section style={cardStyle}>
            <h2 style={sectionTitle}>Próximas ações do CRUD</h2>
            <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.9 }}>
              <li>Salvar no banco com Prisma e Server Actions.</li>
              <li>Gerar preview do schema JSON-LD e metadata.</li>
              <li>Versionar publicação, revisão e rascunho.</li>
              <li>Amarrar FAQ, imagens, CTA e links internos por página.</li>
            </ul>
          </section>
        </div>
      </section>
    </main>
  );
}

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ display: 'grid', gap: 4 }}>
      <dt style={{ color: '#8f5b4d', fontSize: 13, textTransform: 'uppercase', letterSpacing: 0.5 }}>{label}</dt>
      <dd style={{ margin: 0, fontWeight: 600 }}>{value}</dd>
    </div>
  );
}

const cardStyle: React.CSSProperties = { background: '#fff', borderRadius: 24, padding: 24, border: '1px solid #f0dfd8', boxShadow: '0 14px 34px rgba(96, 55, 44, 0.08)' };
const sectionTitle: React.CSSProperties = { margin: '0 0 18px', fontSize: 22 };
const buttonPrimary: React.CSSProperties = { padding: '12px 18px', borderRadius: 999, background: '#6f3f34', color: '#fff', textDecoration: 'none', fontWeight: 600 };
const buttonSecondary: React.CSSProperties = { padding: '12px 18px', borderRadius: 999, background: '#fff', color: '#6f3f34', border: '1px solid #ead3cc', textDecoration: 'none', fontWeight: 600 };
