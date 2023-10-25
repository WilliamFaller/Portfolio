'use client'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'

enum Tab {
  Home = '/',
  Project = '/projects',
  About = '/about',
}

export default function Navbar() {
  const pathName = usePathname();
  const [activeTab, setActiveTab] = useState(Tab.Home);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (pathName.startsWith(Tab.Project)) {
      setActiveTab(Tab.Project);
    } else if (pathName.startsWith(Tab.About)) {
      setActiveTab(Tab.About);
    } else {
      setActiveTab(Tab.Home);
    }
  }, [pathName]);

  const tabs = [
    { key: Tab.Home, label: 'Home' },
    { key: Tab.Project, label: 'Projetos' },
    { key: Tab.About, label: 'Sobre Mim' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="md:hidden flex justify-between items-center p-4">
        <h1 className="text-violet-400">Portfolio</h1>
        <button onClick={toggleMenu} className="text-violet-400">
          {isOpen ? 'Fechar' : 'Menu'}
        </button>
      </div>
      <div className="hidden md:flex md:justify-between items-center p-4">
        <div className="flex items-center">
          <h1 className="text-violet-400">Portfolio</h1>
        </div>
        <ul className="flex">
          {tabs.map((tab) => (
            <li
              key={tab.key}
              className={`mr-6 ${activeTab === tab.key ? 'text-violet-400' : 'text-white'} hover:text-violet-400`}
            >
              <Link href={`${tab.key}`}>
                {tab.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link target='_blank' rel='noopener noreferrer' href="https://docs.google.com/document/d/1CJYq0ZEoczFxtSnSUOvxLMNda10OLzDo/edit?usp=sharing&ouid=111045070955495102417&rtpof=true&sd=true">
          <div className="border px-3 rounded-lg p-2 cursor-pointer border-violet-400">
            <button className="text-violet-400">Curriculo</button>
          </div>
        </Link>
      </div>
      <nav className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col ml-4">
          {tabs.map((tab) => (
            <li
              key={tab.key}
              className={`mb-2 ${activeTab === tab.key ? 'text-violet-400' : 'text-white'} hover:text-violet-400`}
            >
              <Link href={`${tab.key}`}>
                {tab.label}
              </Link>
            </li>
          ))}
          <li className="mb-2">
            <a href="https://docs.google.com/document/d/1CJYq0ZEoczFxtSnSUOvxLMNda10OLzDo/edit?usp=sharing&ouid=111045070955495102417&rtpof=true&sd=true">
              <button className="text-violet-400 border rounded-lg p-1 cursor-pointer border-violet-400">
                Curriculo
              </button>
            </a>
          </li>
        </ul>
      </nav>
      <hr />
    </>
  );
}