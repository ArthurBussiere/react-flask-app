import Car from './Car'

function Garage(props) {

    
    const cars = [
      {id: 1, brand : 'Ford'}, 
      {id: 2, brand : 'Audi'}, 
      {id: 3, brand : 'Citroen'}
    ]
    return (
      <>
        <h1>GARAGE</h1>
        <ul>
          {cars.map((car)=> <Car key={car.id} brand={car.brand} /> )}
        </ul>

        

      </>
    );
  }

 

  
export default Garage