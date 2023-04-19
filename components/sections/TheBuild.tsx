import Link from 'next/link';
import { Icon } from 'semantic-ui-react';

const TheBuild: React.FC = () => {
  return (
    <div>
      <ul className="list">
        <li>
          <p>I try to use Harness where I can.</p>
        </li>
        <li>
          <p>
            I have Harness building this repo via triggered webhook on push.
            Every push to every branch gets built and the resulting artifact
            image gets pushed to{' '}
            <Link
              href="https://hub.docker.com/repository/docker/tesin/evt-challenge/general"
              target="_blank"
            >
              DockerHub
              <Icon className="popoutLink" name="external alternate" />
            </Link>
          </p>
        </li>
        <li>
          <p>
            I was able to leverage an official NextJS Dockerfile for my
            purposes. Upon inspection, it&apos;s following best practices by
            using build stages that leave the unnecessary bits behind, leaving a
            very small image (~83 MiB presently) that has a minimal attack
            surface.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default TheBuild;
