import Onboarding from "../components/Onboarding";

export default function UserSetup({ setLoggedinUser, firebaseId }) {
  return (
    <div>
      <Onboarding setLoggedinUser={setLoggedinUser} firebaseId={firebaseId} />
    </div>
  );
}
