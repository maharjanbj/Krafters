import { AppShell, Box, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Logo from '../../../assets/react.svg';
import { NavLink } from 'react-router-dom';
import { Search } from 'tabler-icons-react';
import { Bell } from 'tabler-icons-react';
import { Home } from 'tabler-icons-react';
import { Book } from 'tabler-icons-react';
import { Users } from 'tabler-icons-react';
import { BrandBlogger } from 'tabler-icons-react';
import { InfoSquare } from 'tabler-icons-react';
import { QuestionMark } from 'tabler-icons-react';
import { DashboardRoutes } from '../dashboard-routes';

const navItem = [
  {
    label: 'Dashboard',
    path: '/',
    icon: <Home size={30} strokeWidth={2} color={'black'} />,
  },
  {
    label: 'Courses',
    path: '/courses',
    icon: <Book size={30} strokeWidth={2} color={'black'} />,
  },
  {
    label: 'Categories',
    path: '/categories',
    icon: <Book size={30} strokeWidth={2} color={'black'} />,
  },
  {
    label: 'User',
    path: '/user',
    icon: <Users size={30} strokeWidth={2} color={'black'} />,
  },
  {
    label: 'Blogs',
    path: '/blogs',
    icon: <BrandBlogger size={30} strokeWidth={2} color={'black'} />,
  },
  {
    label: 'Contact',
    path: '/contact',
    icon: <InfoSquare size={30} strokeWidth={2} color={'black'} />,
  },
  {
    label: 'Help & Support',
    path: '/help',
    icon: <QuestionMark size={30} strokeWidth={2} color={'black'} />,
  },
];

export function BasicAppShell() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 65 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
    >
      <AppShell.Header>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <Box className="h-xxl w-full flex items-center p-sm">
          <div className="font-black text-4xl w-[20%]">Krafters</div>
          <div className="flex justify-between h-xl w-full">
            <div className="flex items-center bg-gray-100 w-1/2 rounded-lg p-xs">
              <Search size={30} strokeWidth={2} color={'black'} />
              <input
                type="text"
                placeholder="Search here...."
                className="outline-none cursor-pointer border-none p-xs w-full bg-transparent"
              />
            </div>
            <div className="flex items-center">
              <Bell size={30} strokeWidth={2} color={'black'} />
              <img src={Logo} alt="logo" className="pl-xs" />
            </div>
          </div>
        </Box>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        {navItem.map((v, key) => (
          <div key={key}>
            <NavLink
              to={v.path}
              className="text-lg no-underline text-black font-semibold flex items-center p-xs"
            >
              {v.icon}
              {v.label}
            </NavLink>
          </div>
        ))}
      </AppShell.Navbar>
      <AppShell.Main>
        <DashboardRoutes/>
      </AppShell.Main>
    </AppShell>
  );
}
