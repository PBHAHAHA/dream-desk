import { cn } from '@/lib/utils';
import { EyeOpenIcon } from '@radix-ui/react-icons';
type PropsType = {
  num: number;
  className?: string;
};
const SeeCount = (props: PropsType) => {
  const { num, className } = props;
  return (
    <div className={cn(className, 'flex')}>
      <EyeOpenIcon className="mr-1" />
      <p className="text-xs">{num}浏览</p>
    </div>
  );
};

export default SeeCount;
