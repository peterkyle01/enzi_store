import { SignIn } from "@clerk/nextjs";

export default function page() {
	return (
		<div className="w-full h-full flex justify-center items-center mt-20">
			<SignIn redirectUrl={"/"} />
		</div>
	);
}
