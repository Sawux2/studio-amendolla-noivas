import Link from 'next/link';

export default function NewSeoPagePage() {
  return (
    <main style={{ background: '#fffaf7', minHeight: '100vh', color: '#2f1f1b' }}>
      <section style={{ maxWidth: 980, margin: '0 auto', padding: '48px 24px 56px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
          <div>
            <p style={{ margin: 0, color: '#8f5b4d', textTransform: 'uppercase', letterSpacing: 1.2, fontSize: 12 }}>
              Admin • SEO Pages • Nova
            </p>
            <h1 style={{ margin: '12px 0 8px', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>Criar página SEO</h1>
            <p style={{ margin: 0, lineHeight: 1.7, maxWidth: 720 }}>
              Esta é a primeira estrutura do formulário do CRUD. Na próxima etapa vou conectar esses campos ao banco e às
              ações do servidor para salvar, editar e publicar páginas diretamente pelo painel.
            </p>
          </div>
          <Link href="/admin/seo-pages" style={buttonSecondary}>Voltar à listagem</Link>
        </div>

        <form style={{ marginTop: 28, display: 'grid', gap: 18 }}>
          <div style={cardStyle}>
            <h2 style={sectionTitle}>Identidade da página</h2>
            <div style={gridStyle}>
              <Field label="Título da página" placeholder="Ex.: Dia da Noiva Zona Norte" />
              <Field label="Slug" placeholder="dia-da-noiva-zona-norte" />
              <Field label="Keyword principal" placeholder="dia da noiva zona norte" />
              <Field label="Categoria" placeholder="service | location | article" />
            </div>
          </div>

          <div style={cardStyle}>
            <h2 style={sectionTitle}>SEO</h2>
            <div style={gridStyle}>
              <Field label="Meta title" placeholder="Meta title otimizado" fullWidth />
              <Field label="Meta description" placeholder="Descrição com intenção comercial + SEO" fullWidth />
              <Field label="Canonical URL" placeholder="https://studio-amendolla-noivas.vercel.app/slug" fullWidth />
            </div>
          </div>

          <div style={cardStyle}>
            <h2 style={sectionTitle}>Conteúdo & conversão</h2>
            <div style={gridStyle}>
              <Field label="Hero title" placeholder="Título principal da landing" fullWidth />
              <Field label="Hero description" placeholder="Resumo comercial da página" fullWidth />
              <Field label="FAQ JSON / conteúdo" placeholder="Na próxima etapa isso vira editor + FAQ builder" fullWidth multiline />
            </div>
          </div>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <button type="button" style={buttonPrimary}>Salvar rascunho (próxima etapa)</button>
            <button type="button" style={buttonSecondary}>Publicar (próxima etapa)</button>
          </div>
        </form>
      </section>
    </main>
  );
}

function Field({ label, placeholder, fullWidth = false, multiline = false }: { label: string; placeholder: string; fullWidth?: boolean; multiline?: boolean; }) {
  return (
    <label style={{ display: 'grid', gap: 8, gridColumn: fullWidth ? '1 / -1' : undefined }}>
      <span style={{ fontWeight: 600 }}>{label}</span>
      {multiline ? (
        <textarea placeholder={placeholder} rows={6} style={inputStyle} />
      ) : (
        <input placeholder={placeholder} style={inputStyle} />
      )}
    </label>
  );
}

const gridStyle: React.CSSProperties = { display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' };
const cardStyle: React.CSSProperties = { background: '#fff', borderRadius: 24, padding: 24, border: '1px solid #f0dfd8', boxShadow: '0 14px 34px rgba(96, 55, 44, 0.08)' };
const sectionTitle: React.CSSProperties = { margin: '0 0 18px', fontSize: 22 };
const inputStyle: React.CSSProperties = { width: '100%', padding: '14px 16px', borderRadius: 16, border: '1px solid #e9d5cf', background: '#fffdfc', font: 'inherit', color: '#2f1f1b' };
const buttonPrimary: React.CSSProperties = { padding: '12px 18px', borderRadius: 999, background: '#6f3f34', color: '#fff', border: 'none', fontWeight: 600, cursor: 'pointer' };
const buttonSecondary: React.CSSProperties = { padding: '12px 18px', borderRadius: 999, background: '#fff', color: '#6f3f34', border: '1px solid #ead3cc', textDecoration: 'none', fontWeight: 600, cursor: 'pointer' };
