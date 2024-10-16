import React, { useState } from 'react';
import Heroimage from '../assets/images/chiranjit-img.webp'

const Herosection = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='flex items-center flex-col'>
            <nav className='max-w-[1140px] px-3 mx-auto flex items-center gap-4 py-6 border-b border-black border-opacity-15 w-full justify-between'>
                <div><h2 className='worksans font-[800] text-fs-lg pr-5 whitespace-nowrap'><a href="#">UIUX Designer</a></h2></div>
                <div className='flex items-center justify-between w-full max-lg:hidden'>
                    <ul className='flex items-center gap-7'>
                        <li className='worksans font-semibold text-xl'><a href="#" class="relative w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" >Home</a></li>
                        <li className='worksans font-semibold text-xl'><a href="#" class="relative w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" >Work</a></li>
                        <li className='worksans font-semibold text-xl'><a href="#" class="relative w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" >Testimonials</a></li>
                        <li className='worksans font-semibold text-xl'><a href="#" class="relative w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" >About</a></li>
                    </ul>
                    <ul className='flex items-center gap-6'>
                        <li className='hover:scale-[1.2] transition-all duration-300'><a href="https://www.fifa.com/en" target='_blank'>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.9466 12.4C14.2666 12.2933 14.5733 12.1733 14.88 12.0533C13.7466 9.89333 12.4666 7.81333 11.04 5.82666C7.99996 7.31999 5.71996 10.12 4.95996 13.48C7.99996 13.72 11.0799 13.3733 13.9466 12.4Z" fill="#4D5566" />
                            <path d="M13.226 17.7335C14.3994 17.1335 15.5994 16.6535 16.8527 16.2802C16.7994 16.1202 16.7327 15.9602 16.666 15.8135C16.386 15.1468 16.0793 14.4935 15.7727 13.8535C15.386 14.0002 14.9994 14.1602 14.586 14.3068C12.066 15.1468 9.37267 15.5868 6.69267 15.5868C6.026 15.5868 5.35933 15.5468 4.69267 15.4935C4.67933 15.6668 4.66602 15.8268 4.66602 16.0002C4.66602 18.5735 5.546 20.9468 6.986 22.8535C8.73267 20.7602 10.8527 18.9868 13.226 17.7335Z" fill="#4D5566" />
                            <path d="M22.7733 6.93317C20.8799 5.51984 18.5333 4.6665 16 4.6665C14.9466 4.6665 13.9333 4.8265 12.96 5.09317C14.3466 7.0665 15.6 9.11984 16.72 11.2532C19.3333 9.95984 21.3466 8.3465 22.7733 6.93317Z" fill="#4D5566" />
                            <path d="M14.1473 19.507C11.454 20.9337 9.56065 22.8003 8.33398 24.3203C10.3473 26.187 13.0407 27.3337 16.0007 27.3337C17.374 27.3337 18.6806 27.0803 19.9073 26.627C19.374 23.747 18.6007 20.9203 17.6007 18.187C16.4007 18.5203 15.254 18.947 14.1473 19.507Z" fill="#4D5566" />
                            <path d="M19.5605 17.7201C20.5072 20.3334 21.2405 23.0134 21.7605 25.7468C24.5739 24.0801 26.5872 21.2401 27.1605 17.9068C25.5339 17.5468 22.7605 17.1868 19.5605 17.7201Z" fill="#4D5566" />
                            <path d="M17.5996 13.0404C17.9196 13.7071 18.2263 14.3604 18.5196 15.0271C18.6263 15.2938 18.7196 15.5604 18.8263 15.8271C22.3463 15.1604 25.4396 15.5071 27.3329 15.8938C27.3063 12.9471 26.1329 10.2671 24.2529 8.26709C22.7063 9.81376 20.5063 11.6138 17.5996 13.0404Z" fill="#4D5566" />
                        </svg></a></li>
                        <li className='hover:scale-[1.2] transition-all duration-300'><a href="https://www.instagram.com/accounts/login/?next=%2Fp%2FCuBJKw0Bg-u%2F" target='_blank'>
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.9993 17.7607C16.0659 17.7607 17.7593 16.0674 17.7593 14.0007C17.7593 11.9341 16.0659 10.2407 13.9993 10.2407C11.9326 10.2407 10.2393 11.9341 10.2393 14.0007C10.2393 16.0674 11.9326 17.7607 13.9993 17.7607Z" fill="#4D5566" />
                            <path d="M20.8527 0.666992H7.146C3.57266 0.666992 0.666016 3.57366 0.666016 7.14699V20.8537C0.666016 24.427 3.57266 27.3337 7.146 27.3337H20.8527C24.426 27.3337 27.3327 24.427 27.3327 20.8537V7.14699C27.3327 3.57366 24.426 0.666992 20.8527 0.666992ZM20.866 8.54699C20.106 8.54699 19.4927 7.93366 19.4927 7.18699C19.4927 6.42699 20.106 5.81366 20.866 5.81366C21.6127 5.81366 22.226 6.42699 22.226 7.18699C22.226 7.93366 21.6127 8.54699 20.866 8.54699ZM13.9993 8.24033C17.1727 8.24033 19.7594 10.827 19.7594 14.0003C19.7594 17.1737 17.1727 19.7603 13.9993 19.7603C10.826 19.7603 8.23934 17.1737 8.23934 14.0003C8.23934 10.827 10.826 8.24033 13.9993 8.24033Z" fill="#4D5566" />
                        </svg>
                        </a></li>
                        <li className='hover:scale-[1.2] transition-all duration-300'><a href="https://in.pinterest.com/" target='_blank'>
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.9993 0.666504C6.65268 0.666504 0.666016 6.65317 0.666016 13.9998C0.666016 21.3465 6.65268 27.3332 13.9993 27.3332C21.346 27.3332 27.3327 21.3465 27.3327 13.9998C27.3327 6.65317 21.346 0.666504 13.9993 0.666504ZM11.9727 25.9732C11.8527 26.4132 11.4527 26.7065 11.0127 26.7065C10.9194 26.7065 10.8393 26.7065 10.746 26.6798C10.2127 26.5332 9.89268 25.9865 10.0393 25.4532L10.2393 24.6932L13.0393 14.1865C13.1727 13.6665 13.7194 13.3332 14.2527 13.4798C14.786 13.6265 15.106 14.1732 14.9727 14.7065L13.946 18.5865C14.0527 18.5865 14.1727 18.6265 14.2793 18.6665C14.626 18.8132 14.9727 18.8932 15.3193 18.8932H15.3727C17.1327 18.8932 19.066 16.9865 19.4527 14.8665C19.6127 13.9198 19.4927 13.0398 19.0927 12.2532C18.1594 10.4132 15.9593 9.5865 14.3193 9.5865C12.3993 9.5865 10.8393 10.1865 9.82601 11.3065C8.99934 12.2132 8.61267 13.1865 8.69267 14.2132C8.77267 15.3465 9.41268 16.1732 9.78601 16.5598C10.1593 16.9598 10.146 17.5865 9.74601 17.9732C9.34601 18.3598 8.71935 18.3465 8.33268 17.9465C7.77268 17.3598 6.826 16.1198 6.69267 14.3465C6.61267 13.2665 6.83935 11.6265 8.33268 9.95984C9.71935 8.42651 11.8527 7.5865 14.3193 7.5865C16.626 7.5865 19.546 8.7465 20.8794 11.3332C21.2927 12.1465 21.7193 13.4798 21.4127 15.2132C20.9327 17.9865 18.386 20.8932 15.3727 20.8932H15.266C14.666 20.8798 14.066 20.7465 13.4793 20.4932C13.466 20.4798 13.4527 20.4798 13.4393 20.4665L12.186 25.1865L11.9727 25.9732Z" fill="#4D5566" />
                        </svg></a></li>
                        <li className='hover:scale-[1.2] transition-all duration-300'><a href="https://www.linkedin.com/feed/" target='_blank'>
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.8527 0.666504H7.146C3.57266 0.666504 0.666016 3.57317 0.666016 7.1465V20.8532C0.666016 24.4265 3.57266 27.3332 7.146 27.3332H20.8527C24.426 27.3332 27.3327 24.4265 27.3327 20.8532V7.1465C27.3327 3.57317 24.426 0.666504 20.8527 0.666504ZM9.8927 10.2265C9.14603 10.2265 8.51937 9.61317 8.51937 8.86651C8.51937 8.10651 9.13269 7.49317 9.87935 7.49317H9.8927C10.6527 7.49317 11.266 8.10651 11.266 8.86651C11.266 9.61317 10.6527 10.2265 9.8927 10.2265ZM10.866 12.2932V19.1332C10.866 19.6932 10.426 20.1332 9.86601 20.1332C9.31934 20.1332 8.86601 19.6932 8.86601 19.1332V12.2932C8.86601 11.7332 9.31934 11.2932 9.86601 11.2932C10.426 11.2932 10.866 11.7332 10.866 12.2932ZM19.1327 19.1332C19.1327 19.6932 18.6794 20.1332 18.1327 20.1332C17.5727 20.1332 17.1327 19.6932 17.1327 19.1332V16.0132C17.1327 15.1732 16.9593 15.0265 16.826 14.9065C16.666 14.7598 16.386 14.6665 16.0393 14.6532C15.7593 14.6665 15.4793 14.7598 15.3193 14.9065C15.186 15.0265 15.0127 15.1732 15.0127 16.0132V19.1332C15.0127 19.6932 14.5727 20.1332 14.0127 20.1332C13.466 20.1332 13.0127 19.6932 13.0127 19.1332V16.0132C13.0127 14.7998 13.306 14.0265 13.986 13.4132C14.506 12.9465 15.2127 12.6932 16.0393 12.6532C16.9327 12.6932 17.6394 12.9465 18.1727 13.4132C18.8394 14.0265 19.1327 14.7998 19.1327 16.0132V19.1332Z" fill="#4D5566" />
                        </svg></a></li>
                    </ul>
                </div>
                <div
                    className="lg:hidden relative right-3 text-red-900 z-30 text-3xl font-bold "
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? "✕" : "☰"}
                </div>
            </nav>
            <div className={`w-full h-full bg-black z-20 transition-all lg:-top-full flex justify-center items-center duration-300 fixed ${isOpen ? "top-0" :"-top-full"}`}>
                <div className='flex items-center flex-col gap-7'>
                    <ul className='flex items-center gap-7  flex-col'>
                        <li className='worksans font-semibold text-xl text-white'><a href="#" class="relative w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" >Home</a></li>
                        <li className='worksans font-semibold text-xl text-white'><a href="#" class="relative w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" >Work</a></li>
                        <li className='worksans font-semibold text-xl text-white'><a href="#" class="relative w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" >Testimonials</a></li>
                        <li className='worksans font-semibold text-xl text-white'><a href="#" class="relative w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" >About</a></li>
                    </ul>
                    <ul className='flex items-center gap-6 '>
                        <li className='hover:scale-[1.2] transition-all duration-300'><a href="https://www.fifa.com/en" target='_blank'>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.9466 12.4C14.2666 12.2933 14.5733 12.1733 14.88 12.0533C13.7466 9.89333 12.4666 7.81333 11.04 5.82666C7.99996 7.31999 5.71996 10.12 4.95996 13.48C7.99996 13.72 11.0799 13.3733 13.9466 12.4Z" fill="#4D5566" />
                                <path d="M13.226 17.7335C14.3994 17.1335 15.5994 16.6535 16.8527 16.2802C16.7994 16.1202 16.7327 15.9602 16.666 15.8135C16.386 15.1468 16.0793 14.4935 15.7727 13.8535C15.386 14.0002 14.9994 14.1602 14.586 14.3068C12.066 15.1468 9.37267 15.5868 6.69267 15.5868C6.026 15.5868 5.35933 15.5468 4.69267 15.4935C4.67933 15.6668 4.66602 15.8268 4.66602 16.0002C4.66602 18.5735 5.546 20.9468 6.986 22.8535C8.73267 20.7602 10.8527 18.9868 13.226 17.7335Z" fill="#4D5566" />
                                <path d="M22.7733 6.93317C20.8799 5.51984 18.5333 4.6665 16 4.6665C14.9466 4.6665 13.9333 4.8265 12.96 5.09317C14.3466 7.0665 15.6 9.11984 16.72 11.2532C19.3333 9.95984 21.3466 8.3465 22.7733 6.93317Z" fill="#4D5566" />
                                <path d="M14.1473 19.507C11.454 20.9337 9.56065 22.8003 8.33398 24.3203C10.3473 26.187 13.0407 27.3337 16.0007 27.3337C17.374 27.3337 18.6806 27.0803 19.9073 26.627C19.374 23.747 18.6007 20.9203 17.6007 18.187C16.4007 18.5203 15.254 18.947 14.1473 19.507Z" fill="#4D5566" />
                                <path d="M19.5605 17.7201C20.5072 20.3334 21.2405 23.0134 21.7605 25.7468C24.5739 24.0801 26.5872 21.2401 27.1605 17.9068C25.5339 17.5468 22.7605 17.1868 19.5605 17.7201Z" fill="#4D5566" />
                                <path d="M17.5996 13.0404C17.9196 13.7071 18.2263 14.3604 18.5196 15.0271C18.6263 15.2938 18.7196 15.5604 18.8263 15.8271C22.3463 15.1604 25.4396 15.5071 27.3329 15.8938C27.3063 12.9471 26.1329 10.2671 24.2529 8.26709C22.7063 9.81376 20.5063 11.6138 17.5996 13.0404Z" fill="#4D5566" />
                            </svg></a></li>
                        <li className='hover:scale-[1.2] transition-all duration-300'><a href="https://www.instagram.com/accounts/login/?next=%2Fp%2FCuBJKw0Bg-u%2F" target='_blank'>
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.9993 17.7607C16.0659 17.7607 17.7593 16.0674 17.7593 14.0007C17.7593 11.9341 16.0659 10.2407 13.9993 10.2407C11.9326 10.2407 10.2393 11.9341 10.2393 14.0007C10.2393 16.0674 11.9326 17.7607 13.9993 17.7607Z" fill="#4D5566" />
                                <path d="M20.8527 0.666992H7.146C3.57266 0.666992 0.666016 3.57366 0.666016 7.14699V20.8537C0.666016 24.427 3.57266 27.3337 7.146 27.3337H20.8527C24.426 27.3337 27.3327 24.427 27.3327 20.8537V7.14699C27.3327 3.57366 24.426 0.666992 20.8527 0.666992ZM20.866 8.54699C20.106 8.54699 19.4927 7.93366 19.4927 7.18699C19.4927 6.42699 20.106 5.81366 20.866 5.81366C21.6127 5.81366 22.226 6.42699 22.226 7.18699C22.226 7.93366 21.6127 8.54699 20.866 8.54699ZM13.9993 8.24033C17.1727 8.24033 19.7594 10.827 19.7594 14.0003C19.7594 17.1737 17.1727 19.7603 13.9993 19.7603C10.826 19.7603 8.23934 17.1737 8.23934 14.0003C8.23934 10.827 10.826 8.24033 13.9993 8.24033Z" fill="#4D5566" />
                            </svg>
                        </a></li>
                        <li className='hover:scale-[1.2] transition-all duration-300'><a href="https://in.pinterest.com/" target='_blank'>
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.9993 0.666504C6.65268 0.666504 0.666016 6.65317 0.666016 13.9998C0.666016 21.3465 6.65268 27.3332 13.9993 27.3332C21.346 27.3332 27.3327 21.3465 27.3327 13.9998C27.3327 6.65317 21.346 0.666504 13.9993 0.666504ZM11.9727 25.9732C11.8527 26.4132 11.4527 26.7065 11.0127 26.7065C10.9194 26.7065 10.8393 26.7065 10.746 26.6798C10.2127 26.5332 9.89268 25.9865 10.0393 25.4532L10.2393 24.6932L13.0393 14.1865C13.1727 13.6665 13.7194 13.3332 14.2527 13.4798C14.786 13.6265 15.106 14.1732 14.9727 14.7065L13.946 18.5865C14.0527 18.5865 14.1727 18.6265 14.2793 18.6665C14.626 18.8132 14.9727 18.8932 15.3193 18.8932H15.3727C17.1327 18.8932 19.066 16.9865 19.4527 14.8665C19.6127 13.9198 19.4927 13.0398 19.0927 12.2532C18.1594 10.4132 15.9593 9.5865 14.3193 9.5865C12.3993 9.5865 10.8393 10.1865 9.82601 11.3065C8.99934 12.2132 8.61267 13.1865 8.69267 14.2132C8.77267 15.3465 9.41268 16.1732 9.78601 16.5598C10.1593 16.9598 10.146 17.5865 9.74601 17.9732C9.34601 18.3598 8.71935 18.3465 8.33268 17.9465C7.77268 17.3598 6.826 16.1198 6.69267 14.3465C6.61267 13.2665 6.83935 11.6265 8.33268 9.95984C9.71935 8.42651 11.8527 7.5865 14.3193 7.5865C16.626 7.5865 19.546 8.7465 20.8794 11.3332C21.2927 12.1465 21.7193 13.4798 21.4127 15.2132C20.9327 17.9865 18.386 20.8932 15.3727 20.8932H15.266C14.666 20.8798 14.066 20.7465 13.4793 20.4932C13.466 20.4798 13.4527 20.4798 13.4393 20.4665L12.186 25.1865L11.9727 25.9732Z" fill="#4D5566" />
                            </svg></a></li>
                        <li className='hover:scale-[1.2] transition-all duration-300'><a href="https://www.linkedin.com/feed/" target='_blank'>
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.8527 0.666504H7.146C3.57266 0.666504 0.666016 3.57317 0.666016 7.1465V20.8532C0.666016 24.4265 3.57266 27.3332 7.146 27.3332H20.8527C24.426 27.3332 27.3327 24.4265 27.3327 20.8532V7.1465C27.3327 3.57317 24.426 0.666504 20.8527 0.666504ZM9.8927 10.2265C9.14603 10.2265 8.51937 9.61317 8.51937 8.86651C8.51937 8.10651 9.13269 7.49317 9.87935 7.49317H9.8927C10.6527 7.49317 11.266 8.10651 11.266 8.86651C11.266 9.61317 10.6527 10.2265 9.8927 10.2265ZM10.866 12.2932V19.1332C10.866 19.6932 10.426 20.1332 9.86601 20.1332C9.31934 20.1332 8.86601 19.6932 8.86601 19.1332V12.2932C8.86601 11.7332 9.31934 11.2932 9.86601 11.2932C10.426 11.2932 10.866 11.7332 10.866 12.2932ZM19.1327 19.1332C19.1327 19.6932 18.6794 20.1332 18.1327 20.1332C17.5727 20.1332 17.1327 19.6932 17.1327 19.1332V16.0132C17.1327 15.1732 16.9593 15.0265 16.826 14.9065C16.666 14.7598 16.386 14.6665 16.0393 14.6532C15.7593 14.6665 15.4793 14.7598 15.3193 14.9065C15.186 15.0265 15.0127 15.1732 15.0127 16.0132V19.1332C15.0127 19.6932 14.5727 20.1332 14.0127 20.1332C13.466 20.1332 13.0127 19.6932 13.0127 19.1332V16.0132C13.0127 14.7998 13.306 14.0265 13.986 13.4132C14.506 12.9465 15.2127 12.6932 16.0393 12.6532C16.9327 12.6932 17.6394 12.9465 18.1727 13.4132C18.8394 14.0265 19.1327 14.7998 19.1327 16.0132V19.1332Z" fill="#4D5566" />
                            </svg></a></li>
                    </ul>
                </div>
            </div>
            <div className='container max-w-[1140px] px-3 mx-auto mt-12 max-sm:mt-5 max-lg:mb-20 max-md:mb-10 mb-28'>
                <div className='flex flex-wrap flex-row -mx-3 justify-between items-center'>
                    <div className='w-full lg:w-6/12 px-3'>
                        <div>
                            <button className='px-6 py-3 bg-black text-white rounded-[10px] text-2xl worksans max-md:text-xl max-sm:text-base'>👋 Hello All</button>
                            <h2 className='text-fs-4xl text-customBlack font-semibold eczar pt-6 leading-[75px] max-lg:text-fs-3xl max-md:text-5xl max-sm:text-fs-2xl'>
                                I’m Chiranjit H,
                                A UI/UX Designer
                                and Developer
                            </h2>
                            <div className='flex mt-8 max-sm:mt-5 items-center gap-4 worksans max-sm:flex-col max-sm:gap-3'>
                                <button class="group max-sm:text-base worksans font-semibold text-xl rounded-md relative py-4 px-6 max-sm:px-2 max-sm:py-3 overflow-hidden border-4 border-black text-white bg-black transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-24 before:rotate-45 before:bg-white before:duration-500 hover:text-black hover:before:h-64 hover:before:-translate-y-32">
                                    <span class="relative z-10 flex items-center gap-3">View My Work
                                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path class="transition-all duration-200 group-hover:fill-black" fill-rule="evenodd" clip-rule="evenodd" d="M10.7929 15.7071C10.4024 15.3166 10.4024 14.6834 10.7929 14.2929L13.0858 12L10.7929 9.70711C10.4024 9.31658 10.4024 8.68342 10.7929 8.29289C11.1834 7.90237 11.8166 7.90237 12.2071 8.29289L14.9229 11.0087C15.4704 11.5562 15.4704 12.4438 14.9229 12.9913L12.2071 15.7071C11.8166 16.0976 11.1834 16.0976 10.7929 15.7071ZM7.75007 2.38782C9.04878 2.0992 10.6243 2 12.5 2C14.3757 2 15.9512 2.0992 17.2499 2.38782C18.56 2.67897 19.6488 3.176 20.4864 4.01358C21.324 4.85116 21.821 5.94002 22.1122 7.25007C22.4008 8.54878 22.5 10.1243 22.5 12C22.5 13.8757 22.4008 15.4512 22.1122 16.7499C21.821 18.06 21.324 19.1488 20.4864 19.9864C19.6488 20.824 18.56 21.321 17.2499 21.6122C15.9512 21.9008 14.3757 22 12.5 22C10.6243 22 9.04878 21.9008 7.75007 21.6122C6.44002 21.321 5.35116 20.824 4.51358 19.9864C3.676 19.1488 3.17897 18.06 2.88782 16.7499C2.5992 15.4512 2.5 13.8757 2.5 12C2.5 10.1243 2.5992 8.54878 2.88782 7.25007C3.17897 5.94002 3.676 4.85116 4.51358 4.01358C5.35116 3.176 6.44002 2.67897 7.75007 2.38782Z" fill="#F3F2FF" />
                                        </svg>
                                    </span>
                                </button>
                                <button class="max-sm:text-base worksans font-semibold text-xl rounded-md before:ease relative py-4 px-14 max-sm:px-9 max-sm:py-3 overflow-hidden border-4 border-black text-black transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-black before:duration-500 hover:text-white hover:before:h-64 hover:before:-translate-y-32">
                                    <span class="relative z-10">Contact Me</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='w-full lg:w-6/12 px-3 max-lg:mt-5'>
                        <div>
                            <img src={Heroimage} alt="hero-image" className='rounded-[30px] w-full' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Herosection