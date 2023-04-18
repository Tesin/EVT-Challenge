import { useState } from 'react';

import { Accordion, Container, Icon } from 'semantic-ui-react';
import AccordionSection from './AccordionSection';
import DesignHeader from './DesignHeader';

import classes from './ReadMe.module.css';

interface sectionType {
  title: string;
  content: string;
}

const ReadMe: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState('Test');

  const sections: sectionType[] = [
    {
      title: 'Test',
      content: 'yeah',
    },
    {
      title: 'Item 2',
      content: 'aoweufh',
    },
    {
      title: 'Stuff',
      content: 'aoruehgow2u4th',
    },
  ];

  return (
    <Container>
      <DesignHeader />
      <Accordion fluid styled className={`box-shadow ${classes.accordion}`}>
        {sections.map((section) => {
          return (
            <AccordionSection
              key={section.title}
              content={section.content}
              title={section.title}
              isActive={activeIndex}
            />
          );
        })}
      </Accordion>
    </Container>
  );
};

export default ReadMe;
