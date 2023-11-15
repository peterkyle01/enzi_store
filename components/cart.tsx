"use client";
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	useDisclosure,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { Badge } from "@nextui-org/badge";
import { ShoppingCart } from "lucide-react";
import { Link } from "@nextui-org/link";

export default function Cart() {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();

	return (
		<>
			<Badge
				content="9"
				shape="circle"
				color="danger">
				<Button
					size="sm"
					onClick={onOpen}
					radius="full"
					isIconOnly
					aria-label="shopping cart"
					variant="light">
					<ShoppingCart size={20} />
				</Button>
			</Badge>
			<Modal
				isOpen={isOpen}
				size="sm"
				radius="md"
				placement="top"
				onOpenChange={onOpenChange}>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className="flex flex-col gap-1">Cart</ModalHeader>
							<ModalBody>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Nullam pulvinar risus non risus hendrerit venenatis.
									Pellentesque sit amet hendrerit risus, sed porttitor quam.
								</p>
							</ModalBody>
							<ModalFooter>
								<Button
									color="danger"
									variant="light"
									onPress={onClose}>
									Close
								</Button>
								<Button
									as={Link}
                                    href="/checkout"
									color="primary"
									onPress={onClose}>
									Checkout
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
}
