import Link from 'next/link';
import { seoPageRecords } from '@/lib/seo-page-records';

const statusMap = {
  published: { label: 'Publicado', bg: '#dcfce7', color: '#166534' },
  review: { label: 'Em revisão', bg: '#fef3c7', color: '#92400e' },
  draft: { label: 'Rascunho', bg: '#ede9fe', color: '#5b21b6' },
} as const;

export default function AdminSeoPagesPage() {
  return (
    <main style={{ background: '#fffaf7', minHeight: '100vh', color: '#2f1f1b' }}>
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '48px 24px 24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
          <div>
            <p style={{ margin: 0, color: '#8f5b4d', textTransform: 'uppercase', letterSpacing: 1.2, fontSize: 12 }}>
              Admin • SEO Pages
            </p>
            <h1 style={{ margin: '12px 0 8px', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>Gestão de páginas orgânicas</h1>
            <p style={{ margin: 0, maxWidth: 760, lineHeight: 1.7 }}>
              Aqui começa o CRUD do painel SEO: visão por slug, status editorial, keyword principal e ponto de entrada
              para criação e edição de páginas orgânicas do Studio.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/admin" style={buttonSecondary}>Voltar ao painel</Link>
            <Link href="/admin/seo-pages/new" style={buttonPrimary}>Nova página SEO</Link>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px 48px' }}>
        <div style={{ overflowX: 'auto', background: '#fff', borderRadius: 24, border: '1px solid #f0dfd8', boxShadow: '0 14px 34px rgba(96, 55, 44, 0.08)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 960 }}>
            <thead>
              <tr style={{ background: '#fff4ee', textAlign: 'left' }}>
                {['Título', 'Slug', 'Categoria', 'Keyword', 'Status', 'Atualizado', 'Ações'].map((header) => (
                  <th key={header} style={thStyle}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {seoPageRecords.map((record) => {
                const status = statusMap[record.status];

                return (
                  <tr key={record.slug} style={{ borderTop: '1px solid #f4e4dd' }}>
                    <td style={tdStyle}><strong>{record.title}</strong><div style={mutedText}>{record.metaTitle}</div></td>
                    <td style={tdStyle}>{record.slug}</td>
                    <td style={tdStyle}>{record.category}</td>
                    <td style={tdStyle}>{record.primaryKeyword}</td>
                    <td style={tdStyle}><span style={{ ...pillStyle, background: status.bg, color: status.color }}>{status.label}</span></td>
                    <td style={tdStyle}>{record.updatedAt}</td>
                    <td style={tdStyle}>
                      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                        <Link href={`/admin/seo-pages/${record.slug}`} style={buttonInline}>Editar</Link>
                        <Link href={`/${record.slug}`} style={buttonInlineGhost}>Ver página</Link>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

const thStyle: React.CSSProperties = { padding: '16px 18px', fontSize: 13, color: '#7a4c40', letterSpacing: 0.2 };
const tdStyle: React.CSSProperties = { padding: '18px', verticalAlign: 'top', lineHeight: 1.6 };
const mutedText: React.CSSProperties = { color: '#8f5b4d', fontSize: 13, marginTop: 4 };
const pillStyle: React.CSSProperties = { display: 'inline-flex', padding: '6px 10px', borderRadius: 999, fontSize: 12, fontWeight: 700 };
const buttonPrimary: React.CSSProperties = { padding: '12px 18px', borderRadius: 999, background: '#6f3f34', color: '#fff', textDecoration: 'none', fontWeight: 600 };
const buttonSecondary: React.CSSProperties = { padding: '12px 18px', borderRadius: 999, background: '#fff', color: '#6f3f34', border: '1px solid #ead3cc', textDecoration: 'none', fontWeight: 600 };
const buttonInline: React.CSSProperties = { padding: '8px 12px', borderRadius: 999, background: '#6f3f34', color: '#fff', textDecoration: 'none', fontWeight: 600, fontSize: 13 };
const buttonInlineGhost: React.CSSProperties = { padding: '8px 12px', borderRadius: 999, background: '#fff', color: '#6f3f34', border: '1px solid #ead3cc', textDecoration: 'none', fontWeight: 600, fontSize: 13 };
