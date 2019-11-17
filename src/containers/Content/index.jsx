import React from 'react';

import ReactLogo from 'Assets/react.svg';

function Content () {
  return (
    <div className='h-full min-h-screen flex flex-col justify-center sm:items-center px-4'>
      <div className='mb-3'>
        <div className='text-center'>
          <img src={ReactLogo} width='250' className='mx-auto' />
          <p className='text-4xl font-medium'>React.js + Webpack boilerplate</p>
        </div>
        <p className='sm:text-center'>React is a JavaScript library for building user interfaces.</p>
      </div>
      <div>
        <a
          className='block mb-1 mr-1 sm:inline-block sm:mb-0'
          href='https://github.com/sibiraj-s'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src='https://badgen.net/badge/github/sibiraj-s?icon&color=red' alt='Sibiraj @ Github' />
        </a>
        <a
          className='block mb-1 mr-1 sm:inline-block sm:mb-0'
          href='https://github.com/sibiraj-s/react-boilerplate'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src='https://badgen.net/badge/github/react-boilerplate?icon&label' alt='react-boilerplate' />
        </a>
        <a
          className='block mb-1 sm:inline-block sm:mb-0'
          href='https://github.com/sibiraj-s/react-boilerplate/blob/master/LICENSE'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src='https://badgen.net/github/license/sibiraj-s/react-boilerplate?color=green' alt='MIT' />
        </a>
      </div>
    </div>
  );
}

export default Content;
