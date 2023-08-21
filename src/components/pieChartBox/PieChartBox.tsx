import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { Chart, Container, Options, Option, Title, Dot } from "./style"
import { theme } from "../../styles/theme/default";

const data = [
  { name: "Mobile", value: 400, color: "#0088FE" },
  { name: "Desktop", value: 300, color: "#00C49F" },
  { name: "Laptop", value: 300, color: "#FFBB28" },
  { name: "Tablet", value: 200, color: "#FF8042" },
];
export function PieChartBox() {
  return (
    <Container>
      <h1>Leads by Source</h1>
      <Chart>
        <ResponsiveContainer width="99%" height={300}>
          <PieChart>
            <Tooltip
              contentStyle={{ background: `${theme.colors.maincolor}`, borderRadius: `${theme.borderRadius.sm}` }}
            />
            <Pie
              data={data}
              innerRadius={"70%"}
              outerRadius={"90%"}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map(item => (
                <Cell
                  key={item.name}
                  fill={item.color}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </Chart>

      <Options>
        {data.map(item => (
          <Option key={item.name}>
            <Title>
              <Dot style={{ backgroundColor: item.color }} />
              <span>{item.name}</span>
            </Title>
            {item.value}
          </Option>
        ))}
      </Options>
    </Container>
  )
}
