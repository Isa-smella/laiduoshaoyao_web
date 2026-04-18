import Link from 'next/link';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { flowerCalendar, highlights, products } from '@/lib/mock-data';

const orderSteps = ['选送花日期', '选红花/白花数量', '填联系人', '选自提或配送', '提交订单'];

export default function HomePage() {
  return (
    <main className="min-h-screen pb-10">
      <Navbar />

      <section className="relative mx-auto mt-6 max-w-6xl overflow-hidden rounded-[2rem] border border-white/50 bg-gradient-to-br from-petal via-cream to-leaf px-6 py-16 shadow-floaty md:px-12">
        {[...Array(12)].map((_, i) => (
          <span
            key={i}
            className="petal animate-drift"
            style={{
              left: `${(i + 1) * 8}%`,
              top: `${(i % 5) * 12}%`,
              animationDelay: `${i * 0.7}s`
            }}
          />
        ))}
        <div className="relative z-10 max-w-3xl">
          <p className="mb-3 inline-block rounded-full bg-white/80 px-3 py-1 text-xs text-zinc-600">四川中江产地直采 · 4月限定</p>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 md:text-6xl">来朵芍药花</h1>
          <p className="mt-4 text-lg leading-relaxed text-zinc-700">
            来自中江产地的新鲜芍药花，4月限时开卖，直达成都，也可快递到家。
            花在地里刚醒，你家门口就能闻到春天。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/order" className="rounded-full bg-zinc-900 px-6 py-3 text-sm text-white transition hover:-translate-y-0.5 hover:bg-blossom">
              现在下单
            </Link>
            <a href="#calendar" className="rounded-full border border-zinc-300 bg-white/80 px-6 py-3 text-sm text-zinc-700 transition hover:-translate-y-0.5 hover:border-blossom hover:text-blossom">
              看看本月花期
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-12 grid max-w-6xl gap-6 px-4 md:grid-cols-2 md:px-6">
        <article className="soft-card p-6">
          <h2 className="text-2xl font-semibold">我们是怎么卖花的？</h2>
          <p className="mt-4 leading-7 text-zinc-700">
            每年 4 月，我妈妈会去四川中江找熟悉的种植户，挑当天最精神的芍药花收回来。以前主要送到成都团购客户手里，
            现在也可以走快递，把这一口新鲜寄到更多地方。
          </p>
          <p className="mt-3 leading-7 text-zinc-700">
            不搞花里胡哨供应链，只有“产地直采 + 认真送花”。新鲜、便宜、优质，这三件事我们每天都盯着。
          </p>
        </article>
        <article className="soft-card p-6">
          <h2 className="text-2xl font-semibold">妈妈的故事</h2>
          <p className="mt-4 leading-7 text-zinc-700">
            这个站是我帮妈妈做的。她负责在地里看花，我负责在网页里把花摆好。
            所以你看到的不是“品牌包装项目”，而是一个真实卖花家庭的在线摊位。
          </p>
          <p className="mt-3 text-zinc-700">一句话版本：花先长在地里，再来到网页里。🌱</p>
        </article>
      </section>

      <section className="mx-auto mt-12 max-w-6xl px-4 md:px-6">
        <h2 className="text-2xl font-semibold">为什么大家愿意复购？</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-4">
          {highlights.map((item) => (
            <article key={item.title} className="soft-card group p-5 transition hover:-translate-y-1 hover:shadow-floaty">
              <div className="text-3xl transition group-hover:animate-bob">{item.icon}</div>
              <h3 className="mt-3 font-medium">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="calendar" className="mx-auto mt-12 max-w-6xl px-4 md:px-6">
        <div className="soft-card overflow-hidden p-6">
          <h2 className="text-2xl font-semibold">花花日历（4月）</h2>
          <p className="mt-2 text-sm text-zinc-600">点击日期可查看当天安排（示例数据）</p>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {flowerCalendar.map((day) => (
              <details key={day.date} className="rounded-2xl border border-zinc-200/70 bg-white/75 p-4">
                <summary className="cursor-pointer list-none">
                  <p className="text-sm text-zinc-500">{day.date}</p>
                  <p className="font-medium text-zinc-800">{day.type}</p>
                </summary>
                <p className="mt-3 text-sm text-zinc-600">{day.detail}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-6xl px-4 md:px-6">
        <h2 className="text-2xl font-semibold">本季在售</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {products.map((product) => (
            <article key={product.id} className="soft-card p-5 transition hover:-translate-y-1">
              <div className="text-4xl">{product.image}</div>
              <h3 className="mt-3 font-medium">{product.name}</h3>
              <p className="mt-1 text-sm text-zinc-600">{product.desc}</p>
              <div className="mt-4 flex items-center justify-between text-sm">
                <span className="rounded-full bg-leaf px-3 py-1 text-moss">{product.spec}</span>
                <span className="font-semibold text-blossom">¥{product.price}</span>
              </div>
              <p className="mt-2 text-xs text-zinc-500">{product.stock}</p>
              <Link href="/order" className="mt-4 inline-flex rounded-full bg-zinc-900 px-4 py-2 text-sm text-white transition hover:bg-blossom">
                加入订单
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-6xl px-4 md:px-6">
        <div className="soft-card p-6">
          <h2 className="text-2xl font-semibold">下单流程（很简单）</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-5">
            {orderSteps.map((step, index) => (
              <div key={step} className="rounded-2xl border border-zinc-200/60 bg-white/70 p-4 text-sm">
                <p className="text-xs text-zinc-500">STEP {index + 1}</p>
                <p className="mt-2 font-medium">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
