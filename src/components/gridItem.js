import React, { useState, forwardRef } from "react";
import "./gridItem.css";
import { GridItemDesc } from "./gridItemDesc";

const imageUrl = "https://in.bmscdn.com/events/moviecard/";
const noOfItems = [1,2,3,4,5,6];


export const RenderGridItem = forwardRef((props, ref) => {
  const [showDetailsofItem, setshowDetailsofItem] = useState(false);
  const [ItemDetails, setItemDetails] = useState(false);
  const [selectedRow, setselectedRow] = useState(-1);
  const [activeClass, setactiveClass] = useState("");


  const showDetails = (item, selectedRowNum,index) => {
    setshowDetailsofItem(true);
    setItemDetails(item);
    setselectedRow(selectedRowNum);
    setactiveClass(index);
  };

  const getGridItems = props => {
    let rows = [];
    let iterationLen = Math.ceil(props.movieList.length/6);
    let remainItems = props.movieList.length % 6;
    for (let i = 0; i < iterationLen; i++) {
      rows.push (
        <div key={i}>
          <div className="row">
            {(showDetailsofItem === true) && (i === selectedRow) ? <GridItemDesc itemDetails={ItemDetails} /> : <div/>}
          </div>
          <div className="columns is-multiline">
            {getColumnData(((i == iterationLen) && (remainItems!== 0)) ? remainItems : 6, i,props)}
          </div>
        </div>
      );
    }
    return rows;
  };

  const getColumnData = (numOfColumns,rowNumber,propsData) => {
    let columns = [];
    for( let i=0; i< numOfColumns; i++) {
      let itemIndex = (rowNumber*6) + i;
      const itemToShow = propsData.movieList[itemIndex];
      const splitDate = itemToShow ? itemToShow.ShowDate.split(",") : "";
      const dateToShow = itemToShow ? splitDate[0].split(" ") : "";
      let columnData = itemToShow ?
            <div className="column is-2" key={i}>
              <div className={`card${activeClass}`} onClick={() => showDetails(itemToShow, rowNumber,propsData.movieList[i].EventCode)}>
                <div className="imgContainer">
                  <div className="showDate">
                    <div>{dateToShow[0]}</div>
                    <div>{dateToShow[1]}</div>
                  </div>
                  <img
                    className="imageThumb"
                    src={`${imageUrl + itemToShow.EventCode}.jpg`}
                    alt=""
                  />
                  <div className="playareana">
                    <i className="playbtn far fa-play-circle fa-3x" />
                  </div>

                  <div className="votingPanel">
                    <i className="fas fa-thumbs-up" />
                    <span className="ratingperc">{itemToShow.wtsPerc} %</span>
                    <div>{itemToShow.wtsCount} votes</div>
                  </div>
                </div>
                <p className="movieTitle">{itemToShow.EventTitle}</p>
              </div>
            </div> : null;
      if( columnData) {
        columns.push(columnData);
      }
    }
    return columns;
  }



  return (
    <div>
        {getGridItems(props)}
      </div>
  );
});
