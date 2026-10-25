// All the text for the home page lives here.
// Facts come from vexlum.com (Products, Technology, News pages, Oct 2026).

export const navLinks = [
  { label: "Technology", href: "https://vexlum.com/technology/" },
  { label: "Products", href: "#products" },
  { label: "Company", href: "https://vexlum.com/company/" },
  { label: "News", href: "#news" },
  { label: "Careers", href: "#careers" },
];

// Short numbers shown under the hero
export const stats = [
  { value: "350–2150 nm", label: "Wavelength coverage" },
  { value: "Up to 10 W", label: "Output power" },
  { value: "< 100 Hz", label: "Free-running linewidth (instantaneous)" },
  { value: "100%", label: "Chips and lasers made in-house" },
];

export const applications = [
  {
    title: "Quantum technology",
    text: "Lasers for trapped ions, neutral atoms and atomic clocks, at the exact wavelengths these systems need.",
  },
  {
    title: "Semiconductor industry",
    text: "Compact, high-power sources for next-generation semiconductor metrology.",
  },
  {
    title: "Space and communication",
    text: "Developing a yellow guide star laser with the European Space Agency for satellite communication.",
  },
  {
    title: "Medicine",
    text: "Application-tailored wavelengths in a compact package for medical use.",
  },
];

export const products = [
  {
    name: "VALO",
    tag: "For research",
    image: "/images/green.jpg",
    text: "Built for atomic, molecular and optical physics labs. Wide tuning range for spectroscopy, and strong power at visible wavelengths.",
    points: ["700–2150 nm direct, 350–800 nm doubled", "0.5–10 W (direct)", "Coarse tuning up to 100 nm"],
    datasheet: "https://vexlum.com/wp-content/uploads/2025/11/VEXLUM_VALO_datasheet_2025-11-06_A4.pdf",
  },
  {
    name: "VXL®",
    tag: "For enterprise",
    image: "/images/vxl.jpg",
    text: "Our compact next-generation platform for system integration and 24/7 operation. Modular, so it is quick to service with spares.",
    points: ["Same wavelength range as VALO", "Smaller size, weight, power use and cost", "Built to run 24/7"],
    datasheet: "https://vexlum.com/wp-content/uploads/2025/11/VEXLUM_VXL_datasheet_2025-11-06_A4.pdf",
  },
];

// How a laser is made, in three simple steps (from the Technology page)
export const steps = [
  { number: "01", title: "Grow the chip", text: "Semiconductor gain structures grown atom layer by atom layer with molecular beam epitaxy." },
  { number: "02", title: "Process in the cleanroom", text: "State-of-the-art cleanroom processing, including advanced optical coatings." },
  { number: "03", title: "Build and test the laser", text: "Every laser is assembled and tested in Tampere, so quality is traceable end to end." },
];

export const news = [
  {
    date: "1 Sep 2026",
    title: "Erik McKee appointed President of the Americas",
    tileLabel: "Team",
    tileWord: "Americas",
    href: "https://vexlum.com/vexlum-appoints-laser-industry-expert-erik-mckee-as-president-of-the-americas-to-accelerate-growth/",
  },
  {
    date: "21 Jul 2026",
    title: "Dr. Stefan Truppe to lead Vexlum UK",
    tileLabel: "Team",
    tileWord: "United Kingdom",
    href: "https://vexlum.com/vexlum-grows-its-european-presence-and-appoints-dr-stefan-truppe-as-managing-director-of-vexlum-uk/",
  },
  {
    date: "16 Apr 2026",
    title: "Vexlum and Menlo Systems team up on optical clocks",
    tileLabel: "Partnership",
    tileWord: "Optical clocks",
    href: "https://vexlum.com/vexlum-and-menlo-systems-launch-collaboration-to-streamline-optical-clock-development/",
  },
];
