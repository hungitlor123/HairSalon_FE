import React from "react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa"; // You can install react-icons using 'npm install react-icons'

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-gray-400 py-12">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
                {/* Section 1: HairCare */}
                <div>
                    <h3 className="text-white text-lg font-bold">HAIRCARE</h3>
                    <p className="mt-4 text-sm">
                        Far far away, behind the word mountains, far from the countries
                        Vokalia and Consonantia, there live the blind texts.
                    </p>
                    <div className="flex space-x-4 mt-4">
                        <a href="#" className="text-gray-400 hover:text-white">
                            <FaTwitter size={20} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <FaFacebook size={20} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <FaInstagram size={20} />
                        </a>
                    </div>
                </div>

                {/* Section 2: Information */}
                <div>
                    <h3 className="text-white text-lg font-bold">INFORMATION</h3>
                    <ul className="mt-4 space-y-2">
                        <li>
                            <a href="#" className="hover:text-white">
                                FAQs
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white">
                                Privacy
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white">
                                Terms Condition
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Section 3: Links */}
                <div>
                    <h3 className="text-white text-lg font-bold">LINKS</h3>
                    <ul className="mt-4 space-y-2">
                        <li>
                            <a href="#" className="hover:text-white">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white">
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white">
                                Work
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white">
                                Blog
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Section 4: Have a Question? */}
                <div>
                    <h3 className="text-white text-lg font-bold">HAVE A QUESTION?</h3>
                    <ul className="mt-4 space-y-2">
                        <li className="flex items-center space-x-2">
                            <span>📍</span>
                            <p>
                                203 Fake St. Mountain View, San Francisco, California, USA
                            </p>
                        </li>
                        <li className="flex items-center space-x-2">
                            <span>📞</span>
                            <p>+2 392 3929 210</p>
                        </li>
                        <li className="flex items-center space-x-2">
                            <span>✉️</span>
                            <p>info@yourdomain.com</p>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="text-center text-sm text-gray-600 mt-8">
                Copyright © 2024 All rights reserved | This template is made with ❤️ by
                Colorlib
            </div>
        </footer>
    );
};

export default Footer;
