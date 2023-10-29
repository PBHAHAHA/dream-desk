import MainContainer from '@/components/MainContainer';
import { NavPanel } from '@/components/NavPanel';
import PostBox from '@/components/PostBox';

export default function Home() {
  return (
    <div>
      <MainContainer>
        <div className="flex justify-between mt-4">
          <div className="flex-1">
            {[1, 2, 3, 4].map(() => {
              return <PostBox></PostBox>;
            })}
          </div>
          <div className="ml-6 hidden lg:block">
            <NavPanel>右侧的面板</NavPanel>
          </div>
        </div>
      </MainContainer>
    </div>
  );
}
