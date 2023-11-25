import Button from '@/components/Button'
import { RenderIf } from '@/components/RenderIf'

const ContentTitle = ({ title, actionLabel, actionHandler }) => {
  return (
    <div className="w-full flex flex-row items-center justify-between pb-4">
      <div className="text-xl font-semibold">{title}</div>
      <RenderIf isTrue={actionLabel}>
        <div className="block">
          <Button label={actionLabel} onClick={actionHandler} />
        </div>
      </RenderIf>
    </div>
  );
};

export default ContentTitle;
