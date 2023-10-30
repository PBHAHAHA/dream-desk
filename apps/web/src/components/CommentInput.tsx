import { Button, TextArea } from '@radix-ui/themes';

const CommentInput = () => {
  return (
    <div className=" text-right">
      {/* <Button /> */}
      <TextArea className="mb-5" size={'3'} placeholder="评论一下" />
      <Button className="">评论</Button>
    </div>
  );
};

export default CommentInput;
