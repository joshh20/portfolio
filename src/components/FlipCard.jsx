import React from "react";

export default function FlipCard({ textFront, textBack, tailwindShared, tailwindFrontCard, tailwindBackCard }) {
    return (
        <>
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class={`flip-card-front flex justify-center items-center ${tailwindShared} ${tailwindFrontCard}`}>
                        {textFront}
                    </div>
                    <div class={`flip-card-back flex justify-center items-center ${tailwindShared} ${tailwindBackCard}`}>
                        {textBack}
                    </div>
                </div>
            </div>
        </>
    );
}