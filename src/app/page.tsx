'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import Image from "next/image";
import ClientOnly from './components/ClientOnly';

// Use no-SSR for the TokenGate to avoid hydration issues
const TokenGate = dynamic(
  () => import('./components/TokenGate'),
  { 
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--gold)]"></div>
      </div>
    )
  }
);

export default function Home() {
  return (
    <ClientOnly
      fallback={
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--gold)]"></div>
        </div>
      }
    >
      <div className="min-h-screen bg-[var(--cream)] dark:bg-[var(--navy)] text-[var(--charcoal)] dark:text-[var(--cream)]">
        <TokenGate>
          <div className="container mx-auto px-4 py-12">
            {/* Hero Section */}
            <header className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--navy)] dark:text-[var(--cream)]">
                Welcome to the <span className="text-[var(--gold)]">Alternative Communities Report</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-[var(--slate)] dark:text-[var(--cream)] max-w-3xl mx-auto">
                Get access to the latest insights on what is going on in the world 😊
              </p>
              <div className="w-24 h-1 bg-[var(--gold)] mx-auto mb-8"></div>
            </header>

            {/* Main Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Featured Report Card */}
              <div className="card bg-white dark:bg-[var(--charcoal)] border border-[var(--slate)] hover:shadow-lg transition-shadow duration-300">
                <h2 className="text-2xl font-semibold mb-4 text-[var(--navy)] dark:text-[var(--gold)]">
                  Featured Insight
                </h2>
                <p className="text-[var(--charcoal)] dark:text-[var(--cream)] mb-4">
                  Our latest analysis on regenerative economic models shows promising trends in community-driven initiatives.
                </p>
                <div className="bg-[var(--sage)] bg-opacity-10 p-4 rounded-md border-l-4 border-[var(--sage)] mb-4">
                  <p className="italic text-[var(--slate)] dark:text-[var(--cream)]">
                    "Alternative economic structures are proving resilient in the face of systemic challenges."
                  </p>
                </div>
                <button className="btn-primary bg-[var(--navy)] text-white">
                  Read Full Report
                </button>
              </div>

              {/* Membership Benefits */}
              <div className="card bg-white dark:bg-[var(--charcoal)] border border-[var(--slate)] hover:shadow-lg transition-shadow duration-300">
                <h2 className="text-2xl font-semibold mb-4 text-[var(--navy)] dark:text-[var(--gold)]">
                  Member Benefits
                </h2>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-[var(--gold)] mr-2">✓</span>
                    <span>Exclusive in-depth analysis on alternative economic systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--gold)] mr-2">✓</span>
                    <span>Monthly insights on regenerative agriculture and community initiatives</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--gold)] mr-2">✓</span>
                    <span>Access to our community forum and expert Q&A sessions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--gold)] mr-2">✓</span>
                    <span>Quarterly deep dives into emerging sustainable technologies</span>
                  </li>
                </ul>
                <p className="text-sm text-[var(--slate)] dark:text-[var(--cream)] italic mb-4">
                  Your membership supports independent research and reporting
                </p>
              </div>
            </div>

            {/* Topics Section */}
            <section className="mb-16">
              <h2 className="section-title text-center text-[var(--navy)] dark:text-[var(--gold)]">
                Topics We Cover
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {topics.map((topic, index) => (
                  <div key={index} className="p-6 bg-white dark:bg-[var(--charcoal)] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-[var(--sage)]">
                    <h3 className="font-bold mb-2 text-[var(--navy)] dark:text-[var(--gold)]">{topic.title}</h3>
                    <p className="text-[var(--slate)] dark:text-[var(--cream)]">{topic.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Newsletter Section */}
            <section className="bg-[var(--navy)] text-[var(--cream)] p-8 rounded-lg mb-16">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl font-semibold mb-4 text-[var(--gold)]">
                  Stay Informed
                </h2>
                <p className="mb-6">
                  Join our weekly newsletter for a summary of key developments and emerging trends.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="px-4 py-2 rounded-md text-[var(--charcoal)] flex-grow max-w-md"
                  />
                  <button className="btn-secondary bg-[var(--gold)] text-[var(--navy)] hover:opacity-90">
                    Subscribe
                  </button>
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer className="text-center text-[var(--slate)] dark:text-[var(--cream)]">
              <p>© 2024 Alternative Communities Report. All rights reserved.</p>
              <div className="mt-4 flex justify-center space-x-4">
                <a href="#" className="text-[var(--navy)] dark:text-[var(--gold)] hover:opacity-80">Terms</a>
                <a href="#" className="text-[var(--navy)] dark:text-[var(--gold)] hover:opacity-80">Privacy</a>
                <a href="#" className="text-[var(--navy)] dark:text-[var(--gold)] hover:opacity-80">Contact</a>
              </div>
            </footer>
          </div>
        </TokenGate>
      </div>
    </ClientOnly>
  );
}

const topics = [
  {
    title: "Regenerative Agriculture",
    description: "Sustainable farming practices that work with natural ecosystems to improve soil health and biodiversity."
  },
  {
    title: "Community Currencies",
    description: "Alternative economic systems that enable communities to build resilience and local prosperity."
  },
  {
    title: "Decentralized Governance",
    description: "New models for collective decision-making and resource allocation beyond traditional structures."
  },
  {
    title: "Sustainable Technology",
    description: "Innovations that address environmental challenges while meeting human needs."
  },
  {
    title: "Social Impact Metrics",
    description: "Frameworks for measuring the real-world effects of community initiatives beyond financial returns."
  },
  {
    title: "Knowledge Commons",
    description: "Collaborative approaches to creating and sharing information as a public good."
  }
];