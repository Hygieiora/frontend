import localFont from "next/font/local";

const MontserratRegular = localFont({
  src: "../../public/Montserrat-Regular.ttf",
});
const MontserratBold = localFont({ src: "../../public/Montserrat-Bold.ttf" });
const InriaRegular = localFont({ src: "../../public/InriaSerif-Regular.ttf" });
const SpaceRegular = localFont({
  src: "../../public/SpaceGrotesk-Regular.ttf",
});
const SpaceBold = localFont({ src: "../../public/SpaceGrotesk-Bold.ttf" });
const InriaBold = localFont({ src: "../../public/InriaSerif-Bold.ttf" });

export {
  InriaRegular,
  SpaceRegular,
  SpaceBold,
  MontserratRegular,
  MontserratBold,
  InriaBold,
};
