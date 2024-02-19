export const useSmoothScroll = () => {
  const scrollLenis = ref(null);

  scrollLenis.value = new Lenis({
    duration: 1.2,
    orientation: "vertical",
    gestureOrientation: "vertical",
    smoothWheel: true,
  });


  scrollLenis.value.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    scrollLenis.value.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
};