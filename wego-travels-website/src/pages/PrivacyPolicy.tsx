import { LegalPageLayout } from '../components/LegalPageLayout';

const sections = [
    { id: 'introduction', title: '1. Introduction' },
    { id: 'data-collection', title: '2. Data Collection' },
    { id: 'data-usage', title: '3. Data Usage' },
    { id: 'data-protection', title: '4. Data Protection' },
    { id: 'your-rights', title: '5. Your Rights' },
    { id: 'cookies', title: '6. Cookies Policy' },
    { id: 'updates', title: '7. Policy Updates' },
];

export function PrivacyPolicy() {
    return (
        <LegalPageLayout
            title="Privacy Policy"
            lastUpdated="December 24, 2025"
            sections={sections}
        >
            <section id="introduction">
                <h2 className="text-2xl font-bold text-[#0167B2] mb-4">1. Introduction</h2>
                <p>
                    Welcome to Wego Travels. We value your privacy and are committed to protecting your personal data.
                    This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website
                    or use our travel services.
                </p>
            </section>

            <section id="data-collection">
                <h2 className="text-2xl font-bold text-[#0167B2] mb-4">2. Data Collection</h2>
                <p>
                    We collect information that you provide directly to us, such as your name, email address, phone number,
                    and payment details when you book a trip or subscribe to our newsletter. We also automatically collect
                    certain technical data like your IP address and browsing behavior via cookies.
                </p>
            </section>

            <section id="data-usage">
                <h2 className="text-2xl font-bold text-[#0167B2] mb-4">3. Data Usage</h2>
                <p>
                    Your data is used to process bookings, provide customer support, personalize your travel experiences,
                    and send you relevant updates. We do not sell your personal information to third parties.
                </p>
            </section>

            <section id="data-protection">
                <h2 className="text-2xl font-bold text-[#0167B2] mb-4">4. Data Protection</h2>
                <p>
                    We implement advanced security measures to protect your data from unauthorized access, alteration,
                    or disclosure. This includes industry-standard encryption and regular security audits.
                </p>
            </section>

            <section id="your-rights">
                <h2 className="text-2xl font-bold text-[#0167B2] mb-4">5. Your Rights</h2>
                <p>
                    You have the right to access, correct, or delete your personal data. You can also object to
                    certain types of data processing or request a copy of your information in a portable format.
                </p>
            </section>

            <section id="cookies">
                <h2 className="text-2xl font-bold text-[#0167B2] mb-4">6. Cookies Policy</h2>
                <p>
                    Our website uses cookies to enhance your browsing experience. Cookies help us understand how
                    visitors interact with our site and allow us to remember your preferences for future visits.
                </p>
            </section>

            <section id="updates">
                <h2 className="text-2xl font-bold text-[#0167B2] mb-4">7. Policy Updates</h2>
                <p>
                    We may update this Privacy Policy from time to time to reflect changes in our practices or
                    legal requirements. We will notify you of any significant changes by posting the new policy
                    on this page.
                </p>
            </section>
        </LegalPageLayout>
    );
}
