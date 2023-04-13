import dynamic from 'next/dynamic';

const Splash: React.FC = () => {
  const genRandomTree = (N = 300, reverse = false) => {
    return {
      nodes: [...Array(N).keys()].map((i) => ({ id: i })),
      links: [...Array(N).keys()]
        .filter((id) => id)
        .map((id) => ({
          [reverse ? 'target' : 'source']: id,
          [reverse ? 'source' : 'target']: Math.round(Math.random() * (id - 1)),
        })),
    };
  };

  const NoSSRForceGraph = dynamic(() => import('./Graph'), {
    ssr: false,
  });

  return (
    <div className="contentContainer">
      <NoSSRForceGraph graphData={genRandomTree()} />
    </div>
  );
};

export default Splash;
