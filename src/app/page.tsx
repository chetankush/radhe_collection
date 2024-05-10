import Image from "next/image";
import Link from 'next/link';
import Header from '../components/Header';  // Assuming Header is exported from this path
import HomePage from '../components/HomePage';  // Assuming HomePage is exported from this path
import Footer from '../components/Footer';  // Assuming Footer is exported from this path

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header/>
      <HomePage/>
      <Footer/>
    </main>
  );
}
