import Image from 'next/image';

const Footer = () => {
    return (


        <footer className="bg-dark-acc/60 shadow">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between flex-row">
                    <a href="#" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src="images/FT.svg" className="h-5" alt="Ft Logo" />
                    </a>
                    <ul className="flex items-center mb-6 text-sm font-medium text-light-acc/40 sm:mb-0 space-x-4">
                        <li>
                            <a href="#projects" className="hover:underline">Projects</a>
                        </li>
                        <li>
                            <a href="#about" className="hover:underline">About me</a>
                        </li>
                        <li>
                            <a href="https://linkedin.com/in/FatlirT" target="_blank" className="fill-light-acc/40 hover:fill-light-acc"><svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                                width="20" height="20" viewBox="0 0 600.000000 600.000000"
                                preserveAspectRatio="xMidYMid meet">

                                <g transform="translate(0.000000,600.000000) scale(0.100000,-0.100000)"
                                    stroke="none">
                                    <path d="M1215 5939 c-217 -16 -363 -53 -526 -135 -313 -156 -532 -455 -603
-819 -32 -163 -36 -395 -36 -2000 0 -1592 4 -1800 35 -1970 77 -417 364 -751
762 -886 236 -79 288 -81 2278 -76 1256 3 1702 7 1769 16 412 57 732 274 908
616 84 163 121 318 138 563 13 205 13 3316 0 3512 -12 176 -30 278 -69 392
-116 343 -376 603 -719 719 -118 40 -219 57 -407 69 -195 12 -3356 11 -3530
-1z m607 -1206 c165 -77 261 -243 244 -422 -12 -134 -109 -272 -235 -334 -62
-30 -71 -32 -181 -32 -109 0 -118 2 -181 32 -257 126 -315 468 -114 669 90 91
178 125 310 121 77 -2 100 -7 157 -34z m2214 -1118 c193 -34 337 -108 475
-245 73 -73 93 -100 137 -190 124 -252 122 -231 122 -1171 l0 -779 -360 0
-360 0 0 688 c0 733 0 734 -50 837 -72 150 -265 236 -462 207 -164 -24 -285
-109 -349 -245 -57 -124 -59 -141 -59 -844 l0 -643 -355 0 -355 0 2 1178 3
1177 330 0 330 0 3 -162 c1 -90 4 -163 6 -163 2 0 35 32 73 71 224 233 549
339 869 284z m-2018 -1207 l2 -1178 -365 0 -365 0 0 1180 0 1180 363 -2 362
-3 3 -1177z"/>
                                </g>
                            </svg>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/FatlirT" target="blank" className="fill-light-acc/40 hover:fill-light-acc"><svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                                width="20" height="20" viewBox="0 0 512.000000 512.000000"
                                preserveAspectRatio="xMidYMid meet">

                                <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                                    stroke="none">
                                    <path d="M2360 5049 c-154 -11 -357 -47 -516 -93 -902 -259 -1603 -1017 -1790
-1934 -136 -669 -8 -1355 354 -1908 255 -390 580 -686 968 -886 141 -73 341
-154 403 -164 58 -9 109 19 133 73 18 40 18 60 12 286 l-7 243 -86 -14 c-97
-15 -256 -9 -386 13 -105 19 -211 71 -278 139 -53 53 -67 76 -136 229 -63 139
-135 231 -232 297 -66 46 -121 106 -117 128 6 30 48 43 121 38 141 -10 288
-113 393 -274 72 -110 143 -179 230 -222 62 -31 79 -35 169 -38 103 -4 207 12
291 44 41 16 43 18 58 85 19 86 56 164 106 228 l39 49 -82 11 c-264 38 -452
102 -627 215 -229 148 -365 379 -431 731 -20 109 -23 389 -5 492 29 167 98
319 200 445 l45 55 -20 62 c-52 168 -42 372 28 574 18 50 22 52 103 48 118 -6
371 -108 543 -218 l71 -46 56 11 c30 6 87 18 127 27 271 58 655 58 926 0 40
-9 97 -21 127 -27 l55 -10 95 58 c226 137 484 230 575 206 26 -7 33 -17 53
-75 43 -125 55 -210 50 -351 -4 -95 -11 -148 -26 -195 l-21 -64 44 -54 c89
-109 155 -244 192 -389 22 -89 25 -417 4 -544 -32 -198 -114 -406 -210 -532
-165 -217 -464 -366 -843 -418 l-87 -12 39 -49 c47 -60 85 -137 106 -221 14
-52 17 -137 20 -503 5 -490 5 -489 72 -521 46 -21 83 -15 229 42 738 284 1320
932 1533 1703 141 513 111 1108 -80 1601 -172 440 -475 842 -848 1122 -405
303 -865 474 -1367 507 -175 12 -192 12 -375 0z"/>
                                </g>
                            </svg></a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto border-gray-700 lg:my-8" />
                <span className="block text-sm text-light-acc/50 sm:text-center">© 2024 <a href="#" className="hover:underline">@FatlirT</a>. All Rights Reserved.</span>
            </div>
        </footer >



    );
};

export default Footer;