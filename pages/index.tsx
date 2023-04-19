import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import { useState } from 'react';
import url from 'url';

import { Menu } from 'semantic-ui-react';
import Splash from '@/components/Splash';
import ReadMe from '@/components/ReadMe';

import 'semantic-ui-css/semantic.min.css';
import { pageProps } from '@/types/pageProps';
import { NextPage } from 'next';

const inter = Inter({ subsets: ['latin'] });

const Home: NextPage = () => {
  const [activeItem, setActiveItem] = useState<string>('home');

  const handleItemClick = (
    event: React.SyntheticEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    const target = event.target as HTMLAnchorElement;
    const parsedUrl = url.parse(target.href);
    const menuItem = parsedUrl.pathname?.replace(/^\/+/, '');
    setActiveItem(menuItem as string);
  };

  const content = ({ children }: pageProps): React.ReactNode => {
    if (activeItem == 'home') {
      return <Splash />;
    }

    return <ReadMe />;
  };

  return (
    <>
      <Head>
        <title>EVT Challenge</title>
        <meta
          name="description"
          content="EVT Challenge response by Sean Brooks"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="navBar">
          <Image
            src="/evt-logo.png"
            width={300}
            height={75}
            alt="EVT Logo"
            className="logo"
            priority
          />
          <Menu pointing secondary className="navBar__menu">
            <Menu.Item
              as={Link}
              href="home"
              name="home"
              active={activeItem === 'home'}
              onClick={handleItemClick.bind('home')}
            />
            <Menu.Item
              name="README"
              as={Link}
              href="readme"
              active={activeItem === 'readme'}
              onClick={handleItemClick.bind('readme')}
            />
          </Menu>
        </div>
        {content({ children: null })}
      </main>
    </>
  );
};

export default Home;
