"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
  Dot,
  TooltipProps,
} from "recharts";
import {
  ValueType,
  NameType,
} from "recharts/types/component/DefaultTooltipContent";

import { VISITORS_DATA } from "@/data/mockData";

export const Chart_view = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full h-[280px] ">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={VISITORS_DATA}
            margin={{
              top: 80,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid
              stroke="#f8f8f9"
              horizontal={true}
              vertical={false}
              strokeDasharray="3 0"
            />
            <XAxis
              dataKey="month"
              tickSize={0}
              axisLine={false}
              padding={{ left: 0 }}
              tick={({ payload, x, y, dy }) => (
                <text
                  x={x}
                  y={y + 20}
                  dy={dy}
                  textAnchor="middle"
                  fill="#7B91B0"
                  fontSize={14}
                >
                  {payload.value}
                </text>
              )}
            />
            <YAxis
              tickSize={0}
              axisLine={false}
              ticks={[100, 200, 300, 400]}
              tick={{
                fill: "#7B91B0",
                fontSize: 14,
              }}
            />
            <Tooltip
              cursor={{
                // color: "blue",
                // stroke: "url(#gradient)",

                // strokeWidth: 1,
                // fill: "url(#MyGradient)",
                fill: "none",
                // className: "bg-blue-400",
              }}
              wrapperStyle={{
                width: 210,
                // backgroundColor:
                //   "linear-gradient(transparent, black 47.2222%, transparent);",
              }}
              content={<CustomTooltipContent />}
            />
            <Legend iconType="square" formatter={formatLegendValue} />
            <ReferenceLine
              isFront={true}
              x="May"
              stroke="#F64E60"
              strokeDasharray="3 3"
            >
              <Dot r={5} fill="#F64E60" />
            </ReferenceLine>
            <Line
              dot={false}
              strokeWidth={4}
              type="basis"
              dataKey="loyal_customer"
              stroke="#A700FF"
            />
            <Line
              dot={false}
              strokeWidth={4}
              type="basis"
              dataKey="new_customer"
              stroke="#F64E60"
            />
            <Line
              dot={false}
              strokeWidth={4}
              type="basis"
              dataKey="unique_customer"
              stroke="#3CD856"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const formatLegendValue = (value: any) => {
  return value.replace("_", " ");
};

const formatTooltipValue = (value: any, name: any) => {
  return `${value.replace("_", " ")}: ${name}`;
};

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
              {formatTooltipValue(payloadItem.name, payloadItem.value)}
            </li>
          );
        })}
        <li></li>
      </ul>
    </div>
  );
};
