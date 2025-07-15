import { Container } from "@/components/container";
import { MarqueImg } from "@/components/marquee-image";
import { Button } from "@/components/ui/button";
import { Sparkle, Sparkles } from "lucide-react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div className="flex-col w-full pb-24">
            <Container>
                <div className="my-8">
                    <h2 className="text-3xl text-center md:text-left md:text-6xl">
                        <span className="text-outline font-extrabold md:text-8xl">
                            AI Interview Coach
                        </span>
                        <span className="text-gray-500 font-extrabold"> – Interview Prep Made Easy</span>
                    </h2>

                    <p className="mt-4 text-muted-foreground text-sm">
                        Practice mock interviews with AI, get instant feedback, and improve your confidence — all in one place.
                    </p>

                </div>
                <div className="flex w-full items-center justify-evenly md:px-12 md:py-16 md:justify-end gap-12">
                    <p className="text-2xl font-semibold text-gray-900 text-center">
                        Practice Anytime
                        <span className="block text-xl text-muted-foreground font-normal">
                            Mock interviews available 24/7
                        </span>
                    </p>
                    <p className="text-2xl font-semibold text-gray-900 text-center">
                        Real-World Questions
                        <span className="block text-xl text-muted-foreground font-normal">
                            Role-based interview experiences
                        </span>
                    </p>
                </div>



                <div className="w-full mt-4 rounded-xl bg-gray-100 h-[420px] drop-shadow-md overflow-hidden relative">
                    <img
                        src="/assests/img/heroimage.jpg"
                        alt=""
                        className="w-full h-full object-cover"
                    />

                    <div className="absolute top-4 left-4 px-4 py-2 rounded-md bg-white/40 backdrop-blur-md">
                        AI MockMate&copy;
                    </div>

                    <div className="hidden md:block absolute w-80 bottom-4 right-4 px-4 py-2 rounded-md bg-white/60 backdrop-blur-md">
                        <h2 className="text-neutral-800 font-semibold">Developer Practice Round</h2>
                        <p className="text-sm text-neutral-500">
                            Try a mock interview and get feedback in seconds.
                        </p>

                        <Button className="mt-3">
                            Generate <Sparkle />
                        </Button>
                    </div>
                </div>


            </Container>
            {/* marquee section */}
            <div className=" w-full my-12">
                <Marquee pauseOnHover>
                    <MarqueImg img="/assests/img/logo/firebase.png" />
                    <MarqueImg img="/assests/img/logo/meet.png" />
                    <MarqueImg img="/assests/img/logo/zoom.png" />
                    <MarqueImg img="/assests/img/logo/firebase.png" />
                    <MarqueImg img="/assests/img/logo/microsoft.png" />
                    <MarqueImg img="/assests/img/logo/meet.png" />
                    <MarqueImg img="/assests/img/logo/tailwindcss.png" />
                    <MarqueImg img="/assests/img/logo/microsoft.png" />
                </Marquee>
            </div>
            <Container className="py-8 space-y-8">
                <h2 className="tracking-wide text-xl text-gray-800 font-semibold">
                    Unleash your potential with personalized AI insights and targeted
                    interview practice.
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                    <div className="col-span-1 md:col-span-3">
                        <img
                            src="/assests/img/office.jpg"
                            alt=""
                            className="w-full max-h-96 rounded-md object-cover"
                        />
                    </div>

                    <div className="col-span-1 md:col-span-2 gap-8 max-h-96 min-h-96 w-full flex flex-col items-center justify-center text-center">
                        <p className="text-center text-muted-foreground">
                            Transform the way you prepare, gain confidence, and boost your
                            chances of landing your dream job. Let AI be your edge in
                            today&apos;s competitive job market.
                        </p>

                        <Link to={"/generate"} className="w-full">
                            <Button className="w-3/4">
                                Generate <Sparkles className="ml-2" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </Container>


        </div>

    );
};

export default HomePage;
