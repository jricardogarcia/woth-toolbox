'use client';

import { createContext } from 'react';
import type { HuntingMapTypeContextValue } from './types';

export const HuntingMapTypeContext = createContext<HuntingMapTypeContextValue>({
  mapType: undefined,
  onSetMapType: () => undefined,
});

export const HuntingMapTypeProvider = HuntingMapTypeContext.Provider;
