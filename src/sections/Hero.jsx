import HeroWistiaVideo from "../components/hero/HeroWistiaVideo";
import RevealOnScroll from "../common/RevealOnScroll";
import ScheduleCallButton from "../common/ScheduleCallButton";
import Logo from "../common/Logo";

// Hero Components
import HeroHeadline from "../components/hero/HeroHeadline";
import HeroSubheadline from "../components/hero/HeroSubheadline";
import HeroSocialProof from "../components/hero/HeroSocialProof";
import HeroComparisonCards from "../components/hero/HeroComparisonCards";

// Data
import { heroContent } from "../data/hero/content";

// Constants
import { ANIMATION_DELAYS } from "../constants/animations";

/**
 * Hero Section component
 * Main landing section with headline, CTA, social proof, and results gallery
 * @returns {JSX.Element} Rendered Hero section
 */
const Hero = () => {
  return (
    <section className="relative flex flex-col gap-9 overflow-hidden px-4 text-center text-white md:px-6 lg:px-8">
      {/* === Hero Header === */}
      <header className="items.center relative flex w-full flex-col justify-center">
        {/* === Content with relative z-index === */}
        <div className="relative z-10 flex flex-col gap-9">
          {/* Logo */}
          <Logo
            src={heroContent.logo.src}
            alt={heroContent.logo.alt}
            link={heroContent.logo.link}
          />

          {/* Main Headline */}
          <HeroHeadline
            line1={heroContent.headline.line1}
            line2={heroContent.headline.line2}
          />

          {/* Subheadline */}
          <HeroSubheadline
            line1Start={heroContent.subheadline.line1Start}
            highlight={heroContent.subheadline.highlight}
            line1End={heroContent.subheadline.line1End}
          />

          {/* Hero Video */}
          <HeroWistiaVideo />

          {/* Social Proof / Rating */}
          <HeroSocialProof
            avatars={heroContent.socialProof.avatars}
            rating={heroContent.socialProof.rating}
            ratingText={heroContent.socialProof.ratingText}
            handle={heroContent.socialProof.handle}
          />
        </div>
      </header>

      {/* === Additional Content === */}
      <article className="mx-auto flex max-w-[1300px] flex-col gap-9">
        {/* Schedule Call Button */}
        <RevealOnScroll direction="up" delay={ANIMATION_DELAYS.HERO_CTA}>
          <ScheduleCallButton
            className="mb-20"
            href={heroContent.cta.url}
            showArrow
          />
        </RevealOnScroll>

        {/* What It Is and What It Isn't */}
        {/* <HeroComparisonCards
          notWhatItIs={heroContent.comparison.notWhatItIs}
          whatItIs={heroContent.comparison.whatItIs}
        /> */}
      </article>
    </section>
  );
};

export default Hero;
