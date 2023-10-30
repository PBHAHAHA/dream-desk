import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const Commenter = () => {
  return (
    <div className="flex items-center mr-4">
      <Avatar className="mr-4">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>头像</AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <span className="text-black font-bold text-sm">德玛西亚之力:</span>
        <span className="text-xs">2小时前</span>
      </div>
    </div>
  );
};
const CommenterItem = () => {
  return (
    <div className="flex  mb-4">
      <Commenter />
      <p className="">这文章真的太NB了点赞·～～～</p>
    </div>
  );
};
const CommentBox = () => {
  return (
    <div className="">
      {/* <Commenter /> */}
      <CommenterItem />
      <div className="ml-10">
        <CommenterItem />
      </div>
      <CommenterItem />
      <CommenterItem />
      <CommenterItem />
    </div>
  );
};

export default CommentBox;
