import { Link, Head } from "@inertiajs/react";
import ApplicationLogo from "@/Components/ApplicationLogo";

export default function Navbarleft({ auth, logo }) {
    console.log(logo);
    return (
        <header>
            <div className="flex lg:justify-center lg:col-start-2 ">
                <img
                    className="flex rounded-3xl lg:col-start-2 "
                    id="logo"
                    src=""
                />
            </div>
            <nav>
                <div className="bg-white shadow px-6">
                    <div class="flex h-16 justify-between max-w-7xl mx-auto items-center">
                        <button
                            class="text-slate-500 hover:text-slate-900 lg:invisible focus:ring-2 hover:bg-blue-600   hover:text-white transition-colors focus:ring-slate-200"
                            href="/"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-6 h-6"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            </svg>
                        </button>
                        <div class="flex -m-4 items-center hidden md:flex">
                            <a
                                class="hover:rotate-6 hover:text-blue-700 "
                                href="/"
                            >
                                <img
                                    className="flex rounded-1xl lg:col-start-2 "
                                    id="logo"
                                    src={logo}
                                />
                            </a>
                            <div class="space-x-8 ml-8 hidden md:flex">
                                <a class="px-3 py-2 text-sky-600" href="/">
                                    Inicio
                                </a>
                                <a className="text-slate-600 px-3 py-2 hover:text-sky-600 transition-colors">
                                    <Link href={route("Nosotros")}>
                                        Nosotros
                                    </Link>
                                </a>
                                <a className="text-slate-600 px-3 py-2 hover:text-sky-600 transition-colors">
                                    <Link href={route("Eventos")}>Eventos</Link>
                                </a>
                                <a className="text-slate-600 px-3 py-2 hover:text-sky-600 transition-colors">
                                    <Link href={route("contactoduroH")}>
                                        Contactanos
                                    </Link>
                                </a>
                            </div>
                        </div>
                        <div class="flex">
                            <button class="rounded-full text-slate-500  hover:text-sky-500 transition-colors focus:ring-2 focus:ring-offset-1 focus:ring-slate-200">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-6 h-6"
                                >
                                    <path
                                        stroke-linecap="rounded-full"
                                        stroke-linejoin="rounded-full"
                                        d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                                    />
                                </svg>
                            </button>
                            {auth.user ? (
                                <Link
                                    href={route("dashboard")}
                                    className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                >
                                    Cuenta
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route("login")}
                                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition   hidden md:flex hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                    >
                                        Iniciar seccion
                                    </Link>
                                    <Link
                                        href={route("register")}
                                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hidden md:flex hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                    >
                                        Registrarse
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                    <div class="space-y-1 border-t pb-3 pt-2 sm:hidden">
                        {auth.user ? (
                            <Link
                                href={route("dashboard")}
                                className="rounded-md px-3 py-2 text-red ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                            ></Link>
                        ) : (
                            <>
                                <Link
                                    href={route("login")}
                                    class="block m-4 px-1 py-2 rounded-md transition-colors justify-items-center text-slate-700 hover:bg-sky-500 hover:text-white "
                                >
                                    Iniciar seccion
                                </Link>
                                <Link
                                    href={route("register")}
                                    class="block m-4 px-1 py-2 rounded-md transition-colors justify-items-center text-slate-700 hover:bg-sky-500 hover:text-white "
                                >
                                    Registrarse
                                </Link>
                            </>
                        )}
                    </div>
                    <div class="space-y-1 border-t pb-3 pt-2 sm:hidden">
                        <a
                            className="block px-3 py-2 rounded-md transition-colors text-slate-700 hover:bg-sky-500 hover:text-white"
                            href="/"
                        >
                            Inicio
                        </a>
                        <Link
                            className="block px-3 py-2 rounded-md transition-colors text-slate-700 hover:bg-sky-500 hover:text-white"
                            href={route("Nosotros")}
                        >
                            Nosotros
                        </Link>
                        <a>
                            <Link
                                className="block px-3 py-2 rounded-md transition-colors text-slate-700 hover:bg-sky-500 hover:text-white"
                                href={route("contactoduroH")}
                            >
                                Contactanos
                            </Link>
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
}
