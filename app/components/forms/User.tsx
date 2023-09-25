import { useForm } from "react-hook-form";

const User = () => {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => [
    alert(JSON.stringify(data))
  ]
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Email</label>
      <input {...register("email")} type="text" />
      <textarea {...register("aboutYou")} placeholder="About you" />
      <input type="submit" value="Submit" />
    </form>
  )
}

export default User;