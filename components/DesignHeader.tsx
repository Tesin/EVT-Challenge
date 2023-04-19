import classes from './DesignHeader.module.css';

const DesignHeader: React.FC = () => {
  return (
    <div className={classes.designHeader}>
      <h1 className={classes.title}>Design Decisions</h1>
      <p className={classes.introText}>
        When I first read the assignment there was one aspect that really stood
        out to me:
      </p>
      <div className={classes.blockquoteContainer}>
        <blockquote className={classes.blockquote}>
          Producing a fully automated deployment mechanism for any application
          assumes a huge number of things, particularly how the dev team will be
          interacting with this thing. <p className={classes.author}>- Me</p>
        </blockquote>
      </div>
      <div className={classes.introText}>
        <p>
          So the first decision I made was to make an actual application
          because:
          <ul>
            <li>hi</li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default DesignHeader;
