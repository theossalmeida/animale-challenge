'use client';
import Header from './components/Header';

export default function Home() {
  return (
  <>
    <Header />
    {/* push content below the fixed header */}
    <main className="pt-[140px]">
        {/* dummy div to force scrolling */}
        <div className="h-[200vh] bg-gray-50">
          {/* you can replace this with your real content */}
        </div>
      </main>
  </>
  );
}