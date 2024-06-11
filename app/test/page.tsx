import businessHeadshot from "@/public/Business Headshot.jpeg";
import Image from "next/image";

export default function Test() {
    return <Image src={businessHeadshot} height="772" width="580" alt="" />;
}
