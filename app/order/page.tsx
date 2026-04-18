'use client';

import { useMemo, useState } from 'react';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';

const availableDates = ['2026-04-19', '2026-04-20', '2026-04-22', '2026-04-23'];

const priceMap = {
  red: 69,
  white: 72
};

export default function OrderPage() {
  const [date, setDate] = useState(availableDates[0]);
  const [redQty, setRedQty] = useState(1);
  const [whiteQty, setWhiteQty] = useState(0);
  const [delivery, setDelivery] = useState<'自提' | '配送'>('配送');

  const total = useMemo(() => redQty * priceMap.red + whiteQty * priceMap.white, [redQty, whiteQty]);

  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="mx-auto mt-8 max-w-4xl px-4 md:px-6">
        <div className="soft-card p-6 md:p-8">
          <h1 className="text-3xl font-semibold">在线下单</h1>
          <p className="mt-2 text-sm text-zinc-600">今天就把这束花安排上，不用跳转小程序。</p>

          <form className="mt-7 grid gap-5">
            <label className="grid gap-2">
              <span className="text-sm font-medium">选择送花日期</span>
              <select value={date} onChange={(e) => setDate(e.target.value)} className="rounded-xl border border-zinc-200 bg-white px-4 py-3">
                {availableDates.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </label>

            <div className="grid gap-4 md:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-sm font-medium">红花数量（扎）</span>
                <input
                  type="number"
                  min={0}
                  value={redQty}
                  onChange={(e) => setRedQty(Number(e.target.value))}
                  className="rounded-xl border border-zinc-200 bg-white px-4 py-3"
                />
              </label>
              <label className="grid gap-2">
                <span className="text-sm font-medium">白花数量（扎）</span>
                <input
                  type="number"
                  min={0}
                  value={whiteQty}
                  onChange={(e) => setWhiteQty(Number(e.target.value))}
                  className="rounded-xl border border-zinc-200 bg-white px-4 py-3"
                />
              </label>
            </div>

            <fieldset className="grid gap-2">
              <legend className="text-sm font-medium">配送方式</legend>
              <div className="flex flex-wrap gap-3">
                {(['自提', '配送'] as const).map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setDelivery(item)}
                    className={`rounded-full px-4 py-2 text-sm transition ${
                      delivery === item ? 'bg-zinc-900 text-white' : 'bg-white text-zinc-700'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="grid gap-4 md:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-sm font-medium">联系人姓名</span>
                <input placeholder="例如：王小花" className="rounded-xl border border-zinc-200 bg-white px-4 py-3" />
              </label>
              <label className="grid gap-2">
                <span className="text-sm font-medium">联系电话</span>
                <input placeholder="11位手机号" className="rounded-xl border border-zinc-200 bg-white px-4 py-3" />
              </label>
            </div>

            {delivery === '配送' && (
              <label className="grid gap-2">
                <span className="text-sm font-medium">配送地址</span>
                <textarea placeholder="成都市 + 详细地址" className="min-h-24 rounded-xl border border-zinc-200 bg-white px-4 py-3" />
              </label>
            )}

            <div className="flex items-center justify-between rounded-2xl bg-petal p-4">
              <p className="text-zinc-700">总价（实时计算）</p>
              <p className="text-2xl font-semibold text-blossom">¥{total}</p>
            </div>

            <button type="submit" className="rounded-full bg-zinc-900 px-6 py-3 text-white transition hover:-translate-y-0.5 hover:bg-blossom">
              提交订单
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </main>
  );
}
