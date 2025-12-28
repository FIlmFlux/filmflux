{/* This holds:
Background image
Movie title
Description
CTA buttons (Watch Trailer, Details) */}
const HeroSection = () => {
  return (
        <div className="absolute inset-0">
          <img
        src="@/assets/post1.png"
        alt="Dune Part Two"
        className="h-full w-full object-cover"
      />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

      </div>

);}

export default HeroSection;