
import { useFormContext } from "react-hook-form";

export default function Step2() {
  const { register, formState: { errors } } = useFormContext();

  return (
    <>
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
    </>
  );
}
