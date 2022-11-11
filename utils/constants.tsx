import About from '../pages/components/About';
import Contact from '../pages/components/Contact';
import Experience from '../pages/components/Experience';
import Header from '../pages/components/Header';
import Services from '../pages/components/Services';
import Works from '../pages/components/Works';
import { SectionsEnums } from './enums';
import { Section, Header as HeaderTypes } from './types';

export const HI_WORDS: string[] = ['Hi,', 'Ciao,', 'Здравеи,', 'Hallo,', 'Hola,', 'Bonjour', 'こんにちは,'];

export const MENU_SECTION: Section[] = [
  {
    id: 0,
    label: SectionsEnums.Header,
    componentwithparams: ({ activeMenuLinkId, setActiveMenuLinkId, onMenuLink }) => (
      <Header activeMenuLinkId={activeMenuLinkId} setActiveMenuLinkId={setActiveMenuLinkId} onMenuLink={onMenuLink} />
    ),
  },
  { id: 1, label: SectionsEnums.About, component: <About /> },
  { id: 2, label: SectionsEnums.Services, component: <Services /> },
  { id: 3, label: SectionsEnums.Works, component: <Works /> },
  { id: 4, label: SectionsEnums.Experience, component: <Experience /> },
  { id: 5, label: SectionsEnums.Contact, component: <Contact /> },
];
