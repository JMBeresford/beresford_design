import React, { useRef } from 'react';
import useStore from '../store';
import { MdArrowBack } from 'react-icons/md';
import logo from '../../../images/logo_transparent.png';

const Case1 = () => {
  const ref = useRef();

  const view = useStore((state) => state.view);
  const goBack = useStore((state) => state.goBack);

  const title = 'Beresford Design';

  const description = `
John Beresford is a multidisciplinary designer and developer based in California. \
He develops creative web experiences using a synthesis of 3D design and web UI/UX fundamentals. \
Companies and individuals alike can stand out amongst the crowd with bespoke digital experiences from Beresford Design.
`;

  const link = 'http://beresford_design.com/';
  const github = 'http://github.com/JMBeresford/beresford_design/';
  const caseStudy = null;

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
        <img src={logo} alt='beresford design logo' className='logo' />
        <div className='links'>
          <a href={link} className={link ? '' : 'disabled'}>
            Live Project
          </a>
          <a href={github}>Source Code</a>
          <a href={caseStudy} className={caseStudy ? '' : 'disabled'}>
            Case Study
          </a>
        </div>
      </main>
    </div>
  );
};

export default Case1;
