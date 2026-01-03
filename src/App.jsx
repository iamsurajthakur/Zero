import LightRays from "./components/Background"
import GlitchText from "./components/Logo"

const App = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <LightRays className="light-rays" />

      {/* Content */}
        <GlitchText
  speed={1}
  enableShadows={true}
  enableOnHover={false}
  className='shiny-text'
>
  React Bits
</GlitchText>
    </div>
  )
}

export default App