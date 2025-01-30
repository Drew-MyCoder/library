'use client';

import { cn } from "@/lib/utils";
import BookCoverSvg from "./BookCoverSvg";
import { IKImage } from "imagekitio-next";
import config from "@/lib/config";


type BookCoverVariant = "extraSmall" | "small" | "medium" | "regular" | "wide";

const variantSyles: Record<BookCoverVariant, string> = {
    extraSmall: 'book-cover_extra_small',
    small: 'book-cover_small',
    medium: 'book-covermedium',
    regular: 'book-cover_regular',
    wide: 'book-cover_wide',
}

interface Props {
    className?: string;
    variant?: BookCoverVariant;
    coverColor: string;
    coverImage: string;
}

const BookCover = ({ 
    className, 
    variant = 'regular', 
    coverColor = '#012B48', 
    coverImage = 'https://placehold.co/400x600.png', }: Props ) => {
  return <div className={cn('relative transition-all duration-300',
    variantSyles[variant],
    className,
  )}>
    <BookCoverSvg coverColor={coverColor} />
    <div className="absolute z-10"
    style={{ left: "12%", width: "87.5%", height: "88%" }}>
        <IKImage path={coverImage} alt="Book cover" fill className="rounded-sm object-fill"
        urlEndpoint={config.env.imagekit.urlEndpoint}
        loading="lazy"
        lqip={{ active: true }} />
    </div>
  </div>;
};

export default BookCover;
