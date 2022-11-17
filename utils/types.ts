import { ReactElement, ReactNode } from 'react';

export type Header = {
  activeMenuLinkId: number;
  setActiveMenuLinkId: (value: number) => void;
  onMenuLink: (value: string) => void;
};

export type NavBarTypes = {
  activeMenuLinkId: number;
  setActiveMenuLinkId: (value: number) => void;
  onMenuLink: (value: string) => void;
};

export type Section = {
  id: number;
  label: string;
  component?: ReactElement;
  componentwithparams?: (value: Header) => ReactElement;
  icon?: ReactNode;
};

export type Social = {
  id: number;
  label: string;
  link: string;
  icon: ReactNode;
};

export type Skill = {
  id: number;
  label: string;
  icon: ReactNode;
};
