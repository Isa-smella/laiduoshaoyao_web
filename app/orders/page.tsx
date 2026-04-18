import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { orderRows } from '@/lib/mock-data';

const statusColor: Record<string, string> = {
  待确认: 'bg-amber-100 text-amber-700',
  已确认: 'bg-sky-100 text-sky-700',
  已完成: 'bg-emerald-100 text-emerald-700',
  已取消: 'bg-zinc-200 text-zinc-600'
};

export default function OrdersPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="mx-auto mt-8 max-w-5xl px-4 md:px-6">
        <div className="soft-card p-6 md:p-8">
          <h1 className="text-3xl font-semibold">我的订单</h1>
          <p className="mt-2 text-sm text-zinc-600">输入手机号查看订单（当前为演示数据）</p>

          <div className="mt-5 grid gap-3 md:grid-cols-[1fr_auto]">
            <input placeholder="请输入下单手机号" className="rounded-xl border border-zinc-200 bg-white px-4 py-3" />
            <button className="rounded-xl bg-zinc-900 px-4 py-3 text-white hover:bg-blossom">查询订单</button>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead>
                <tr className="border-b border-zinc-200 text-zinc-500">
                  <th className="px-3 py-3">订单号</th>
                  <th className="px-3 py-3">日期</th>
                  <th className="px-3 py-3">商品</th>
                  <th className="px-3 py-3">配送方式</th>
                  <th className="px-3 py-3">总价</th>
                  <th className="px-3 py-3">状态</th>
                </tr>
              </thead>
              <tbody>
                {orderRows.map((row) => (
                  <tr key={row.id} className="border-b border-zinc-100">
                    <td className="px-3 py-3 font-medium text-zinc-800">{row.id}</td>
                    <td className="px-3 py-3">{row.date}</td>
                    <td className="px-3 py-3">{row.items}</td>
                    <td className="px-3 py-3">{row.delivery}</td>
                    <td className="px-3 py-3">¥{row.total}</td>
                    <td className="px-3 py-3">
                      <span className={`rounded-full px-2.5 py-1 text-xs ${statusColor[row.status]}`}>{row.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
