import Head from "next/head";
import { Header } from "../components/Header";
import { Links } from "../components/Links";
import { Footer } from "../components/Footer";
import { ScrollTop } from "../components/ScrollTop";
import { CV } from "../components/CV";
import { Description, Section, Title } from "../styles/styles";
import { PageSection } from "../styles/resume";
import { BsFileText } from "react-icons/bs";

export default function Resume() {
  const resumeData = "http://localhost:3000/pdf/emilharjula.pdf";

  const previewData = `${resumeData.substr(
    0,
    resumeData.lastIndexOf("/") + 1
  )}view?embed`;

  return (
    <>
      <Head>
        <title>Resume | Emil Harjula </title>
        <meta
          name="description"
          content="Aqui você poderá ver ou baixar o meu currículo."
        />
        <meta property="og:title" content="Resume | Emil Harjula" />
        <meta
          property="og:description"
          content="Aqui você poderá ver ou baixar o meu currículo."
        />
      </Head>

      <Header />
      <Links />
      <ScrollTop />
      <Section>
        <Title>
          Resume
          <span>
            <BsFileText /> Resume
          </span>
        </Title>
        <Description>Here you can view or download my resume. </Description>
    
        <PageSection>
          <iframe
            src={resumeData}
            allowFullScreen
            width="1360"
            height="768"
            title="Emil Harjula"
          />

          <CV />
        </PageSection>
      </Section>
      <Footer />
    </>
  );
}
