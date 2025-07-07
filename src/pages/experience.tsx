import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import experiences from "../data/experiences";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Work } from "../components/Work";
import { Links } from "../components/Links";
import { ScrollTop } from "../components/ScrollTop";
import { Educations } from "../components/Educations";
import { Section, Title, Description } from "../styles/styles";
import { TabButton, TabContent, TabsContainer } from "../styles/experience";
import { Briefcase } from "phosphor-react";

export default function Experience() {
  const [tabIndex, setTabIndex] = useState(0);
  let numbering = 0;

  return (
    <>
      <Head>
        <title>Experience | Emil Harjula </title>
        <meta
          name="description"
          content="Minha experiência como desenvolvedor web."
        />
        <meta property="og:title" content="Experience | Emil Harjula" />
        <meta
          property="og:description"
          content="Minha experiência como desenvolvedor web."
        />
      </Head>

      <Header />
      <Links />
      <ScrollTop />
      <Section>
        <Title>
          Experience
          <span>
            <Briefcase /> Experience
          </span>
        </Title>

        <Description>
          I am passionate about creating interactive and functional interfaces,
          always seeking to improve my skills and learn new technologies. I am
          always open to new challenges and challenging projects.
        </Description>

        <TabsContainer>
          <Tabs
            className="tabs"
            selectedIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
            selectedTabClassName={"is-active"}
            selectedTabPanelClassName={"is-active"}
          >
            <TabButton>
              <TabList className="tab__list">
                {experiences.map((experience, index) => {
                  if (experience.id) {
                    numbering += 1;
                    return (
                      <div key={index}>
                        <h2 key={experience.id}>
                          {numbering >= 0 && numbering <= 10
                            ? `0${numbering - 1}`
                            : `${numbering - 1}`}
                        </h2>
                        <Tab className="tab">
                          <button>{experience.title}</button>
                        </Tab>
                      </div>
                    );
                  }
                })}
              </TabList>
            </TabButton>

            <TabContent>
              {experiences.map((experience) => {
                return (
                  <TabPanel className="tab__panel" key={experience.id}>
                    <div className="title-container">
                      <div className="title-content">
                        <div>
                          <img src={experience.img} alt={experience.title} />
                        </div>
                        <div className="title">
                          <h1>{experience.title}</h1>
                          <div className="sub"></div>
                          <h2>{experience.subTitle}</h2>
                        </div>
                      </div>
                      <div className="office">
                        <h3>{experience.office}</h3>
                        <h4>{experience.date}</h4>
                      </div>
                    </div>
                    <ul>
                      {experience.descriptions.map((descriptioin: string, index: number) => (
                        <li
                          style={{
                            lineHeight: "25px",
                            letterSpacing: "0.5px",
                            listStyleType: "disc",
                          }}
                          key={index}
                        >
                          {descriptioin}
                        </li>
                      ))}
                    </ul>
                    <div className="techs">
                      <h3>Techs:</h3>
                      <ul>
                        {experience.tags.map((tag) => (
                          <div className="tags" key={tag.name}>
                            <Image
                              width={50}
                              height={45}
                              src={tag.icon}
                              alt={tag.name}
                            />
                            <h4>{tag.name}</h4>
                          </div>
                        ))}
                      </ul>
                    </div>
                  </TabPanel>
                );
              })}
            </TabContent>
          </Tabs>
        </TabsContainer>

        {/* <Work /> */}
        {/* <Educations /> */}
      </Section>
      <Footer />
    </>
  );
}
