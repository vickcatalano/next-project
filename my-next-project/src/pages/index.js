import PrimeiroComponente from "@/components/PrimeiroComponente";
import ComponenteComUmaProp from "@/components/ComponenteComUmaProp";

export default function Home() { 
  return ( 
  <div className="min-h-screen bg-red-500 flex flex-col items-center justify-center">
    <PrimeiroComponente />
    <ComponenteComUmaProp />
    
  </div> 
  ) 
}