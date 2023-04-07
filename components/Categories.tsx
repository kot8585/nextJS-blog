import { PostData } from '../service/post';
import Link from 'next/link';
import { useSetRecoilState } from 'recoil';
import { clickedSideBarAtom } from '@/state/ClickedSideBarAtom';

type Props = {
  posts: PostData[];
};

export default function Categories({ posts }: Props) {
  const setIsClicked = useSetRecoilState(clickedSideBarAtom);

  let init: { [category: string]: number } = {};
  const categoryCount = posts.reduce((accumulator, currentValue) => {
    const category = currentValue.frontMatter.category;
    const currCount = accumulator[category] ?? 0;
    return {
      ...accumulator,
      [category]: currCount + 1,
    };
  }, init);

  return (
    <section className='flex flex-col'>
      {categoryCount &&
        Object.keys(categoryCount).map((category) => {
          return (
            <Link
              key={category}
              href={`/category/${category}`}
              onClick={() => setIsClicked(false)}
              className="hover:-translate-y-0.5"
            >
              <span className="text-xl">{category}</span>
              <span className="ml-2 border border-brandMain px-2 text-xs rounded-full text-brandMain">
                {categoryCount[category]}
              </span>
            </Link>
          );
        })}
    </section>
  );
}

