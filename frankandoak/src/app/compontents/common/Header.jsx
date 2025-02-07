"use client";
import Link from "next/link";
import { Navbar } from "flowbite-react";
import { CiSearch } from "react-icons/ci";

import React, { useState } from 'react'

export default function Header() {

    let [megamenuStatus, setMegamenuStatus] = useState(false)
    return (
        <header className="shadow-lg grid  lg:grid-cols-[45%_auto] grid-cols-[55%_auto]  sticky top-0 z-50">
            <div>
                <div className="max-w-[1320px] mx-auto">
                    <Navbar fluid rounded className="p-0" >
                        <Navbar.Toggle />
                        <Navbar.Brand as={Link} href="https://flowbite-react.com">

                            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
                        </Navbar.Brand>
                        
                        <Navbar.Collapse className="hideMenu">
                            <Navbar onMouseEnter={()=>setMegamenuStatus(1)} onMouseLeave={()=>setMegamenuStatus(0)} className="border-[2px] py-5" >
                                <Link  className="font-bold uppercase text-[16px]" href={'/'}> Sale </Link>

                                {megamenuStatus == 1
                                    ?
                                    <div className=" border-t-[2px]  absolute w-[100%]  bg-white top-[100%] left-0 z-40">
                                        <div className="grid grid-cols-4 p-5">
                                            <div>
                                                <h3 className="text-2xl">Women's Sale</h3>
                                                <ul>
                                                    <li className="mb-4">Shop All</li>
                                                    <li className="mb-4">Shop All</li>
                                                    <li className="mb-4">Shop All</li>
                                                    <li className="mb-4">Shop All</li>
                                                    <li className="mb-4">Shop All</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h3 className="text-2xl">Women's Sale</h3>
                                                <ul>
                                                    <li className="mb-4">Shop All</li>
                                                    <li className="mb-4">Shop All</li>
                                                    <li className="mb-4">Shop All</li>
                                                    <li className="mb-4">Shop All</li>
                                                    <li className="mb-4">Shop All</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <img src="https://www.frankandoak.com/cdn/shop/files/Tile_desktop_8a24627d-d3b1-45fb-b2a0-16c51293f1a7_600x.jpg?v=1727789674" alt="" />
                                            </div>
                                            <div>
                                                <img src="https://www.frankandoak.com/cdn/shop/files/Tile_desktop_8a24627d-d3b1-45fb-b2a0-16c51293f1a7_600x.jpg?v=1727789674" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    ''


                                }


                            </Navbar>
                            <Navbar onMouseEnter={()=>setMegamenuStatus(2)} onMouseLeave={()=>setMegamenuStatus(0)} className="border-[2px] py-5" >
                                <Link className="font-bold uppercase  text-[16px]" href={'/'}>  Women</Link>
                                {megamenuStatus ==2
                                    ?
                                    <div className=" border-t-[2px]  absolute w-[100%]  bg-white top-[100%] left-0 z-40">
                                        <div className="grid grid-cols-4 p-5">
                                            <div>
                                                <h3 className="text-2xl">Women's Sale Women</h3>
                                                <ul>
                                                    <li className="mb-4">Shop All</li>
                                                    <li className="mb-4">Shop All</li>
                                                    <li className="mb-4">Shop All</li>
                                                    <li className="mb-4">Shop All</li>
                                                    <li className="mb-4">Shop All</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h3 className="text-2xl">Women's Sale</h3>
                                                <ul>
                                                    <li className="mb-4">Shop All</li>
                                                    <li className="mb-4">Shop All</li>
                                                    <li className="mb-4">Shop All</li>
                                                    <li className="mb-4">Shop All</li>
                                                    <li className="mb-4">Shop All</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <img src="https://www.frankandoak.com/cdn/shop/files/Tile_desktop_8a24627d-d3b1-45fb-b2a0-16c51293f1a7_600x.jpg?v=1727789674" alt="" />
                                            </div>
                                            <div>
                                                <img src="https://www.frankandoak.com/cdn/shop/files/Tile_desktop_8a24627d-d3b1-45fb-b2a0-16c51293f1a7_600x.jpg?v=1727789674" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    ''


                                }

                            </Navbar>
                            <Navbar onMouseEnter={()=>setMegamenuStatus(3)} onMouseLeave={()=>setMegamenuStatus(0)} className="border-[2px] py-5" >
                                <Link className="font-bold uppercase  text-[16px]" href={'/'}>  Men</Link>

                                {megamenuStatus == 3
                                    ?
                                    <div className=" border-t-[2px]  absolute w-[100%]  bg-white top-[100%] left-0 z-40">
                                        <div className="grid grid-cols-4 p-5">
                                            <div>
                                                <h3 className="text-2xl">Women's Sale Men</h3>
                                                <ul>
                                                    <li className="mb-4">Shop All</li>
                                                    <li className="mb-4">Shop All</li>
                                                    <li className="mb-4">Shop All</li>
                                                    <li className="mb-4">Shop All</li>
                                                    <li className="mb-4">Shop All</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h3 className="text-2xl">Women's Sale</h3>
                                                <ul>
                                                    <li className="mb-4">Shop All</li>
                                                    <li className="mb-4">Shop All</li>
                                                    <li className="mb-4">Shop All</li>
                                                    <li className="mb-4">Shop All</li>
                                                    <li className="mb-4">Shop All</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <img src="https://www.frankandoak.com/cdn/shop/files/Tile_desktop_8a24627d-d3b1-45fb-b2a0-16c51293f1a7_600x.jpg?v=1727789674" alt="" />
                                            </div>
                                            <div>
                                                <img src="https://www.frankandoak.com/cdn/shop/files/Tile_desktop_8a24627d-d3b1-45fb-b2a0-16c51293f1a7_600x.jpg?v=1727789674" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    ''


                                }
                            </Navbar>
                            <Navbar onMouseEnter={()=>setMegamenuStatus(1)} onMouseLeave={()=>setMegamenuStatus(0)} className="border-[2px] py-5" >
                                <Link className="font-bold uppercase  text-[16px]" href={'/'}>  About Us</Link>
                            </Navbar>

                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>

            <div className="flex lg:gap-5 gap-3 justify-end items-center mr-8">
                <CiSearch className="lg:text-[25px] text-[15px]" />
                <CiSearch className="lg:text-[25px] text-[15px]" />
                <CiSearch className="lg:text-[25px] text-[15px]" />
                <CiSearch className="lg:text-[25px] text-[15px]" />

            </div>
        </header>
    )
}
