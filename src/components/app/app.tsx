// Core
import React, { FC, ReactElement } from 'react';

// Components
import { Header } from '../header/header';

// Domains
import { Starships } from '../../bus/starships/starships';

export const App: FC = (): ReactElement => (
  <>
    <Header title="Title" />
    <Starships />
  </>
);
