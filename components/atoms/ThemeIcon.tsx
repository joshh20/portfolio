import SunIcon from "@/components/atoms/SunIcon";
import MoonIcon from "@/components/atoms/MoonIcon";
import SystemIcon from "@/components/atoms/SystemIcon";

export default function ThemeIcon({ theme }: { theme: string | undefined }) {
    switch (theme) {
        case "light":
            return <SunIcon />;
        case "dark":
            return <MoonIcon />;
        default:
            return <SystemIcon />;
    }
}
