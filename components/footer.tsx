export function Footer() {
  return (
    <footer className="mt-16 border-t border-zinc-200/70 bg-white/70">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 text-sm text-zinc-600 md:grid-cols-3 md:px-6">
        <div>
          <p className="font-semibold text-zinc-900">来朵芍药花 · 联系方式</p>
          <p className="mt-2">微信：laiduoshaoyao</p>
          <p>电话：199-0000-0420</p>
        </div>
        <div>
          <p className="font-semibold text-zinc-900">配送范围</p>
          <p className="mt-2">成都主城区当日配</p>
          <p>全国快递（次日发）</p>
        </div>
        <div>
          <p className="font-semibold text-zinc-900">收尾小句</p>
          <p className="mt-2 text-blossom">今年这一季，开得正好。🌸</p>
        </div>
      </div>
    </footer>
  );
}
