import type { APIRoute } from "astro";
import { createElement } from "react";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import fs from "node:fs";
import path from "node:path";
import { configData } from "@/assets/configData";

const fullName = `${configData.name.first} ${configData.name.last}`;
const jobTitle = configData.jobTitle;
const headshotFilename = configData.metadata.businessHeadshot.filenameJpeg;
const bgFilename = configData.metadata.opengraph.backgroundFilename;
const fontPath = "src/assets/fonts/Nunito-Regular.ttf";

function loadFont(filePath: string): Buffer {
  const resolved = path.resolve(filePath);
  return fs.readFileSync(resolved);
}

function loadImageAsBase64(filePath: string): string {
  const resolved = path.resolve(`public/${filePath}`);
  const buffer = fs.readFileSync(resolved);
  return `data:image/jpeg;base64,${buffer.toString("base64")}`;
}

export const GET: APIRoute = async () => {
  const nunitoFont = loadFont(fontPath);

  const headshotBase64 = loadImageAsBase64(headshotFilename);
  const bgBase64 = loadImageAsBase64(bgFilename);

  const svg = await satori(
    createElement(
      "div",
      {
        style: {
          display: "flex",
          flexDirection: "row",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Nunito",
          backgroundImage: `url(${bgBase64})`,
          backgroundSize: "cover",
        },
      },
      createElement(
        "div",
        { style: { display: "flex", alignItems: "center" } },
        createElement("img", {
          src: headshotBase64,
          width: 384,
          height: 384,
          style: {
            borderRadius: "50%",
            width: 384,
            height: 384,
            marginRight: 80,
            objectFit: "cover",
            boxShadow: "0px 4px 12px dimgray",
            border: "4px solid lightslategray",
          },
        }),
        createElement(
          "div",
          {
            style: {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              borderRadius: 16,
              paddingLeft: 48,
              paddingRight: 48,
              paddingTop: 16,
              paddingBottom: 16,
              boxShadow: "0px 4px 12px dimgray",
              backgroundColor: "#f8fafc",
              backgroundImage:
                "linear-gradient(145deg, rgba(6, 182, 212, 0.3), rgba(192, 132, 252, 0.3))",
            },
          },
          createElement(
            "h1",
            {
              style: {
                fontSize: 96,
                lineHeight: 1.55,
                margin: 0,
                backgroundImage:
                  "linear-gradient(90deg, #14b8a6, #a855f7, #f97316)",
                color: "transparent",
                backgroundClip: "text",
              },
            },
            fullName,
          ),
          createElement(
            "h2",
            {
              style: {
                fontSize: 60,
                lineHeight: 1.55,
                margin: 0,
                color: "#f97316",
              },
            },
            jobTitle,
          ),
        ),
      ),
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Nunito",
          data: nunitoFont,
          weight: 400,
          style: "normal",
        },
      ],
    },
  );

  const resvg = new Resvg(svg, {
    fitTo: { mode: "width", value: 1200 },
  });
  const png = resvg.render().asPng();

  return new Response(new Uint8Array(png), {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=86400",
    },
  });
};
