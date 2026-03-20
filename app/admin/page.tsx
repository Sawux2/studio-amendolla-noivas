import Link from 'next/link';
import { adminModules, adminStats } from '@/lib/admin-data';
import { siteConfig } from '@/lib/site-config';

const statusStyles = {
  ready: { label: 'Base pronta', bg: '#dcfce7', color: '#166534' },
  next: { label: 'Próxima fase', bg: '#fef3c7', color: '#92400e' },
  planned: { label: 'Planejado', bg: '#ede9fe', color: '#5b21b6' },
} as const;

export default function AdminPage() {
  return (
    <main style={{ background: '#fffaf7', minHeight: '100vh', color: '#2f1f1b' }}>
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '56px 24px 24px' }}>
        <div
          style={{
            borderRadius: 28,
            padding: 32,
            background: 'linear-gradient(135deg, #fff1eb 0%, #f8e1d9 100%)',
            boxShadow: '0 20px 60px rgba(96, 55, 44, 0.12)',
          }}
        >
          <p style={{ margin: 0, textTransform: 'uppercase', letterSpacing: 1.2, fontSize: 12, color: '#8f5b4d' }}>
            {siteConfig.name} • Painel SaaS
          </p>
          <h1 style={{ margin: '12px 0 16px', fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1 }}>
            Fundação do painel administrativo para operação comercial, agenda e SEO.
          </h1>
          <p style={{ maxWidth: 780, fontSize: 18, lineHeight: 1.7, margin: 0 }}>
            Esta primeira tela organiza a arquitetura do sistema que vamos evoluir: CRM para noivas,
            agenda operacional, catálogo de serviços, orçamentos, conteúdo orgânico e analytics do studio.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 24 }}>
            <Link
              href="/admin/seo-pages"
              style={{
                padding: '12px 18px',
                borderRadius: 999,
                background: '#ffffff',
                color: '#6f3f34',
                border: '1px solid #ead3cc',
                textDecoration: 'none',
                fontWeight: 600,
              }}
            >
              SEO pages
            </Link>
            <Link
              href="/"
              style={{
                padding: '12px 18px',
                borderRadius: 999,
                background: '#6f3f34',
                color: '#fff',
                textDecoration: 'none',
                fontWeight: 600,
              }}
            >
              Voltar para o site
            </Link>
            <span
              style={{
                padding: '12px 18px',
                borderRadius: 999,
                background: '#ffffff',
                color: '#6f3f34',
                border: '1px solid #ead3cc',
                fontWeight: 600,
              }}
            >
              Próximo passo: login + CRUD real
            </span>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '24px 24px 12px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
          {adminStats.map((stat) => (
            <article
              key={stat.label}
              style={{
                background: '#fff',
                border: '1px solid #f0dfd8',
                borderRadius: 20,
                padding: 20,
                boxShadow: '0 12px 30px rgba(96, 55, 44, 0.06)',
              }}
            >
              <p style={{ margin: 0, fontSize: 14, color: '#8f5b4d' }}>{stat.label}</p>
              <strong style={{ display: 'block', fontSize: 24, margin: '8px 0 10px' }}>{stat.value}</strong>
              <p style={{ margin: 0, lineHeight: 1.6 }}>{stat.hint}</p>
            </article>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '12px 24px 56px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 18 }}>
          {adminModules.map((module) => {
            const status = statusStyles[module.status];

            return (
              <article
                key={module.title}
                style={{
                  background: '#fff',
                  borderRadius: 24,
                  padding: 24,
                  border: '1px solid #f0dfd8',
                  boxShadow: '0 14px 34px rgba(96, 55, 44, 0.08)',
                }}
              >
                <span
                  style={{
                    display: 'inline-flex',
                    borderRadius: 999,
                    padding: '6px 12px',
                    background: status.bg,
                    color: status.color,
                    fontSize: 12,
                    fontWeight: 700,
                    marginBottom: 16,
                  }}
                >
                  {status.label}
                </span>
                <h2 style={{ margin: '0 0 12px', fontSize: 24 }}>{module.title}</h2>
                <p style={{ margin: '0 0 16px', lineHeight: 1.7 }}>{module.description}</p>
                <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.8 }}>
                  {module.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
