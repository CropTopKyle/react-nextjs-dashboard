import Navbar from '@/components/Navbar';
import Sidebar from '@/components/sidebar';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<Navbar />
			<div className='flex'>
				<div className='hidden md:block h-[100vh] w-[325px]'>
					<Sidebar />
				</div>
				<div className='p-5 w-full md:max-w-[1000px]'>{children}</div>
			</div>
		</>
	);
};

export default MainLayout;
