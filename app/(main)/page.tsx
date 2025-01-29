import { RainbowBadge } from "@/components/ui/rainbow-badge";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { ShinyButton } from "@/components/ui/shiny-button"
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button';
import { AnimatedSubscribeButton } from '@/components/ui/animated-subscribe-button'
import { PulsatingButton } from '@/components/ui/pulsating-button'
import { RippleButton } from '@/components/ui/ripple-button'
import { MarqueeDemo } from '@/components/marquee/horizontal'
import { MarqueeDemoVertical } from '@/components/marquee/vertical'
import { Marquee3D } from '@/components/marquee/3d'

export default function Home() {
  return (
    <main>
      <section className="grid grid-cols-2 gap-10 py-20 items-center justify-center align-middle">
        <div>
          <MarqueeDemo />
        </div>
        <div>
          <MarqueeDemoVertical />
        </div>
        <div>
          <Marquee3D />
        </div>
      </section>
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
        <div>
          <RippleButton rippleColor="#ADD8E6">
            <span className="font-medium text-sm pb-0.5">Ripple</span>
          </RippleButton>
        </div>
      </section>
    </main>
  );
}
