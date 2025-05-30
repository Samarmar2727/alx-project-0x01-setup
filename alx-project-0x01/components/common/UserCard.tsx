// components/common/UserCard.tsx

import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) => {
  return (
    <div className="max-w-md mx-auto my-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300">
      <h2 className="text-xl font-bold text-gray-800 mb-1">{name}</h2>
      <p className="text-gray-600">@{username}</p>
      <p className="text-gray-700 mt-2">
        📧 {email} | 📞 {phone}
      </p>
      <p className="text-sm text-gray-500 mt-1">
        🌍 {address.city}, {address.street}, {address.suite}, {address.zipcode}
      </p>
      <p className="text-sm text-gray-500 mt-1">🔗 {website}</p>
      <div className="mt-3">
        <p className="text-gray-800 font-semibold">{company.name}</p>
        <p className="text-gray-500 italic text-sm">"{company.catchPhrase}"</p>
        <p className="text-gray-400 text-xs">{company.bs}</p>
      </div>
    </div>
  );
};

export default UserCard;
