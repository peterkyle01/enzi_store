import SideBar from "./sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="w-full h-auto mt-12 pt-10 pl-10">
			<SideBar />
			{children}
		</div>
	);
}
