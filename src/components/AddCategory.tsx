import { FormEvent, useState } from "react"

interface AddCategoryProps {
  onAddNewCategory: (value: string) => void;
}

export const AddCategory = ({onAddNewCategory}: AddCategoryProps) => {
  
  const [inputValue, setInputValue] = useState<string>('');

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newValue: string = inputValue.trim();

    if( newValue.length <= 1 ) return;

    onAddNewCategory(newValue);
    setInputValue('');
  }

  return (
    <form onSubmit={ onSubmit }>
      <input
        type="text"
        placeholder="search gifs"
        value={inputValue}
        onChange={ onInputChange }
      />
    </form>
  )
}
