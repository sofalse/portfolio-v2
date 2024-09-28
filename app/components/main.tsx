'use client';

import { ArrowDownIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import Experience from './sections/experience';
import Home from './sections/home';

export default function Main() {
  return (
    <main>
      <section className="relative flex h-screen w-screen flex-col items-center justify-center text-center">
        <Home />
        <motion.div
          animate={{ bottom: ['1.5rem', '2.5rem', '1.5rem'] }}
          transition={{ repeatType: 'loop', repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          initial={{ bottom: '2.5rem' }}
          className="absolute h-10 w-10"
        >
          <Link href="#experience">
            <ArrowDownIcon />
          </Link>
        </motion.div>
      </section>
      <section
        className="relative flex h-screen w-screen flex-col items-center justify-center text-center"
        id="experience"
      >
        <Experience />
        <motion.div
          animate={{ bottom: ['1.5rem', '2.5rem', '1.5rem'] }}
          transition={{ repeatType: 'loop', repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          initial={{ bottom: '2.5rem' }}
          className="absolute h-10 w-10"
        >
          <a href="#">
            <ArrowDownIcon />
          </a>
        </motion.div>
      </section>
    </main>
  );
}
