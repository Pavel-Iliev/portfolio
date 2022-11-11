import { type } from 'os';
import { ReactElement } from 'react';
import About from '../pages/components/About';
import Contact from '../pages/components/Contact';
import Experience from '../pages/components/Experience';
import Header from '../pages/components/Header';
import Services from '../pages/components/Services';
import Works from '../pages/components/Works';
import { Section, Header as HeaderTypes } from './types';

export const HI_WORDS: string[] = ['Hi,', 'Ciao,', 'Здравеи,', 'Hallo,', 'Hola,', 'Bonjour', 'こんにちは,'];

export const MENU_SECTION: Section[] = [
  {
    id: 0,
    label: 'Header',
    componentwithparams: ({ activeMenuLinkId, setActiveMenuLinkId, onMenuLink }) => (
      <Header activeMenuLinkId={activeMenuLinkId} setActiveMenuLinkId={setActiveMenuLinkId} onMenuLink={onMenuLink} />
    ),
  },
  { id: 1, label: 'About', component: <About /> },
  { id: 2, label: 'Services', component: <Services /> },
  { id: 3, label: 'Works', component: <Works /> },
  { id: 4, label: 'Experience', component: <Experience /> },
  { id: 5, label: 'Contact', component: <Contact /> },
];
