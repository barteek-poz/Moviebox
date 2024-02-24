import { CenteredContent } from "../CenteredContent/CenteredContent";
import { TitleSwiper } from "../TitlesSwiper/TitlesSwiper";
export const TitlesSection = (props) => {
  return (
    <CenteredContent>
      <div className="TITLES mb-8">
        <h2 className="mobile:my-6 mobile:ml-2 lg:my-10 lg:ml-10">{props.title}</h2>
        <TitleSwiper titlesArr={props.titlesArr} media={props.media}/>
      </div>
    </CenteredContent>
  );
};
