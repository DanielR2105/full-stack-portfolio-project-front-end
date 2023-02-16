import SignUp from "../components/SignUp";

export default function NewUser({ setLoggedinUser }) {
  return (
    <div>
      <SignUp setLoggedinUser={setLoggedinUser} />
    </div>
  );
}
