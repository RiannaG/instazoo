import { FooterShared } from '../components/FooterShared';
import { HeaderShared } from '../components/HeaderShared';
import { Main } from '../components/Main';

export function Homepage() {
  return (
    <div>
      <HeaderShared />
      <Main />
      <FooterShared />
    </div>
  );
}
