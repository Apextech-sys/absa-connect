import React from 'react';
import LegalPageLayout from '../components/LegalPageLayout';

const PrivacyPolicy = () => {
  const sections = [
    {
      id: 'definitions',
      title: 'Definitions',
      content: (
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-800">Cookies and Similar Technologies:</h3>
            <p className="text-gray-600">Data files and technologies that are stored on your device or browser when you visit our websites or use our services, including:</p>
            <ul className="list-disc list-inside ml-4 mt-2 text-gray-600 space-y-1">
              <li>Cookies: Small data files stored on your device</li>
              <li>Web beacons: Electronic images for tracking page views and user behavior</li>
              <li>Local storage: Data stored locally on your device</li>
              <li>Session storage: Temporary data storage during your browsing session</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800">Personal Information:</h3>
            <div className="space-y-2">
              <div>
                <p className="font-medium">Identifiable Personal Information includes:</p>
                <ul className="list-disc list-inside ml-4 text-gray-600 space-y-1">
                  <li>Full name and title</li>
                  <li>Identity or passport number</li>
                  <li>Contact information (email, phone numbers, physical address)</li>
                  <li>Financial information (credit card details, banking information)</li>
                  <li>IP addresses and device identifiers</li>
                  <li>Biometric information</li>
                  <li>Account credentials</li>
                </ul>
              </div>
              <div>
                <p className="font-medium">Non-identifiable Information includes:</p>
                <ul className="list-disc list-inside ml-4 text-gray-600 space-y-1">
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Access times and dates</li>
                  <li>Pages visited and navigation patterns</li>
                  <li>Device type and screen resolution</li>
                  <li>Language preferences</li>
                  <li>Geographic region (country/city level)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'introduction',
      title: 'Introduction',
      content: (
        <div className="space-y-4 text-gray-600">
          <p>Thank you for choosing Wondernet Pty Ltd ("Wondernet", "we", "us", "our"). We are committed to protecting your privacy and handling your personal information with transparency and care.</p>
          <p>This Privacy Policy explains:</p>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>How we collect and use your personal information</li>
            <li>Your privacy rights and choices</li>
            <li>How we protect your information</li>
            <li>Our compliance with data protection laws</li>
            <li>How to contact us about privacy matters</li>
          </ul>
        </div>
      )
    },
    {
      id: 'legal-basis',
      title: 'Legal Basis and Compliance',
      content: (
        <div className="space-y-4 text-gray-600">
          <p>We collect and process your personal information in accordance with:</p>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>Protection of Personal Information Act (POPIA)</li>
            <li>Electronic Communications and Transactions Act</li>
            <li>Regulation of Interception of Communications Act (RICA)</li>
            <li>Consumer Protection Act</li>
          </ul>
          <p className="mt-4">For RICA compliance, we are required to collect and verify certain personal information before providing our services.</p>
        </div>
      )
    },
    {
      id: 'collection-of-personal-information',
      title: 'Collection of Personal Information',
      content: (
        <div className="space-y-4 text-gray-600">
          <p>We collect personal information through:</p>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>Direct interactions:
              <ul className="list-disc list-inside ml-8">
                <li>Service applications and registrations</li>
                <li>Customer support interactions</li>
                <li>Surveys and feedback forms</li>
                <li>Newsletter subscriptions</li>
              </ul>
            </li>
            <li>Automated technologies:
              <ul className="list-disc list-inside ml-8">
                <li>Website analytics</li>
                <li>Cookie tracking</li>
                <li>Network monitoring</li>
                <li>Service usage analytics</li>
              </ul>
            </li>
            <li>Third-party sources:
              <ul className="list-disc list-inside ml-8">
                <li>Credit bureaus</li>
                <li>Public databases</li>
                <li>Marketing partners</li>
                <li>Social media platforms (when you link accounts)</li>
              </ul>
            </li>
          </ul>
        </div>
      )
    },
    {
      id: 'use-of-personal-information',
      title: 'Use of Personal Information',
      content: (
        <div className="space-y-4 text-gray-600">
          <p>We use your personal information for:</p>
          <div className="space-y-4">
            <div>
              <p className="font-medium">Service Provision:</p>
              <ul className="list-disc list-inside ml-4">
                <li>Account creation and management</li>
                <li>Service delivery and maintenance</li>
                <li>Technical support and troubleshooting</li>
                <li>Billing and payment processing</li>
                <li>Service optimization and personalization</li>
              </ul>
            </div>
            <div>
              <p className="font-medium">Communication:</p>
              <ul className="list-disc list-inside ml-4">
                <li>Service updates and notifications</li>
                <li>Marketing communications (with consent)</li>
                <li>Customer support responses</li>
                <li>Surveys and feedback requests</li>
              </ul>
            </div>
            <div>
              <p className="font-medium">Security and Compliance:</p>
              <ul className="list-disc list-inside ml-4">
                <li>Fraud prevention and detection</li>
                <li>Network security monitoring</li>
                <li>Legal compliance</li>
                <li>Audit requirements</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'data-protection-and-security',
      title: 'Data Protection and Security',
      content: (
        <div className="space-y-4 text-gray-600">
          <p>We implement comprehensive security measures including:</p>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>Technical Controls:
              <ul className="list-disc list-inside ml-8">
                <li>Encryption of data in transit and at rest</li>
                <li>Firewalls and intrusion detection systems</li>
                <li>Access control and authentication</li>
                <li>Regular security assessments and penetration testing</li>
              </ul>
            </li>
            <li>Organizational Controls:
              <ul className="list-disc list-inside ml-8">
                <li>Staff training on data protection</li>
                <li>Access restrictions and monitoring</li>
                <li>Incident response procedures</li>
                <li>Regular security audits</li>
              </ul>
            </li>
          </ul>
        </div>
      )
    },
    {
      id: 'your-privacy-rights',
      title: 'Your Privacy Rights',
      content: (
        <div className="space-y-4 text-gray-600">
          <p>You have the right to:</p>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Object to processing of your information</li>
            <li>Withdraw consent for marketing</li>
            <li>Request data portability</li>
            <li>Lodge a complaint with regulatory authorities</li>
          </ul>
          <p className="mt-4">To exercise these rights, contact our Privacy Officer at privacy@wondernet.co.za</p>
        </div>
      )
    },
    {
      id: 'third-party-sharing',
      title: 'Third-Party Sharing',
      content: (
        <div className="space-y-4 text-gray-600">
          <p>We may share your information with:</p>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>Service providers and partners who help us deliver services</li>
            <li>Payment processors for billing purposes</li>
            <li>Analytics providers to improve our services</li>
            <li>Law enforcement when legally required</li>
          </ul>
          <p>We require all third parties to respect your privacy and handle your information securely.</p>
        </div>
      )
    },
    {
      id: 'international-data-transfers',
      title: 'International Data Transfers',
      content: (
        <div className="space-y-4 text-gray-600">
          <p>When we transfer data internationally, we ensure:</p>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>Adequate data protection measures are in place</li>
            <li>Compliance with cross-border transfer regulations</li>
            <li>Implementation of standard contractual clauses</li>
            <li>Regular assessment of recipient countries' privacy laws</li>
          </ul>
        </div>
      )
    },
    {
      id: 'changes-to-privacy-policy',
      title: 'Changes to Privacy Policy',
      content: (
        <div className="space-y-4 text-gray-600">
          <p>We may update this policy to reflect:</p>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>Changes in our practices</li>
            <li>New regulatory requirements</li>
            <li>Improved privacy protections</li>
            <li>Technology advancements</li>
          </ul>
          <p>We will notify you of significant changes via email or website notice.</p>
        </div>
      )
    },
    {
      id: 'contact-information',
      title: 'Contact Information',
      content: (
        <div className="space-y-4 text-gray-600">
          <p>For privacy-related inquiries:</p>
          <ul className="list-none space-y-2">
            <li><span className="font-medium">Privacy Officer:</span> privacy@wondernet.co.za</li>
            <li><span className="font-medium">Phone:</span> +27 11 123 4567</li>
            <li><span className="font-medium">Address:</span> 60 Civin Drive, Bedfordview, Gauteng, 1501</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <LegalPageLayout
      title="Privacy Policy"
      subtitle="Your privacy is important to us. This policy explains how we collect, use, and protect your personal information."
      sections={sections}
    />
  );
};

export default PrivacyPolicy;
