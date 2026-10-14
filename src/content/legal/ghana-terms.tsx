import { Link } from "react-router-dom";
import type { LegalDocument } from "./types";

const ghanaTerms: LegalDocument = {
  status: "draft",
  title: "Terms and Conditions",
  country: "Ghana",
  path: "/terms/ghana",
  description: "Terms and Conditions for the Uniti app in Ghana. Draft — pending legal review.",
  lastUpdated: "Draft — pending legal review",
  intro: <em>Draft for legal review. Text in [brackets] must be filled in before publishing.</em>,
  sections: [
    {
      id: "about-these-terms", heading: "1. About these terms",
      content: <>
        <p>These terms are the agreement between you and Uniti Networks Ltd, [registered address, United Kingdom] ("we", "us"), for using the Uniti app. By creating an account or using the app, you agree to them. If you do not agree, please do not use Uniti. We plan to transfer this agreement to Uniti Ghana [Ltd] once it is registered. We will tell you before that happens.</p>
        <p>Our <Link to="/privacy/ghana">Privacy Policy</Link> explains what information we collect and how we use it. It is part of these terms.</p>
      </>,
    },
    {
      id: "who-can-use-brand", heading: "2. Who can use Uniti",
      content: <ul>
        <li>You must be <strong>18 or older</strong> and live in Ghana.</li>
        <li>One account per person. Do not use someone else's account or phone number.</li>
        <li>Keep your phone and PIN safe. You are responsible for what happens on your account.</li>
        <li>Tell us if you think someone else is using your account.</li>
      </ul>,
    },
    {
      id: "checking-your-identity", heading: "3. Checking your identity",
      content: <>
        <p>To keep Uniti safe and to pay rewards to the right person, we ask you to upload a photo of your Ghana Card when you sign up.</p>
        <ul>
          <li>The ID must be real and must be yours.</li>
          <li>If you use a false ID or someone else's ID, we may close your account and cancel any rewards.</li>
          <li>Our Privacy Policy explains how we protect your ID details.</li>
        </ul>
      </>,
    },
    {
      id: "what-brand-does", heading: "4. What Uniti does and does not do",
      content: <>
        <p>Uniti helps you set goals, learn to use your smartphone, and find useful apps and services in the Uniti app suite. It sends you tips and reminders, chosen with the help of artificial intelligence (AI).</p>
        <ul>
          <li><strong>Our tips are general guidance.</strong> They are not financial, legal, medical or professional advice. Think carefully before acting on them, and ask a qualified person for important decisions.</li>
          <li><strong>AI can make mistakes.</strong> If a message seems wrong or unhelpful, ignore it and tell us.</li>
          <li><strong>Other apps and services.</strong> Apps in the suite and other services we suggest (for example mobile money apps or learning apps) may be run by other companies. Their own terms and privacy policies apply, and any agreement you make with them is between you and them.</li>
          <li>We may change, add or remove features to improve Uniti.</li>
        </ul>
      </>,
    },
    {
      id: "rewards", heading: "5. Rewards",
      content: <ul>
        <li>You can earn rewards when you reach certain milestones in Uniti, such as "verifying your phone number", "downloading all your priority apps" or "using a priority app for three consecutive weeks". The milestones and rewards available to you are shown in the app.</li>
        <li>Rewards are paid as <strong>mobile money (for example MTN MoMo)</strong> or <strong>data bundles</strong>. We send them to the phone number on your account. For mobile money, the name on the mobile money account must match your ID. We aim to pay within [7] days of you reaching a milestone.</li>
        <li>Each milestone can only be rewarded once.</li>
        <li>Rewards are for genuine use only. If we find cheating — such as fake activity, more than one account, or using someone else's ID — we may cancel rewards and close the account.</li>
        <li>Rewards are available while the program runs and may depend on available funds. We may change or end the rewards programme. If we do, we will tell you at least [14] days before, and we will still pay rewards you have already earned.</li>
        <li>You are responsible for any tax on rewards, if it applies.</li>
      </ul>,
    },
    {
      id: "using-brand-fairly", heading: "6. Using Uniti fairly",
      content: <>
        <p>When you use Uniti, please do not:</p>
        <ul>
          <li>Break the law, or use Uniti to cheat, threaten, harass or harm anyone</li>
          <li>Try to hack, copy, take apart or overload the app, or use bots, fake accounts or fake activity</li>
          <li>Pretend to be someone else, including our staff</li>
        </ul>
        <p>If you do, we may warn you, pause your rewards, or close your account (see section 10).</p>
      </>,
    },
    {
      id: "costs", heading: "7. Costs",
      content: <ul>
        <li>Uniti is free to download and use.</li>
        <li>Using Uniti uses mobile data, charged by your network provider. Receiving our SMS messages is free. If you contact us by SMS or WhatsApp, your network's normal SMS or data rates apply. To save data, use Wi-Fi when you can. Rewards may include data bundles to help cover your Uniti usage.</li>
        <li>If you got your phone through a partner programme (for example MTN), your phone and any payment plan are covered by your agreement with that partner, not by these terms. Uniti does not decide whether you get a phone or a loan.</li>
      </ul>,
    },
    {
      id: "who-owns-what", heading: "8. Who owns what",
      content: <ul>
        <li>The Uniti app, its name, design, content and technology belong to us or to the companies that license them to us. We give you a personal, free, non-transferable permission to use the app on your phone while you follow these terms.</li>
        <li>What you write to us — your goals, messages and feedback — stays yours. You allow us to use it to run and improve Uniti, as explained in the Privacy Policy.</li>
        <li>If you send us ideas or suggestions, we may use them without paying you.</li>
      </ul>,
    },
    {
      id: "our-responsibility", heading: "9. Our responsibility to you",
      content: <ul>
        <li>We work hard to keep Uniti running and useful, but we provide it <strong>"as is"</strong>. We cannot promise it will always be available or error-free, or that its tips will guarantee that you reach your goals.</li>
        <li>We are not responsible for losses caused by other companies' apps or services, your network provider, or decisions you make based on our general tips.</li>
        <li>Where the law allows, our total responsibility to you for any claim is limited to [GHS amount].</li>
        <li><strong>Nothing in these terms takes away your rights under Ghanaian law</strong>, or limits our responsibility for death or injury caused by our negligence, or for fraud.</li>
      </ul>,
    },
    {
      id: "closing-changes-complaints", heading: "10. Closing your account, changes, and complaints",
      content: <>
        <p><strong>Closing your account.</strong> You can stop using Uniti and ask us to delete your account at any time by messaging us on WhatsApp/SMS [number]. We may pause or close your account if you seriously or repeatedly break these terms, or if the law requires it. Where possible, we will tell you why first. If we stop offering Uniti in Ghana, we will give you at least [30] days' notice and pay rewards you have already earned.</p>
        <p><strong>Changes to these terms.</strong> If we make important changes, we will tell you in the app or by SMS/WhatsApp before they take effect. If you keep using Uniti after that, the new terms apply.</p>
        <p><strong>Questions and complaints.</strong> Please contact us first: WhatsApp/SMS [number] · [support@...]. We aim to reply within [14] days. For privacy complaints, you can also contact the Data Protection Commission (<a href="https://www.dataprotection.org.gh/">dataprotection.org.gh</a>).</p>
        <p><strong>Which law applies.</strong> These terms are governed by the laws of Ghana, and the courts of Ghana decide any disputes.</p>
      </>,
    },
  ],
};

export default ghanaTerms;