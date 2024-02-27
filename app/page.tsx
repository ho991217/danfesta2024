'use client';

import useToastStore from './stores/toast-state';

export default function Home() {
  const { open } = useToastStore();

  return (
    <main>
      <button
        onClick={() => {
          open('30자30자30자30자30자30자30자30자30자30자');
        }}
      >
        지금 오에스는?
      </button>
    </main>
  );
}
