import { Carousel } from "@/components/carousel";
import PopularProductCard from "@/components/popular-products-card";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { Link } from "@nextui-org/link";
import {
	BadgePercent,
	BusFront,
	Quote,
	ShoppingBasket,
	Wallet,
} from "lucide-react";
import Image from "next/image";

async function getProducts() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product`, {
		next: { revalidate: 3600 },
	});

	if (!res.ok) {
		return "Failed to fetch data!";
	}

	const data = await res.json();

	return data.reverse().slice(0, 4);
}

export default async function Home() {
	const products = await getProducts();

	return (
		<div className="mt-16">
			<section className="w-full h-auto relative">
				<Carousel />
				<div className="w-full h-98 absolute top-0 bg-black/50  rounded-md"></div>
				<div className="w-full h-98 absolute top-0 rounded-md text-white p-2 md:p-20">
					<div className="w-full h-full flex flex-col justify-center gap-8">
						<p className="sm:w-1/2 text-4xl font-agbalumo">
							Find the best equipment for your contruction
						</p>
						<p className="sm:w-1/2 italic">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
							doloribus aut esse enim architecto eum. Explicabo sapiente rerum
						</p>
						<span className="sm:w-1/2 flex justify-start gap-10 items-center">
							<Button color="primary">Shop now</Button>
							<div className="max-w-md">
								<div className="flex h-5 items-center space-x-2 text-small">
									<div className="">
										<i className="text-3xl font-black font-permanent_marker">
											20k+
										</i>
										<p className="italic">collections</p>
									</div>
									<Divider
										orientation="vertical"
										className="h-8"
									/>
									<div className="">
										<i className="text-3xl font-black font-permanent_marker">
											16k
										</i>
										<p className="italic">users</p>
									</div>
								</div>
							</div>
						</span>
					</div>
				</div>
			</section>
			<section className="w-full h-24 md:h-32 flex">
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
				<h3 className="text-center my-8 text-md md:text-lg italic ">
					Check out this week&apos;s selection of popular products.
				</h3>
				<div className="w-full h-80 md:h-96 grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4">
					<div className="w-full h-full flex flex-col">
						<div className="rounded-md w-full h-full relative overflow-hidden">
							<Image
								src={"/main.webp"}
								fill
								alt="main.webp"
								className="object-cover"
							/>
						</div>
						<p className="text-center text-sm font-sans m-2">Living Room</p>
					</div>
					<div className="w-full h-full flex flex-col">
						<div className="rounded-md w-full h-full relative overflow-hidden">
							<Image
								src={"/main.webp"}
								fill
								alt="main.webp"
								className="object-cover"
							/>
						</div>
						<p className="text-center text-sm font-sans m-2">Living Room</p>
					</div>
					<div className="w-full h-full flex flex-col hidden md:flex">
						<div className="rounded-md w-full h-full relative overflow-hidden">
							<Image
								src={"/main.webp"}
								fill
								alt="main.webp"
								className="object-cover"
							/>
						</div>
						<p className="text-center text-sm font-sans m-2">Living Room</p>
					</div>
					<div className="w-full h-full flex flex-col hidden md:flex">
						<div className="rounded-md w-full h-full relative overflow-hidden">
							<Image
								src={"/main.webp"}
								fill
								alt="main.webp"
								className="object-cover"
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
				<h3 className="text-center my-8 text-sm md:text-lg italic ">
					We provide a variety of special features for all of you , to make it
					easier and you even more happy shopping here.
				</h3>
				<div className="w-full h-auto grid grid-cols-2 gap-2 md:flex md:gap-8">
					<div className="w-full h-40 md:h-60 bg-gray-200 rounded-md flex flex-col justify-evenly items-start p-2">
						<i className="w-10 md:w-16 h-10 md:h-16 bg-white flex justify-center items-center">
							<Wallet
								color="black"
								size={30}
							/>
						</i>

						<p className="font-bold text-black md:text-xl">Easy payment</p>
						<p className="text-gray-500 text-sm">
							very easy and fast payment to make it easier for users
						</p>
					</div>
					<div className="w-full h-40 md:h-60 bg-gray-200 rounded-md flex flex-col justify-evenly items-start p-2">
						<i className="w-10 md:w-16 h-10 md:h-16 bg-white flex justify-center items-center">
							<BadgePercent
								color="black"
								size={30}
							/>
						</i>

						<p className="font-bold text-black md:text-xl">Lots of promos</p>
						<p className="text-gray-500 text-sm">
							losts of interesting promotions and vouchers waiting for you
						</p>
					</div>
					<div className="w-full h-40 md:h-60 bg-gray-200 rounded-md flex flex-col justify-evenly items-start p-2">
						<i className="w-10 md:w-16 h-10 md:h-16 bg-white flex justify-center items-center">
							<BusFront
								color="black"
								size={30}
							/>
						</i>

						<p className="font-bold text-black md:text-xl">Fast shipping</p>
						<p className="text-gray-500 text-sm">
							fast delivery and can reach to the ends of the worlds
						</p>
					</div>
					<div className="w-full h-40 md:h-60 bg-gray-200 rounded-md flex flex-col justify-evenly items-start p-2">
						<i className="w-10 md:w-16 h-10 md:h-16 bg-white flex justify-center items-center">
							<ShoppingBasket
								color="black"
								size={30}
							/>
						</i>

						<p className="font-bold text-black md:text-xl">Save in cart</p>
						<p className="text-gray-500 text-sm">
							marketplace that is easy to use and doesnt bother our users at all
						</p>
					</div>
				</div>
			</section>
			<section className="w-full h-auto py-6">
				<div className="w-full h-96 flex flex-col gap-8 my-10 md:m-0 md:flex-row-reverse md:gap-12 md:p-8">
					<div className="w-full h-full relative rounded-md overflow-hidden">
						<Image
							src={"/main.webp"}
							fill
							alt="main.webp"
							className="object-cover"
						/>
					</div>
					<div className="w-full h-full flex flex-col justify-evenly items-start py-4">
						<span>
							<p className="text-xl font-agbalumo py-2 md:text-4xl">
								More than 10k interesting products that we sell
							</p>
							<p className="text-md py-2 md:text-lg font-sans font-thin">
								more than 10k interesting products that we sell here, and
								ofcourse with good average quality...
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
							className="object-cover"
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
				<PopularProductCard products={products} />
				<div className="h-10 flex items-center justify-center my-6">
					<Button
						as={Link}
						href="/shop"
						color="primary"
						className="md:w-1/4">
						See all product
					</Button>
				</div>
			</section>
			<section className="w-full h-auto flex">
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
						<p className="pt-2 text-lg">
							Complete store with everything i needed
						</p>
					</span>
					<p className="py-8 font-thin italic md:py-10 md:pr-40">
						Everything is increasingly integrated so that buying becomes more
						efficient,just click on the store ready to order and the goods will
						be sent as soon as possible.When the goods have arrived ,an order
						notification will automatically enter.
					</p>
					<span className="py-6">
						<p className="text-2xl text-start font-sans font-bold">
							Peterkyle01
						</p>
						<p className="text-xl text-start font-sans font-thin italic">
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
							className="object-cover"
						/>
					</div>
				</div>
			</section>
			<section className="w-full h-56 md:h-96 flex justify-center">
				<div className="w-full h-full border-2 border-primary rounded-md md:w-1/2 bg-slate-400">
					<iframe
						width="100%"
						height="100%"
						src="https://www.youtube.com/embed/mRD0-GxqHVo?si=-ZkuEb_vtCCdjK2c"
						title="YouTube video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowFullScreen></iframe>
				</div>
			</section>
		</div>
	);
}
