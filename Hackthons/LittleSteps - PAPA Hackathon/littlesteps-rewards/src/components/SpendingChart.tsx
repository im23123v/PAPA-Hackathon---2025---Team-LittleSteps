import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { apps } from '@/data/mockData';

interface SpendingChartProps {
  spending: Record<string, number>;
}

const COLORS = {
  youtube: '#FF0000',
  instagram: '#E1306C',
  games: '#8B5CF6',
  learning: '#0EA5E9',
  other: '#94A3B8',
};

export function SpendingChart({ spending }: SpendingChartProps) {
  const data = Object.entries(spending).map(([key, value]) => {
    const app = apps.find(a => a.id === key);
    return {
      name: app?.name || key,
      value,
      color: COLORS[key as keyof typeof COLORS] || COLORS.other,
    };
  }).filter(d => d.value > 0);

  if (data.length === 0) {
    return (
      <div className="flex h-64 items-center justify-center text-muted-foreground">
        No spending data yet
      </div>
    );
  }

  const topSpender = data.reduce((max, item) => item.value > max.value ? item : max, data[0]);

  return (
    <div className="space-y-4">
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={80}
              paddingAngle={4}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} strokeWidth={0} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '0.5rem',
              }}
              formatter={(value: number) => [`${value} coins`, 'Spent']}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
      
      <div className="rounded-xl bg-destructive/10 p-4">
        <p className="text-sm font-medium text-muted-foreground">Biggest Coin Thief 🏴‍☠️</p>
        <p className="mt-1 text-lg font-bold text-destructive">
          {topSpender.name} ({topSpender.value} coins)
        </p>
      </div>
    </div>
  );
}
