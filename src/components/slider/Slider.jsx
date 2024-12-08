import SliderData from '../../data/data.js'

const Slider = () => {
  return (
    <div>
    <h1>Image Slider</h1>

    {SliderData.map((item)=>{
        <div key={item.id}>
            <img src={item.imgeURL} alt={item.title} />
            <h1>{item.title}</h1>
            <h2>{item.description}</h2>
        </div>
    })}
    </div>
    
)}

export default Slider
