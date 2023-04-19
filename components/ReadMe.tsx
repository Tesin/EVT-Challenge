import { useState } from 'react';
import { Accordion, Container, Icon } from 'semantic-ui-react';

import AccordionSection from './AccordionSection';
import DesignHeader from './DesignHeader';
import Infrastructure from './sections/Infrastructure';

import classes from './ReadMe.module.css';
import TheBuild from './sections/TheBuild';
import WebApp from './sections/WebApp';
import Deploy from './sections/Deploy';

interface sectionType {
  id: number;
  title: string;
  content: JSX.Element;
}

const ReadMe: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const sections: sectionType[] = [
    {
      id: 0,
      title: 'Infrastructure',
      content: <Infrastructure />,
    },
    {
      id: 1,
      title: 'The Build',
      content: <TheBuild />,
    },
    {
      id: 2,
      title: 'The Web App',
      content: <WebApp />,
    },
    {
      id: 3,
      title: 'The Deploy',
      content: <Deploy />,
    },
  ];

  const onClickHandler = (
    event: React.SyntheticEvent<Element, Event>,
    sectionId: number
  ) => {
    setActiveIndex(sectionId);
  };

  return (
    <Container>
      <DesignHeader />
      <Accordion fluid styled className={`box-shadow ${classes.accordion}`}>
        {sections.map((section) => {
          return (
            <AccordionSection
              key={section.id}
              id={section.id}
              content={section.content}
              title={section.title}
              isActive={activeIndex}
              onClick={(event) => onClickHandler(event, section.id)}
            />
          );
        })}
      </Accordion>
    </Container>
  );
};

export default ReadMe;
