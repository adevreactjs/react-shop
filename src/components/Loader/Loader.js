import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = props => (
  <ContentLoader
    speed={2}
    width={150}
    height={265}
    viewBox='0 0 150 265'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
    {...props}>
    <rect x='0' y='0' rx='10' ry='10' width='150' height='98' />
    <rect x='1' y='108' rx='3' ry='3' width='150' height='27' />
    <rect x='1' y='151' rx='8' ry='8' width='42' height='15' />
    <rect x='0' y='173' rx='8' ry='8' width='80' height='15' />
    <rect x='118' y='155' rx='8' ry='8' width='32' height='32' />
  </ContentLoader>
);

export default MyLoader;
