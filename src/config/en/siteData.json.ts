import { type SiteDataProps } from "../types/configDataTypes";

// Update this file with your site specific information
const siteData: SiteDataProps = {
	name: "WirelessFly",
	// Your website's title and description (meta fields)
	title: "WirelessFly",
	description:
		"Wireless Fly: Internet rápido, confiable y estable para tu hogar. Descubre nuestros planes y disfruta de conexión sin interrupciones en todo Guerrero.",

	// used on contact page and footer
	contact: {
		address1: "1234 Main Street",
		address2: "New York, NY 10001",
		phone: "(123) 456-7890",
		email: "creator@cosmicthemes.com",
	},

	// Your information for blog post purposes
	author: {
		name: "Cosmic Themes",
		email: "creator@cosmicthemes.com",
		twitter: "Cosmic_Themes",
	},

	// default image for meta tags if the page doesn't have an image already
	defaultImage: {
		src: "/images/cosmic-themes-logo.jpg",
		alt: "Cosmic Themes logo",
	},
};

export default siteData;
