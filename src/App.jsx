const biodata=[
  {id:1,image:"./foto.jpg",name:"Tisatun Riza Fauziah",born:"07 April 2003",age:"21 Tahun",hoby:["cooking","Reading","Singging"]}
];

export default function App()
{
  return(
    <>
    <div className="container">
      
      {biodata.map((show)=>(
        <div className="container-dalam">
          <h1>Tugas From Riruy banjar well</h1>
          <div className="container-dlm">
              <h1>BIODATA</h1>
              <img src={show.image}  />
              <p>{show.name}</p>
              <p>{show.born}</p>
              <p>{show.age}</p>
              <p>{show.hoby.map((panggil)=>(
                <button>{panggil}</button>
              ))}</p>
          </div>
        </div>
      ))}
    </div>
    </>
  )
}