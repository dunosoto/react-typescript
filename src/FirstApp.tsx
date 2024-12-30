interface FirstAppProps {
  name: string,
  subTitle: string
}

export const FirstApp = ({name, subTitle}: FirstAppProps): JSX.Element => {
  
  const newMessage: string = 'Daniel';

  return (
    // jsx does not render Objects..
    <>
      <div>{name}</div>
      <p>{subTitle}</p>
    </>
  )
}
