import Link from 'next/link';
import { Icon } from 'semantic-ui-react';

const WebApp: React.FC = () => {
  return (
    <div>
      <ul className="list">
        <li>
          Server Side Rendering mixed with pre-rendering offers great
          performance and is critical for SEO.
        </li>
        <li>
          I opt into leveraging TypeScript because type safety is like having a
          whole test suite within the app itself that prevents bugs which would
          otherwise eat up QA&apos;s time.
        </li>
        <li>
          I could have used NextJS&apos;s routing capabilities, but this app is
          simple enough that I rolled my own menu &quot;router&quot; via
          standard React conditional rendering. It afforded me the opportunity
          to gain more experience with using proper types for React Events.
        </li>
        <li>
          Getting the 3D graph to render took some research. NextJS pre-renders
          by default, which is problematic for libraries that reference objects
          not available, like{' '}
          <Link
            href="https://developer.mozilla.org/en-US/docs/Web/API/Window"
            target="_blank"
          >
            Window
            <Icon className="popoutLink" name="external alternate" />
          </Link>
          . This forced me to get more familiar with NextJS&apos;{' '}
          <Link
            href="https://nextjs.org/docs/advanced-features/dynamic-import"
            target="_blank"
          >
            Dynamic Import
            <Icon className="popoutLink" name="external alternate" />
          </Link>{' '}
          features.
        </li>
        <li>
          I still haven&apos;t gotten around to learning{' '}
          <Link href="https://www.cypress.io/" target="_blank">
            Cypress
            <Icon className="popoutLink" name="external alternate" />
          </Link>{' '}
          so no test framework, unfortunately, but at least it&apos;s on my
          radar!
        </li>
      </ul>
    </div>
  );
};

export default WebApp;
