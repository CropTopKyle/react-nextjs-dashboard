import Image from 'next/image';
import Link from 'next/link';
import logo from '/imgs/logo.png';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import ThemeToggler from '@/components/ui/ThemeToggler';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navbar = () => {
	return (
		<div className='bg-primary dark:bg-slate-700 py-2 px-5 flex justify-between text-white'>
			<Link href='/'>
				<Image
					src={logo}
					alt='Dashboard Logo'
					width={40}
				/>
			</Link>

			<div className='flex items-center'>
				<ThemeToggler />
				<DropdownMenu>
					<DropdownMenuTrigger className='focus:outline-none'>
						<Avatar>
							<AvatarImage
								src='https://github.com/shadcn.png'
								alt='Profile Avatar'
							/>
							<AvatarFallback className='text-black'>KW</AvatarFallback>
						</Avatar>
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuLabel>My Account</DropdownMenuLabel>
						<DropdownMenuSeparator />

						<Link href='/profile'>
							<DropdownMenuItem>Profile</DropdownMenuItem>
						</Link>

						<Link href='/auth'>
							<DropdownMenuItem>Logout</DropdownMenuItem>
						</Link>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</div>
	);
};

export default Navbar;
