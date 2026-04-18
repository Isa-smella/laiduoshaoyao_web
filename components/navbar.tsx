import Link from 'next/link';

const navItems = [
  { href: '/', label: '首页' },
  { href: '/order', label: '在线下单' },
  { href: '/orders', label: '我的订单' },
  { href: '/admin', label: '后台原型' }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/40 bg-cream/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <div className="font-semibold text-moss">来朵芍药花</div>
        <nav className="flex items-center gap-2 md:gap-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1.5 text-sm text-zinc-700 transition hover:bg-white hover:text-blossom"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
