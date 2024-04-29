import Header from "./header";
import Footer from "./footer";
import {
  HeadlessConfig,
  SearchHeadlessProvider,
  provideHeadless,
} from "@yext/search-headless-react";
import searchConfig from "./searchConfig";
import { useState } from "react";
  import Ce_site from "../types/site";
type Props = {
  _site?: Ce_site;
  children?: React.ReactNode;
};
const PageLayout = ({ _site, children }: Props) => {
 
  return (
    <div className="min-h-screen">
      <Header _site={_site} />
      <div className="py-8">
        <SearchHeadlessProvider searcher={provideHeadless(searchConfig)}>
          {children}
        </SearchHeadlessProvider>
      </div>
      <Footer _site={_site}></Footer>
    </div>
  );
};

export default PageLayout;
