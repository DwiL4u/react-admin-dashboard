import React from "react";
import SettingSection from "./SettingSection";
import { useState } from "react";
import { HelpCircle, Plus } from "lucide-react";

const ConectedAccounts = () => {
  const [connectedAccounts, setConnectedAccounts] = useState([
    {
      id: 1,
      name: "Google",
      connected: true,
      icon: "/google.png",
    },
    {
      id: 2,
      name: "Facebook",
      connected: false,
      icon: "/facebook.svg",
    },
    {
      id: 3,
      name: "Twitter",
      connected: true,
      icon: "/x.png",
    },
  ]);
  return (
    <SettingSection icon={HelpCircle} title={"Connected Accounts"}>
      {connectedAccounts.map((account) => (
        <div
          key={account.id}
          className="flex items-center justify-between py-3"
        >
          <div className="flex gap-1">
            <img
              src={account.icon}
              alt="social image"
              className="size-6 rounded-full object-cover mr-4"
            />
            <span className="text-gray-300">{account.name}</span>
          </div>
          <button
            className={`px-3 py-1 rounded ${
              account.connected
                ? "bg-green-600 hover:bg-green-700"
                : "bg-gray-600 hover:bg-gray-700"
            }transition duration-200`}
            onClick={() => {
              setConnectedAccounts(
                connectedAccounts.map((acc) =>
                  acc.id === account.id
                    ? { ...acc, connected: !acc.connected }
                    : acc
                )
              );
            }}
          >
            {account.connected ? "Connected" : "Connect"}
          </button>
        </div>
      ))}
              <button className="mt-4 flex items-center text-indigo-500 hover:text-indigo-400 transition duration-200">
                    <Plus className="mr-2" size="24" />
                    Add Acount</button>
    </SettingSection>
  );
};

export default ConectedAccounts;
