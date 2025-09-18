'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What wallet do I need?",
    answer: "Any Ethereum-compatible wallet like MetaMask, Coinbase Wallet, or WalletConnect-supported wallets work. The book is purchased on Optimism network for low gas fees."
  },
  {
    question: "How do I access the book after purchase?",
    answer: "Once you own the NFT, you'll automatically gain access to the full PDF reader. Your access is tied to your wallet address and is permanent."
  },
  {
    question: "What's included in the 1-hour session?",
    answer: "Every book purchaser gets a free 60-minute consultation with Eric to discuss the book's concepts, ask questions, or explore how to apply the frameworks to your specific situation."
  },
  {
    question: "Can I get a refund?",
    answer: "Due to the digital nature of NFTs and immediate access to content, all sales are final. However, reach out if you're experiencing technical issues."
  },
  {
    question: "Will there be future holder benefits?",
    answer: "NFT holders may receive access to future content, community features, or special events, though specific benefits aren't guaranteed."
  }
];

export default function FAQAccordion() {
  return (
    <div className="max-w-3xl mx-auto">
      <Accordion type="multiple" className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-xl overflow-hidden">
            <AccordionTrigger className="px-6 py-4 text-left hover:bg-muted/50 transition-colors duration-200 [&[data-state=open]>svg]:rotate-180">
              <span className="font-semibold text-foreground">{faq.question}</span>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4">
              <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}