import { Header } from "./components/layout/header";
import { ProfileDropdown } from "./components/profile-dropdown";
import { Tasks } from "./tasks";

const VerificationDashboard = () => {
  return (
    <div className=" ">
      {" "}
      <Header>
        {/* <TopNav links={topNav} /> */}
        <div className="ms-auto flex items-center space-x-4">
          {/* <Search />
              <ThemeSwitch />
              <ConfigDrawer /> */}
          <ProfileDropdown />
        </div>
      </Header>
      <main className="px-6">
        <Tasks />
      </main>
    </div>
  );
};

export default VerificationDashboard;
