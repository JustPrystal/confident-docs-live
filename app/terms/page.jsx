import { getTerm } from "@/functions/get-terms";
import styles from "./styles.module.scss";

import GlobalLayout from "../global-layout";
import Terms from "@/components/terms/terms";
export const metadata = {
  title: "Terms & Conditions - Confident AI",
  description:
    "Companies of all sizes use Confident AI to justify why their LLM applications - RAG, Agents, or Chatbots, deserves to be in production.",
  metadataBase: "https://confident-ai.com",
  openGraph: {
    title: "Terms & Conditions - Confident AI",
    description:
      "Companies of all sizes use Confident AI to justify why their LLM applications - RAG, Agents, or Chatbots, deserves to be in production.",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions - Confident AI",
    description:
      "Companies of all sizes use Confident AI to justify why their LLM applications - RAG, Agents, or Chatbots, deserves to be in production.",
  },
};

export default async function HomePage() {
  const term = await getTerm("terms-of-service");
  return (
    <>
      <GlobalLayout staticHeader={true}>
        <div className={`${styles.termsOfService}`}>
          <div className={styles.inner}>
            <Terms term={term} />
          </div>
        </div>
      </GlobalLayout>
    </>
  );
}
