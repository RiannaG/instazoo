import { CardShared } from './CardShared';

export function Main() {
  return (
    <div className='mt-3'>
      <h1 className='px-4'>
        Feed <span className='letterSpacing'>_______</span>
      </h1>
      <div className='d-flex justify-content-evenly align-items-around flex-wrap mt-5'>
        <CardShared />
        <CardShared />
        <CardShared />
        <CardShared />
        <CardShared />
      </div>
    </div>
  );
}
