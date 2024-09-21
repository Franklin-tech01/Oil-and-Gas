import Image from 'next/image'
import React from 'react'

interface MapButton {
    width?: string;
    text: string;
    size?: string;
    weight?: string
    fontType?: string;
    hidden?: string;
    margin?: string;
    link?: string;
    bg?: string;
    textColor?: string;
    hoverBG?: string;

}
const Button: React.FC<MapButton> = ({ width, text, size, weight, fontType, hidden, margin, link, bg, textColor, hoverBG }) => {
    return (
        <a href={link} className={`flex  gap-[8px] rounded-[4px] ${margin}  justify-center px-[16px] py-[16px] ${bg || 'bg-primary'} ${hoverBG || 'hover:bg-dark'} hover:border-primary  transition-colors cursor-pointer border-2 border-primary hover:text-white  ${width} h-fit`}>
            <h1 className={`${size} ${weight} h-fit  leading-[20px] ${textColor || 'text-white'}  ${fontType}`}>{text}</h1>
            <Image
                src={'/assets/icons/chevron-right.svg'}
                alt='arrow right'
                height={20}
                width={20}
                className={`${hidden}`}
            />
        </a>
    )
}

export default Button;

// width = { 'full'} text = { 'Submit'} size = { '18px'} weight = { '400'}