/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";
import configData from "@/configData.json";
import getEnvVariable from "@/lib/utils/get-env-variable";

// Image metadata
export const alt = `${configData.metadata.title}`;
export const size = {
    width: 1200,
    height: 630,
};

export default function OpenGraphImage() {
    return new ImageResponse(
        (
            <div
                tw="flex flex-col p-4 justify-center items-center w-full h-full"
                style={{
                    backgroundImage: `url(${getEnvVariable("HOST_URI")}/${
                        configData.metadata.opengraphBackground
                    })`,
                    backgroundSize: `${size.width} ${size.height}`,
                }}
            >
                <img
                    src={`${getEnvVariable("HOST_URI")}/${
                        configData.logos.siteLogo.filename
                    }`}
                    alt=""
                    width={configData.logos.siteLogo.size.width}
                    height={configData.logos.siteLogo.size.height}
                />
                <div tw="rounded-lg bg-slate-50/80 text-[#172554] flex flex-col justify-center items-center px-6 mt-10">
                    <h2 tw="text-4xl font-bold">
                        {configData.metadata.opengraphTitle}
                    </h2>
                    <p tw="text-3xl font-bold">{configData.tournamentDate}</p>
                </div>
            </div>
        ),
        {
            ...size,
            debug: false,
        }
    );
}
