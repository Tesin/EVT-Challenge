import classes from './DesignHeader.module.css';

const DesignHeader: React.FC = () => {
  return (
    <div className={classes.designHeader}>
      <h1>Design Process</h1>
      <p className={classes.introText}>Stuff</p>
    </div>
  );
};

export default DesignHeader;
