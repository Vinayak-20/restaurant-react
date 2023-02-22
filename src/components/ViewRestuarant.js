import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Image, Row, Col } from 'react-bootstrap'
import Operatingtime from './Operatingtime'
import Review from './Review'
import { useDispatch, useSelector } from 'react-redux';



function ViewRestuarant() {

    const params=useParams()
  //   console.log(params.id);

  // // function Restuarentlist() {

  //   const [allrestuarant, setallrestuarant] = useState([])

  //   // function to api call for datas inside json file

  //   const restarentdata = async () => {

  //      await fetch('/restaurants.json') .then(data => {data.json().then(result => {
  //               // console.log(result);
  //               setallrestuarant(result.restaurants)
  //            })

  //         })
  //   }








  useEffect(() => {
    // restarentdata()

  }, [])
  const result = useSelector(state => state.restaurantReducer)
  const { restaurantList } = result
  const restData = restaurantList.find(item => item.id == params.id)
  console.log(restData);



  return (
    <>

      {restData ? (

        <Row>
          <Col>

            <Image className='p-5' src={restData.photograph} fluid />
          </Col>
          <Col className='mt-5' >
            <h1>{restData.name}</h1>
            <h3>{restData.neighborhood}</h3>
            <h4>cusine type : {restData.cuisine_type}</h4>
            <h4>Address:{restData.address}</h4>

            <Operatingtime timedata={restData.operating_hours}></Operatingtime>

            <Review review={restData.reviews}></Review>



          </Col>



        </Row>

      ) : 'null'}



    </>

  )
}


// return (
//   <div>View RESTUARANT Page</div>
// )

// }

export default ViewRestuarant