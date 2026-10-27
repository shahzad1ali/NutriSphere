"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";
import Link from "next/link";
import Image from "next/image";
import {
  Arrow,
  Chicken,
  Close,
  Cow,
  Dog,
  Fish,
  Leaf,
  Microscope,
  Shield,
  Stethoscope,
  Vaccine,
  type IconProps,
} from "@/components/icons";
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";
import { useCallback, useEffect, useRef, useState } from "react";
import type { ComponentType, FocusEvent, KeyboardEvent } from "react";

type MenuName = "products" | "solutions";

type MenuLink = {
  label: string;
  description: string;
  icon: ComponentType<IconProps>;
  href: string;
};

const productLinks: MenuLink[] = [
  {
    label: "Poultry",
    description: "Health and nutrition for poultry",
    icon: Chicken,
    href: "/species/poultry",
  },
  {
    label: "Ruminants & cattle",
    description: "Care for cattle and ruminants",
    icon: Cow,
    href: "/species/cattle",
  },
  {
    label: "Aquaculture",
    description: "Support for aquatic animal health",
    icon: Fish,
    href: "/species/aquaculture",
  },
  {
    label: "Pet care",
    description: "Everyday essentials for companion animals",
    icon: Dog,
    href: "/species/pet-care",
  },
  {
    label: "Vaccines",
    description: "Preventive care for animal health",
    icon: Vaccine,
    href: "/products/flockguard-vaccine",
  },
];

const solutionLinks: MenuLink[] = [
  {
    label: "Nutrition programs",
    description: "Nutrition support across animal life stages",
    icon: Leaf,
    href: "/products/dailybalance-mineral-mix",
  },
  {
    label: "Disease prevention",
    description: "Practical preventive care and vaccines",
    icon: Shield,
    href: "/products/flockguard-vaccine",
  },
  {
    label: "Lab and diagnostics",
    description: "Tools and guidance for informed decisions",
    icon: Microscope,
    href: "/products/herdcheck-test-kit",
  },
  {
    label: "Farm consultation",
    description: "Veterinary guidance for farm teams",
    icon: Stethoscope,
    href: "/contact",
  },
];

const featuredProducts = [
  { label: "Animal nutrition", href: "/products/dailybalance-mineral-mix" },
  { label: "Preventive care", href: "/products/flockguard-vaccine" },
  { label: "Veterinary medicines", href: "/products/vetrelief-oral-solution" },
];

