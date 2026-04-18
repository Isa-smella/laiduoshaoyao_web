import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { flowerCalendar, orderRows } from '@/lib/mock-data';

export default function AdminPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="mx-auto mt-8 max-w-6xl px-4 md:px-6">
        <h1 className="text-3xl font-semibold">管理后台原型</h1>
        <p className="mt-2 text-sm text-zinc-600">简化版：看订单、改状态、看汇总、管花期。</p>

        <div className="mt-6 grid gap-4 md:grid-cols-4">
          <div className="soft-card p-4">
            <p className="text-xs text-zinc-500">本月收入</p>
            <p className="mt-2 text-2xl font-semibold text-blossom">¥31,420</p>
          </div>
          <div className="soft-card p-4">
            <p className="text-xs text-zinc-500">订单总数</p>
            <p className="mt-2 text-2xl font-semibold">286</p>
          </div>
          <div className="soft-card p-4">
            <p className="text-xs text-zinc-500">红花总量</p>
            <p className="mt-2 text-2xl font-semibold">412 扎</p>
          </div>
          <div className="soft-card p-4">
            <p className="text-xs text-zinc-500">白花总量</p>
            <p className="mt-2 text-2xl font-semibold">295 扎</p>
          </div>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <article className="soft-card p-5">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="font-semibold">订单管理</h2>
              <select className="rounded-lg border border-zinc-200 bg-white px-2 py-1 text-sm">
                <option>全部状态</option>
                <option>待确认</option>
                <option>已确认</option>
                <option>已完成</option>
                <option>已取消</option>
              </select>
            </div>
            <div className="space-y-3">
              {orderRows.map((order) => (
                <div key={order.id} className="rounded-xl border border-zinc-200/80 bg-white/80 p-3">
                  <p className="text-sm font-medium">{order.id}</p>
                  <p className="mt-1 text-xs text-zinc-500">{order.date} · {order.items}</p>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm">¥{order.total}</span>
                    <select className="rounded-lg border border-zinc-200 bg-white px-2 py-1 text-xs">
                      <option>{order.status}</option>
                      <option>待确认</option>
                      <option>已确认</option>
                      <option>已完成</option>
                      <option>已取消</option>
                    </select>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="soft-card p-5">
            <h2 className="font-semibold">花花日历管理</h2>
            <div className="mt-3 space-y-2">
              {flowerCalendar.map((item) => (
                <div key={item.date} className="grid grid-cols-[90px_1fr_auto] items-center gap-2 rounded-xl border border-zinc-200/80 bg-white/80 p-3 text-sm">
                  <span className="font-medium">{item.date}</span>
                  <input defaultValue={item.type} className="rounded-lg border border-zinc-200 px-2 py-1" />
                  <button className="rounded-lg bg-zinc-900 px-3 py-1.5 text-xs text-white">保存</button>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>
      <Footer />
    </main>
  );
}
