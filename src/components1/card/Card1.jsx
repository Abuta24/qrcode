import './card1.css'

const Card1 = () => {
    const txt1 = 'Improve your front-end skills by building projects'
    const txt2 = 'Scan the QR code to visit Frontend Mentor and take your coding skills to the next level'
  return (
    <div className='main'>
        <div className='pavle'>
             <div className='pirveli'>
            <img src="/assets/Oval .svg" alt="" />
            </div>
            <div className='meore'>
            <img src="/assets/qr-code.svg" alt="" />
            </div>
        </div>
        <div className='mgeladze'>
            <h1 className='txt1'>{txt1}</h1>
        </div>
        <div className='mgeladze1'>
            <h1 className='txt2'>{txt2}</h1>
        </div>
    </div>
  )
}

export default Card1