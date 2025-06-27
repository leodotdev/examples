"use client";

import { useState } from "react";
import {
  IconMenu2,
  IconX,
  IconChartPie,
  IconUsers,
  IconShield,
  IconPuzzle,
  IconRobot,
  IconPlayerPlay,
  IconPhone,
  IconChevronDown,
} from "@tabler/icons-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-background fixed top-0 w-full z-50 border-b border-border">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Digital Magic Co</span>
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <div className="w-5 h-5 bg-white rounded-full opacity-90"></div>
            </div>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <IconMenu2 className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <NavigationMenu viewport={false}>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Product</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li className="row-span-1">
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="#"
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex size-10 flex-none items-center justify-center rounded-lg bg-muted">
                              <IconChartPie className="size-5 text-muted-foreground" />
                            </div>
                            <div>
                              <div className="text-sm font-medium leading-none">
                                Analytics
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Get a better understanding of your traffic
                              </p>
                            </div>
                          </div>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li className="row-span-1">
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="#"
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex size-10 flex-none items-center justify-center rounded-lg bg-muted">
                              <IconUsers className="size-5 text-muted-foreground" />
                            </div>
                            <div>
                              <div className="text-sm font-medium leading-none">
                                Engagement
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Speak directly to your customers
                              </p>
                            </div>
                          </div>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li className="row-span-1">
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="#"
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex size-10 flex-none items-center justify-center rounded-lg bg-muted">
                              <IconShield className="size-5 text-muted-foreground" />
                            </div>
                            <div>
                              <div className="text-sm font-medium leading-none">
                                Security
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Your customers&apos; data will be safe and
                                secure
                              </p>
                            </div>
                          </div>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li className="row-span-1">
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="#"
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex size-10 flex-none items-center justify-center rounded-lg bg-muted">
                              <IconPuzzle className="size-5 text-muted-foreground" />
                            </div>
                            <div>
                              <div className="text-sm font-medium leading-none">
                                Integrations
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Connect with third-party tools
                              </p>
                            </div>
                          </div>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li className="row-span-1">
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="#"
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex size-10 flex-none items-center justify-center rounded-lg bg-muted">
                              <IconRobot className="size-5 text-muted-foreground" />
                            </div>
                            <div>
                              <div className="text-sm font-medium leading-none">
                                Automations
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Build strategic funnels that will convert
                              </p>
                            </div>
                          </div>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li className="col-span-2">
                      <div className="grid grid-cols-2 gap-2">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex items-center justify-center gap-x-2 rounded-md bg-muted p-3 text-sm font-medium text-foreground hover:bg-accent"
                            href="#"
                          >
                            <IconPlayerPlay className="size-5 flex-none text-muted-foreground" />
                            Watch demo
                          </a>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <a
                            className="flex items-center justify-center gap-x-2 rounded-md bg-muted p-3 text-sm font-medium text-foreground hover:bg-accent"
                            href="#"
                          >
                            <IconPhone className="size-5 flex-none text-muted-foreground" />
                            Contact sales
                          </a>
                        </NavigationMenuLink>
                      </div>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <a
                    href="#"
                    className="text-sm font-semibold text-foreground transition-colors"
                  >
                    Features
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <a
                    href="#"
                    className="text-sm font-semibold text-foreground transition-colors"
                  >
                    Marketplace
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <a
                    href="#"
                    className="text-sm font-semibold text-foreground transition-colors"
                  >
                    Company
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-4 lg:items-center">
          <ThemeToggle />
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div
            className="fixed inset-0 z-50"
            onClick={() => setMobileMenuOpen(false)}
          ></div>
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background p-6 sm:max-w-sm sm:ring-1 sm:ring-border">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Digital Magic Co</span>
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <div className="w-5 h-5 bg-white rounded-full opacity-90"></div>
                </div>
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <IconX className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-border">
                <div className="space-y-2 py-6">
                  <div className="-mx-3">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base font-semibold text-foreground hover:bg-accent"
                    >
                      Product
                      <IconChevronDown className="size-5 flex-none" />
                    </button>
                    <div className="mt-2 space-y-2">
                      <a
                        href="#"
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm font-semibold text-foreground hover:bg-accent"
                      >
                        Analytics
                      </a>
                      <a
                        href="#"
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm font-semibold text-foreground hover:bg-accent"
                      >
                        Engagement
                      </a>
                      <a
                        href="#"
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm font-semibold text-foreground hover:bg-accent"
                      >
                        Security
                      </a>
                      <a
                        href="#"
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm font-semibold text-foreground hover:bg-accent"
                      >
                        Integrations
                      </a>
                      <a
                        href="#"
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm font-semibold text-foreground hover:bg-accent"
                      >
                        Automations
                      </a>
                      <a
                        href="#"
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm font-semibold text-foreground hover:bg-accent"
                      >
                        Watch demo
                      </a>
                      <a
                        href="#"
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm font-semibold text-foreground hover:bg-accent"
                      >
                        Contact sales
                      </a>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-foreground hover:bg-accent"
                  >
                    Features
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-foreground hover:bg-accent"
                  >
                    Marketplace
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-foreground hover:bg-accent"
                  >
                    Company
                  </a>
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-foreground hover:bg-accent"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
