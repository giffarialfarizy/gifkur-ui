import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
	return (
		<header className='md:mb-6 md:shadow-md'>
			<nav className='flex justify-between'>
				<li className='flex cursor-pointer items-center'>
					<Link href='/' passHref={true}>
						<figure className='w-16'>
							<Image
								src='/img/giffari_512.png'
								width={512}
								height={512}
								layout='responsive'
								objectFit='cover'
								alt='maustudy logo'
								priority={true}
							/>
						</figure>
					</Link>
				</li>
			</nav>
		</header>
	);
};

export default Navbar;
