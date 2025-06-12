"use client";

import { useState } from "react";
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
            <svg
              className="size-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
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
                              <svg
                                className="size-5 text-muted-foreground"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
                                />
                              </svg>
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
                              <svg
                                className="size-5 text-muted-foreground"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59"
                                />
                              </svg>
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
                              <svg
                                className="size-5 text-muted-foreground"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33"
                                />
                              </svg>
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
                              <svg
                                className="size-5 text-muted-foreground"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z"
                                />
                              </svg>
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
                              <svg
                                className="size-5 text-muted-foreground"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                                />
                              </svg>
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
                            <svg
                              className="size-5 flex-none text-muted-foreground"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm6.39-2.908a.75.75 0 0 1 .766.027l3.5 2.25a.75.75 0 0 1 0 1.262l-3.5 2.25A.75.75 0 0 1 8 12.25v-4.5a.75.75 0 0 1 .39-.658Z"
                                clipRule="evenodd"
                              />
                            </svg>
                            Watch demo
                          </a>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <a
                            className="flex items-center justify-center gap-x-2 rounded-md bg-muted p-3 text-sm font-medium text-foreground hover:bg-accent"
                            href="#"
                          >
                            <svg
                              className="size-5 flex-none text-muted-foreground"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z"
                                clipRule="evenodd"
                              />
                            </svg>
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
                    className="text-sm font-semibold text-foreground hover:text-muted-foreground transition-colors"
                  >
                    Features
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <a
                    href="#"
                    className="text-sm font-semibold text-foreground hover:text-muted-foreground transition-colors"
                  >
                    Marketplace
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <a
                    href="#"
                    className="text-sm font-semibold text-foreground hover:text-muted-foreground transition-colors"
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
                <svg
                  className="size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
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
                      <svg
                        className="size-5 flex-none"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                          clipRule="evenodd"
                        />
                      </svg>
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
