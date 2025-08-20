import { getTerm } from "@/functions/get-terms"; 
import styles from "./styles.module.scss";

import GlobalLayout from "@/app/global-layout";
import TermsContent from '@/components/Terms/Terms';

export const metadata = {
  title: "Privacy Policy",
  description: "Companies of all sizes use Confident AI to justify why their LLM applications - RAG, Agents, or Chatbots, deserves to be in production.",
  metadataBase: "https://confident-ai.com",
  openGraph: {
    title: "Privacy Policy",
    description: "Companies of all sizes use Confident AI to justify why their LLM applications - RAG, Agents, or Chatbots, deserves to be in production.",
    locale: "en_US",
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Privacy Policy",
    description: "Companies of all sizes use Confident AI to justify why their LLM applications - RAG, Agents, or Chatbots, deserves to be in production.",
  },
};

export default async function HomePage() {
  const term = await getTerm("privacy-policy");
  return (
    <>
      <GlobalLayout staticHeader={true}>
        <div className={`${styles.privacyPolicy}`}>
          <div className={styles.inner}>
              <TermsContent term={term} />
          </div>
        </div>
      </GlobalLayout>
    </>
  );
}
