import Card from "./Card.jsx"
const Section = ({ data }) => {
  return (
    <div className="grid lg:grid-cols-5  md:grid-cols-2 gap-4 p-4 border-1 border-yellow-500 rounded-lg items-center justify-around place-items-center place-content-center h-full mt-10 mx-2 " >
     {data.map((event, index) => (
        <Card key={index} title={event.title} fees={event.fees} image={event.image} description={event.description} />
      ))}
    </div>
  )
}

export default Section

