'use client';
import { useRef } from 'react';
import { Provider } from 'react-redux';
import { makeStore, AppStore } from '../lib/store';

export const { store } = makeStore();

export default function StoreProvider({ children }: { children: React.ReactNode }) {
  const storeRef = useRef<AppStore>({ store });

  return <Provider store={storeRef.current.store}>{children}</Provider>;
}
