import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';

interface LogoProps {
  iconClassName?: string;
  wordmarkClassName?: string;
  className?: string;
  href?: string;
  noLink?: boolean;
}

export default function Logo({
  iconClassName,
  wordmarkClassName,
  className,
  href = '/',
  noLink = false,
}: LogoProps) {
  const Element = noLink ? 'div' : Link;

  return (
    <Element
      href={href}
      className={cn('flex items-center gap-2.5 text-xl font-medium', className)}
    >
      <Image
        src="/images/filled-icon.png"
        alt="LogisBase"
        width={32}
        height={32}
        className={cn(
          'h-8 w-8 rounded-lg object-contain shadow-md',
          iconClassName,
        )}
      />
      <span className={cn('font-semibold', wordmarkClassName)}>LogisBase</span>
    </Element>
  );
}
