import SideBar from "./sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="w-full h-screen mt-20 pt-10 pl-10">
			<SideBar />
			{children}
		</div>
	);
}
