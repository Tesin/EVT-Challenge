import Link from 'next/link';
import { Icon } from 'semantic-ui-react';

const Infrastructure: React.FC = () => {
  return (
    <div>
      <ul className="list">
        <li>Kubernetes. Nuff said.</li>
        <li>
          <p>
            Since i&apos;m most familar with AWS, my plan was to spawn an EKS
            cluster via Terraform as I already had some code written that I
            could leverage. I ran into some administrative problems with my AWS
            account and spending there wasn&apos;t an option. The ubiquity of
            Kubernetes means that I should be able to take my pick of cloud as
            long as they offer k8s.
          </p>
          <li>
            <p>
              I wanted to try IBM cloud because I heard you can just get a free
              k8s cluster; you just have to respawn it every month. Their signup
              process bugged out on me and then they wouldn&apos;t accept my
              Discover card to pay for their free account, so I abandoned them.
            </p>
          </li>
          <li>
            <p>
              I googled around and found{' '}
              <Link href="https://www.vultr.com/" target="_blank">
                Vultr
                <Icon className="popoutLink" name="external alternate" />
              </Link>
              , cheap and easy k8s clusters and they also have a Terraform
              provider, Bingo!
            </p>
            <p>
              I tried out their Terraform provider and ran into bugs along with
              a lack of meaningful error messages. It was when I found myself
              trying to enable TRACE log output for Terraform CLI as an
              escalation when DEBUG output didn&apos;t provide what I needed
              when I realized there was a better way.
            </p>
            <p>
              At that point I was already in their API documentation... which
              was refreshingly simple... so I wrote some Bash scripts to hit
              their API for the purposes of creating and destroying clusters. I
              wrapped those scripts in Harness pipelines and voila, I cobbled
              together an alternative to Terraform.
            </p>
          </li>
        </li>
      </ul>
    </div>
  );
};

export default Infrastructure;
