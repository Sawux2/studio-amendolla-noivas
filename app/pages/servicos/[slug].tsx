import React from 'react';

interface Service {
  title: string;
  description: string;
  slug: string;
  priceRange: string;
}

interface Question {
  question: string;
  answer: string;
}

interface ServicePageProps {
  service: Service;
  questions: Question[];
}

const ServicePage: React.FC<ServicePageProps> = ({ service, questions }) => {
  return (
    <div>
      <h1>{service.title}</h1>
      <p>{service.description}</p>
      <p>Preço: {service.priceRange}</p>

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
    </div>
  );
};

export default ServicePage;
