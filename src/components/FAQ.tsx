import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "How does Bozzarella handle complex orders?",
      answer: "Our AI is trained to handle multi-item orders, special requests, and modifications with ease. It can clarify details with customers and ensure order accuracy through natural conversation."
    },
    {
      question: "What happens if the AI doesn't understand a customer?",
      answer: "If the AI encounters any difficulties understanding the customer, it will politely ask for clarification. In rare cases where communication becomes challenging, the call can be seamlessly transferred to your staff."
    },
    {
      question: "How does Bozzarella integrate with existing POS systems?",
      answer: "Bozzarella is designed to integrate with most major POS systems. During onboarding, we'll work with you to ensure smooth integration with your existing setup."
    },
    {
      question: "Is there a contract or minimum commitment?",
      answer: "No long-term contracts required. You can start with our flexible monthly plans and adjust or cancel as needed."
    },
    {
      question: "How long does it take to set up Bozzarella?",
      answer: "Most restaurants are up and running within 1-2 business days. This includes system integration, menu setup, and customization of the AI's responses to match your restaurant's style."
    },
    {
      question: "What about data security and privacy?",
      answer: "We take security seriously. All customer data is encrypted, and we comply with industry standards for data protection. We never share or sell customer information."
    }
  ];

  return (
    <section className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about Bozzarella and how it can help your restaurant
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-dark-lighter border border-gray-800 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};