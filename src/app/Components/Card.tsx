import React from "react";

import badge1 from '../../../public/Badge.svg'
import badge2 from '../../../public/Badge (1).svg'
import badge3 from '../../../public/Badge (2).svg'
import badge4 from '../../../public/Badge (3).svg'
import Image from "next/image";

const SkillBadge = ({
    skillName,
    svgImage,
    skillNum
}: {
    skillName: string;
    svgImage: any;
    skillNum: any;
}) => {
    return (
        <div
            className="flex justify-center   m-8 border-[1px] bg-white flex-col p-4 rounded-xl h-60 w-80 md:w-48 xl:w-56 xl:h-40 md:h-44"
            style={{ boxShadow: "0px 0px 20px 0px #E7E7E7" }}
        >

            <div className=" bg-white text-black  xl:text-xl text-[10px] sm:text-[10px]  font-normal  p-2">
                <span className="text-[#5F6980]">{skillName}&nbsp;</span>{" "}


                <p className="font-bold">{skillNum}</p>
            </div>
            <div className=" rounded-full w-20 h-20 flex  flex-row ">
                <Image src={svgImage} alt={skillName} width={40} height={40} />

            </div>
        </div>
    );
};

const Card = () => {
    return (
        <>
            <div className="flex flex-col    my-12 w-[100%] justify-center items-center  bg-gray-200">


                <div className="gap-2 flex flex-col">
                    <div className="flex md:flex-row flex-col  top-skills  justify-center">
                        <SkillBadge
                            skillName="Revenue"
                            skillNum="$56,945"
                            svgImage={
                                badge1
                            }
                        />
                        <SkillBadge
                            skillName="Users"
                            skillNum="$56,945"
                            svgImage={
                                badge2
                            }
                        />
                        <SkillBadge
                            skillName="New SignUps"
                            skillNum="$56,945"
                            svgImage={
                                badge3
                            }
                        />

                        <div className="flex md:flex-row flex-col  top-skils  justify-center">
                            <SkillBadge
                                skillNum="$56,945"
                                skillName="Retention"
                                svgImage={
                                    badge4
                                }
                            />



                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Card;
