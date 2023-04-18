import { useState } from 'react';
import { Accordion, Icon } from 'semantic-ui-react';

import classes from './AccordionSection.module.css';

interface sectionProps {
  children?: JSX.Element;
  content: string;
  isActive: string;
  title: string;
}

const AccordionSection: React.FC<sectionProps> = (props) => {
  const [isActive, setIsActive] = useState(props.isActive);

  return (
    <div>
      <Accordion.Title active={isActive == props.title}>
        <Icon name="dropdown" />
        {props.title}
      </Accordion.Title>
      <Accordion.Content active={isActive == props.title}>
        {props.content}
      </Accordion.Content>
    </div>
  );
};

export default AccordionSection;
