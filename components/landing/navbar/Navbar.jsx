'use client';
import Container from '@/components/Container'

import Logo from './Logo'
import Search from './Search'
import UserMenu from './UserMenu'

const LandingNavbar = ({ currentUser }) => {
  return (
    <nav className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-4">
            <Logo />
            <Search />
            <UserMenu  />
            {/*<UserMenu currentUser={currentUser} />*/}
          </div>
        </Container>
      </div>
    </nav>
  );
};

export default LandingNavbar;
