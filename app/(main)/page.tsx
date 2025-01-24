import { RainbowBadge } from "@/components/rainbow-badge";
import { ShimmerButton } from "@/components/shimmer-button";

export default function Home() {
  return (
    <main>
      <section className="grid grid-cols-4 gap-10 py-20 items-center justify-center align-middle">
        <div>
          <RainbowBadge>
            Badge
          </RainbowBadge>
        </div>
        <div>
          <ShimmerButton>
            <span className="text-sm">Shimmer</span>
          </ShimmerButton>
        </div>
      </section>
    </main>
  );
}
