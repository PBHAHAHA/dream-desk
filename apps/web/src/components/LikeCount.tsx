import { cn } from '@/lib/utils';
import { HeartIcon, HeartFilledIcon } from '@radix-ui/react-icons';
type PropsType = {
  num: number;
  className?: string;
  checked: boolean;
};
const LikeCount = ({ className, ...props }: PropsType) => {
  return (
    <div className={cn(className, 'flex')}>
      {props.checked ? (
        <HeartFilledIcon className="mr-1 text-red-500" />
      ) : (
        <HeartIcon className="mr-1 " />
      )}

      <p className={props.checked ? 'text-xs text-red-500' : 'text-xs'}>
        {props.num}
      </p>
    </div>
  );
};

export default LikeCount;
