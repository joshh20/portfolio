import { MetadataRoute } from "next";

export default function Robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: process.env?.ROBOTS_PATH_ALLOWED ?? "",
            disallow: process.env?.ROBOTS_PATH_DISALLOWED ?? "/",
        },
    };
}
