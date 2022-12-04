import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

import { IconTwitter } from "~/components/icons/IconTwitter";
import { IconInstagram } from "~/components/icons/IconInstagram";
import { IconFacebook } from "~/components/icons/IconFacebook";
import { IconGithub } from "~/components/icons/IconGithub";

export default component$(() => {
  const links = [
    {
      title: "Product",
      items: [
        { title: "Features", href: "#" },
        { title: "Security", href: "#" },
        { title: "Team", href: "#" },
        { title: "Enterprise", href: "#" },
        { title: "Customer stories", href: "#" },
        { title: "Pricing", href: "#" },
        { title: "Resources", href: "#" },
      ],
    },
    {
      title: "Platform",
      items: [
        { title: "Developer API", href: "#" },
        { title: "Partners", href: "#" },
        { title: "Atom", href: "#" },
        { title: "Electron", href: "#" },
        { title: "Qwind Desktop", href: "#" },
      ],
    },
    {
      title: "Support",
      items: [
        { title: "Docs", href: "#" },
        { title: "Community Forum", href: "#" },
        { title: "Professional Services", href: "#" },
        { title: "Skills", href: "#" },
        { title: "Status", href: "#" },
      ],
    },
    {
      title: "Company",
      items: [
        { title: "About", href: "#" },
        { title: "Blog", href: "#" },
        { title: "Careers", href: "#" },
        { title: "Press", href: "#" },
        { title: "Inclusion", href: "#" },
        { title: "Social Impact", href: "#" },
        { title: "Shop", href: "#" },
      ],
    },
  ];

  const social = [
    { label: "Twitter", icon: IconTwitter, href: "#" },
    { label: "Instagram", icon: IconInstagram, href: "#" },
    { label: "Facebook", icon: IconFacebook, href: "#" },
    {
      label: "Github",
      icon: IconGithub,
      href: "https://github.com/onwidget/qwind",
    },
  ];

  return (
    <>
      <footer class="border-t border-gray-200 dark:border-slate-800">
        <div class="max-w-6xl mx-auto px-4 sm:px-6">
          <div class="grid grid-cols-12 gap-4 gap-y-8 sm:gap-8 py-8 md:py-12">
            <div class="col-span-12 lg:col-span-4">
              <div class="mb-2">
                <Link class="inline-block font-bold text-xl" href={"/"}>
                  Qwind
                </Link>
              </div>
              <div class="text-sm text-gray-600">
                <Link
                  class="text-gray-600 hover:text-gray-700 dark:text-gray-400 hover:underline transition duration-150 ease-in-out"
                  href="#"
                >
                  Terms
                </Link>{" "}
                ·{" "}
                <Link
                  class="text-gray-600 hover:text-gray-700 dark:text-gray-400 hover:underline transition duration-150 ease-in-out"
                  href="#"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
            {links.map(({ title, items }) => (
              <div class="col-span-6 md:col-span-3 lg:col-span-2">
                <div class="text-gray-800 dark:text-gray-300 font-medium mb-2">
                  {title}
                </div>
                {items && Array.isArray(items) && items.length > 0 && (
                  <ul class="text-sm">
                    {items.map(({ title, href }) => (
                      <li class="mb-2">
                        <Link
                          class="text-gray-600 hover:text-gray-700 hover:underline dark:text-gray-400 transition duration-150 ease-in-out"
                          href={href}
                        >
                          {title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
          <div class="md:flex md:items-center md:justify-between py-6 md:py-8">
            <ul class="flex mb-4 md:order-1 -ml-2 md:ml-4 md:mb-0">
              {social.map(({ label, href, icon: Icon }) => (
                <li>
                  <Link
                    class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center"
                    aria-label={label}
                    title={label}
                    href={href}
                  >
                    {Icon && <Icon />}
                  </Link>
                </li>
              ))}
            </ul>

            <div class="text-sm text-gray-700 mr-4 dark:text-slate-400">
              <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 float-left rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
              Made by{" "}
              <a
                class="text-primary-700 hover:underline dark:text-gray-200"
                href="https://qwikverse.co/"
              >
                {" "}
                Qwikverse
              </a>{" "}
              · All rights reserved.
            </div>
          </div>
        </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div aria-label="footer" class="focus:outline-none w-full border-gray-300 dark:border-gray-700 border-t lg:w-11/12 md:w-11/12 lg:mx-auto md:mx-auto text-sm">
            <div class="container mx-auto py-12">
                <div class="xl:flex lg:flex md:flex pt-6">
                    <div class="w-11/12 xl:w-3/6 lg:w-2/5 mx-auto lg:mx-0 xl:mx-0">
                        <div class="flex items-center mb-6 xl:mb-0 lg:mb-0">
                            <div aria-label="logo" role="img">
                            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/footer_with_sitemap-svg1.svg" alt="logo"/>
                            </div>
                            <p  class="focus:outline-none ml-3 dark:text-white font-bold text-base">Qwik Coin</p>
                        </div>
                    </div>
                    <div class="w-11/12 xl:w-1/6 lg:w-2/5 mx-auto lg:mx-0 xl:mx-0 pt-3 xl:flex flex-col xl:justify-start pl-3 sm:pl-0">
                        <h2  class="focus:outline-none text-gray-800 dark:text-white font-bold text-base mb-6">Community</h2>
                        <ul>
                            <li class="text-gray-800 dark:text-gray-200 hover:text-gray-700 mb-5">
                                <a  class="focus:underline focus:outline-none" href="javascript:void(0)">About Us</a>
                            </li>
                            <li class="text-gray-800 dark:text-gray-200 hover:text-gray-700 mb-5">
                                <a  class="focus:underline focus:outline-none" href="javascript:void(0)">Guidelines and how to</a>
                            </li>
                            <li class="text-gray-800 dark:text-gray-200 hover:text-gray-700 mb-5">
                                <a  class="focus:underline focus:outline-none" href="javascript:void(0)">Quote from the best</a>
                            </li>
                            <li class="text-gray-800 dark:text-gray-200 hover:text-gray-700 mb-5">
                                <a  class="focus:underline focus:outline-none" href="javascript:void(0)">How to start a blog</a>
                            </li>
                        </ul>
                    </div>
                    <div class="w-11/12 xl:w-1/6 lg:w-2/5 mx-auto lg:mx-0 xl:mx-0 pt-3 xl:flex flex-col xl:justify-start pl-3 sm:pl-0">
                        <h2  class="focus:outline-none text-gray-800 dark:text-white font-bold text-base mb-6">Getting Started</h2>
                        <ul>
                            <li class="text-gray-800 dark:text-gray-200 hover:text-gray-700 mb-5">
                                <a  class="focus:underline focus:outline-none" href="javascript:void(0)">About Us</a>
                            </li>
                            <li class="text-gray-800 dark:text-gray-200 hover:text-gray-700 mb-5">
                                <a  class="focus:underline focus:outline-none" href="javascript:void(0)">Guidelines and how to</a>
                            </li>
                            <li class="text-gray-800 dark:text-gray-200 hover:text-gray-700 mb-5">
                                <a  class="focus:underline focus:outline-none" href="javascript:void(0)">Quote from the best</a>
                            </li>
                            <li class="text-gray-800 dark:text-gray-200 hover:text-gray-700 mb-5">
                                <a  class="focus:underline focus:outline-none" href="javascript:void(0)">How to start a blog</a>
                            </li>
                            <li class="text-gray-800 dark:text-gray-200 hover:text-gray-700 mb-5">
                                <a  class="focus:underline focus:outline-none" href="javascript:void(0)">Quote from the best</a>
                            </li>
                            <li class="text-gray-800 dark:text-gray-200 hover:text-gray-700 mb-5">
                                <a  class="focus:underline focus:outline-none" href="javascript:void(0)">Guidelines and how to</a>
                            </li>
                        </ul>
                    </div>
                    <div class="w-11/12 xl:w-1/6 lg:w-2/5 mx-auto lg:mx-0 xl:mx-0 pt-3 xl:flex flex-col xl:justify-start pl-3 sm:pl-0">
                        <h2  class="focus:outline-none text-gray-800 dark:text-white font-bold text-base mb-6">Resources</h2>
                        <ul>
                            <li class="text-gray-800 dark:text-gray-200 hover:text-gray-700 mb-5">
                                <a  class="focus:underline focus:outline-none" href="javascript:void(0)">Accessibility</a>
                            </li>
                            <li class="text-gray-800 dark:text-gray-200 hover:text-gray-700 mb-5">
                                <a  class="focus:underline focus:outline-none" href="javascript:void(0)">Usability</a>
                            </li>
                            <li class="text-gray-800 dark:text-gray-200 hover:text-gray-700 mb-5">
                                <a  class="focus:underline focus:outline-none" href="javascript:void(0)">Marketplace</a>
                            </li>
                            <li class="text-gray-800 dark:text-gray-200 hover:text-gray-700 mb-5">
                                <a  class="focus:underline focus:outline-none" href="javascript:void(0)">Design & Dev</a>
                            </li>
                            <li class="text-gray-800 dark:text-gray-200 hover:text-gray-700 mb-5">
                                <a  class="focus:underline focus:outline-none" href="javascript:void(0)">Marketplace</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="xl:flex flex-wrap justify-between xl:mt-24 mt-16 pb-6 pl-3 sm:pl-0 text-sm">
                    <div class="w-11/12 xl:w-2/6 mx-auto lg:mx-0 xl:mx-0 mb-6 xl:mb-0">
                    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 float-left rounded-sm bg-[url(~/assets/images/logo.png)]"></span>
                        Made by{" "}
                        <a
                          class="text-primary-700 hover:underline dark:text-gray-200"
                          href="https://qwikverse.co/"
                        >
                          {" "}
                          Qwikverse
                        </a>{" "}
                        · All rights reserved.
                    </div>
                    
                    <div class="w-11/12 xl:w-2/6 mx-auto lg:mx-0 xl:mx-0 mb-6 lg:mb-0 xl:mb-0">
                        <ul class="xl:flex lg:flex md:flex sm:flex justify-between">
                            <li class="text-gray-800 dark:text-white hover:text-gray-900 mb-4 sm:mb-0">
                                <a class="focus:outline-none focus:underline" href="javascript:void(0)">Terms of service</a>
                            </li>
                            <li class="text-gray-800 dark:text-white hover:text-gray-900 mb-4 sm:mb-0">
                                <a class="focus:outline-none focus:underline" href="javascript:void(0)">Privacy Policy</a>
                            </li>
                            <li class="text-gray-800 dark:text-white hover:text-gray-900 mb-4 sm:mb-0">
                                <a class="focus:outline-none focus:underline" href="javascript:void(0)">Security</a>
                            </li>
                            <li class="text-gray-800 dark:text-white hover:text-gray-900 mb-4 sm:mb-0">
                                <a class="focus:outline-none focus:underline" href="javascript:void(0)">Sitemap</a>
                            </li>
                        </ul>
                    </div>
                    <div class="w-11/12 xl:w-1/6 lg:w-1/6 sm:w-11/12 mx-auto lg:mx-0 xl:mx-0 mb-6 lg:mb-0 xl:mb-0 mt-8 lg:mt-8 xl:mt-0">
                        <div class="flex justify-start sm:justify-start xl:justify-end space-x-6 pr-2 xl:pr-0 lg:pr-0 md:pr-0 sm:pr-0">
                            <div>
                                <a aria-label="Twitter" role="link" href="javascript:void(0)">
                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/footer_with_sitemap-svg2.svg" alt="Twitter"/>
                                </a>
                            </div>
                            <div>
                                <a aria-label="Instagram" role="link" href="javascript:void(0)">
                                  <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/footer_with_sitemap-svg3.svg" alt="Instagram"/>
                                </a>
                            </div>
                            <div>
                                <a aria-label="Dribble" role="link" href="javascript:void(0)">
                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/footer_with_sitemap-svg4.svg" alt="Dribble"/>
                                </a>
                            </div>
                            <div>
                                <a aria-label="Github" role="link" href="javascript:void(0)">
                                  <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/footer_with_sitemap-svg5.svg" alt="Github"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      </footer>
        
        
    </>
  );
});
