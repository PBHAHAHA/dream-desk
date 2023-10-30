import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import Tag from './Tag';
import CommentCount from './CommentCount';
import SeeCount from './SeeCount';
import LikeCount from './LikeCount';
import CommentInput from './CommentInput';
import CommentBox from './CommentBox';
import { Separator } from '@radix-ui/themes';

const PostBox = () => {
  return (
    <div className=" bg-white dark:bg-[#212121] rounded-lg p-6 shadow-md mb-5">
      <div className="flex mb-3">
        <Avatar className="mr-4">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>头像</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="text-sm font-bold mb-[2px]">纸人特工</span>
          <span className=" text-xs text-primary">2023-10-29</span>
        </div>
      </div>
      <div className="ml-14">
        <h2 className="text-lg font-bold mb-5">最适合宅家的桌搭设计</h2>
        <div className="post-imgs">
          {/* <a href=""> */}
          <div className="post-img-item">
            <Image
              src="https://images.unsplash.com/photo-1698298836213-f721f3f40e0a?auto=format&fit=crop&q=80&w=3864&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Picture of the author"
              width={200}
              height={200}
            ></Image>
          </div>
          <div className="post-img-item">
            <Image
              src="https://images.unsplash.com/photo-1698298836213-f721f3f40e0a?auto=format&fit=crop&q=80&w=3864&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Picture of the author"
              width={200}
              height={200}
            ></Image>
          </div>
          <div className="post-img-item">
            <Image
              src="https://images.unsplash.com/photo-1698298836213-f721f3f40e0a?auto=format&fit=crop&q=80&w=3864&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Picture of the author"
              width={200}
              height={200}
            ></Image>
          </div>

          {/* <img src="" /> */}
          {/* </a> */}
        </div>
      </div>
      <div className="mt-5">
        <Tag />
      </div>
      <div className="flex ml-14 mt-5">
        <CommentCount num={10} className="mr-4" />
        <SeeCount num={10} className="mr-4" />
        <LikeCount num={98} checked />
      </div>
      <div className="mt-4 ml-14 pt-5">
        <CommentInput />
        <Separator my="3" size="4" />
        <CommentBox />
      </div>
    </div>
  );
};

export default PostBox;
