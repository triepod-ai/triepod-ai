'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X, Github, Twitter, ChevronDown, LogOut } from 'lucide-react';
import { Logo } from '@/components/logo';
import { useAuth } from '@/components/auth-provider';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sidebar } from '@/components/sidebar';

const services = [
  { name: 'AI Strategy & Roadmapping', href: '/services', description: 'Strategic AI planning and implementation guidance' },
  { name: 'Custom AI Development', href: '/services/development', description: 'Tailored AI solutions and automation systems' },
  { name: 'Digital Transformation', href: '/services/transformation', description: 'End-to-end modernization consulting' },
  { name: 'Accessibility Solutions', href: '/services/accessibility', description: 'AI-powered accessibility improvements' },
  { name: 'Success Stories', href: '/case-studies', description: 'Real results from client transformations' },
];

const resources = [
  { name: 'Blog', href: '/blog' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Documentation', href: '/docs' },
  { name: 'Help Center', href: '/help' },
];

const company = [
  { name: 'About', href: '/about' },
  { name: 'Philosophy', href: '/philosophy' },
  { name: 'Contact', href: '/contact' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();
  const { user, logout } = useAuth();

  return (
    <>
      <nav className="bg-background/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div
                className="flex items-center cursor-pointer"
                onMouseEnter={() => setIsSidebarOpen(true)}
              >
                <Logo />
              </div>
            </div>

            <div className="hidden md:flex md:items-center md:space-x-6">
              <Link
                href="/projects"
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === '/projects' ? 'text-primary' : 'text-muted-foreground'
                )}
              >
                Portfolio
              </Link>
              
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4">
                        {services.map((service) => (
                          <li key={service.name}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={service.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-medium leading-none">{service.name}</div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                  {service.description}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[200px] gap-3 p-4">
                        {resources.map((resource) => (
                          <li key={resource.name}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={resource.href}
                                className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                {resource.name}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Company</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[200px] gap-3 p-4">
                        {company.map((item) => (
                          <li key={item.name}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={item.href}
                                className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                {item.name}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              
              <div className="flex items-center space-x-4">
                {user ? (
                  <>
                    <span className="text-sm text-muted-foreground">
                      {user.email}
                    </span>
                    <Button variant="ghost" size="icon" onClick={logout}>
                      <LogOut className="h-5 w-5" />
                    </Button>
                  </>
                ) : (
                  <Button variant="default" asChild>
                    <Link href="/login">Sign in</Link>
                  </Button>
                )}
                {/* Twitter link removed - account does not exist */}
                <Button variant="ghost" size="icon">
                  <Link href="https://github.com/triepod-ai" target="_blank">
                    <Github className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="flex md:hidden">
              <Button
                variant="ghost"
                className="inline-flex items-center justify-center"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/projects"
                className={cn(
                  'block px-3 py-2 rounded-md text-base font-medium',
                  pathname === '/projects'
                    ? 'text-foreground bg-primary/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-primary/5'
                )}
                onClick={() => setIsOpen(false)}
              >
                Portfolio
              </Link>
              {[...services, ...resources, ...company].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'block px-3 py-2 rounded-md text-base font-medium',
                    pathname === item.href
                      ? 'text-foreground bg-primary/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-primary/5'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
}