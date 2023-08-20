import { BoxInfo, ChartsInfo, Container, LinkChart, Title, Text, Chart } from "./styles";
import { ResponsiveContainer, LineChart, Line, Tooltip } from "recharts"

type ChartBoxProps = {
  color: string;
  icon: string;
  title: string;
  dataKey: string;
  number: number | string;
  percentage: number;
  chartData: object[];
}

export function ChartBox({ color, icon, title, dataKey, number, percentage, chartData }: ChartBoxProps) {
  return (
    <Container>
      <BoxInfo>
        <Title>
          <img src={icon} alt="" />
          <span>{title}</span>
        </Title>

        <h1>{number}</h1>
        <LinkChart to="/" style={{ color: color }}>View All</LinkChart>

      </BoxInfo>

      <ChartsInfo>
        <Chart>
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={chartData}>
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
              />
              <Line
                type="monotone"
                dataKey={dataKey}
                stroke={color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </Chart>

        <Text>
          <span className="percentage" style={{ color: percentage < 0 ? "tomato" : "limegreen" }}>{percentage}</span>
          <span className="duration">this month</span>
        </Text>
      </ChartsInfo>
    </Container>
  )
}
