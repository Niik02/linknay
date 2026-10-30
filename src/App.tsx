/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  ArrowUpRightIcon,
  InstagramIcon,
  WebsiteIcon,
  WhatsAppIcon,
} from './components/BrandIcons';

const PROFILE_IMAGE_URL = 'https://i.postimg.cc/ryCxXG7c/Design-sem-nome.png';

interface LinkItem {
  id: string;
  label: string;
  href: string;
  ariaLabel: string;
  primary?: boolean;
  icon: React.ComponentType<{ className?: string }>;
  iconContainerClass: string;
  buttonClass: string;
  arrowClass: string;
}

const LINKS: LinkItem[] = [
  {
    id: 'whatsapp-publicidade',
    label: 'QUERO FAZER UMA PUBLICIDADE',
    href: 'https://wa.me/553181107577',
    ariaLabel: 'Quero fazer uma publicidade pelo WhatsApp (abre em nova aba)',
    primary: true,
    icon: WhatsAppIcon,
    iconContainerClass:
      'bg-white text-[#5B2D5C] shadow-[0_2px_8px_rgba(91,45,92,0.14)]',
    buttonClass:
      'bg-[#00C8FF] text-[#1F0D20] border border-[#00B4E6] shadow-[0_10px_26px_-6px_rgba(0,200,255,0.5)] hover:bg-[#08CEFF] hover:shadow-[0_14px_32px_-6px_rgba(0,200,255,0.65)]',
    arrowClass: 'text-[#5B2D5C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5',
  },
  {
    id: 'instagram',
    label: 'SIGA NO INSTAGRAM',
    href: 'https://www.instagram.com/floramar.bh/',
    ariaLabel: 'Siga Nay em Ação no Instagram (abre em nova aba)',
    icon: InstagramIcon,
    iconContainerClass: 'bg-[#FFF3E6] text-[#F1861C]',
    buttonClass:
      'bg-white text-[#5B2D5C] border border-[#5B2D5C]/18 shadow-[0_6px_20px_-6px_rgba(91,45,92,0.1)] hover:border-[#F1861C]/70 hover:shadow-[0_12px_26px_-8px_rgba(241,134,28,0.22)]',
    arrowClass:
      'text-[#5B2D5C]/50 group-hover:text-[#F1861C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5',
  },
  {
    id: 'site-oficial',
    label: 'ACESSE NOSSO SITE',
    href: 'https://nayemacao.vercel.app',
    ariaLabel: 'Acesse nosso site oficial Nay em Ação (abre em nova aba)',
    icon: WebsiteIcon,
    iconContainerClass: 'bg-[#F6EFF6] text-[#5B2D5C]',
    buttonClass:
      'bg-white text-[#5B2D5C] border border-[#5B2D5C]/18 shadow-[0_6px_20px_-6px_rgba(91,45,92,0.1)] hover:border-[#00C8FF] hover:shadow-[0_12px_26px_-8px_rgba(0,200,255,0.24)]',
    arrowClass:
      'text-[#5B2D5C]/50 group-hover:text-[#00A3D1] group-hover:translate-x-0.5 group-hover:-translate-y-0.5',
  },
];

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function App() {
  const shouldReduceMotion = useReducedMotion();
  const [imageError, setImageError] = useState(false);

  return (
    <main className="min-h-[100dvh] w-full bg-white flex flex-col items-center justify-center px-4 py-4 sm:px-6 sm:py-6">
      <div className="w-full max-w-[420px] flex flex-col items-center">
        {/* Foto principal centralizada e em grande destaque */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, ease: EASE_OUT_EXPO }}
          className="relative rounded-full p-1 bg-white border-[2.5px] border-[#00C8FF] ring-4 ring-[#5B2D5C]/[0.05] shadow-[0_14px_34px_-10px_rgba(91,45,92,0.2)]"
        >
          <div className="w-[clamp(9rem,24dvh,13.25rem)] h-[clamp(9rem,24dvh,13.25rem)] rounded-full overflow-hidden bg-white flex items-center justify-center">
            {!imageError ? (
              <img
                src={PROFILE_IMAGE_URL}
                alt="Foto de apresentação de Nay em Ação"
                referrerPolicy="no-referrer"
                decoding="async"
                fetchPriority="high"
                onError={() => setImageError(true)}
                className="w-full h-full object-cover object-center select-none"
              />
            ) : (
              <div
                aria-label="Nay em Ação"
                className="w-full h-full flex items-center justify-center bg-[#F6EFF6] text-[#5B2D5C] font-display text-3xl font-extrabold tracking-tight"
              >
                NAY
              </div>
            )}
          </div>
        </motion.div>

        {/* Nome da marca logo abaixo da foto */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: shouldReduceMotion ? 0 : 0.12,
            ease: EASE_OUT_EXPO,
          }}
          className="mt-3.5 flex flex-col items-center text-center"
        >
          <h1 className="font-display text-[clamp(1.5rem,3.6dvh,2.05rem)] font-extrabold tracking-tight text-[#5B2D5C] leading-none">
            NAY EM AÇÃO
          </h1>
          <span
            aria-hidden="true"
            className="mt-2 h-[3px] w-9 rounded-full bg-[#F1861C]"
          />
        </motion.div>

        {/* Três botões principais de acesso rápido */}
        <nav
          aria-label="Links principais da Nay em Ação"
          className="mt-5 w-full flex flex-col gap-3"
        >
          {LINKS.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.ariaLabel}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.38,
                  delay: shouldReduceMotion ? 0 : 0.22 + index * 0.08,
                  ease: EASE_OUT_EXPO,
                }}
                whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
                className={`group relative w-full min-h-[56px] sm:min-h-[60px] px-3.5 sm:px-4 py-2.5 rounded-2xl flex items-center justify-between gap-3 transition-[background-color,border-color,box-shadow,transform] duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#5B2D5C] ${item.buttonClass}`}
              >
                <span
                  className={`w-10 h-10 rounded-xl shrink-0 flex items-center justify-center transition-transform duration-150 ease-out group-hover:scale-105 ${item.iconContainerClass}`}
                >
                  <Icon className="w-5 h-5" />
                </span>

                <span className="flex-1 text-center text-[13px] sm:text-[14.5px] font-bold tracking-[0.02em] whitespace-nowrap">
                  {item.label}
                </span>

                <span
                  className={`w-7 h-7 shrink-0 flex items-center justify-center transition-[color,transform] duration-150 ease-out ${item.arrowClass}`}
                >
                  <ArrowUpRightIcon className="w-4 h-4" />
                </span>
              </motion.a>
            );
          })}
        </nav>
      </div>
    </main>
  );
}
