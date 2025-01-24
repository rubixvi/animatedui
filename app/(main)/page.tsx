import { RainbowBadge } from "@/components/rainbow-badge";
import { ShimmerButton } from "@/components/shimmer-button";
import { ShinyButton } from "@/components/shiny-button"
import { InteractiveHoverButton } from '@/components/interactive-hover-button';
import { AnimatedSubscribeButton } from '@/components/animated-subscribe-button'
import { PulsatingButton } from '@/components/pulsating-button'

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
        <div>
          <ShinyButton>
            Shiny
          </ShinyButton>
        </div>
        <div>
          <InteractiveHoverButton>
            Interactive
          </InteractiveHoverButton>
        </div>
        <div>
          <AnimatedSubscribeButton>
          <span className="group inline-flex items-center">
            Follow
          </span>
          <span className="group inline-flex items-center">
            Subscribed
          </span>
          </AnimatedSubscribeButton>
        </div>
        <div>
          <PulsatingButton>
            <span className="font-medium text-sm pb-0.5">Pulsating</span>
          </PulsatingButton>
        </div>
      </section>
    </main>
  );
}
