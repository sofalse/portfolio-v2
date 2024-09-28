'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Typed from 'typed.js';

export default function Home() {
  const el = React.useRef(null);

  const [typed, setTyped] = useState(false);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['I do fintech.', 'I do banking.', 'I do finance.', 'I do backend.', 'I do fullstack.'],
      typeSpeed: 55,
      backSpeed: 55,
      backDelay: 1500,
      smartBackspace: true,
      loop: true,
      showCursor: false,
      onStringTyped: () => {
        console.log('typed');
        setTyped(true);
        setTimeout(() => {
          setTyped(false);
        }, 100);
      },
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="flex w-full flex-row justify-center">
      <Image
        src="/images/profile-optimized.jpg"
        alt="Profile picture"
        width={384}
        height={384}
        className="aspect-square rounded-full object-cover"
      />
      <div className="m-10 flex flex-col justify-center">
        <h1 className="m-2 text-6xl">Michał Wiśniewski</h1>
        <h2 className="text-3xl">Software Engineer</h2>
        <motion.p
          animate={{ fontSize: typed ? '1.2rem' : '1rem' }}
          transition={{ duration: 0.3 }}
          initial={false}
          ref={el}
          className="text-glow-primary/60 mt-2 h-7 font-[family-name:var(--font-geist-mono)] text-primary"
        />
      </div>
    </div>
  );
}
