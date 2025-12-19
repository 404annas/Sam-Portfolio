import Marquee from "react-fast-marquee";
import star from "../assets/star2.svg";
import CardWrapper from "./CardWrapper";
import Pepsi from "../assets/pepsiLogo.png";
import cockStudio from "../assets/cockStudio.png";
import okPakistan from "../assets/okPakistan.jpg"
import bahrain from "../assets/bahrain.png"
import massAppeal from "../assets/massAppeal.png"
import aryNews from "../assets/aryNews.png"
import hkc from "../assets/hkc.png"
import govPunjab from "../assets/govPunjab.png"
import bonanza from "../assets/bonanza.png"
import upf from "../assets/upf.png"
import sonyMusic from "../assets/sonyMusic.png"
import tSeries from "../assets/tSeries.png"
import jacquline1 from "../assets/jacquline2.webp"
import andra from "../assets/andra3.jpg"
import bilal from "../assets/bilal2.jpg"
import feroze from "../assets/feroze.jpg"
import bohemia from "../assets/bohemia.jpg"
import mahesh from "../assets/mahesh.jfif"
import farhan from "../assets/farhan2.jpg"
import catalin from "../assets/catalin2.jpg"
import abdullahS from "../assets/abdullahS2.jpg"
import sahir from "../assets/sahir.jpg"
import sarah from "../assets/sarah.jpg"
import mawra from "../assets/mawra.jpg"
import syra from "../assets/syra.jpg"
import humaima from "../assets/humaima.jpg"
import media from "../assets/media.jpg"
import social from "../assets/social2.png"
import bride from "../assets/bride3.png"
import akcent from "../assets/akcent.jpg"
import siren from "../assets/siren.jpg"
import sana from "../assets/sana.jpg"
import mathira from "../assets/mathira.jpg"
import sanam from "../assets/sanam.jpg"
import urwa from "../assets/urwa.jpg"
import kamal from "../assets/kamal.jpg"
import aliHamza from "../assets/aliHamza.jpg"
import rahat from "../assets/rahat.webp"
import faraz from "../assets/faraz.jfif"
import soch from "../assets/soch.jpg"
import aliAzmat from "../assets/aliAzmat.jpg"
import asrar from "../assets/asrar.jpg"
import nouman from "../assets/nouman.webp"
import junaid from "../assets/junaid.jpg"
import amanat from "../assets/amanat.jpg"
import aliHamza2 from "../assets/aliHamza2.jpg"
import aryan from "../assets/aryan.jpg"
import kashifKK from "../assets/kk.jpg"
import umerDuzz from "../assets/umerDuzz.jpg"
import saqib from "../assets/saqib.jpg"
import abdullahMuzzaffar from "../assets/abdullahMuzzaffar2.jpg"
import shahidMalik from "../assets/shahidMalik.jpg"
import nabeel from "../assets/nabeel.jpg"
import zunair from "../assets/zunair.jpg"
import awais from "../assets/awais.jfif"
import callBand from "../assets/callBand.jfif"
import sajawal from "../assets/sajawal.jpg"
import imperialMangoes from "../assets/imperialMangoes.jpg"

const MarqueeContent = () => (
    <div className="flex items-center">
        <span className="ibm text-xs font-medium text-seven uppercase mx-4">
            Brands & Creators I've Worked With
        </span>
        <img src={star} alt="star" className="w-4 h-4" />
    </div>
);

const logos = [Pepsi, cockStudio, okPakistan, bahrain, massAppeal, aryNews, hkc, govPunjab, bonanza, upf, sonyMusic, tSeries, media, bride, social, siren, imperialMangoes, sarah, mawra, syra, humaima, sana, mathira, sanam, urwa, andra, jacquline1, akcent, bilal, feroze, bohemia, mahesh, farhan, catalin, abdullahS, sahir, kamal, aliHamza, rahat, faraz, soch, aliAzmat, asrar, nouman, junaid, umerDuzz, kashifKK, aryan, aliHamza2, amanat, saqib, abdullahMuzzaffar, shahidMalik, nabeel, sajawal, zunair, awais, callBand]

const StatBlock = () => {
    return (
        <div className="grid grid-cols-2 border-forth">
            {logos.map((logo, idx) => {
                const containIndexes = [4, 6, 8, 10]; // 5th, 7th, 9th, 11th

                return (
                    <div
                        key={idx}
                        className={`flex justify-center pt-2 pb-4 ${idx % 2 === 0
                            ? "border-r border-b border-forth"
                            : "border-b border-forth"
                            }`}
                    >
                        <img
                            src={logo}
                            alt="Logo"
                            loading="lazy"
                            className={`w-32 h-auto mt-2 ${containIndexes.includes(idx)
                                ? "object-contain"
                                : "object-cover"
                                }`}
                        />
                    </div>
                );
            })}
        </div>
    );
};


const Works = () => {
    return (
        <CardWrapper>
            {/* Main content area */}
            <div className="flex flex-col max-h-[80vh] sm:max-h-none overflow-y-auto md:overflow-visible">
                {/* Section 1: About Me */}
                <div className="text-[#2C2E28] px-4 sm:px-6 pt-6 sm:pt-8">
                    <p className="ibm text-xs font-medium tracking-tight">BRANDS & CREATORS I'VE WORKED WITH</p>
                    <p className="text-2xl mt-4 leading-7 max-w-xs sm:max-w-sm font-medium uppercase text-third">
                        Over the years, I have had the privilege of collaborating with top brands and creators across industries.
                    </p>
                </div>

                {/* Section 2: Stats Grid */}
                <div
                    className="
            border-t border-forth mt-4 sm:mt-6
          "
                >
                    <div className=" ">
                        <StatBlock />
                    </div>
                    {/* <div className="border-b border-forth">
                        <StatBlock value="12+" label="YEARS EXPERIENCE" />
                    </div> */}
                    {/* <div className="border-r border-forth">
                        <StatBlock value="95%" label="MODEL ACCURACY" />
                    </div>
                    <div>
                        <StatBlock value="20+" label="INDUSTRIES EXPLORED" />
                    </div> */}
                </div>
                {/* <div
                    className="
            flex-grow grid grid-cols-2 
         border-forth
          "
                >
                    <div className="border-r border-t border-forth">
                        <StatBlock value="110+" label="PROJECTS COMPLETED" />
                    </div>
                    <div className="border-t border-forth">
                        <StatBlock value="12+" label="YEARS EXPERIENCE" />
                    </div>
                    <div className="border-r border-t border-forth">
                        <StatBlock value="12+" label="YEARS EXPERIENCE" />
                    </div>
                    <div className="border-t border-forth">
                        <StatBlock value="12+" label="YEARS EXPERIENCE" />
                    </div>
                    <div className="border-r border-t border-forth">
                        <StatBlock value="12+" label="YEARS EXPERIENCE" />
                    </div>
                    <div className="border-t border-forth">
                        <StatBlock value="12+" label="YEARS EXPERIENCE" />
                    </div>
                </div> */}
            </div>

            {/* Section 3: Marquee Footer */}
            <div className="bg-six py-3 sm:py-4">
                <Marquee speed={60} gradient={false}>
                    <MarqueeContent />
                    <MarqueeContent />
                    <MarqueeContent />
                </Marquee>
            </div>
        </CardWrapper>
    );
};

export default Works;
