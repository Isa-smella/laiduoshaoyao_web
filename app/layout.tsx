import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '来朵芍药花',
  description: '中江产地直采芍药花，4月限时开卖，成都直达，快递到家。'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
