import React, { useEffect, useRef } from 'react';
import useStore from '../store';
import { MdArrowBack } from 'react-icons/md';

const Case1 = () => {
  const ref = useRef();

  const view = useStore((state) => state.view);
  const goBack = useStore((state) => state.goBack);

  const title = 'Beresford Design';

  const description = `
John Beresford is a multidisciplinary designer and developer based in California. \
He crafts creative web experiences using a synthesis of 3D design and web UI/UX fundamentals. \
Companies and individuals alike can stand out amongst the crowd with bespoke digital experiences from Beresford Design.
`;

  return (
    <div
      id='case1'
      className={`caseStudy ${view === 'caseStudy1' ? 'in' : 'out'}`}
      ref={ref}
    >
      <div className='head'>
        <div className='wrap' onClick={goBack}>
          <MdArrowBack size={'2.5rem'} />
          <h3>Go Back</h3>
        </div>
      </div>
      <main>
        <h1>{title}</h1>
        <h3>{description}</h3>
      </main>
    </div>
  );
};

export default Case1;
