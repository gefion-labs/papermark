import { Dispatch, SetStateAction } from "react";

interface EmailProps {
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
}

export const Email = ({ email, setEmail }: EmailProps) => {
  return (
    <div className="w-full">
      <input
        type="text"
        maxLength={20}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="support@deck3.xyz"
        className="w-full p-2 font-light text-black bg-white border border-gray-300 rounded-md text-s"
      />
    </div>
  );
};
