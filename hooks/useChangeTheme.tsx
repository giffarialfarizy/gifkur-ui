import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const useChangeTheme = () => {
	const [isMounted, setIsMounted] = useState(false);
	const { systemTheme, theme, setTheme } = useTheme();

	useEffect(() => {
		setIsMounted(true);
	}, []);

	const renderThemeChanger = () => {
		if (!isMounted) return null;

		const currentTheme =
			theme === 'system' ? systemTheme : theme;

		if (currentTheme === 'dark') {
			return (
				<button
					className='bg-red-300'
					onClick={() => setTheme('light')}
				>
					terangin
				</button>
			);
		} else {
			return (
				<button
					className='bg-red-700'
					onClick={() => setTheme('dark')}
				>
					gelapin
				</button>
			);
		}
	};

	return renderThemeChanger();
};

export default useChangeTheme;
