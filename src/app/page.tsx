import { HomeContent } from '@/components/HomeContent';
import { Header } from '../components/Header';

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <Header />
      <HomeContent/>
    </main>
  );
}