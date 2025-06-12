import ReactLogo from 'Assets/react.svg';

const Content = () => {
  return (
    <div className='flex h-full min-h-screen flex-col justify-center px-4 text-black dark:text-white sm:items-center'>
      <div className='mb-3'>
        <div className='sm:text-center'>
          <img src={ReactLogo} width='250' className='sm:mx-auto' />
          <p className='text-4xl font-medium'>React.js + Webpack boilerplate</p>
        </div>
        <p className='sm:text-center text-sm mt-1 text-gray-600 dark:text-gray-300'>React is a JavaScript library for building user interfaces.</p>
      </div>
      <div className='flex flex-col sm:flex-row mt-4'>
        <a
          className='mb-1 sm:mb-0 sm:mr-1'
          href='https://github.com/sibiraj-s'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src='https://badgen.net/badge/github/sibiraj-s?icon&color=red' alt='Sibiraj @ Github' />
        </a>
        <a
          className='mb-1 sm:mb-0 sm:mr-1'
          href='https://github.com/sibiraj-s/react-boilerplate'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src='https://badgen.net/badge/github/react-boilerplate?icon&label' alt='react-boilerplate' />
        </a>
        <a
          href='https://github.com/sibiraj-s/react-boilerplate/blob/master/LICENSE'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src='https://badgen.net/github/license/sibiraj-s/react-boilerplate?color=green' alt='MIT' />
        </a>
      </div>
    </div>
  );
};

export default Content;
