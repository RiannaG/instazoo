export const FooterShared = () => {
  return (
    <div className='footer d-flex justify-content-between align-items-center workSans'>
      <div>
        <span>InstaZoo © Copyrights 2022 </span>
      </div>
      <div className='d-flex justify-content-between gap-4 px-2'>
        <span className='workSans fs-5'>
          <strong>Made with</strong> &hearts;{' '}
        </span>
        <span className='workSans fs-5'>Giuseppe Rianna</span>
        <span className='workSans fs-5'>Giovanni Russo</span>
        <span className='workSans fs-5'>Francesco Caramagno</span>
        <span className='workSans fs-5'>Daniele Canale</span>
      </div>
    </div>
  );
};
