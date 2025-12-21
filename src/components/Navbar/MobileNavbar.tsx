import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

export default function MobileNavbar() {
	return (
		<div className='flex justify-end py-2 px-3 bg-pink-200'>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button
						variant='outline'
						className='uppercase'>
						Menu
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuItem asChild>
						<Link to='/'>Accueil</Link>
					</DropdownMenuItem>
					<DropdownMenuItem asChild>
						<Link to='/prestations'>Prestations</Link>
					</DropdownMenuItem>
					<DropdownMenuItem asChild>
						<Link to='/tarifs'>Tarifs</Link>
					</DropdownMenuItem>
					<DropdownMenuItem asChild>
						<Link to='/contact'>Contact</Link>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
}
