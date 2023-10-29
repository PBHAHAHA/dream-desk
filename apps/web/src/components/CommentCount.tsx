import { cn } from '@/lib/utils';
import { ChatBubbleIcon } from '@radix-ui/react-icons';
type PropsType = {
  num: number;
  className?: string;
};
const CommentCount = ({ className, ...props }: PropsType) => {
  return (
    <div className={cn(className, 'flex')}>
      <ChatBubbleIcon className="mr-1" />
      <p className="text-xs">{props.num}评论</p>
    </div>
  );
};

export default CommentCount;
