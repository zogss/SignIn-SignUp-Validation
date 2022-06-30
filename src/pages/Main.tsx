import { Navbar, Dropdown, Avatar, Footer, Breadcrumb, Carousel } from "flowbite-react";
import React from "react";
import {
    BsFacebook,
    BsGithub,
    BsTwitter,
    BsDribbble,
    BsInstagram,
    //HiHome,
  } from "react-icons/bs";

const Main: React.FC = () =>{
    return(
        <div className="">
            <div>
                <Navbar
                    fluid={true}
                    rounded={true}
                >
                    <Navbar.Brand href="https://flowbite.com/">
                        <img
                            src="https://flowbite.com/docs/images/logo.svg"
                            className="mr-3 h-6 sm:h-9"
                            alt="Flowbite Logo"
                        />
                        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                            Flowbite
                        </span>
                    </Navbar.Brand>
                    <div className="flex md:order-2">
                    <Dropdown
                        arrowIcon={false}
                        inline={true}
                        label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true}/>}
                    >
                        <Dropdown.Header>
                        <span className="block text-sm">
                            Bonnie Green
                        </span>
                        <span className="block truncate text-sm font-medium">
                            name@flowbite.com
                        </span>
                        </Dropdown.Header>
                        <Dropdown.Item>
                        Dashboard
                        </Dropdown.Item>
                        <Dropdown.Item>
                        Settings
                        </Dropdown.Item>
                        <Dropdown.Item>
                        Earnings
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>
                        Sign out
                        </Dropdown.Item>
                    </Dropdown>
                    <Navbar.Toggle />
                    </div>
                    <Navbar.Collapse>
                    <Navbar.Link
                        href="/navbars"
                        active={true}
                    >
                        Home
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                        About
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                        Services
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                        Pricing
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                        Contact
                    </Navbar.Link>
                    </Navbar.Collapse>
                </Navbar>
            </div>

            <div>
                <Breadcrumb
                    aria-label="Solid background breadcrumb example"
                    className="bg-gray-50 py-3 px-5 dark:bg-gray-900"
                >
                    <Breadcrumb.Item
                        href="#"
                        //icon={HiHome}
                    >
                        Home
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="#">
                        Projects
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        Flowbite React
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>

            <div>
                <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                <Carousel slideInterval={5000} >
                    <img
                    src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                    alt="..."
                    />
                    <img
                    src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                    alt="..."
                    />
                    <img
                    src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                    alt="..."
                    />
                    <img
                    src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
                    alt="..."
                    />
                    <img
                    src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
                    alt="..."
                    />
                </Carousel>
                </div>
            </div>

            <div>
                <Footer className="flex flex-col">
                    <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                        <div>
                        <Footer.Brand
                            href="https://flowbite.com"
                            src="https://flowbite.com/docs/images/logo.svg"
                            alt="Flowbite Logo"
                            name="Flowbite"
                            className="m-6"
                        />
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                            About
                            </h2>
                            <Footer.LinkGroup className="flex-col">
                            <Footer.Link
                                className="mb-4"
                                href="#"
                            >
                                Flowbite
                            </Footer.Link>
                            <Footer.Link
                                className="mb-4"
                                href="#"
                            >
                                Tailwind CSS
                            </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                            Follow us
                            </h2>
                            <Footer.LinkGroup className="flex-col">
                            <Footer.Link
                                className="mb-4"
                                href="#"
                            >
                                Github
                            </Footer.Link>
                            <Footer.Link
                                className="mb-4"
                                href="#"
                            >
                                Discord
                            </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                            Legal
                            </h2>
                            <Footer.LinkGroup className="flex-col">
                            <Footer.Link
                                className="mb-4"
                                href="#"
                            >
                                Privacy Policy
                            </Footer.Link>
                            <Footer.Link
                                className="mb-4"
                                href="#"
                            >
                                Terms & Conditions
                            </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        </div>
                    </div>
                    <hr className="my-6 w-full border-gray-200 p-1 dark:border-gray-700 sm:mx-auto lg:my-8" />
                    <div className="w-full sm:flex sm:items-center sm:justify-between">
                        <Footer.Copyright
                        href="#"
                        by="Flowbite™"
                        year={2022}
                        />
                        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                        <Footer.Icon
                            href="#"
                            className="text-gray-400 hover:text-gray-900"
                            icon={BsFacebook}
                        />
                        <Footer.Icon
                            href="#"
                            className="text-gray-400 hover:text-gray-900"
                            icon={BsInstagram}
                        />
                        <Footer.Icon
                            href="#"
                            className="text-gray-400 hover:text-gray-900"
                            icon={BsTwitter}
                        />
                        <Footer.Icon
                            href="#"
                            className="text-gray-400 hover:text-gray-900"
                            icon={BsGithub}
                        />
                        <Footer.Icon
                            href="#"
                            className="text-gray-400 hover:text-gray-900"
                            icon={BsDribbble}
                        />
                        </div>
                    </div>
                </Footer>
            </div>
        </div>
    )
};

export default Main;