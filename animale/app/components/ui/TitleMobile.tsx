interface TitleMobileProps {
    text: string
  }
  
  const TitleMobile: React.FC<TitleMobileProps> = ({ text }) => (
    <div className="flex items-center justify-center">
      <div className="flex-1 h-px bg-black mx-2" />
      <h3 className="text-m font-bold uppercase whitespace-nowrap">{text}</h3>
      <div className="flex-1 h-px bg-black mx-2" />
    </div>
  )
  
  export default TitleMobile
  