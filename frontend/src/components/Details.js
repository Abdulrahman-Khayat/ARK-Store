import React from 'react'
import { useParams } from "react-router-dom";
import Header from './Header'
import '../index.css'
import { Grid, Image } from 'semantic-ui-react'
import img1 from '../logo.svg'

 function Details() {
    let { id } = useParams();
   return(
       <>
          <Header />
           {id}
           Details
           <Grid columns={3} >
            <Grid.Row>
               
               
               
               <Grid.Column width={12}>
                  <Grid columns={3}>
                     <Grid.Row columns={2}>
                        <Grid.Column width={10}>
                           
                              <img src={img1}  alt='sdfdsf'></img>
                           
                         
                        </Grid.Column>
                        <Grid.Column width={4}>
                           <p>sdfdsfdsfdsfdffffffffffffffffff</p>
                        </Grid.Column>
                     </Grid.Row> 
                  </Grid>
               </Grid.Column>




               <Grid.Column width={4}>
                  <p>sdfdsfdsfsdfsdf</p>
               </Grid.Column>
            </Grid.Row>

            
       </Grid>


        </>
   )
}
export default Details