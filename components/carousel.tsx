"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

export const Carousel = () => {
	const [emblaRef] = useEmblaCarousel({ loop: true }, [
		Autoplay({ delay: 8000 }),
	]);

	return (
		<div
			className="embla overflow-hidden rounded-md"
			ref={emblaRef}>
			<div className="embla__container flex h-98">
				<div className="embla__slide relative w-full h-full flex-none">
					<Image
						priority
						fill
						alt="NextUI hero Image"
						className="object-cover"
						src={"/main.webp"}
					/>
				</div>
				<div className="embla__slide relative w-full h-full flex-none">
					<Image
						fill
						alt="NextUI hero Image"
						className="object-cover"
						src={"/main.webp"}
					/>
				</div>
				<div className="embla__slide relative w-full h-full flex-none">
					<Image
						fill
						alt="NextUI hero Image"
						className="object-cover"
						src={"/main.webp"}
					/>
				</div>
				<div className="embla__slide relative w-full h-full flex-none">
					<Image
						fill
						alt="NextUI hero Image"
						className="object-cover"
						src={"/main.webp"}
					/>
				</div>
			</div>
		</div>
	);
};
