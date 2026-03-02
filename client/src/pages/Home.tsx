import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import Process from '../components/home/Process';
import CallToAction from '../components/home/CallToAction';

export default function Home() {
  return (
    <div className="overflow-hidden bg-neutral-950">
      <Hero />
      <Features />
      <Process />
      <CallToAction />
    </div>
  );
}
