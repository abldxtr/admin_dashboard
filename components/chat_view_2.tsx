"use client";

import {
  ValueType,
  NameType,
} from "recharts/types/component/DefaultTooltipContent";
import { TARGET_REALITY_DATA } from "@/data/mockData";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  TooltipProps,
} from "recharts";

export const Chat_view_2 = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full h-[280px] ">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={TARGET_REALITY_DATA}
            margin={{
              top: 15,
              right: 15,
              left: 15,
              bottom: 60,
            }}
          >
            <Bar
              dataKey="reality"
              fill="#4ab58e"
              radius={[4, 4, 4, 4]}
              barSize={16}
            />
            <Bar
              dataKey="target"
              fill="#ffcf00"
              radius={[4, 4, 4, 4]}
              barSize={16}
            />
            <Tooltip
              cursor={{ fill: "transparent" }}
              formatter={formatTooltipValue}
              wrapperStyle={{
                width: 210,
                // backgroundColor:
                //   "linear-gradient(transparent, black 47.2222%, transparent);",
              }}
              content={<CustomTooltipContent />}
            />
            <XAxis
              dataKey="month"
              tickSize={0}
              axisLine={false}
              tick={({ payload, x, y, dy }) => (
                <text
                  x={x}
                  y={y + 25}
                  dy={dy}
                  textAnchor="middle"
                  fill="#7B91B0"
                  fontSize={14}
                >
                  {payload.value}
                </text>
              )}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const formatTooltipValue = (value: any) => {
  return `${value} sales`;
};

// const formatTooltipValue = (value: any, name: any) => {
//   return `${value.replace("_", " ")}: ${name}`;
// };

const CustomTooltipContent = ({
  active,
  payload,
  label,
}: TooltipProps<ValueType, NameType>) => {
  if (!payload || !payload.length) return null;

  return (
    <div className="bg-black/30 backdrop-blur-lg border border-gray-200 p-2 rounded-lg ">
      <p className="">{payload[0].payload?.month}</p>
      <ul className="space-y-1">
        {payload?.map((payloadItem: any, index: number) => {
          return (
            <li key={index} className="text-white text-sm ">
              {formatTooltipValue(payloadItem.value)}
            </li>
          );
        })}
        <li></li>
      </ul>
    </div>
  );
};
