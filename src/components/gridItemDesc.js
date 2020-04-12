import React, { useState, useEffect } from "react";
import "./gridItemdesc.css";
import { MdClose } from "react-icons/md";

export const GridItemDesc = (props) => {
  const [itemDetails, setitemDetails] = useState(props.itemDetails);

  useEffect(() => {
    setitemDetails(props.itemDetails);
  });

  const genreSeparator = itemDetails.EventGenre.split("|");
  const splitDate = itemDetails ? itemDetails.ShowDate.split(",") : "";

  const closeItem = () => {
    props.onCloseGridItem(true);
  };
  return (
    <div className="griddescwrapper">
      <div className="columns">
        <div className="column is-full-mobile">
          <iframe
            width="100%"
            height="315"
            frameborder="0"
            allowfullscreen
            title={itemDetails.EventTitle}
            src={itemDetails.TrailerURL.replace("watch?v=", "embed/")}
          ></iframe>
        </div>
        <div className="column is-full-mobile">
          <div className="videoDetails">
            <div className="upper">
              <div className="videoDetailsrow">
                <h4>
                  <b>{itemDetails.EventName}</b>
                </h4>
                <a href="#" className="close" onClick={closeItem}>
                  <MdClose />
                </a>
                
              </div>
              <p className="language">{itemDetails.EventLanguage}</p>
              <div className="tags noMargin">
                {genreSeparator.map((item) => {
                  return <span className="tag">{item}</span>;
                })}
              </div>
              <div className="columns is-gapless">
                <div className="column is-2">
                  <div className="voting">
                    <i className="fas fa-thumbs-up" />
                    <span>{itemDetails.wtsPerc} %</span>
                    <div className="lowerItem">
                      {itemDetails.wtsCount} votes
                    </div>
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

            <div className="lower">
              <div className="ratingVotes columns">
                <div className="column is-vertical-center text-center">
                  <div className="liked">
                    <div className="text-center">
                      <i className="far fa-thumbs-up"></i>
                    </div>
                    <div className="totalwtached greenTxt">
                      <p>WILL WATCH</p>
                      <p>( {itemDetails.wtsCount} )</p>
                    </div>
                  </div>
                </div>
                <div className="column is-vertical-center text-center">
                  <div className="maybe">
                    <div className="text-center">
                      <i className="fas fa-question"></i>
                    </div>
                    <div className="totalwtached orangeTxt">
                      <p>MAYBE</p>
                      <p>( {itemDetails.maybeCount} )</p>
                    </div>
                  </div>
                </div>
                <div className="column is-vertical-center text-center">
                  <div className="dontlike">
                    <div className="text-center">
                      <i className="far fa-thumbs-down"></i>
                    </div>
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
      </div>
    </div>
  );
};
