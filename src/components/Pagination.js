import React, { useState, useEffect } from "react";

const Pagination = ({ showPerPage, onPaginationChange, total }) => {
  console.log('pagination, total,showperpage:',total, showPerPage)
  const [counter, setCounter] = useState(1);
  const [numberOfButtons, setNumberOfButtons] = useState(0);
  const [pageNumberLimit,setPageNumberLimit] = useState(3)
  const [minPageNumberLimit,setMinPageNumberLimit] = useState(0);
  const [maxPageNumberLimit,setMaxPageNumberLimit] = useState(3);
  console.log('pagination num of button,counter',numberOfButtons,counter)

  useEffect(() => {
    const value = showPerPage * counter;
    onPaginationChange(value - showPerPage, value);
  }, [counter]);
  useEffect(()=>{
    setNumberOfButtons(Math.ceil(total / showPerPage))
  },[total])

  const pages= [];
  for(let i =1;i<=numberOfButtons;i++){
    pages.push(i);
  }

  const onButtonClick = (type) => {
    if (type === "prev") {
      if (counter === 1) {
        setCounter(1);
      }else if((counter-1)%pageNumberLimit==0){
        setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit)
        setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit)
        setCounter(counter - 1);
       }
      else {
        setCounter(counter - 1);
      }
    } else if (type === "next") {
      if (numberOfButtons === counter) {
        setCounter(counter);
      }else if(counter+1>maxPageNumberLimit){
          setMaxPageNumberLimit(maxPageNumberLimit+pageNumberLimit)
          setMinPageNumberLimit(minPageNumberLimit+pageNumberLimit)
          setCounter(counter + 1);
      }
      else{
        setCounter(counter + 1);
      }
    }
    console.log('arraybtn')
  };

  
  return (
    <div className="d-flex justify-content-center">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a
              className="page-link"
              href="#"
              onClick={() => onButtonClick("prev")}
            >
              Previous
            </a>
          </li>

         { pages.map((number)=>{
            if (number < maxPageNumberLimit+1 && number>minPageNumberLimit) {
              return(
              <li className={`page-item ${number === counter ? "active" : null}`}>
                      <a
                        className="page-link"
                        href="#"
                        onClick={() => setCounter(number)}
                      >
                        {number}
                      </a>
                    </li>
           )} else {
              return null
            }
          }
          )}

          <li className="page-item">
            <a
              className="page-link"
              href="#"
              onClick={() => onButtonClick("next")
              }
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;