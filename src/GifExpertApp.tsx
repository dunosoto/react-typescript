import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
  
  const [categories, setCategories] = useState<string[]>(['one punch']);

  const addNewCategory = (newCategory: string): void => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  }

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onAddNewCategory={ addNewCategory }/>

      {
        categories.map((category: string) => (
          <GifGrid category={category} key={category} />
        ))
      }
    </>
  )
}
