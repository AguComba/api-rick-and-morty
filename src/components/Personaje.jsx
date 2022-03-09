
const Personaje = ({personaje}) => {

  const {name,image, species} = personaje  

  return (
    <div className="col-md-4 mt-2 mb-2">
        <div className="card">
            <img src={image} className="card-img-top" alt="" />    
            <div className="card-body">
                <h5>{name}</h5>
                <p>{species}</p>
            </div>
        </div>
    </div>
  )
}

export default Personaje