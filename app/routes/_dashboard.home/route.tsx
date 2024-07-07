import { LayoutBody, LayoutHeader } from "~/components/custom/layout";
import { Search } from "~/components/search";
import ThemeSwitch from "~/components/theme-switch";
import { TopNav } from "~/components/top-nav";
import { UserNav } from "~/components/user-nav";
import { Layout } from "~/root";

const topNav = [
  {
    title: "Overview",
    href: "dashboard/overview",
    isActive: true,
  },
  {
    title: "Customers",
    href: "dashboard/customers",
    isActive: false,
  },
  {
    title: "Products",
    href: "dashboard/products",
    isActive: false,
  },
  {
    title: "Settings",
    href: "dashboard/settings",
    isActive: false,
  },
];

const Home = () => {
  return (
    <Layout>
      <LayoutHeader>
        <TopNav links={topNav} />
        <div className="flex items-center ml-auto space-x-4">
          <Search />
          <ThemeSwitch />
          <UserNav />
        </div>
      </LayoutHeader>
      <LayoutBody className="space-y-4">
        {/* Body goes here */}
      </LayoutBody>
    </Layout>
  );
};

export default Home;
