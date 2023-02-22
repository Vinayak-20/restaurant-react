import React, { useState, useEffect } from 'react'
import RestCard from './RestCard'
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import { RestaurantListAction } from '../actions/restuarantAction';
import { useDispatch, useSelector } from 'react-redux';
import { restaurantList } from '../reducers/restaurantReducers';


function Restuarentlist() {

   // const [allrestuarant, setallrestuarant] = useState([])

   // // function to api call for datas inside json file

   // const restarentdata = async () => {

   //    await fetch('/restaurants.json')
   //       .then(data => {
   //          data.json().then(result => {
   //             // console.log(result);
   //             setallrestuarant(result.restaurants)
   //          })

   //       })


   // // console.log(allrestuarant);
 

 
 
 
 
 
 
   const dispatch = useDispatch()
const result=useSelector(state=>state.restaurantReducer)
const {restaurantList}=result










   useEffect(() => {
      // restarentdata()
      dispatch(RestaurantListAction())

   }, [])
   return (



      <Row>
         {
            restaurantList.map(item => (
               <RestCard data={item}></RestCard>
            ))
         }
      </Row>
   )
}

export default Restuarentlist