interface FirstAppProps {
  name: string,
  subTitle: string
}

export const FirstApp = ({name, subTitle}: FirstAppProps): JSX.Element => {
  
  const newMessage: string = 'Daniel';

  return (
    // jsx does not render Objects..
    <>
      <h1 data-testid='test-name'>{name}</h1>
      <p>{subTitle}</p>
    </>
  )
}
