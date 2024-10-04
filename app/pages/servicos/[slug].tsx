import React from 'react';
import SEO from '../../components/seo/SEO';
import Schema from '../../components/schema/Schema';
import BreadcrumbSchema from '../../components/schema/BreadcrumbSchema';

interface Service {
    title: string;
    description: string;
    keywords: string;
    slug: string;
    priceRange: string;
    image?: string;
}

interface Question {
    question: string;
    answer: string;
}

interface Breadcrumb {
    name: string;
    url: string;
}

interface ServicePageProps {
    service: Service;
    questions: Question[];
    breadcrumbs: Breadcrumb[];
}

const ServicePage: React.FC<ServicePageProps> = ({ service, questions, breadcrumbs }) => {
    return (
        <>
            <SEO
                title={service.title}
                description={service.description}
                keywords={service.keywords}
                url={`https://www.studioamendollanoivas.com.br/servicos/${service.slug}`}
            />
            <Schema
                type="Service"
                name={service.title}
                description={service.description}
                url={`https://www.studioamendollanoivas.com.br/servicos/${service.slug}`}
                priceRange={service.priceRange}
                image={service.image}
            />
            <BreadcrumbSchema breadcrumbs={breadcrumbs} />

            {/* Exibindo as perguntas e respostas */}
            {questions.length > 0 && (
                <div>
                    <h2>Perguntas Frequentes</h2>
                    <ul>
                        {questions.map((q, index) => (
                            <li key={index}>
                                <strong>{q.question}</strong>: {q.answer}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
};

export default ServicePage;
