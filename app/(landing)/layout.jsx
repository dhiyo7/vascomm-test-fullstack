// import getCurrentUser from '@/actions/getCurrentUser'
// import { AuthProvider } from '@/providers/AuthProvider'

import Footer from '@/components/landing/Footer'
import LandingNavbar from '@/components/landing/navbar/Navbar'

const LandingLayout = async ({ children }) => {
  // const currentUser = await getCurrentUser();

  return (
    // <AuthProvider>
      <main className="h-full overflow-auto bg-white">
        <LandingNavbar />

        <div className="mt-[5rem] py-8">{children}</div>
        <Footer />

        <div className="w-full h-6 bg-blue-100"></div>
      </main>
    // </AuthProvider>
  );
};

export default LandingLayout;
