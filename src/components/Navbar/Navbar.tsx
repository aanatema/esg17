import useIsMobile from "@/hooks/use-is-mobile";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
    const { isMobile } = useIsMobile();

return (
  <div className={isMobile ? 'mobile-layout' : 'desktop-layout'}>
    {isMobile ? (
      <MobileNavbar />
    ) : (
      <DesktopNavbar />
    )}
  </div>
);
}