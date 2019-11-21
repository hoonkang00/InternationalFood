import React, {useState, useEffect}from 'react'
const countries = require('../data/countriesByCont.js')
import CountryFood from './CountryFood.jsx'
import OriginCheck from './OriginCheck.jsx'


let fakeData = {
    "South Korea": [
      {
        name: "SundaeGook",
        photo:
          "http://recipe1.ezmember.co.kr/cache/recipe/2016/09/14/f966267c2ca30cf18c832a64789fd9dd1.jpg",
        recommended: 10
      },
      {
        name: "JokBal",
        photo:
          "https://post-phinf.pstatic.net/MjAxNzA5MDJfMTE0/MDAxNTA0MzMyMDQ4OTMx.YusHJMnDrYUADH4169gp9zfxMGCitzA4BOaivUgX_hgg.kowMRDJS_-KBF7Zt5KfHkCvejGYr_Ie1_6VkD850-G4g.JPEG/%EB%B0%A9%EC%9D%B4%EB%8F%99%EC%A1%B1%EB%B0%9C5.JPG?type=w1200",
        recommended: 12
      }
    ],
  
    "United States": [
      {
        name: "Hot Dog",
        photo:
          "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/tmlwln8revg44xz4f0tj.jpg",
        recommended: 0
      },
      {
        name: "Philly Cheese Steak",
        photo:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Cheesesteak_heaven.jpg/1200px-Cheesesteak_heaven.jpg",
        recommended: 12
      }
    ],
    Hungary: [
      {
        name: "Nokedli",
        photo:
          "https://www.thespruceeats.com/thmb/Ih_LbX2OoLElbqQRZIgEbxJaflI=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/nokedli-5bd3c2e4c9e77c00514259c6.jpg",
        recommended: "Rich"
      },
      {
        name: "Goulash",
        photo:
          "https://dinnerthendessert.com/wp-content/uploads/2019/08/Hungarian-Goulash-5.jpg",
        recommended: "Rich"
      }
    ],
    China: [
      {
        name: "Sichuan Boiled Fish",
        photo:
          "https://thewoksoflife.com/wp-content/uploads/2017/02/sichuan-boiled-fish-5-1-500x375.jpg",
        recommended: 10
      },
      {
        name: "Pork Belly with Garlic Sauce",
        photo:
          "https://chinasichuanfood.com/wp-content/uploads/2016/04/Sichuan-pork-slices-in-spicy-garlic-sauce-14.jpg",
        recommended: 12
      },
      {
        name: "Peidan",
        photo:
          "https://souperdiaries.com/wp-content/uploads/2016/09/20160917_131025.jpg",
        recommended: 17
      }
    ],
    "Trinidad and Tobago": [
      {
        name: "Doubles",
        photo:
          "https://images.food52.com/FYZUSH0VrDWqt4xgYwyevSqg7Y8=/2016x1344/filters:format(webp)/8973e565-d423-4443-842b-129f98755f17--2017-0425_trinidadian-doubles_bobbi-lin_23708.jpg",
        recommended: 17
      },
      {
        name: "Souse",
        photo:
          "https://i.pinimg.com/originals/8b/84/3f/8b843f1ad1ad5d7e1840ff3171d558b1.jpg",
        recommended: 2
      }
    ],
    Cyprus: [
      {
        name: "Souvla",
        photo: "https://in-cyprus.com/wp-content/uploads/2018/02/souvla.jpg",
        recommended: 10
      },
      {
        name: "Shouhsouko",
        photo:
          "https://i.pinimg.com/originals/48/d0/6c/48d06cbe0795a4c1f66e837313813629.jpg",
        recommended: 16
      }
    ]
  };
  
 
export default function CountryList(props) {
    const [ country, setCountry] = useState("United States")
    const [foodData, setFoodData]= useState(fakeData)
    const [ update, setUpdate] = useState(0)

    // useEffect(() => {
    //     console.log('useEffect happenin')
    //     setFoodData(fakeData)
  
    // }, [fakeData[country].length])


    const addToData = (data, country) => {
    let newData = {...data, recommended:1}
      fakeData[country].push(newData);
      setFoodData(fakeData)
      setUpdate(update+1)
    };
  



    return (
        <>
        <OriginCheck addToData={addToData} country={country}/>
        <div className="foodList">
            <div>
            {
                countries[props.selectedCont].map((item)=>{
                    return(<p className="country" onClick={()=>{setCountry(item)}} key={item}>{item}</p>)
                })
            }
            </div>
           

            <CountryFood update={update} fakeData={foodData} country={country}/>
        </div>
        </>
    )
}