const mobileFocusableSelector =
  'a[href], button:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function Header() {
  const [activeMenu, setActiveMenu] = useState<MenuName | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [expandedGroup, setExpandedGroup] = useState<MenuName | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const drawerRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const desktopNavRef = useRef<HTMLElement>(null);
  const menuRegionRef = useRef<HTMLDivElement>(null);

  const closeDrawer = useCallback(() => {
    setDrawerOpen(false);
    setExpandedGroup(null);
    menuButtonRef.current?.focus();
  }, []);

  useEffect(() => {
    const updateScrollState = () => {
      setScrolled(window.scrollY > 12);
    };
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  useEffect(() => {
    if (!drawerOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const drawer = drawerRef.current;
    drawer?.querySelector<HTMLElement>(mobileFocusableSelector)?.focus();

    function handleKeyDown(event: globalThis.KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        closeDrawer();
        return;
      }

      if (event.key !== "Tab" || !drawer) return;
      const focusable = Array.from(
        drawer.querySelectorAll<HTMLElement>(mobileFocusableSelector),
      ).filter((element) => element.offsetParent !== null);
      const first = focusable.at(0);
      const last = focusable.at(-1);
      if (!first || !last) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeDrawer, drawerOpen]);

  useEffect(() => {
    function closeOnEscape(event: globalThis.KeyboardEvent) {
      if (event.key === "Escape" && activeMenu) {
        event.preventDefault();
        setActiveMenu(null);
      }
    }

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [activeMenu]);

  function handleDesktopBlur(event: FocusEvent<HTMLElement>) {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      setActiveMenu(null);
    }
  }

  function handleDesktopKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (event.key === "Escape" && activeMenu) {
      setActiveMenu(null);
      const trigger = desktopNavRef.current?.querySelector<HTMLButtonElement>(
        `[data-menu-trigger="${activeMenu}"]`,
      );
      trigger?.focus();
    }
  }

  function toggleMenu(menu: MenuName) {
    setActiveMenu((current) => (current === menu ? null : menu));
  }

  function openDrawer() {
    setActiveMenu(null);
    setDrawerOpen(true);
  }

  function renderDesktopMenu(menu: MenuName) {
    const items = menu === "products" ? productLinks : solutionLinks;
    const isProducts = menu === "products";

    return (
      <AnimatePresence>
        {activeMenu === menu ? (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="absolute inset-x-0 top-full border-t border-ink-100/80 bg-white shadow-xl"
            exit={{ opacity: 0, y: -6 }}
            id={`${menu}-mega-menu`}
            initial={prefersReducedMotion ? false : { opacity: 0, y: -6 }}
            key={menu}
            transition={{ duration: prefersReducedMotion ? 0 : 0.18 }}
          >
            <div className="mx-auto max-w-7xl px-8 py-7">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-700">
                    {isProducts ? "Products by animal" : "Solutions for better care"}
                  </p>
                  <p className="mt-1 text-sm text-ink-500">
                    {isProducts
                      ? "Explore animal-health essentials by category."
                      : "Practical support for everyday animal-health needs."}
                  </p>
                </div>
                <Link
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-900"
                  href={isProducts ? "/products" : "/solutions"}
                  onClick={() => setActiveMenu(null)}
                >
                  {isProducts ? "View all products" : "View all solutions"}
                  <Arrow aria-hidden="true" className="size-4" />
                </Link>
              </div>
              <div
                className={cn(
                  "mt-5 grid gap-3",
                  isProducts ? "grid-cols-5" : "grid-cols-4",
                )}
              >
                {items.map(({ description, href, icon: ItemIcon, label }) => (
                  <Link
                    className="group rounded-2xl border border-ink-100 p-4 transition hover:border-brand-200 hover:bg-brand-50 focus-visible:bg-brand-50"
                    href={href}
                    key={label}
                    onClick={() => setActiveMenu(null)}
                  >
                    <span className="grid size-10 place-items-center rounded-xl bg-brand-50 text-brand-700 transition group-hover:bg-white">
                      <ItemIcon aria-hidden="true" className="size-5" />
                    </span>
                    <span className="mt-3 block text-sm font-semibold text-brand-900">
                      {label}
                    </span>
                    <span className="mt-1 block text-xs leading-5 text-ink-500">
                      {description}
                    </span>
                  </Link>
                ))}
              </div>
              {isProducts ? (
                <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-ink-100 pt-5">
                  <span className="mr-1 text-xs font-bold uppercase tracking-[0.14em] text-ink-500">
                    Featured products
                  </span>
                  {featuredProducts.map((product) => (
                    <Link
                      className="inline-flex min-h-11 items-center rounded-full bg-brand-50 px-3.5 py-2 text-xs font-semibold text-brand-700 transition hover:bg-brand-100"
                      href={product.href}
                      key={product.label}
                      onClick={() => setActiveMenu(null)}
                    >
                      {product.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    );
  }

  function renderMobileGroup(menu: MenuName, items: MenuLink[]) {
    const expanded = expandedGroup === menu;
    return (
      <div className="border-b border-white/10">
        <button
          aria-controls={
            expanded ? `mobile-${menu}-links` : undefined
          }
          aria-expanded={expanded}
          className="flex min-h-14 w-full items-center justify-between text-left font-heading text-xl font-semibold text-white"
          onClick={() => setExpandedGroup(expanded ? null : menu)}
          type="button"
        >
          {menu === "products" ? "Products" : "Solutions"}
          <Arrow
            aria-hidden="true"
            className={cn(
              "size-5 text-brand-300 transition-transform",
              expanded && "rotate-90",
            )}
          />
        </button>
        <AnimatePresence initial={false}>
          {expanded ? (
            <motion.div
              aria-hidden={!expanded}
              animate={{ height: "auto", opacity: 1 }}
              className="overflow-hidden"
              exit={{ height: 0, opacity: 0 }}
              id={`mobile-${menu}-links`}
              inert={!expanded}
              initial={prefersReducedMotion ? false : { height: 0, opacity: 0 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
            >
              <div className="grid gap-1 pb-4">
                {items.map(({ href, icon: ItemIcon, label }) => (
                  <Link
                    className="flex min-h-12 items-center gap-3 rounded-xl px-3 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
                    href={href}
                    key={label}
                    onClick={closeDrawer}
                  >
                    <ItemIcon aria-hidden="true" className="size-5 text-brand-300" />
                    {label}
                  </Link>
                ))}
                <Link
                  className="min-h-12 rounded-xl px-3 py-3 text-sm font-semibold text-brand-300"
                  href={menu === "products" ? "/products" : "/solutions"}
                  onClick={closeDrawer}
                >
                  {menu === "products" ? "Browse all products" : "Browse all solutions"}
                </Link>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <>
      <header className="relative z-50">
      <div className="bg-ink-100 text-ink-700">
        <div className="mx-auto flex min-h-12 max-w-7xl items-center justify-between gap-3 px-5 text-xs sm:px-8 lg:px-10">
          <div className="flex items-center">
            {/* TODO: replace the region prompt with NutriSphere's configured service region. */}
            <Link
              className="inline-flex min-h-11 items-center text-ink-600 underline-offset-4 hover:text-brand-700 hover:underline"
              href="/contact"
            >
              Region: Contact us
            </Link>
          </div>
          {/* TODO: Replace this contact-form link with a verified veterinary phone number. */}
          <Link
            className="inline-flex min-h-11 items-center gap-2 font-semibold text-ink-800 transition hover:text-brand-700 focus-visible:outline-brand-700"
            href="/contact"
          >
            <Stethoscope aria-hidden="true" className="size-4 text-brand-600" />
            Talk to a Vet
          </Link>
        </div>
      </div>

      <div
        className={cn(
          "sticky top-0 z-50 border-b transition-colors duration-200",
          scrolled
            ? "border-ink-200 bg-white/95 shadow-md backdrop-blur-xl"
            : "border-ink-100 bg-white",
        )}
      >
        <div
          className="relative"
          onBlur={handleDesktopBlur}
          onKeyDown={handleDesktopKeyDown}
          onMouseLeave={() => {
            if (!menuRegionRef.current?.contains(document.activeElement)) {
              setActiveMenu(null);
            }
          }}
          ref={menuRegionRef}
        >
          <div className="mx-auto flex min-h-[4.75rem] max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
            <Link
              aria-label="NutriSphere home"
              className="inline-flex min-h-11 shrink-0 items-center gap-2.5 rounded-lg"
              href="/"
              onClick={() => setActiveMenu(null)}
            >
              <Image
                alt=""
                className="h-auto w-[126px]"
                height={107}
                loading="eager"
                src="/solutions/logo.png"
                width={180}
              />
            </Link>

            <nav
              aria-label="Main navigation"
              className="hidden items-center gap-1 xl:flex"
              ref={desktopNavRef}
            >
              {(["products", "solutions"] as const).map((menu) => {
                const open = activeMenu === menu;
                const label = menu === "products" ? "Products" : "Solutions";
                return (
                  <div
                    className="flex items-center rounded-xl hover:bg-brand-50"
                    key={menu}
                    onFocus={() => setActiveMenu(menu)}
                    onMouseEnter={() => setActiveMenu(menu)}
                  >
                    <Link
                      className={cn(
                        "inline-flex min-h-11 items-center rounded-l-xl px-3 text-sm font-semibold transition hover:text-brand-800 focus-visible:bg-brand-50",
                        open ? "text-brand-700" : "text-ink-700",
                      )}
                      href={menu === "products" ? "/products" : "/solutions"}
                      onClick={() => setActiveMenu(null)}
                    >
                      {label}
                    </Link>
                    <button
                      aria-label={`Open ${label} menu`}
                      aria-controls={open ? `${menu}-mega-menu` : undefined}
                      aria-expanded={open}
                      className={cn(
                        "inline-flex min-h-11 items-center rounded-r-xl px-2 text-sm transition hover:text-brand-800 focus-visible:bg-brand-50",
                        open ? "text-brand-800" : "text-ink-700",
                      )}
                      data-menu-trigger={menu}
                      onClick={() => toggleMenu(menu)}
                      onFocus={() => setActiveMenu(menu)}
                      type="button"
                    >
                      <Arrow
                        aria-hidden="true"
                        className={cn(
                          "size-3.5 rotate-90 transition-transform",
                          open && "-rotate-90",
                        )}
                      />
                    </button>
                  </div>
                );
              })}
              <Link className="rounded-xl px-3 py-3 text-sm font-semibold text-ink-700 transition hover:bg-brand-50 hover:text-brand-700" href="/about">
                About
              </Link>
              <Link className="rounded-xl px-3 py-3 text-sm font-semibold text-ink-700 transition hover:bg-brand-50 hover:text-brand-700" href="/library">
                Resources
              </Link>
              <Link className="rounded-xl px-3 py-3 text-sm font-semibold text-ink-700 transition hover:bg-brand-50 hover:text-brand-700" href="/contact">
                Contact
              </Link>
            </nav>

            <Button
              className="hidden shrink-0 bg-brand-500 text-white shadow-none hover:bg-brand-600 xl:inline-flex"
              href="/contact"
              size="sm"
              withArrow
            >
              Consult a Veterinarian
            </Button>
            <button
              aria-expanded={drawerOpen}
              aria-controls={
                drawerOpen ? "mobile-navigation-drawer" : undefined
              }
              aria-label={drawerOpen ? "Close navigation menu" : "Open navigation menu"}
              className="grid size-11 place-items-center rounded-xl border border-ink-200 text-brand-900 transition hover:bg-brand-50 focus-visible:outline-brand-700 xl:hidden"
              onClick={drawerOpen ? closeDrawer : openDrawer}
              ref={menuButtonRef}
              type="button"
            >
              {drawerOpen ? (
                <Close aria-hidden="true" className="size-5" />
              ) : (
                <span aria-hidden="true" className="flex flex-col gap-1.5">
                  <span className="h-0.5 w-5 rounded bg-current" />
                  <span className="h-0.5 w-5 rounded bg-current" />
                </span>
              )}
            </button>
          </div>
          {renderDesktopMenu("products")}
          {renderDesktopMenu("solutions")}
        </div>
      </div>

      </header>
      <AnimatePresence>
        {drawerOpen ? (
          <motion.div
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-[60] bg-ink-950 xl:hidden"
            exit={{ opacity: 0 }}
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            id="mobile-navigation-drawer"
            transition={{ duration: prefersReducedMotion ? 0 : 0.18 }}
          >
            <div
              aria-label="Mobile navigation"
              aria-modal="true"
              className="flex h-full flex-col overflow-y-auto px-5 pb-8 pt-4 sm:px-8"
              ref={drawerRef}
              role="dialog"
            >
              <div className="flex min-h-14 items-center justify-between border-b border-white/10 pb-3">
                <Link
                  className="inline-flex min-h-11 items-center gap-2.5 font-heading text-lg font-bold tracking-[-0.05em] text-white"
                  href="/"
                  onClick={closeDrawer}
                >
                  <span className="inline-flex items-center justify-center rounded-full bg-white px-3 py-1.5">
                    <Image
                      alt=""
                      className="h-auto w-[126px]"
                      height={107}
                      src="/solutions/logo.png"
                      width={180}
                    />
                  </span>
                </Link>
                <button
                  aria-label="Close navigation menu"
                  className="grid size-11 place-items-center rounded-xl text-white hover:bg-white/10 focus-visible:outline-white"
                  onClick={closeDrawer}
                  type="button"
                >
                  <Close aria-hidden="true" className="size-6" />
                </button>
              </div>

              <nav aria-label="Mobile navigation" className="mt-5">
                {renderMobileGroup("products", productLinks)}
                {renderMobileGroup("solutions", solutionLinks)}
                <Link
                  className="flex min-h-14 items-center border-b border-white/10 font-heading text-xl font-semibold text-white"
                  href="/about"
                  onClick={closeDrawer}
                >
                  About
                </Link>
                <Link
                  className="flex min-h-14 items-center border-b border-white/10 font-heading text-xl font-semibold text-white"
                  href="/library"
                  onClick={closeDrawer}
                >
                  Resources
                </Link>
                <Link
                  className="flex min-h-14 items-center font-heading text-xl font-semibold text-white"
                  href="/contact"
                  onClick={closeDrawer}
                >
                  Contact
                </Link>
              </nav>
              <Button
                className="mt-auto w-full"
                href="/contact"
                onClick={closeDrawer}
                size="lg"
                withArrow
              >
                Consult a Veterinarian
              </Button>
              <Link
                className="mx-auto mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-white/80"
                href="/contact"
                onClick={closeDrawer}
              >
                <Stethoscope aria-hidden="true" className="size-4 text-brand-300" />
                Talk to a Vet
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
