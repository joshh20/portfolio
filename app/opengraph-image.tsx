/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";
import configData from "@/assets/configData.json";
import businessHeadshot from "@/public/Business Headshot.jpeg";
import Image from "next/image";

function generateDynamicBackgroundURL() {
    return `https://picsum.photos/1200/630?blur=2&random=${parseInt(
        Math.random().toString().slice(2)
    )}`;
}

export default async function OpenGraphImage() {
    return new ImageResponse(
        (
            <div
                tw="flex flex-row w-full h-full items-center justify-center"
                style={{
                    backgroundImage: `url('${generateDynamicBackgroundURL()}')`,
                    backgroundSize: "cover",
                }}
            >
                <div tw="flex items-center">
                    <Image
                        src={businessHeadshot}
                        height="772"
                        width="580"
                        alt=""
                        tw="rounded-full w-36 h-36 mr-30"
                        style={{
                            boxShadow: "0px 4px 12px dimgray",
                            border: "4px solid lightslategray",
                        }}
                    />
                    <div
                        tw="flex flex-col items-center rounded-2xl px-12 py-4 bg-slate-50"
                        style={{
                            boxShadow: "0px 4px 12px dimgray",
                            backgroundImage:
                                "linear-gradient(145deg, rgba(6, 182, 212, 0.3), rgba(192, 132, 252, 0.3))",
                        }}
                    >
                        <h1
                            tw="text-5xl"
                            style={{
                                backgroundImage:
                                    "linear-gradient(90deg, #14b8a6, #a855f7, #f97316)",
                                color: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            Josh Hittie
                        </h1>
                        <h2 tw="text-3xl text-orange-500">Web Developer</h2>
                    </div>
                </div>
            </div>
        ),
        {
            width: 1200,
            height: 630,
            debug: false,
        }
    );
}
