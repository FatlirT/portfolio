'use client';
import React, { useState } from "react";

import { ImgHTMLAttributes } from "react";

interface props extends ImgHTMLAttributes<HTMLImageElement> {
    className: string;
    fields: { name: string; }[];

}

const Typewriter = ({ fields, className }: props) => {

    const [fieldIndex, setFieldIndex] = useState(0);

    const onAnimationIteration = (event: React.AnimationEvent<HTMLParagraphElement>) => {
        if (event.animationName === "typing") nextField();
    };

    const nextField = () => {
        if (fieldIndex === fields.length - 1) setFieldIndex(0);
        else setFieldIndex(fieldIndex + 1);
    };

    return (

        <div className="typewrite">
            <p className={"typewrite-text text-[8vw] " + className} style={{ "--stepCount": fields[fieldIndex].name.length } as React.CSSProperties} onAnimationIteration={onAnimationIteration}>{fields[fieldIndex].name}</p>
        </div>

    );
};

export default Typewriter;