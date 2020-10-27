import React from 'react';
import MasonryComponent from 'react-masonry-component';
import MasonryCss from 'react-masonry-css';

const IMAGES = [
  'https://res.cloudinary.com/influenxio/image/upload/v1603784141/posting.product.photos/dcrex1k0yxnln2vpop2s.jpg',
  'https://res.cloudinary.com/influenxio/image/upload/v1603782816/posting.product.photos/kgvujdt9bnbghrff1rdh.jpg',
  'https://res.cloudinary.com/influenxio/image/upload/v1603739795/posting.product.photos/nfdvteo8bngx2wtr5jeh.jpg',
  'https://res.cloudinary.com/influenxio/image/upload/v1603728604/posting.product.photos/t0fbh3yy2g0q4ajhsku6.jpg',
  'https://res.cloudinary.com/influenxio/image/upload/v1603728527/posting.product.photos/irbnkmkheayrlkwrgodv.jpg',
  'https://res.cloudinary.com/influenxio/image/upload/v1603723070/posting.product.photos/bxyy6bovnzduonf2pkll.jpg',
  'https://res.cloudinary.com/influenxio/image/upload/v1603720491/posting.product.photos/zrdqlpgaixftzyzb7uqf.jpg',
  'https://res.cloudinary.com/influenxio/image/upload/v1603701269/posting.product.photos/todftrmhcftndr7h4svu.jpg',
  'https://res.cloudinary.com/influenxio/image/upload/v1603704983/posting.product.photos/mcb1zgu0rahkmeaxnzvq.jpg',
  'https://res.cloudinary.com/influenxio/image/upload/v1603704859/posting.product.photos/p1zr608u75vpy0ifz6qt.jpg',
  'https://res.cloudinary.com/influenxio/image/upload/v1603695694/posting.product.photos/rjybtdajnikun3vw5dhv.jpg',
  'https://res.cloudinary.com/influenxio/image/upload/v1603689204/posting.product.photos/pfjm8j7iwehdvf24e5n1.jpg',
  'https://res.cloudinary.com/influenxio/image/upload/v1603685130/posting.product.photos/edase66ne8cdteplo0is.jpg',
  'https://res.cloudinary.com/influenxio/image/upload/v1603681966/posting.product.photos/euzordqfubfdk8ecz8ye.jpg',
  'https://res.cloudinary.com/influenxio/image/upload/v1603678887/posting.product.photos/b2jtabgvrfofw6mvkhxr.jpg',
  'https://res.cloudinary.com/influenxio/image/upload/v1603662642/posting.product.photos/b3bnnvoajinongjg9jmk.jpg',
  'https://res.cloudinary.com/influenxio/image/upload/v1603653845/posting.product.photos/ly6eyonvtqdijx7c2pi7.jpg',
  'https://res.cloudinary.com/influenxio/image/upload/v1603649019/posting.product.photos/ytosddu9xh4pgsfggpld.jpg',
  'https://res.cloudinary.com/influenxio/image/upload/v1603647097/posting.product.photos/l3qscdheh12ddluoq7gc.jpg',
];

const SCALED_IMAGES = (w = 320) => [...IMAGES, ...IMAGES, ...IMAGES].map((img, index) => ({
  src: img.replace('/upload/', `/upload/w_${w},c_limit/`),
  key: index,
}));

// https://www.npmjs.com/package/react-masonry-component
// last publish 2 years ago
// 9kb
function ReactMasonryComponentDemo() {
  return (
    <MasonryComponent options={{
      // gutter: 24,
      fitWidth: true,
    }}
    style={{ width: 920, margin: 'auto' }}>
      {SCALED_IMAGES().map(img => (
        // <div key={img.key}>
          <img key={img.key} src={img.src} style={{ maxWidth: '100%' }} />
        // </div>
      ))}
    </MasonryComponent>
  );
}

// https://www.npmjs.com/package/react-masonry-css
// last publish 1 year ago
// 6kb
// styling with css
function MasonryCssDemo() {
  const breakpointColumnsObj = {
    default: 5,
    1440: 4,
    1024: 3,
    640: 2,
    375: 1
  };
  return (
    <MasonryCss
      breakpointCols={breakpointColumnsObj}
      className="ixio-masonry-grid"
      columnClassName="ixio-masonry-grid-column"
    >
      {SCALED_IMAGES(640).map(img => (
        <div key={img.key} className="ixio-masonry-grid-item">
          <img src={img.src} style={{ width: '100%', display: 'block' }} />
        </div>
      ))}
    </MasonryCss>
  );
}

export default function MasonryDemo() {
  return (
    <MasonryCssDemo />
  );
}
