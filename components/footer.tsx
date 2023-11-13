import { siteConfig } from "@/config/site";
import { Link } from "@nextui-org/link";

export default function Footer() {
	return (
		<footer className="w-full flex items-center justify-center py-3">
			<Link
				isExternal
				className="flex items-center gap-1 text-current"
				href={siteConfig.links.nextUi}
				aria-label="NextUi">
				<span className="text-default-600">Powered by</span>
				<p className="text-primary">NextUI</p>
			</Link>
		</footer>
	);
}
