import { LegalPageLayout } from '../components/LegalPageLayout';

const sections = [
    { id: 'agreement', title: '1. Agreement to Terms' },
    { id: 'services', title: '2. Our Services' },
    { id: 'bookings', title: '3. Bookings & Payments' },
    { id: 'user-conduct', title: '4. User Conduct' },
    { id: 'liability', title: '5. Limitation of Liability' },
    { id: 'governing-law', title: '6. Governing Law' },
];

export function TermsConditions() {
    return (
        <LegalPageLayout
            title="Terms & Conditions"
            lastUpdated="December 24, 2025"
            sections={sections}
        >
            <section id="agreement">
                <h2 className="text-2xl font-bold text-[#0c66ab] mb-4">1. Agreement to Terms</h2>
                <p>
                    By accessing or using Wego Travels' services, you agree to be bound by these Terms and Conditions.
                    If you do not agree with any part of these terms, you must not use our services.
                </p>
            </section>

            <section id="services">
                <h2 className="text-2xl font-bold text-[#0c66ab] mb-4">2. Our Services</h2>
                <p>
                    Wego Travels provides travel planning, booking services, and curated experiences. We act as an intermediary
                    between you and various service providers (airlines, hotels, etc.).
                </p>
            </section>

            <section id="bookings">
                <h2 className="text-2xl font-bold text-[#0c66ab] mb-4">3. Bookings & Payments</h2>
                <p>
                    All bookings are subject to availability. Payments must be made in full at the time of booking unless
                    otherwise specified. Prices are subject to change without notice until a booking is confirmed.
                </p>
            </section>

            <section id="user-conduct">
                <h2 className="text-2xl font-bold text-[#0c66ab] mb-4">4. User Conduct</h2>
                <p>
                    Users agree to provide accurate information and use our services only for lawful purposes.
                    Any misuse or fraudulent activity will result in immediate termination of services.
                </p>
            </section>

            <section id="liability">
                <h2 className="text-2xl font-bold text-[#0c66ab] mb-4">5. Limitation of Liability</h2>
                <p>
                    Wego Travels is not liable for any direct, indirect, or consequential damages resulting from
                    your use of our services or the services of our third-party providers.
                </p>
            </section>

            <section id="governing-law">
                <h2 className="text-2xl font-bold text-[#0c66ab] mb-4">6. Governing Law</h2>
                <p>
                    These terms are governed by and construed in accordance with the laws of the jurisdiction
                    in which Wego Travels operates. Any disputes will be resolved in the appropriate courts.
                </p>
            </section>
        </LegalPageLayout>
    );
}
