import React, { useState, useEffect } from "react";
import './gridItemdesc.css';

export const GridItemDesc = (props) => {

    const [itemDetails, setitemDetails] = useState(props.itemDetails);

    useEffect(() => {
        setitemDetails(props.itemDetails);
    })

    const genreSeparator = itemDetails.EventGenre.split("|");
    const splitDate = itemDetails ? itemDetails.ShowDate.split(",") : "";

    return (
        <div className="griddescwrapper">
            <div className="columns">
                <div className="column is-6">
                    <video width="100%" height="auto" controls>
                        <source src="/assets/finalcut.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="column is-6 videodetail">
                    <div className="videoDetails">
                        <h4><b>{itemDetails.EventName}</b></h4>
                        <p className="language">{itemDetails.EventLanguage}</p>
                        <div className="tags noMargin">
                            {genreSeparator.map((item) => {
                                return (
                                    <span className="tag">{item}</span>
                                )
                            })}

                        </div>
                        <div className="columns is-gapless">
                            <div className="column is-2">
                                <div className="voting">
                                    <i className="fas fa-thumbs-up" />
                                    <span>{itemDetails.wtsPerc} %</span>
                                    <div className="lowerItem">{itemDetails.wtsCount} votes</div>
                                </div>
                            </div>
                            <div className="column is-10">
                                <div className="release">
                                    <i className="fas fa-calendar-alt" />
                                    <span>{splitDate[0]}</span>
                                    <div className="lowerItem">{splitDate[1]}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ratingVotes columns">
                    <div className="column is-4 is-vertical-center text-center">
                        <div className="liked">
                            <div className="text-center"><i className="far fa-thumbs-up"></i></div>
                            <div className="totalwtached greenTxt">
                            <p>WILL WATCH</p>
                            <p>( {itemDetails.wtsCount} )</p>
                            </div>
                        </div>
                    </div>
                    <div className="column is-vertical-center is-4 text-center">
                        <div className="maybe">
                        <div className="text-center"><i className="fas fa-question"></i></div>
                        <div className="totalwtached orangeTxt">
                        <p>MAYBE</p>
                            <p>( {itemDetails.maybeCount} )</p>
                        </div>
                        </div>
                    </div>
                    <div className="column is-4 is-vertical-center text-center">
                        <div className="dontlike">
                        <div className="text-center"><i className="far fa-thumbs-down"></i></div>
                        <div className="totalwtached red">
                        <p>WONT WATCH</p>
                            <p>( {itemDetails.dwtsCount} )</p>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
                

    </div>
       
    )
};