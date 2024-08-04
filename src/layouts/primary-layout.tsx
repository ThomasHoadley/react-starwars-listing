import { ReactNode } from "react";
import { PageContainer } from "../components/atoms/containers";
import Header from "../components/organisms/header";

function PrimaryLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-gradient-to-b from-slate-900 to-slate-700 text-white h-screen">
      <Header />
      <PageContainer className="pt-8">
        <main>{children}</main>
      </PageContainer>
    </div>
  );
}

export default PrimaryLayout;
