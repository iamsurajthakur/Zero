import LightRays from "./components/Background"

const App = () => {
  const text = 'Zero'
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <LightRays className="light-rays" />

      {/* Content */}
       <p className="animated-logo text-[2.386rem] m-10 text-[#767688]">
        {text.split('').map((letter, index) => (
          <span key={index} className="letter">
            {letter}
          </span>
        ))}
      </p>
    </div>
  )
}

export default App