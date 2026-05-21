import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteReviews() {
    return (
        <div className="h-[20rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
                items={reviews}
                direction="right"
                speed="slow"
            />
        </div>
    );
}

const reviews = [
    {
        quote: "Quesabirria, rica, buen sabor, me regalaron un vasito de consome muy rico, todo con casi nada de grasa. También el café se agradece que sea recién preparado. Los chic@s que atienden muy amables.",
        name: "Carmen Rivera",
        title: "Google Reviews",
    },
    {
        quote: "Lo recomiendo ampliamente, es un lugar limpio. Probé los tacos de birria están muy ricos y los acompañas con un vasito de consome. A mi hijo le encantan las alitas con papas.",
        name: "Liber Cori",
        title: "Google Reviews",
    },
    {
        quote: "Las hamburguesas tienen buen sabor, se nota que es carne de buena calidad. Es un lugar con ambiente familiar, para platicar y comer a gusto. También tienen un arcade para jugar.",
        name: "Israel García",
        title: "Local Guide",
    },
    {
        quote: "Todos los alimentos siempre han sido de calidad. Por la mañana venden birria y por la noche hamburguesas, boneless y alitas. ✨",
        name: "Fer Perea",
        title: "Local Guide",
    },
];
