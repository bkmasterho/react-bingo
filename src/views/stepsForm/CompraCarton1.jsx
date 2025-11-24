
import { useFormContext } from "react-hook-form";

export default function Step1() {

  const { register, formState: { errors } } = useFormContext();

  return (
    <>
      <h2>Paso 1: Información personal</h2>

      <div>
        <label>Nombre</label>
        <input {...register("nombre")} />
        {errors.nombre && <p>{errors.nombre.message}</p>}
      </div>

      <div>
        <label>Email</label>
        <input {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
    </>
  );
}
