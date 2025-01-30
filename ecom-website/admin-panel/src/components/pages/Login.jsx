import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <div>
            <section class="bg-gray-50"><div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"><a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900"><img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/>Frank and Oak</a><form class="w-[500px] bg-white rounded-lg shadow-2xl"><div class="p-6 space-y-4 md:space-y-6 sm:p-8"><h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">Sign in to your account</h1><form class="space-y-4 md:space-y-6" action="#"><div><label for="email" class="block mb-2 text-sm font-medium text-gray-900">Your email</label><input type="email" name="uemail" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" fdprocessedid="ongl6w"/></div><div><label for="password" class="block mb-2 text-sm font-medium text-gray-900">Password</label><input type="password" name="upassword" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" fdprocessedid="43ub8"/></div><div class="flex items-center justify-between"></div><a href="/Home">
            
            <Link to={'/dashboard'}>
            <button type="button" class="w-full text-white  bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" fdprocessedid="yx47bs">Sign in</button>
            </Link>
            
            
            
            </a></form></div></form></div></section>
        </div>
    )
}
