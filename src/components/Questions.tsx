import React, { useState } from "react"

const Questions = ({qution,answer, isActive = false}) => {
    const [showmore, setshowmore] = useState(!isActive)

    const handleclick = () => {
        setshowmore(!showmore)
    }
    return (
        <>
            <div className="mb-4">
                <div className="border-b-2 border-solid bordercolor">
                    <div className="flex items-center justify-between mb-4">
                        <p className="quation font-bold text-lg md:w-auto w-[260px]">
                            {qution}
                        </p>
                        <div onClick={handleclick}  className="w-6">
                            {showmore
                                ? <img src="./assets/icon-plus.svg" alt="plus icon to show more content" />
                                : <img src="./assets/icon-minus.svg" alt="minus icon to show more content" />
                            }
                            
                        </div>
                    </div>
                    {showmore ? null : <p className="font-normal text-base paragh mb-4 pr-3 ">{answer}</p>}
                </div>
            </div>
        </>
    )
}
export default Questions