// Central icon registry so data files can reference icons by name (string)
// without importing lucide-react directly.
import {
  Compass,
  Code2,
  Blocks,
  LineChart,
  BarChart3,
  TrendingUp,
  Sun,
  Zap,
  User,
  Lightbulb,
  Flag,
  Heart,
  Plane,
} from 'lucide-react';

export const iconMap = {
  Compass,
  Code2,
  Blocks,
  LineChart,
  BarChart3,
  TrendingUp,
  Sun,
  Zap,
  User,
  Lightbulb,
  Flag,
  Heart,
  Plane,
};

export default function Icon({ name, ...props }) {
  const Component = iconMap[name];
  if (!Component) return null;
  return <Component {...props} />;
}
