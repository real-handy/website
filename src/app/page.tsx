import Footer from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import Hero from "@/components/layout/hero";
import { RandomConversations } from "@/components/layout/random-conversations";
import Roles from "@/components/layout/roles";

const stats = [
  { id: 1, name: 'Teams Built', value: '10+' },
  { id: 2, name: 'Transactions Processed', value: '10t+' },
  { id: 3, name: 'Projects Completed', value: '90%' },
  { id: 4, name: 'Projects Deployed and Scaled', value: '16' },
]

export default async function Home() {
  return (
    <>
      <Header 
        title="real handy" 
        navigation={[
          { label: "home", href: '/' },
          { label: "roles", href: '/#roles' },
          { label: "conversations", href: '/conversations' },
          { label: "connect", href: '/#connect' },
          { label: "mentoring", href: '/connect#mentoring' },
          { label: "coaching", href: '/connect#coaching'},
        ]}
      />
      <main className="bg-gray-900 bg-center bg-repeat bg-[url('bg.svg')]">
        <Hero />
        <div className="mx-auto mb-32 max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
              <h2 className="text-base font-semibold leading-8 text-indigo-400">Our track record</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Trusted by 20+ startups worldwide.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-300">Over 20 years of experience building and scaling engineering teams & systems. From pre-seed stage through Series B and beyond, experianced CTO, technical co-founder, and head of engineering driving product execution and rapid growth at numerous successful startups.</p>
            </div>
            <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-white sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.id} className="flex flex-col gap-y-3 border-l border-white/10 pl-6">
                  <dt className="text-sm leading-6">{stat.name}</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        <Roles />
        <RandomConversations />
      </main>
      <Footer />
    </>
  );
}
