import { type } from 'os';
import { ReactElement } from 'react';
import About from '../pages/components/About';
import Contact from '../pages/components/Contact';
import Experience from '../pages/components/Experience';
import Services from '../pages/components/Services';
import Works from '../pages/components/Works';
import { Section } from './types';

export const HI_WORDS: string[] = ['Hi,', 'Ciao,', 'Здравеи,', 'Hallo,', 'Hola,', 'Bonjour', 'こんにちは,'];

export const MENU_SECTION: Section[] = [
  { id: 1, label: 'About', component: <About /> },
  { id: 2, label: 'Services', component: <Services /> },
  { id: 3, label: 'Works', component: <Works /> },
  { id: 4, label: 'Experience', component: <Experience /> },
  { id: 6, label: 'Contact', component: <Contact /> },
];
