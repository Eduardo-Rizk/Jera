"use client";

import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";

const mockData = [
  { name: "Private Equity", value: 32 },
  { name: "Renda Fixa Global", value: 24 },
  { name: "Fundos Quant", value: 18 },
  { name: "Real Estate", value: 14 },
  { name: "Arte & Colecionáveis", value: 12 }
];

const defaultColors = ["#0F172A", "#334155", "#2563EB", "#94A3B8", "#E2E8F0"];

export type AllocationChartProps = {
  colors?: string[];
};

export function AllocationChart({ colors = defaultColors }: AllocationChartProps) {
  return (
    <div className="h-[240px] w-full">
      <ResponsiveContainer>
        <PieChart>
          <Pie
            dataKey="value"
            data={mockData}
            innerRadius={60}
            outerRadius={90}
            stroke="transparent"
            paddingAngle={4}
          >
            {mockData.map((entry, index) => (
              <Cell key={entry.name} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              borderRadius: 16,
              border: "1px solid rgba(148, 163, 184, 0.3)",
              padding: "12px 16px"
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
