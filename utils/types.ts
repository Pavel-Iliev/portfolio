import { ReactElement } from 'react';

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
};
