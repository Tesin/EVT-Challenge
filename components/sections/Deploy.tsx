import Link from 'next/link';
import { Icon } from 'semantic-ui-react';

const Deploy: React.FC = () => {
  return (
    <div>
      <ul className="list">
        <li>
          <Link href="https://helm.sh/" target="_blank">
            Helm
            <Icon className="popoutLink" name="external alternate" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Deploy;
