'use client';
import React, { useEffect, useState } from "react";

const Typewriter = ({ fields }: { fields: { name: string; }[]; }) => {

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
            <p className='typewrite-text' style={{ "--stepCount": fields[fieldIndex].name.length } as React.CSSProperties} onAnimationIteration={onAnimationIteration}>{fields[fieldIndex].name}</p>
        </div>

    );
};

export default Typewriter;