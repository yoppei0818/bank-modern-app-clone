import { Layout } from "./Layout";
import { useProps } from "./useProps";

export const Navbar = () => {
  return <Layout {...useProps()} />;
};
