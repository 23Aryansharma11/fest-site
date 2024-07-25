import Card from "./Card.jsx"
const Section = ({ data }) => {
  return (
    <div className="flex flex-wrap border-1 border-yellow-500 rounded-lg items-center justify-center  h-full mt-10 mx-2 " >
     {data.map((event, index) => (
        <Card key={index} title={event.title} prize={event.prize} image={event.image} />
      ))}
    </div>
  )
}

export default Section

