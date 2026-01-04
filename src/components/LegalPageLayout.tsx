import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Section {
    id: string;
    title: string;
}

interface LegalPageLayoutProps {
    title: string;
    lastUpdated: string;
    sections: Section[];
    children: React.ReactNode;
}

export function LegalPageLayout({ title, lastUpdated, sections, children }: LegalPageLayoutProps) {
    const [activeSection, setActiveSection] = useState<string>('');

    useEffect(() => {
        const handleScroll = () => {
            const sectionElements = sections.map(s => document.getElementById(s.id));
            const scrollPosition = window.scrollY + 100;

            for (let i = sectionElements.length - 1; i >= 0; i--) {
                const el = sectionElements[i];
                if (el && el.offsetTop <= scrollPosition) {
                    setActiveSection(sections[i].id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [sections]);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 80;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Simple Header */}
            <div className="bg-blue-900 text-white pt-24 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent pointer-events-none" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6"
                    >
                        {title}
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center justify-center gap-2 text-blue-100/80 text-[10px] md:text-sm uppercase tracking-widest font-medium"
                    >
                        <span>Last Updated: {lastUpdated}</span>
                        <span className="w-1 h-1 bg-orange-500 rounded-full"></span>
                        <span className="text-orange-400">Wego Travels</span>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sticky Sidebar - Table of Contents */}
                    <aside className="lg:w-1/4">
                        <div className="sticky top-24 space-y-6">
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                                <h3 className="text-sm uppercase tracking-widest font-bold text-[#0c66ab] mb-6 flex items-center gap-2">
                                    <span className="w-6 h-0.5 bg-orange-500"></span>
                                    Contents
                                </h3>
                                <nav className="space-y-1">
                                    {sections.map((section) => (
                                        <button
                                            key={section.id}
                                            onClick={() => scrollToSection(section.id)}
                                            className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all flex items-center group ${activeSection === section.id
                                                ? 'bg-orange-50 text-orange-600 border-l-4 border-orange-500'
                                                : 'text-gray-500 hover:bg-gray-50 hover:text-[#0167B2]'
                                                }`}
                                        >
                                            <ChevronRight size={14} className={`mr-2 transition-transform ${activeSection === section.id ? 'translate-x-1' : 'opacity-0'}`} />
                                            {section.title}
                                        </button>
                                    ))}
                                </nav>
                            </div>

                            <div className="bg-blue-900 rounded-2xl shadow-lg p-6 text-white overflow-hidden relative group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
                                <h4 className="font-bold mb-2 relative z-10">Need Assistance?</h4>
                                <p className="text-blue-100 text-sm mb-4 relative z-10">Our team is here to help with any legal or compliance queries.</p>
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center text-sm font-bold text-orange-400 hover:text-orange-300 transition-colors relative z-10"
                                >
                                    Contact Legal Team
                                    <ChevronRight size={16} className="ml-1" />
                                </Link>
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="lg:w-3/4">
                        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12 prose prose-slate prose-a:text-[#0c66ab] max-w-none">
                            <div className="text-gray-600 leading-relaxed space-y-8">
                                {children}
                            </div>

                            <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                                <p>Copyright © {new Date().getFullYear()} Wego Travels. All rights reserved.</p>
                                <button
                                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                    className="text-[#0c66ab] font-bold hover:text-orange-500 transition-colors"
                                >
                                    Back to Top
                                </button>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}
