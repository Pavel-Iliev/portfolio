import { createRef, RefObject, useEffect, useState } from 'react';
import { InView } from 'react-intersection-observer';
import styles from '../styles/Home.module.scss';
import { MENU_SECTION } from '../utils/constants';
import Chuck from './components/Chuck';

export default function Home() {
  const [activeMenuLinkId, setActiveMenuLinkId] = useState(0);
  const [scroll, setScroll] = useState(0);

  type MapRefs = {
    [id: string]: RefObject<HTMLElement>;
  };

  const mapRefs: MapRefs = {};
  MENU_SECTION.forEach((section) => (mapRefs[section.label] = createRef<HTMLElement>()));

  function onMenuLink(name: string) {
    mapRefs[name].current?.scrollIntoView({
      behavior: 'smooth',
    });
  }

  useEffect(() => {
    const handleScroll = () => {
      setScroll((prev) => window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="app">
      {MENU_SECTION &&
        MENU_SECTION.map((section) => {
          return (
            <InView
              key={section.id}
              threshold={0.5}
              onChange={(inView) => {
                inView ? setActiveMenuLinkId(section.id) : '';
              }}
            >
              <section
                ref={mapRefs[section.label]}
                className={`${styles.wrap__section} ${section.id % 2 === 0 ? 'primary-bg' : 'secondary-bg'}`}
              >
                {section.id === 0
                  ? section.componentwithparams &&
                    section.componentwithparams({ activeMenuLinkId, setActiveMenuLinkId, onMenuLink })
                  : section.component}
              </section>
            </InView>
          );
        })}
      <Chuck scroll={scroll} />
    </div>
  );
}
