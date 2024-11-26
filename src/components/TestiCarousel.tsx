import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "./ui/carousel";

export default function TestiCarousel() {
	const testimonials = [
		{
			name: "Testemunho",
			image: "/test.jpeg",
		},
		{
			name: "Testemunho 1",
			image: "/test-1.jpeg",
		},
		{
			name: "Testemunho 3",
			image: "/test-3.jpeg",
		},
		{
			name: "Testemunho 4",
			image: "/test-4.jpeg",
		},
		{
			name: "Testemunho 5",
			image: "/test-5.jpeg",
		},
		{
			name: "Testemunho 6",
			image: "/test-6.jpeg",
		},
		{
			name: "Testemunho 9",
			image: "/test-9.jpeg",
		},
		{
			name: "Testemunho 11",
			image: "/test-11.jpeg",
		},
		{
			name: "Testemunho 13",
			image: "/test-13.jpeg",
		},
	];
	return (
		<Carousel
			opts={{
				align: "start",
			}}
			className="w-full"
		>
			<CarouselContent className="">
				{testimonials.map((testimonial) => (
					<CarouselItem key={testimonial.name} className="md:basis-1/3">
						<div className="rounded-md md:h-full h-[650px] w-full mx-auto">
							<img
								src={testimonial.image}
								alt={testimonial.name}
								className="w-full h-full object-cover"
							/>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious className="hidden md:flex" />
			<CarouselNext className="hidden md:flex" />
		</Carousel>
	);
}
