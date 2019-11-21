import React, { useState, useEffect } from "react";



export default function CountryFood({fakeData, country}) {
  // const [fakeDataSet, setFakeData] = useState(fakeData[country]);
  
  // const [minion, setMinion] = useState(0)

  // useEffect(() => {
  //   setMinion(minion+1)
  // }, [fakeData[country]]);


  return (
    <div className="dish">
      {fakeData[country] ? (
        fakeData[country].map(item => {
          return (
            <>
              <p>Food: {item.name}</p>
              <img height="360" width="480" src={item.photo} />
              <p>Recommended:{item.recommended} </p>
            </>
          );
        })
      ) : (
        <p>no data for {country}</p>
      )}
    </div>
  );
}
