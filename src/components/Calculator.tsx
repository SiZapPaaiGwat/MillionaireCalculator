import React, { useEffect, useRef, useState } from "react";

import SimpleTable from "./Table";
import Sidebar from "./Sidebar";
import { DataRow } from "@/types";
import { generateData, initialData, initialParams } from "@/data";

const messages = [
  "You're on fire! Hitting a million in under 10 years is no small feat. Keep up the great work, and may success follow you every step of the way!",
  "You're doing amazing! Keep pushing and making smart moves. A million dollars in under 20 years is totally within your grasp. Stay focused and keep going!",
  "Great things take time. Stay patient and keep making smart choices. You're on the path to a million, and every step counts. Keep your head up and stay the course!",
];

function getMessage(size: number) {
  if (size < 11) {
    return messages[0];
  } else if (size < 21) {
    return messages[1];
  } else {
    return messages[2];
  }
}

const Calculator: React.FC = () => {
  const [params, setParams] = useState(initialParams);
  const [data, setData] = useState<DataRow[]>(initialData);
  const formRef = useRef<HTMLDivElement>(null);
  const [userChanged, setUserChanged] = useState(false);
  const message = getMessage(data.length);

  const handleParamChange = (field: string, value: number) => {
    setUserChanged(true);
    setParams((prevParams) => ({
      ...prevParams,
      [field]: value,
    }));
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    setData(generateData(params));
  }, [params]);

  return (
    <div className="flex flex-wrap">
      <div className="w-full md:w-3/4 p-2">
        <SimpleTable data={data} />
      </div>
      <div className="w-full md:w-1/4 p-2" ref={formRef}>
        <Sidebar {...params} onChange={handleParamChange} />
        {userChanged && (
          <p className="text-left text-gray-700 p-4 text-lg italic">
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default Calculator;
