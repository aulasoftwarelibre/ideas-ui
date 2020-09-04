import React from 'react';

import Category from '../../model/category/category';
import CategoryLink from './CategoryLink';

export interface Props {
  categories: Category[];
  onChangeHandler: (category: Category) => Category;
}

export const CategoryFilter: React.FunctionComponent<Props> = ({
  categories,
  onChangeHandler,
}) => {
  const [selected, setSelected] = React.useState<Category>(categories[0]);

  const onClickHandler = (category: Category) => () => {
    setSelected(category);
    onChangeHandler(category);
  };

  return (
    <div className="bg-white px-8 pt-2 flex-col">
      <div className="-mb-px flex justify-center" data-testid="category-filter">
        {categories.map((category) => (
          <CategoryLink
            key={category.id}
            label={category.label}
            isSelected={category === selected ? true : false}
            onClick={onClickHandler(category)}
          ></CategoryLink>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
