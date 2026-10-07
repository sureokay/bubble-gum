'use client'

import { useState } from 'react'
import {
  AlertCircle,
  Check,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Clock3,
  DoorOpen,
  Mail,
  Menu,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Users,
  Utensils,
  Wind,
  X,
} from 'lucide-react'

const checks = [
  { id: 'open', label: 'Restaurant is open on time', icon: DoorOpen },
  { id: 'ambience', label: 'Perfect ambience', icon: Sparkles },
  { id: 'smell', label: 'No bad smell', icon: Wind },
  { id: 'hands', label: 'All hands available', icon: Users },
  { id: 'arrangements', label: 'Good arrangements', icon: ClipboardCheck },
  { id: 'menu', label: 'All menu items available', icon: Utensils },
  { id: 'hiccups', label: 'Hiccups managed', icon: AlertCircle },
]

export default function Page() {
  const [completed, setCompleted] = useState<string[]>([])
  const [showContact, setShowContact] = useState(false)

  const toggleCheck = (id: string) => {
    setCompleted((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    )
  }

  const progress = Math.round((completed.length / checks.length) * 100)

  return (
    <main className="min-h-screen overflow-hidden bg-[#f6f3ed] text-[#272727]">
      <div className="mx-auto flex min-h-screen max-w-[1440px] flex-col lg:flex-row">
        <aside className="flex w-full flex-col justify-between bg-[#292929] px-6 py-7 text-[#f6f3ed] lg:min-h-screen lg:w-[310px] lg:px-8 lg:py-9">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex size-11 items-center justify-center rounded-2xl bg-[#e6b86e] text-[#292929]">
                <span className="text-xl font-black">BG</span>
              </div>
              <div>
                <p className="font-serif text-lg leading-none">Bubble Gum</p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#b9b5ad]">Restaurant</p>
              </div>
            </div>

            <div className="mt-20 hidden lg:block">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9e9a92]">Entrance desk</p>
              <h1 className="mt-5 font-serif text-5xl leading-[0.96] tracking-[-0.04em]">Keep the room<br /><span className="text-[#e6b86e]">just right.</span></h1>
              <p className="mt-7 max-w-[210px] text-sm leading-6 text-[#b9b5ad]">A simple rhythm for watching the live details that make a restaurant feel ready.</p>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-6 lg:mt-0">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9e9a92]">Your role</p>
            <p className="mt-3 text-sm leading-6 text-[#d7d3ca]">Owner · entrance desk</p>
            <button onClick={() => setShowContact((current) => !current)} className="mt-5 flex items-center gap-2 text-sm font-medium text-[#e6b86e] transition-colors hover:text-white" aria-expanded={showContact}>
              <Mail data-icon="inline-start" />
              How to reach you
              <ChevronRight className={`transition-transform ${showContact ? 'rotate-90' : ''}`} data-icon="inline-end" />
            </button>
            {showContact && <a className="mt-3 block break-all text-sm text-[#f6f3ed] underline decoration-[#e6b86e] underline-offset-4" href="mailto:example@bbbulgum.example.com">example@bbbulgum.example.com</a>}
          </div>
        </aside>

        <section className="flex-1 px-5 py-6 sm:px-8 lg:px-14 lg:py-12">
          <header className="flex items-start justify-between gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8b6b3c]">Live check-in</p>
              <h2 className="mt-3 font-serif text-4xl tracking-[-0.04em] text-[#292929] sm:text-5xl">Good to see you.</h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-[#77736c]">Walk through the room with a calm eye. Mark each detail as you check it.</p>
            </div>
            <div className="hidden size-12 items-center justify-center rounded-full border border-[#ded8ce] bg-white text-[#292929] sm:flex"><Menu data-icon="inline-start" /></div>
          </header>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-[24px] bg-[#292929] p-5 text-[#f6f3ed] sm:col-span-2">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#e6b86e]"><Clock3 data-icon="inline-start" /> Today's readiness</div>
                  <p className="mt-5 font-serif text-3xl">A thoughtful check, one step at a time.</p>
                </div>
                <div className="flex size-14 shrink-0 items-center justify-center rounded-full border border-[#e6b86e]/40 text-lg font-bold text-[#e6b86e]">{progress}%</div>
              </div>
              <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10"><div className="h-full rounded-full bg-[#e6b86e] transition-all" style={{ width: `${progress}%` }} /></div>
              <p className="mt-3 text-xs text-[#b9b5ad]">{completed.length} of {checks.length} details checked</p>
            </div>
            <div className="rounded-[24px] border border-[#ded8ce] bg-[#fffdf8] p-5">
              <div className="flex size-10 items-center justify-center rounded-2xl bg-[#eee7da] text-[#8b6b3c]"><ShieldCheck data-icon="inline-start" /></div>
              <p className="mt-8 text-sm font-semibold text-[#292929]">Your eye is the standard.</p>
              <p className="mt-2 text-sm leading-5 text-[#77736c]">Notice a hiccup? Give it your attention before it reaches the room.</p>
            </div>
          </div>

          <div className="mt-12 flex items-end justify-between gap-4">
            <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8b6b3c]">The room</p><h3 className="mt-2 font-serif text-3xl tracking-[-0.03em]">Your readiness list</h3></div>
            {completed.length > 0 && <button onClick={() => setCompleted([])} className="text-xs font-bold uppercase tracking-[0.14em] text-[#77736c] underline underline-offset-4 hover:text-[#292929]">Reset list</button>}
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {checks.map((item) => {
              const isDone = completed.includes(item.id)
              const Icon = item.icon
              return <button key={item.id} onClick={() => toggleCheck(item.id)} aria-pressed={isDone} className={`group flex min-h-[118px] flex-col justify-between rounded-[22px] border p-5 text-left transition-all hover:-translate-y-0.5 ${isDone ? 'border-[#292929] bg-[#292929] text-[#f6f3ed] shadow-lg shadow-[#292929]/10' : 'border-[#ded8ce] bg-[#fffdf8] text-[#292929] hover:border-[#aaa398]'}`}>
                <div className="flex items-start justify-between"><Icon className={isDone ? 'text-[#e6b86e]' : 'text-[#8b6b3c]'} /><span className={`flex size-7 items-center justify-center rounded-full border transition-colors ${isDone ? 'border-[#e6b86e] bg-[#e6b86e] text-[#292929]' : 'border-[#d4cec3] text-transparent group-hover:border-[#8b6b3c]'}`} aria-hidden="true">{isDone ? <Check data-icon="inline-start" /> : <Check data-icon="inline-start" />}</span></div>
                <span className="max-w-[180px] text-sm font-semibold leading-5">{item.label}</span>
              </button>
            })}
          </div>

          <div className="mt-12 flex flex-col justify-between gap-4 border-t border-[#ded8ce] pt-6 text-sm text-[#77736c] sm:flex-row sm:items-center">
            <div className="flex items-center gap-2"><MessageCircle className="text-[#8b6b3c]" /> Keep a clear line for anything that needs attention.</div>
            <a href="mailto:example@bbbulgum.example.com" className="inline-flex items-center gap-2 font-semibold text-[#292929] hover:text-[#8b6b3c]"><Mail data-icon="inline-start" /> example@bbbulgum.example.com</a>
          </div>
        </section>
      </div>
    </main>
  )
}
