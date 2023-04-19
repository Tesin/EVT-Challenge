import Link from 'next/link';
import classes from './DesignHeader.module.css';
import { Icon } from 'semantic-ui-react';

const DesignHeader: React.FC = () => {
  return (
    <div className={classes.designHeader}>
      <h1 className={classes.title}>Design Decisions</h1>
      <p className={classes.introText}>
        When I first read the assignment there was one aspect that really stood
        out to me:
      </p>
      <div className={classes.blockquoteContainer}>
        <blockquote className={`box-shadow ${classes.blockquote}`}>
          Producing a fully automated deployment mechanism for any application
          assumes a huge number of things, particularly how the dev team will be
          interacting with this thing. <p className={classes.author}>- Me</p>
        </blockquote>
      </div>
      <div className={classes.introText}>
        <p>
          So the first decision I made was to make an actual application because
          infrastructure decisions are based on 2 questions:
          <ul className={classes.list}>
            <li>
              What does the team need immediately to either get started or
              unblock their current state?
            </li>
            <li>What end state do we want to end up in?</li>
          </ul>
          It&apos;s fine to implement a thing in the short term as long as it
          doesn&apos;t inordinately impede the long term goals. The biggest set
          of mistakes I see from organizations is a rush to execute in an
          attempt to be &quot;agile&quot;; however, the decisions they made
          early on are immensely difficult to change once it&apos;s serving live
          traffic. Once the train leaves the station you have to be able to
          upgrade said train while it&apos;s moving down the tracks... oh, btw,
          you have 500 meters of track left and you have to keep building that
          as well, otherwise the train will derail.
        </p>
        <p>
          Since I am most familiar with{' '}
          <Link href="https://nextjs.org/" target="_blank">
            NextJS
            <Icon className="popoutLink" name="external alternate" />
          </Link>
          , that is what I decided to use. I am also of the opinion that
          it&apos;s the right long-term choice as well. For speedy results, it
          generally makes sense for a team or individual to go with what they
          know. If a fundamentally different language/stack/technology should be
          in play for the long term, the transition should be planned for or at
          the very least given a little bit of thought to try and foresee any
          blockers or outright showstoppers. Most things are a trade-off. Do you
          want to experience more implementation pain/slowdown up front or down
          the line?
        </p>
        <p>
          For these reasons, I wanted to grow the architecture organically, so
          to speak. I started with prototype code and made sure it was
          deployable. Then I added many features to the app using{' '}
          <Link
            href="https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow"
            target="_blank"
          >
            Simple Feature Branching
            <Icon className="popoutLink" name="external alternate" />
          </Link>
          , approving my own Pull Requests along the way. I made sure to keep
          the git history clean with a linear graph.
        </p>
      </div>
    </div>
  );
};

export default DesignHeader;
