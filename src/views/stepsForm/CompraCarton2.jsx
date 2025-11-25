
import { useFormContext } from "react-hook-form";

export default function Step2() {

  const { register, formState: { errors } } = useFormContext();

  let arrNums=[]
  for(let i=0; i<400; i++){
      arrNums.push(i)
  }
  
  console.log("arNumns",arrNums);

  return (
    <>

      
      <div className="max-w-2xl mx-auto rounded-xl shadow-md h-150 mt-10 overflow-y-auto">

      <div className="p-4 bg-sky-500 p-4 bg-sky-500 sticky top-0 z-10">
        
            <h2 className="text-2xl text-slate-900 font-bold uppercase text-center"> Elige tu carton </h2>
      </div>


          <div className="grid grid-cols-4 place-items-center">

              {
                arrNums.map( (valor, index) => (
                  <h1 key={index}>{valor}</h1>
                ))
              }

          </div>
        </div>

      {
            /*
              <h2>Paso 2: Dirección</h2>

              <div>
                <label>País</label>
                <input {...register("pais")} />
                {errors.pais && <p>{errors.pais.message}</p>}
              </div>

              <div>
                <label>Ciudad</label>
                <input {...register("ciudad")} />
                {errors.ciudad && <p>{errors.ciudad.message}</p>}
              </div>
            */
        }


    </>
  );
}
