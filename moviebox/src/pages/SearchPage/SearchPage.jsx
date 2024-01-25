import { useSearchParams } from "react-router-dom";
import { MainLayout } from "../../components/MainLayout/MainLayout";
import { CenteredContent } from "../../components/CenteredContent/CenteredContent";
import { Poster } from "../../components/Poster/Poster";
import styles from '../SearchPage/SearchPage.module.css'
import { useNavSearch } from "../../hooks/useNavSearch";
export const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const param = searchParams.get('search')
  const data = useNavSearch(param)
  
  return (
    <MainLayout>
      <CenteredContent>
        <div className={styles.searchList}>
          {data && data.map((title) => {
            return <Poster key={title.id} titleData={title} />;
          })}
        </div>
      </CenteredContent>
    </MainLayout>
  );
};
