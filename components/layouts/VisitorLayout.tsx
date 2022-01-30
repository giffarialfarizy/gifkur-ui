import { NextComponentType } from 'next';
import Footer from '../organisms/Footer';
import Navbar from '../organisms/Navbar';

const VisitorLayout: NextComponentType = ({ children }) => {
	return (
		<>
			<Navbar />
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default VisitorLayout;
