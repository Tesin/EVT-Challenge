import Head from 'next/head';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import { useState } from 'react';
import url from 'url';

import { Menu } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';

const inter = Inter({ subsets: ['latin'] });

const Home: React.FC = () => {
  const [activeItem, setActiveItem] = useState('home');

  const handleItemClick = (
    event: React.SyntheticEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    const target = event.target as HTMLAnchorElement;
    const parsedUrl = url.parse(target.href);
    const menuItem = parsedUrl.pathname?.replace(/^\/+/, '');
    setActiveItem(menuItem as string);
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
        <Menu pointing secondary className="navBar">
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
      </main>
    </>
  );
};

export default Home;
