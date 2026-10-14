import type { LegalDocument } from "./types";

const ghanaPrivacy: LegalDocument = {
  status: "draft",
  title: "Privacy Policy",
  country: "Ghana",
  path: "/privacy/ghana",
  description: "Privacy Policy for the Uniti app in Ghana. Draft — pending legal review.",
  lastUpdated: "Draft — pending legal review",
  intro: <em>Draft for legal review. Text in [brackets] must be filled in before publishing.</em>,
  sections: [
    {
      id: "who-we-are", heading: "1. Who we are",
      content: <>
        <p>This policy explains what information the Uniti app collects about you, why, and what choices you have. It applies to everyone who uses Uniti in Ghana.</p>
        <p>Uniti is provided by Uniti Networks Ltd, [registered address, United Kingdom] ("we", "us"). We are the data controller for your information and are registered with Ghana's Data Protection Commission, registration no. [number]. We plan to transfer this responsibility to Uniti Ghana [Ltd] once it is registered. We will tell you before that happens.</p>
        <p>Contact us about privacy: WhatsApp/SMS [number] · [privacy@...] · Data Protection Officer: [name]</p>
      </>,
    },
    {
      id: "information-we-collect", heading: "2. What information we collect",
      content: <>
        <p><em>Everything below is used to coach you. You can see it in the app under Profile.</em></p>
        <div className="legal-table" role="region" aria-label="Information we collect" tabIndex={0}><table>
          <thead><tr><th scope="col">Type</th><th scope="col">Examples</th><th scope="col">Where it comes from</th></tr></thead>
          <tbody>
            <tr><td>Account details</td><td>phone number</td><td>You, when you sign up</td></tr>
            <tr><td>KYC</td><td>Name, gender, photo</td><td>You, when you upload a picture of your Ghana Card and take a selfie</td></tr>
            <tr><td>Your goals</td><td>The goals you choose (for example saving money, finding work, learning a skill) and which one matters most to you</td><td>You, in the app</td></tr>
            <tr><td>App activity</td><td>Which screens you open, milestones you reach, messages you read</td><td>The Uniti app</td></tr>
            <tr><td>Phone usage</td><td>Which other apps you open on your phone and for how long. We only collect data from apps in the Uniti app suite.</td><td>Your phone's usage access setting, when you enable this permission.</td></tr>
            <tr><td>Device details</td><td>app version</td><td>Your phone</td></tr>
            <tr><td>Partner details</td><td>If you got your phone through a partner programme (for example MTN), a reference that links your account to that programme</td><td>The partner programme</td></tr>
          </tbody>
        </table></div>
      </>,
    },
    {
      id: "how-we-use-it", heading: "3. How we use it, and why we are allowed to",
      content: <>
        <p>As required by the Data Protection Act, 2012 (Act 843), all information collected by Uniti is used for a clear reason.</p>
        <div className="legal-table" role="region" aria-label="How we use information" tabIndex={0}><table>
          <thead><tr><th scope="col">What we do</th><th scope="col">Why</th></tr></thead>
          <tbody>
            <tr><td>Create your account and run the app</td><td>Needed to provide the service</td></tr>
            <tr><td>Send you coaching tips and reminders in the app based on your goals and activity</td><td>So we can send you tips that fit your goals (needed to provide the service); you can turn notifications off</td></tr>
            <tr><td>Use your phone usage (other apps in the Uniti suite) to suggest useful services, track progress on your goals and provide rewards</td><td>Your consent. So we can send you tips that fit your goals. You can withdraw it any time in your phone settings</td></tr>
            <tr><td>Fix problems, keep the app secure and prevent misuse</td><td>Our legitimate interest in a safe, working app</td></tr>
            <tr><td>Improve Uniti and measure whether it helps people, using combined, de-identified data</td><td>Our legitimate interest</td></tr>
            <tr><td>Share programme results with partners in a form that does not identify you</td><td>Our legitimate interest</td></tr>
            <tr><td>Meet legal duties and answer lawful requests from authorities</td><td>Legal obligation</td></tr>
          </tbody>
        </table></div>
        <p>We do not sell your personal information. We do not use it for advertising by other companies.</p>
      </>,
    },
    {
      id: "ai-coaching", heading: "4. How our AI coaching works",
      content: <>
        <p>Uniti uses artificial intelligence (AI) to choose which tip or reminder to send you and when. It looks at your goals and your activity in the apps in Uniti's suite.</p>
        <ul>
          <li>The AI only decides <strong>which message to send you</strong>. It does not make decisions about money, loans, jobs or anything else with a legal or similarly serious effect on you.</li>
          <li>Messages are written or manually checked by our team. AI can make mistakes; our tips are general guidance, not professional advice.</li>
          <li>You have the right not to be subject to decisions made only by automated means that seriously affect you. If you want a person to review how Uniti treats you, or want to stop personalised messages, contact us (section 1).</li>
        </ul>
      </>,
    },
    {
      id: "who-we-share-it-with", heading: "5. Who we share it with",
      content: <>
        <p>We share personal information only with the organizations below, and only what they need.</p>
        <ul>
          <li><strong>Service providers</strong> who run parts of Uniti for us under contract: They may only use your information to provide their service to us — not for their own purposes:
            <ul>
              <li><strong>Cloud hosting and infrastructure:</strong> Google Cloud / Firebase, Amazon Web Services (AWS), and Railway (application and database hosting).</li>
              <li><strong>AI services:</strong> OpenAI, and Google Gemini / OpenRouter (used to read and validate ID documents).</li>
              <li><strong>Messages and notifications:</strong> our SMS providers (Africa's Talking), WhatsApp (Meta), and OneSignal (push notifications).</li>
              <li><strong>Crash reporting and diagnostics:</strong> Firebase Crashlytics.</li>
            </ul>
          </li>
          <li><strong>Partner programmes</strong> (for example MTN), if you got your phone through one: only whether you joined and how actively you use Uniti, unless you agree to more.</li>
          <li><strong>App providers in our suite</strong> (de-identified): so that they can track the amount of users who discovered and engaged with their app through Uniti</li>
          <li><strong>Research partners</strong>: only if you separately agree to join a research study. You will get its own information sheet and consent form, and saying no does not affect your use of Uniti.</li>
          <li><strong>Authorities</strong>, when the law requires it.</li>
          <li><strong>A new owner</strong>, if Uniti or part of it is sold or merged. They must keep this policy or tell you about changes.</li>
        </ul>
        <p><strong>Information stored outside Ghana.</strong> Our cloud and AI providers store and process your information outside Ghana — for example, in the United States and the European Union (the Netherlands and France). We only do this where the Data Protection Act, 2012 allows it — with providers that give appropriate safeguards for your information, through contracts and strong security.</p>
      </>,
    },
    {
      id: "keeping-and-protecting", heading: "6. How long we keep it, and how we protect it",
      content: <>
        <p><strong>Keeping.</strong> We keep your information while your account is active. You can ask us to delete your account at any time by emailing [support email], and we will delete or de-identify your personal information within 7 days. We also delete or de-identify your information if you do not use Uniti for [24] months. We may keep some records longer if the law requires it.</p>
        <p><strong>Protecting.</strong> We use encryption, access controls and secure cloud hosting. Only staff and partners who need your information can see it. If a security breach puts you at risk, we will inform the Data Protection Commission as soon as reasonably practicable and inform you without unnecessary delay.</p>
        <p><strong>Children.</strong> Uniti is for people aged 18 and over. We do not knowingly collect information from children. If we learn that a child has signed up without a parent or guardian's consent, we will delete their information.</p>
      </>,
    },
    {
      id: "your-rights", heading: "7. Your rights",
      content: <>
        <p>Under Ghana's Data Protection Act, 2012 (Act 843) you can:</p>
        <ul>
          <li><strong>Be informed</strong> about how we use your information (this policy)</li>
          <li><strong>See</strong> the information we hold about you and get a copy</li>
          <li><strong>Correct</strong> information that is wrong or incomplete</li>
          <li><strong>Delete</strong> your information or your account</li>
          <li><strong>Object</strong> to us using your information for a purpose, or stop personalised messages</li>
          <li><strong>Withdraw consent</strong> you gave, such as phone usage access — this does not affect what we did before</li>
          <li><strong>Ask for a person</strong> to review a decision made only by automated means</li>
        </ul>
        <p><strong>How:</strong> message us on [WhatsApp/SMS number], email [privacy@...]. Someone you trust can also ask for you if you give them permission. We may ask you to confirm who you are. We will reply within 30 days and will not charge you.</p>
        <p><strong>Complaints.</strong> If you are not happy with our answer, you can complain to the Data Protection Commission at <a href="https://www.dataprotection.org.gh/">dataprotection.org.gh</a></p>
      </>,
    },
    {
      id: "changes-to-this-policy", heading: "8. Changes to this policy",
      content: <p>If we change this policy in a way that matters, we will tell you in the app or by SMS/WhatsApp before the change takes effect. Where the law requires, we will ask for your consent again.</p>,
    },
  ],
};

export default ghanaPrivacy;