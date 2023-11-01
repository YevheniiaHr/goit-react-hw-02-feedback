import React from 'react';
import { SectionCont, SectionTitle } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionCont>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionCont>
  );
};
