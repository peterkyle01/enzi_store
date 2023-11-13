import { Carousel } from "@/components/carousel";
import PopularProductCard from "@/components/popular-products-card";
import { Button } from "@nextui-org/button";
import {
	BadgePercent,
	BusFront,
	Quote,
	ShoppingBasket,
	Wallet,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
	return (
		<div className="mt-16">
			<section className="w-full h-auto relative">
				<Carousel />
				<div className="w-full h-98 absolute top-0 bg-gray-800/30  rounded-md"></div>
			</section>
			<section className="w-full h-24 md:h-32 flex text-gray-400">
				<div className="w-full h-full flex">
					<p className="m-auto font-agbalumo md:text-3xl">Safaricom</p>
				</div>
				<div className="w-full h-full flex">
					<p className="m-auto font-permanent_marker md:text-3xl">KCAU</p>
				</div>
				<div className="w-full h-full flex">
					<p className="m-auto font-luckiest_guy md:text-3xl">TopHill</p>
				</div>
				<div className="w-full h-full flex ">
					<p className="m-auto font-homemade_apple md:text-3xl">VillaRosa</p>
				</div>
			</section>
			<section className="w-full h-auto grid">
				<h1 className="text-center my-6 text-3xl font-agbalumo">
					Exclusive Products
				</h1>
				<h3 className="text-center my-8 text-md md:text-lg italic text-gray-500">
					Check out this week&apos;s selection of popular products.
				</h3>
				<div className="w-full h-80 md:h-96 grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4">
					<div className="w-full h-full flex flex-col">
						<div className="rounded-md w-full h-full bg-gray-500 relative overflow-hidden">
							<Image
								src={"/main.webp"}
								fill
								alt="main.webp"
							/>
						</div>
						<p className="text-center text-sm font-sans m-2">Living Room</p>
					</div>
					<div className="w-full h-full flex flex-col">
						<div className="rounded-md w-full h-full bg-gray-500 relative overflow-hidden">
							<Image
								src={"/main.webp"}
								fill
								alt="main.webp"
							/>
						</div>
						<p className="text-center text-sm font-sans m-2">Living Room</p>
					</div>
					<div className="w-full h-full flex flex-col hidden md:flex">
						<div className="rounded-md w-full h-full bg-gray-500 relative overflow-hidden">
							<Image
								src={"/main.webp"}
								fill
								alt="main.webp"
							/>
						</div>
						<p className="text-center text-sm font-sans m-2">Living Room</p>
					</div>
					<div className="w-full h-full flex flex-col hidden md:flex">
						<div className="rounded-md w-full h-full bg-gray-500 relative overflow-hidden">
							<Image
								src={"/main.webp"}
								fill
								alt="main.webp"
							/>
						</div>
						<p className="text-center text-sm font-sans m-2">Living Room</p>
					</div>
				</div>
			</section>
			<section className="w-full h-auto grid">
				<h1 className="text-center my-6 text-3xl font-agbalumo">
					Our Features Special For You
				</h1>
				<h3 className="text-center my-8 text-sm md:text-lg italic text-gray-500">
					We provide a variety of special features for all of you , to make it
					easier and you even more happy shopping here.
				</h3>
				<div className="w-full h-auto grid grid-cols-2 gap-2 md:flex md:gap-8">
					<div className="w-full h-40 md:h-60 bg-gray-100 rounded-md flex flex-col justify-evenly items-start p-2">
						<i className="w-10 md:w-16 h-10 md:h-16 bg-white flex justify-center items-center">
							<Wallet
								color="black"
								size={30}
							/>
						</i>

						<p className="font-bold text-black md:text-xl">Easy payment</p>
						<p className="text-gray-400 text-sm">
							very easy and fast payment to make it easier for users
						</p>
					</div>
					<div className="w-full h-40 md:h-60 bg-gray-100 rounded-md flex flex-col justify-evenly items-start p-2">
						<i className="w-10 md:w-16 h-10 md:h-16 bg-white flex justify-center items-center">
							<BadgePercent
								color="black"
								size={30}
							/>
						</i>

						<p className="font-bold text-black md:text-xl">Lots of promos</p>
						<p className="text-gray-400 text-sm">
							losts of interesting promotions and vouchers waiting for you
						</p>
					</div>
					<div className="w-full h-40 md:h-60 bg-gray-100 rounded-md flex flex-col justify-evenly items-start p-2">
						<i className="w-10 md:w-16 h-10 md:h-16 bg-white flex justify-center items-center">
							<BusFront
								color="black"
								size={30}
							/>
						</i>

						<p className="font-bold text-black md:text-xl">Fast shipping</p>
						<p className="text-gray-400 text-sm">
							fast delivery and can reach to the ends of the worlds
						</p>
					</div>
					<div className="w-full h-40 md:h-60 bg-gray-100 rounded-md flex flex-col justify-evenly items-start p-2">
						<i className="w-10 md:w-16 h-10 md:h-16 bg-white flex justify-center items-center">
							<ShoppingBasket
								color="black"
								size={30}
							/>
						</i>

						<p className="font-bold text-black md:text-xl">Save in cart</p>
						<p className="text-gray-400 text-sm">
							marketplace that is easy to use and doesnt bother our users at all
						</p>
					</div>
				</div>
			</section>
			<section className="w-full h-auto py-6">
				<div className="w-full h-96 flex flex-col gap-8 my-10 md:m-0 md:flex-row  md:gap-12 md:p-8">
					<div className="w-full h-full bg-red-600 relative rounded-md overflow-hidden">
						<Image
							src={"/main.webp"}
							fill
							alt="main.webp"
						/>
					</div>
					<div className="w-full h-full flex flex-col justify-evenly items-start py-4">
						<span>
							<p className="text-xl font-agbalumo py-2 md:text-4xl">
								Lots of accessories to build you home
							</p>
							<p className="text-md py-2 md:text-lg font-sans font-thin">
								lots of interesting accessories to build your rooms,accessories
								from various countries...
							</p>
						</span>
						<Button color="primary">Read more...</Button>
					</div>
				</div>
				<div className="w-full h-96 flex flex-col gap-8 my-10 md:m-0 md:flex-row-reverse md:gap-12 md:p-8">
					<div className="w-full h-full bg-red-600 relative rounded-md overflow-hidden">
						<Image
							src={"/main.webp"}
							fill
							alt="main.webp"
						/>
					</div>
					<div className="w-full h-full flex flex-col justify-evenly items-start py-4">
						<span>
							<p className="text-xl font-agbalumo py-2 md:text-4xl">
								Lots of accessories to build you home
							</p>
							<p className="text-md py-2 md:text-lg font-sans font-thin">
								lots of interesting accessories to build your rooms,accessories
								from various countries...
							</p>
						</span>
						<Button color="primary">Read more...</Button>
					</div>
				</div>
				<div className="w-full h-96 flex flex-col gap-8 my-10 md:m-0 md:flex-row  md:gap-12 md:p-8">
					<div className="w-full h-full bg-red-600 relative rounded-md overflow-hidden">
						<Image
							src={"/main.webp"}
							fill
							alt="main.webp"
						/>
					</div>
					<div className="w-full h-full flex flex-col justify-evenly items-start py-4">
						<span>
							<p className="text-xl font-agbalumo py-2 md:text-4xl">
								Lots of accessories to build you home
							</p>
							<p className="text-md py-2 md:text-lg font-sans font-thin">
								lots of interesting accessories to build your rooms,accessories
								from various countries...
							</p>
						</span>
						<Button color="primary">Read more...</Button>
					</div>
				</div>
				<div className="w-full h-96 flex flex-col gap-8 my-10 md:m-0 md:flex-row-reverse  md:gap-12 md:p-8">
					<div className="w-full h-full bg-red-600 relative rounded-md overflow-hidden">
						<Image
							src={"/main.webp"}
							fill
							alt="main.webp"
						/>
					</div>
					<div className="w-full h-full flex flex-col justify-evenly items-start py-4">
						<span>
							<p className="text-xl font-agbalumo py-2 md:text-4xl">
								Lots of accessories to build you home
							</p>
							<p className="text-md py-2 md:text-lg font-sans font-thin">
								lots of interesting accessories to build your rooms,accessories
								from various countries...
							</p>
						</span>
						<Button color="primary">Read more...</Button>
					</div>
				</div>
			</section>
			<section className="w-full h-auto">
				<p className="text-3xl text-center font-agbalumo mb-8 md:mb-12">
					Our popular product
				</p>
				<PopularProductCard />
				<div className="h-10 flex items-center justify-center my-6">
					<Button
						color="primary"
						className="md:w-1/4">
						See all product
					</Button>
				</div>
			</section>
			<section className="w-full h-auto md:h-96 flex">
				<div className="w-full md:w-3/4 h-full p-2 md:p-10 md:pl-32">
					<p className="text-3xl text-start font-serif font-black mb-8 md:mb-12 md:text-4xl">
						This is what they say
					</p>
					<span className="w-full h-10 font-bold flex gap-1">
						<i>
							<Quote
								className="rotate-180"
								size={18}
							/>
						</i>
						<p className="pt-2 text-lg">Complete store with everything i needed</p>
					</span>
					<p className="py-8 text-gray-400 italic md:py-10 md:pr-40">
						Everything is increasingly integrated so that buying becomes more efficient,just click on the store ready to order and the goods will be sent as soon as possible.When the goods have arrived ,an order notification will automatically enter.
					</p>
					<span className="py-6">
						<p className="text-2xl text-start font-sans font-bold">
							Peterkyle01
						</p>
						<p className="text-xl text-start font-sans font-thin">
							Civil Engineer
						</p>
					</span>
				</div>
				<div className="hidden md:block w-1/4 h-full p-2">
					<div className="w-full h-full rounded-md relative overflow-hidden">
						<Image
							src={"/main.webp"}
							fill
							alt="main.webp"
						/>
					</div>
				</div>
			</section>
		</div>
	);
}
