import React from 'react'
import { Github, Twitter, Instagram, Heart } from 'lucide-react'

const Footer = () => {
    return (
        <footer className='relative overflow-hidden bg-black'>
            {/* Animated background elements */}
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(30,30,30,0.3),transparent_50%)]'></div>
            <div className='absolute top-0 left-1/4 w-64 h-64 bg-gray-800/20 rounded-full blur-3xl animate-pulse'></div>
            <div className='absolute bottom-0 right-1/4 w-48 h-48 bg-gray-700/20 rounded-full blur-3xl animate-pulse delay-1000'></div>

            {/* Glass morphism border */}
            <div className='absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-600/30 to-transparent'></div>

            <div className='relative c-space pt-12 pb-8'>
                {/* Main content wrapper */}
                <div className='backdrop-blur-sm bg-black/60 rounded-2xl p-8 border border-gray-800/50 shadow-2xl shadow-black/50'>
                    <div className='flex justify-between items-center flex-wrap gap-8'>

                        {/* Left section - Links */}
                        <div className='flex items-center gap-6 text-gray-300'>
                            <div className='group flex items-center gap-4'>
                                <a href="#" className='relative text-sm font-medium transition-all duration-300 hover:text-gray-100 hover:scale-105'>
                                    <span className='relative z-10'>Terms & Conditions</span>
                                    <div className='absolute inset-0 bg-gray-700/30 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10'></div>
                                </a>
                                <div className='w-1 h-4 bg-gradient-to-b from-gray-600 to-gray-700 rounded-full opacity-60'></div>
                                <a href="#" className='relative text-sm font-medium transition-all duration-300 hover:text-gray-100 hover:scale-105'>
                                    <span className='relative z-10'>Privacy Policy</span>
                                    <div className='absolute inset-0 bg-gray-700/30 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10'></div>
                                </a>
                            </div>
                        </div>

                        {/* Center section - Social icons */}
                        <div className='flex gap-4'>
                            {[
                                { icon: Github, label: 'GitHub', color: 'hover:text-gray-100', href:"https://github.com/Abhinandh05" },
                                { icon: Twitter, label: 'Twitter', color: 'hover:text-gray-100' },
                                { icon: Instagram, label: 'Instagram', color: 'hover:text-gray-100',href:"https://www.instagram.com/imabhinandh/" }
                            ].map(({ icon: Icon, label, color, href }) => (
                                <a
                                    key={label}
                                    href={href}
                                    className={`group relative p-3 rounded-xl bg-black/40 border border-gray-800/60 transition-all duration-300 hover:scale-110 hover:rotate-6 hover:shadow-lg hover:shadow-black/50 ${color}`}
                                    aria-label={label}
                                >
                                    <Icon className='w-5 h-5 transition-all duration-300 group-hover:scale-110 text-gray-400' />
                                    <div className='absolute inset-0 bg-gradient-to-br from-gray-700/30 to-gray-800/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

                                    {/* Tooltip */}
                                    <div className='absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-gray-700'>
                                        {label}
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Right section - Copyright */}
                        <div className='flex items-center gap-2 text-gray-300 text-sm'>
                            <span>Made with</span>
                            <Heart className='w-4 h-4 text-red-400 animate-pulse' />
                            <span>© 2025</span>
                        </div>
                    </div>

                    {/* Bottom section */}
                    <div className='mt-8 pt-6 border-t border-gray-800/50'>
                        <div className='flex justify-center items-center'>
                            <p className='text-gray-500 text-xs text-center max-w-md leading-relaxed'>
                                Crafting digital experiences with passion and precision.
                                <span className='block mt-1 text-gray-400'>Follow us for updates and inspiration.</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Floating particles */}
                <div className='absolute top-1/4 left-10 w-2 h-2 bg-gray-600 rounded-full animate-ping opacity-40'></div>
                <div className='absolute top-3/4 right-20 w-1 h-1 bg-gray-500 rounded-full animate-ping delay-500 opacity-40'></div>
                <div className='absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-gray-600 rounded-full animate-ping delay-1000 opacity-40'></div>
            </div>
        </footer>
    )
}

export default Footer