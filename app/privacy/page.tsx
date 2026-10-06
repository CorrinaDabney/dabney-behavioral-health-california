import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Notice - Dabney Behavioral Health',
  description:
    'How Dabney Behavioral Health handles information you share through our website and online forms.',
}

// DRAFT for California. Written to follow California and federal law (HIPAA, 42 CFR Part 2,
// California Confidentiality of Medical Information Act, California Online Privacy Protection Act).
// Needs review by Derrick Wilson and privacy counsel before it is published.
export default function PrivacyPage() {
  return (
    <div className="pt-20">
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 leading-relaxed text-gray-700">
        <h1 className="text-4xl font-bold text-green-900 mb-2">
          Website &amp; Online Forms Privacy Notice
        </h1>
        <p className="italic mb-6">Effective October 13, 2026</p>

        <p className="mb-4">
          Dabney Behavioral Health (“DBHHC,” “we,” “us”) respects your privacy. This notice explains how
          we handle information you share through our website and our online forms, including the{' '}
          <strong>Quick Referral</strong> and <strong>New Patient Intake</strong> forms. It supplements
          our <strong>Notice of Privacy Practices</strong>, which explains your full rights under HIPAA
          and California law and is provided to every patient at intake and on request.
        </p>

        <h2 className="text-2xl font-semibold text-green-900 mt-8 mb-3">If this is an emergency</h2>
        <p className="mb-4">
          Our online forms are <strong>not monitored around the clock</strong> and are not for
          emergencies. If you or someone else is in danger, call <strong>911</strong> or call or text{' '}
          <strong>988</strong> (Suicide &amp; Crisis Lifeline). Teens can also reach{' '}
          <strong>Teen Line at (800) 852-8336</strong> (evenings) or text <strong>HOME to 741741</strong>{' '}
          (Crisis Text Line, 24 hours).
        </p>

        <h2 className="text-2xl font-semibold text-green-900 mt-8 mb-3">What we collect</h2>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            <strong>Referral and contact information:</strong> name, date of birth, phone, email,
            address, language, and parent or guardian contact for minors.
          </li>
          <li>
            <strong>Insurance information:</strong> plan name and member or Medicaid (Medi-Cal or other)
            number, and, if you choose to upload them, pictures of your insurance card and photo ID.
          </li>
          <li>
            <strong>Information about the help you are looking for</strong>, and, on the intake form,
            health and background information you choose to share.
          </li>
          <li>
            <strong>Information about who referred you</strong>, such as an agency, school or hospital
            contact.
          </li>
        </ul>
        <p className="mb-4">
          We ask only for what we need to contact you, check your coverage, and prepare for your first
          appointment.
        </p>

        <h2 className="text-2xl font-semibold text-green-900 mt-8 mb-3">How we use it</h2>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>To contact you about the referral and schedule services.</li>
          <li>To verify insurance eligibility.</li>
          <li>To prepare your intake and treatment planning with your clinician.</li>
          <li>To meet our legal, licensing and payer requirements.</li>
        </ul>
        <p className="mb-4">
          We <strong>do not sell</strong> your information, we <strong>do not share it</strong> for
          advertising, and we do not use it for advertising.
        </p>

        <h2 className="text-2xl font-semibold text-green-900 mt-8 mb-3">Who we share it with</h2>
        <p className="mb-4">
          Information you send through our forms goes to Dabney Behavioral Health and to the service
          providers that help us run our systems, such as Microsoft (see below). We share protected
          health information with others only as HIPAA and California law allow, or with your written
          authorization.
        </p>

        <h2 className="text-2xl font-semibold text-green-900 mt-8 mb-3">How we protect it</h2>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            Our online forms are built with <strong>Microsoft Forms</strong>. Responses go directly
            into DBHHC&apos;s secure <strong>Microsoft 365</strong> environment, which Microsoft
            provides under a HIPAA Business Associate Agreement.
          </li>
          <li>
            Access is limited to the staff who need it to serve you. Clinicians see only the patients
            assigned to them.
          </li>
          <li>
            Information is transmitted over encrypted connections and kept in our protected systems,
            including our electronic health record.
          </li>
          <li>Records are retained as required by California and federal law.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-green-900 mt-8 mb-3">Special protections</h2>
        <p className="mb-4">
          Your health information is protected by the federal <strong>HIPAA</strong> privacy rules and
          by California law, including the{' '}
          <strong>California Confidentiality of Medical Information Act</strong>, which also protects
          mental health information. Substance use disorder records receive additional protection under
          federal law (<strong>42 CFR Part 2</strong>). We share protected information only as those
          laws allow, or with your written consent.
        </p>

        <h2 className="text-2xl font-semibold text-green-900 mt-8 mb-3">Email and text</h2>
        <p className="mb-4">
          Regular email and text messages are not fully secure. Please don&apos;t send detailed health
          information by regular email or text. We will contact you by phone or through our secure
          patient portal. If you ask us to use email or text, we will limit what we include.
        </p>

        <h2 className="text-2xl font-semibold text-green-900 mt-8 mb-3">
          Referrals made on someone else&apos;s behalf
        </h2>
        <p className="mb-4">
          If you are a parent, guardian, agency, school or provider referring someone, please share only
          what is needed and, when possible, let the person know about the referral.
        </p>

        <h2 className="text-2xl font-semibold text-green-900 mt-8 mb-3">Children</h2>
        <p className="mb-4">
          Referrals and intake for anyone under 18 should be completed by, or with, a parent or legal
          guardian, except where California law allows a minor to consent to their own care.
        </p>

        <h2 className="text-2xl font-semibold text-green-900 mt-8 mb-3">Website visits and Do Not Track</h2>
        <p className="mb-4">
          Like most websites, ours may record basic technical information such as your browser type and
          the pages you visit. We do not use this information to identify you. We do not use tracking
          tools on our website. Because of that, we do not track you across other websites, and a “Do
          Not Track” setting in your browser does not change anything on our site.
        </p>

        <h2 className="text-2xl font-semibold text-green-900 mt-8 mb-3">Your rights and questions</h2>
        <p className="mb-4">
          You may request a copy of our Notice of Privacy Practices, ask to see or correct your records,
          or ask questions about your privacy at any time. To review or correct information you sent
          us, contact our Privacy Officials below.
        </p>
        <p className="mb-4">
          <strong>Privacy Officials:</strong> Corrina Dabney and Derrick Wilson
          <br />
          Dabney Behavioral Health, 626 W. Lancaster Blvd. 70, Lancaster, CA 93534
          <br />
          Phone: (661) 220-9977 · Email:{' '}
          <a href="mailto:privacy@dbhhc.org" className="text-green-700 underline">
            privacy@dbhhc.org
          </a>
        </p>
        <p className="mb-4">
          If you believe your privacy rights have been violated, you may file a complaint with us or
          with the U.S. Department of Health and Human Services, Office for Civil Rights, at{' '}
          <a
            href="https://www.hhs.gov/ocr/complaints"
            className="text-green-700 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.hhs.gov/ocr/complaints
          </a>
          . We will not retaliate against you for filing a complaint.
        </p>

        <p className="text-sm text-gray-500 mt-8">
          We may update this notice. When we do, we will change the effective date above, so please check
          it from time to time.
        </p>
      </section>
    </div>
  )
}
