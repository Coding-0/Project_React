import React ,{ useState ,useEffect} from 'react';
import { Container , Row , Col } from 'reactstrap';
import Detail from '../components/Detail';
import { Products } from '../components/Products';
import '../components/Menu.css';

const Fetch =()=>
{
  
  
   return (
    <Container>
    
      <h1 className='header'>~BIG SALE...</h1>
    
        <Row>
        
        {
          Products.map((item)=>
           (
            <Col lg='3' key ={item.id} className='mb-4'>{''}
            <Detail item={item}/>
            </Col>
           ))
        }

        </Row>
    </Container>
  )
}

export default Fetch 