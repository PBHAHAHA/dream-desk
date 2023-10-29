'use client';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    //确保组件已经渲染到浏览器中再执行
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  return (
    <div>
      <Button size="icon">
        <Sun
          onClick={() => setTheme('dark')}
          className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        />
        <Moon
          onClick={() => setTheme('light')}
          className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        />
        <span className="sr-only">{theme}</span>
      </Button>
    </div>
  );
};

export default ThemeSwitcher;
