import './PerNumbers.css'
import { perNumbers } from '../../data'
const PerNumbers = () => {
  return (
    <div className='per-numbers'>
      <div className="container">
        <h1 className="per-numbers-title">Yillik ishlab chiqarish quvvati</h1>
        <div className="per-numbers-inner">
          {
            perNumbers.map((item) => (
              <div className="per-numbers-item" key={item.text}>
                <h1 className="per-numbers-item-title">{item.number}</h1>
                <p className="per-numbers-item-text">{item.text}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default PerNumbers