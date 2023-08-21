import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts"
import { Chart, Container } from "./styles"
import { theme } from "../../styles/theme/default";

type BarChartBoxProps = {
  title: string;
  chartData: object[];
  color: string;
  dataKey: string;
}

export function BarChartBox({ title, chartData, color, dataKey }: BarChartBoxProps) {
  return (
    <Container>
      <h1>{title}</h1>
      <Chart>
        <ResponsiveContainer width="99%" height={150}>
          <BarChart width={150} height={40} data={chartData}>
            <Tooltip
              contentStyle={{ background: `${theme.colors.maincolor}`, borderRadius: `${theme.borderRadius.sm}` }}
              labelStyle={{ display: 'none' }}
              cursor={{ fill: "none" }}
            />
            <Bar dataKey={dataKey} fill={color} />
          </BarChart>
        </ResponsiveContainer>
      </Chart>
    </Container>
  )
}
