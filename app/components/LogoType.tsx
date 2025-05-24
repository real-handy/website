import { cn } from '@/lib/utils';

type LogoTypeProps = {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'light' | 'dark';
}

const sizes = {
  'sm': 'text-regular',
  'md': 'text-lg',
  'lg': 'text-xl',
  'xl': 'text-2xl'
}

const variants = {
  'light': ['text-brown-400', 'text-foreground'],
  'dark': ['text-foreground', 'text-brown-400']
}

export default function LogoType({ size = 'xl', variant = 'dark' }: LogoTypeProps) {
  const sizeClass = sizes[size];
  const [realColor, handyColor] = variants[variant === 'light' ? 'light' : 'dark'];

  return (
    <div className="flex items-center">
      <span className={cn(sizeClass, "font-regular", realColor)}>Real</span>
      <span className={cn(sizeClass, "font-bold", handyColor)}>Handy</span>
    </div>
  );
}
