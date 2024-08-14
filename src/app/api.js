
import Client from './wish'






export default async function Gone(props) {

  const items = props.image
  const title = props.titles
  const overviews = props.summa


  return (
    <div className="gone-container">
      <div className='con-cov'>
        <div className='ann-cov'>
        <img className='img-cov loaded' src={items[0]}/>
        <div className='texa'>
          <p className='img-text'>{overviews[0]}</p>
        </div>
        </div>
      </div>

      <div className="image-container">
        {items.map((user, index) => <div key={index} className="image-wrapper">
          <img className='try' id={'' +index} src={user} alt={""}/>
          <p className="image-title"><br/></p>
         </div>)}
      </div>

      <Client sums={overviews} tooth={title}/>
    </div>
    
  );
 
}

