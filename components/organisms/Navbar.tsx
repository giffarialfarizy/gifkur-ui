import Image from 'next/image';
import Link from 'next/link';
import useChangeTheme from '../../hooks/useChangeTheme';

const Navbar = () => {
	const changeTheme = useChangeTheme();

	return (
		<header className='dark:bg-slate-700'>
			<nav className='even-columns flex h-20 justify-between'>
				<ul className='ml-4 flex gap-11'>
					<li className='flex cursor-pointer items-center'>
						<Link href='/' passHref={true}>
							<div className='flex'>
								<figure className='w-16'>
									<Image
										src='/img/giffari_512.png'
										width={512}
										height={512}
										layout='responsive'
										objectFit='cover'
										alt='giffari logo'
										priority={true}
									/>
								</figure>
								<div className='ml-2 flex h-16 flex-col justify-center'>
									<h1 className='text-2xl font-bold text-teal-900'>
										Giffari Alfarizy
									</h1>
									<dfn className='not-italic'>
										Front-End Web Developer
									</dfn>
								</div>
							</div>
						</Link>
					</li>
				</ul>
				<ul className='my-4 flex justify-center gap-2'>
					<li className='flex cursor-pointer items-center rounded-xl px-4 hover:bg-teal-50'>
						<Link href='#'>
							<a className='font-semibold text-teal-900'>
								About
							</a>
						</Link>
					</li>
					<li className='flex cursor-pointer items-center rounded-xl px-4 hover:bg-teal-50'>
						<Link href='#'>
							<a className='font-semibold text-teal-900'>
								Portofolio
							</a>
						</Link>
					</li>
					<li className='flex cursor-pointer items-center rounded-xl px-4 hover:bg-teal-50'>
						<Link href='#'>
							<a className='font-semibold text-teal-900'>
								Blog
							</a>
						</Link>
					</li>
				</ul>
				<ul className='my-4 mr-4 flex justify-end gap-2'>
					<li className='flex cursor-pointer items-center rounded-xl bg-teal-900 px-4 text-white hover:bg-teal-700'>
						<Link href='#'>Contact</Link>
					</li>
					<li className='flex cursor-pointer items-center rounded-xl px-4 hover:bg-teal-100'>
						{changeTheme}
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
