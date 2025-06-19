'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  Home, 
  Settings, 
  History, 
  Star,
  PlusCircle
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const sidebarLinks = [
  { icon: Home, label: 'Home', href: '/' },
  { icon: History, label: 'Projects', href: '/projects' },
  { icon: Star, label: 'Services', href: '/services' },
  { icon: Settings, label: 'Contact', href: '/contact' },
];

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <div
      ref={sidebarRef}
      className={cn(
        'fixed top-0 left-0 z-40 h-screen w-64 bg-background border-r transition-transform duration-300 ease-in-out transform',
        isOpen ? 'translate-x-0' : '-translate-x-full'
      )}
      onMouseLeave={onClose}
    >
      <ScrollArea className="h-full">
        <div className="p-4 space-y-4">
          <Button variant="outline" className="w-full justify-start" asChild>
            <Link href="/contact">
              <PlusCircle className="mr-2 h-4 w-4" />
              Get Consultation
            </Link>
          </Button>

          <div className="space-y-1">
            {sidebarLinks.map((link) => (
              <Button
                key={link.label}
                variant="ghost"
                className="w-full justify-start"
                asChild
              >
                <Link href={link.href}>
                  <link.icon className="mr-2 h-4 w-4" />
                  {link.label}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}