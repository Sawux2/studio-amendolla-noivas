// pages/sobre.tsx
import SEO from '../components/seo/SEO';
import Schema from '../components/schema/Schema';

const SobrePage = () => {
  const pageTitle = "Sobre o Studio Amendolla Noivas";
  const pageDescription = "Saiba mais sobre o Studio Amendolla Noivas, especialista em maquiagem e penteados para noivas em São Paulo.";
  const pageUrl = "https://studioamendollanoiva.com.br/sobre";
  const pageKeywords = "studio amendolla, maquiagem, penteado, salão de beleza, noivas";
  
  return (
    <>
      <SEO
        title={pageTitle}
        description={pageDescription}
        keywords={pageKeywords}
        url={pageUrl}
      />
      <Schema
        type="BeautySalon"
        name="Studio Amendolla Noivas"
        description={pageDescription}
        url={pageUrl}
        address={{
          streetAddress: "Avenida Julio Buono, 2386",
          addressLocality: "Vila Gustavo",
          addressRegion: "SP",
          postalCode: "02201-002",
          addressCountry: "BR",
        }}
        telephone="+5511977670498"
        openingHours="Mo-Sa 09:00-18:00"
        sameAs={[
          "https://instagram.com/seu-perfil-de-instagram",
          "https://facebook.com/seu-perfil-de-facebook",
        ]}
      />
      <h1>{pageTitle}</h1>
      <p>{pageDescription}</p>
    </>
  );
};

export default SobrePage;
