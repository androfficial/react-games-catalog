import ContentLoader from 'react-content-loader';

const Skeleton = (props: any) => {
  return (
    <ContentLoader
      speed={2}
      width={328}
      height={333}
      viewBox='0 0 328 333'
      backgroundColor='#191c20c7'
      foregroundColor='#31567aba'
      {...props}
    >
      <circle cx='10' cy='20' r='8' />
      <rect x='25' y='15' rx='5' ry='5' width='220' height='10' />
      <circle cx='10' cy='50' r='8' />
      <rect x='25' y='45' rx='5' ry='5' width='220' height='10' />
      <circle cx='10' cy='80' r='8' />
      <rect x='25' y='75' rx='5' ry='5' width='220' height='10' />
      <circle cx='10' cy='110' r='8' />
      <rect x='25' y='105' rx='5' ry='5' width='220' height='10' />
      <rect x='0' y='0' rx='4' ry='4' width='328' height='333' />
    </ContentLoader>
  );
};

export default Skeleton;
