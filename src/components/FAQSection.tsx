import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
  title?: string;
}

export default function FAQSection({ faqs, title = 'Frequently Asked Questions' }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="card p-6 sm:p-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-gradient-to-br from-fifa-blue-500 to-fifa-blue-600 rounded-xl">
          <HelpCircle className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white">{title}</h2>
      </div>

      {/* FAQ Items */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-2 border-gray-700/50 rounded-xl overflow-hidden hover:border-fifa-blue-500/50 transition-colors"
          >
            {/* Question */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between p-4 sm:p-5 bg-gray-800/50 hover:bg-gray-800 transition-colors text-left"
              aria-expanded={openIndex === index}
            >
              <span className="text-base sm:text-lg font-semibold text-white pr-4">
                {faq.question}
              </span>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-fifa-blue-400 flex-shrink-0" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
              )}
            </button>

            {/* Answer */}
            {openIndex === index && (
              <div className="p-4 sm:p-5 bg-gray-900/30 border-t-2 border-gray-700/50 animate-fade-in">
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Schema.org structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map(faq => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer
              }
            }))
          })
        }}
      />
    </div>
  );
}

