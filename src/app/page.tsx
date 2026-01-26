import Header from "@/components/layout/Header";
import RenderingGrid from "@/components/layout/RenderingGrid";
import RenderingSection from "@/components/layout/RenderingSection";
import SSRCard from "@/components/SSRCard";
import CSRCard from "@/components/CSRCard";

export default function MainPage() {
  return (
    <main className="min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <Header />
        <RenderingGrid>
          <RenderingSection title="Client-Side Rendering" dotColor="pink">
            <CSRCard />
          </RenderingSection>
          <RenderingSection title="Server-Side Rendering" dotColor="blue">
            <SSRCard />
          </RenderingSection>
        </RenderingGrid>
      </div>
    </main>
  );
}
