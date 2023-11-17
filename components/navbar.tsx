import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { Image } from "@nextui-org/image";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";
import { Facebook, Twitter } from "lucide-react";
import { UserButton, currentUser } from "@clerk/nextjs";
import Cart from "./cart";

export const Navbar = async () => {
	const user = await currentUser();

	const adminEmail = "mwanaishabayaa@gmail.com";

	return (
		<div className="fixed w-full h-auto z-50 ">
			<div className="w-full h-10 fixed bg-primary relative flex justify-center items-center">
				<p className="font-black font-agbalumo tracking-wide flex justify-center items-center absolute">
					Get upto 30% off NOW ! ! !
				</p>
				<p className="font-black font-agbalumo tracking-wide flex justify-center items-center absolute animate-ping ">
					Get upto 30% off NOW ! ! !
				</p>
			</div>
			<NextUINavbar
				height={"4rem"}
				maxWidth="xl">
				<NavbarContent
					className="basis-1/5 sm:basis-full"
					justify="start">
					<NavbarBrand
						as="li"
						className="gap-3 max-w-fit">
						<NextLink
							className="flex justify-start items-center gap-1"
							href="/">
							<Image
								src="/logo.png"
								width={40}
								radius="none"
								alt="logo"
							/>
							<p className="font-bold text-inherit">ENZI STORE</p>
						</NextLink>
					</NavbarBrand>
					<ul className="hidden lg:flex gap-4 justify-start ml-2">
						{siteConfig.navItems.map((item) => (
							<NavbarItem key={item.href}>
								<NextLink
									className={clsx(
										linkStyles({ color: "foreground" }),
										"data-[active=true]:text-primary data-[active=true]:font-medium"
									)}
									color="foreground"
									href={item.href}>
									{item.label}
								</NextLink>
							</NavbarItem>
						))}
						<NavbarItem>
							{user?.emailAddresses[0].emailAddress == adminEmail && (
								<NextLink
									color="success"
									href="/admin/add_product">
									Admin
								</NextLink>
							)}
						</NavbarItem>
					</ul>
				</NavbarContent>
				<NavbarContent
					className="hidden sm:flex basis-1/5 sm:basis-full"
					justify="end">
					<NavbarItem className="hidden sm:flex gap-2">
						<Link
							isExternal
							href={siteConfig.links.twitter}
							aria-label="Twitter">
							<Twitter size={18} />
						</Link>
						<Link
							isExternal
							href={siteConfig.links.facebook}
							aria-label="Facebook">
							<Facebook size={18} />
						</Link>
						<ThemeSwitch />
						<Cart />
					</NavbarItem>
					<NavbarItem className="hidden md:flex">
						{user ? (
							<UserButton afterSignOutUrl="/" />
						) : (
							<div className="flex gap-2">
								<Button
									size="sm"
									as={Link}
									className="text-sm font-normal text-default-600 bg-default-100"
									href={"/sign-up"}
									variant="flat">
									SignUp
								</Button>
								<Button
									size="sm"
									as={Link}
									className="text-sm font-normal text-default-600 bg-default-100 bg-primary"
									href={"/sign-in"}
									variant="flat">
									LogIn
								</Button>
							</div>
						)}
					</NavbarItem>
				</NavbarContent>
				<NavbarContent
					className="sm:hidden basis-1 pl-4"
					justify="end">
					<ThemeSwitch />
					<Cart />
					<NavbarMenuItem>
						<UserButton afterSignOutUrl="/" />
					</NavbarMenuItem>
					<NavbarMenuToggle />
				</NavbarContent>
				<NavbarMenu className="top-24">
					<div className="flex flex-col gap-2">
						{siteConfig.navMenuItems.map((item, index) => (
							<NavbarMenuItem key={`${item}-${index}`}>
								<Link
									color={
										index === 2
											? "primary"
											: index === siteConfig.navMenuItems.length - 1
											? "danger"
											: "foreground"
									}
									href={item.href}
									size="lg">
									{item.label}
								</Link>
							</NavbarMenuItem>
						))}
					</div>
					<NavbarMenuItem>
						{user?.emailAddresses[0].emailAddress == adminEmail && (
							<NextLink
								color="success"
								href="/admin/add_product">
								Admin
							</NextLink>
						)}
					</NavbarMenuItem>
					<NavbarMenuItem className="flex gap-2">
						{!user && (
							<>
								<Button
									size="sm"
									as={Link}
									className="text-sm font-normal text-default-600 bg-default-100"
									href={"/sign-up"}
									variant="flat">
									SignUp
								</Button>
								<Button
									size="sm"
									as={Link}
									className="text-sm font-normal text-default-600 bg-default-100 bg-primary"
									href={"/sign-in"}
									variant="flat">
									LogIn
								</Button>
							</>
						)}
					</NavbarMenuItem>
				</NavbarMenu>
			</NextUINavbar>
		</div>
	);
};
