import styles from '../styles/Home.module.scss';
import Header from './components/Header';

export default function Home() {
  return (
    <div className="app">
      <Header classes={'primary-bg'} />
    </div>
  );
}
