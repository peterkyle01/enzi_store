import { Link } from "@nextui-org/link";
import { FileEdit, Plus } from "lucide-react";

export default function SideBar() {
	return (
		<div className="w-12 h-screen flex justify-center items-start p-0.5 absolute left-0 pt-20">
			<div className="w-full h-48 flex flex-col justify-evenly items-center rounded-md bg-primary">
				<Link href={"/admin/add_product"}>
					<Plus
						size={18}
						color="white"
					/>
				</Link>
				<Link href={"/admin/edit_product"}>
					<FileEdit
						size={18}
						color="white"
					/>
				</Link>
			</div>
		</div>
	);
}
