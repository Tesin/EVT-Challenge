import { Accordion, Icon } from 'semantic-ui-react';

import classes from './AccordionSection.module.css';

interface sectionProps {
  children?: JSX.Element;
  id: number;
  content: JSX.Element;
  title: string;
  isActive: number;
  onClick: (event: React.SyntheticEvent<Element, Event>) => void;
}

const AccordionSection: React.FC<sectionProps> = (props) => {
  return (
    <div>
      <Accordion.Title
        active={props.isActive == props.id}
        onClick={props.onClick}
        className={classes.sectionTitle}
      >
        <Icon name="dropdown" />
        {props.title}
      </Accordion.Title>
      <Accordion.Content
        active={props.isActive == props.id}
        className={classes.sectionText}
      >
        {props.content}
      </Accordion.Content>
    </div>
  );
};

export default AccordionSection;
