import { siteConfig } from "@/config/site";
import Image from "next/image";
import { Link } from "@nextui-org/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
	return (
		<footer className="h-auto w-full px-6">
			<div className="h-auto w-full sm:inline-flex">
				<div className="h-auto w-full sm:h-80">
					<p className="py-8 text-2xl font-semibold text-primary">
						ENZI HARDWARE STORE
					</p>
					<p className="py-1 ">Top Quality Store</p>
					<p className="py-1 ">Malindi Town, Malindi</p>
					<p className="py-1 ">Kenya</p>
				</div>
				<div className="grid h-auto w-full py-8 sm:h-80">
					<p className="py-2 font-semibold">Contact</p>
					<p className="py-2">
						Phone:&nbsp;
						<Link
							aria-label="Enzi Phone Number"
							href={"tel:+254792416360"}
							className="text-primary">
							0792416360
						</Link>
						&nbsp; / &nbsp;
						<Link
							aria-label="Enzi Phone Number"
							href={"tel:+254796865557"}
							className="text-primary">
							0796865557
						</Link>
					</p>
					<p className="py-2">
						Address:&nbsp;
						<span className="text-primary">Ganda,Street 32,Malindi Town</span>
					</p>
					<p className="py-2">Mon-Sat:&nbsp;from 7:00 am to 7:00 pm</p>
				</div>
				<div className="h-auto w-full py-8 gap-1 sm:h-80">
					<p className="py-2 font-semibold text-center">GET OUR APP</p>
					<div className="w-full h-full flex flex-col items-center gap-4">
						<div className=" relative w-60 h-52 rounded-md overflow-hidden">
							<Image
								src="/google-store.jpg"
								alt="google-store"
								fill
								className="object-cover"
							/>
						</div>
						<p className=" font-semibold">Secured Payment Gateway</p>
						<div className=" relative w-40 h-32 rounded-md overflow-hidden">
							<Image
								src="/mpesa.jpg"
								alt="mpesa"
								fill
								className="object-cover"
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="h-24 w-full">
				<span className="m-2 flex">
					<Link
						aria-label="Facebook"
						href={siteConfig.links.facebook}
						target="_blank"
						className="m-2 text-3xl">
						<Facebook />
					</Link>
					<Link
						aria-label="Instagram"
						href={siteConfig.links.instagram}
						target="_blank"
						className="m-2 text-3xl ">
						<Instagram />
					</Link>
					<Link
						aria-label="Twitter"
						href={siteConfig.links.twitter}
						target="_blank"
						className="m-2 text-3xl ">
						<Twitter />
					</Link>
				</span>
				<p className="my-2 font-semibold tracking-wider text-sm">
					@ 2023 Enzi Hardware Store , Dreams of Kache
				</p>
			</div>
		</footer>
	);
}
