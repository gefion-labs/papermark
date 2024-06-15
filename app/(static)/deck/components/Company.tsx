import { Dispatch, SetStateAction } from "react";

interface CompanyProps {
  company: string;
  setCompany: Dispatch<SetStateAction<string>>;
}

export const Company = ({ company, setCompany }: CompanyProps) => {
  return (
    <div className="w-full">
      <input
        type="text"
        maxLength={20}
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        placeholder="Deck3"
        className="w-full p-2 font-light text-black bg-white border border-gray-300 rounded-md text-s"
      />
    </div>
  );
};
